/* this script will manage the operations for the options/settings page that will control the ad-blocker */
document.addEventListener("DOMContentLoaded", function () {
  /* DOM content */

  /* forms */
  // disable form primary function
  var form1 = document.getElementById("file_drop0");
  form1.onsubmit = (e) => {
    e.preventDefault();
  };

  var form2 = document.getElementById("file_drop1");
  form2.onsubmit = (e) => {
    e.preventDefault();
  };

  /* Block Options */
  var import_btn = document.getElementById("import-block");
  var rule_btn = document.getElementById("rule-area-block");
  var import_rules = document.getElementById("import-rules");
  var write_rules = document.getElementById("write-rules");

  var text_block = document.getElementById("text-block");

  /* Whitelist options */
  var import_btn_white = document.getElementById("import-block-white");
  var rule_btn_white = document.getElementById("rule-area-white");
  var import_rules_white = document.getElementById("import-rules-white");
  var write_rules_white = document.getElementById("write-rules-white");

  var text_block_white = document.getElementById("text-block-white");

  /* Drag and drop DOM */
  var drop_block = document.getElementById("drop-block");
  var drop_white = document.getElementById("drop-white");
  var input = document.getElementById("inputfile");
  var input_white = document.getElementById("inputFileWhite");

  /* form submits */
  var blk_submit = document.getElementById("blk-submit");
  var wht_submit = document.getElementById("wht-submit");

  /* Functions */

  // on load get the block list from storage and present it in the textbox
  text_block.innerHTML = reverseFormatting(
    JSON.parse(localStorage.getItem("user"))["block"]
  );

  // when the DOM loads the textbox contains the rules the user has entered.
  text_block_white.innerHTML = reverseFormatting(
    JSON.parse(localStorage.getItem("user"))["white"]
  );

  // when the user submits typed in data then the data is then added to storage after button clicked
  blk_submit.addEventListener("click", () => {
    let output = document.getElementById("output");
    let filters = formatFilters(text_block.value);
    let allowData = JSON.parse(localStorage.getItem("user"))["white"];
    let data = { block: filters, white: allowData };
    localStorage.setItem("user", JSON.stringify(data));
    output.innerHTML = "New rules added! Extension will restart in 5 seconds";
    setTimeout(() => {
      chrome.runtime.reload();
    }, 5000);
  });

  // when the user submits typed data for whitelisting options.
  //The data contained in the text box is then parsed and sent to storage
  wht_submit.addEventListener("click", () => {
    let output = document.getElementById("output-white");
    let filters = formatWhiteList(text_block_white.value);
    let blocked_data = JSON.parse(localStorage.getItem("user"))["block"];
    let data = { block: blocked_data, white: filters };
    localStorage.setItem("user", JSON.stringify(data));
    output.innerHTML = "New rules added! Extension will restart in 5 seconds";
    setTimeout(() => {
      chrome.runtime.reload();
    }, 5000);
  });

  /* Actions */
  /* Block settings */
  import_btn.addEventListener("click", function () {
    if (import_rules.style.display === "none") {
      import_rules.style.display = "block";
      write_rules.style.display = "none";
    } else {
      import_rules.style.display = "none";
    }
  });

  rule_btn.addEventListener("click", function () {
    if (write_rules.style.display === "none") {
      write_rules.style.display = "block";
      import_rules.style.display = "none";
    } else {
      write_rules.style.display = "none";
    }
  });

  /* Whitelist settings */
  import_btn_white.addEventListener("click", function () {
    if (import_rules_white.style.display === "none") {
      import_rules_white.style.display = "block";
      write_rules_white.style.display = "none";
    } else {
      import_rules_white.style.display = "none";
    }
  });

  rule_btn_white.addEventListener("click", function () {
    if (write_rules_white.style.display === "none") {
      write_rules_white.style.display = "block";
      import_rules_white.style.display = "none";
    } else {
      write_rules_white.style.display = "none";
    }
  });

  /* Drag and drop file */
  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    drop_block.addEventListener(eventName, preventDefaults, false);
    drop_white.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ["dragenter", "dragover"].forEach((eventName) => {
    drop_block.addEventListener(eventName, highlight, false);
    drop_white.addEventListener(eventName, highlight, false);
  });
  ["dragleave", "drop"].forEach((eventName) => {
    drop_block.addEventListener(eventName, unhighlight, false);
    drop_white.addEventListener(eventName, unhighlight, false);
  });

  function highlight(e) {
    drop_block.classList.add("highlight");
    drop_white.classList.add("highlight");
  }

  function unhighlight(e) {
    drop_block.classList.remove("highlight");
    drop_white.classList.remove("highlight");
  }

  drop_block.addEventListener("drop", handleDrop, false);
  drop_white.addEventListener("drop", handleDropWhite, false);

  function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;
    handleFiles(files);
  }

  function handleDropWhite(e) {
    let dt = e.dataTransfer;
    let files = dt.files;
    handleFilesWhite(files);
  }

  /* triggers the click action to allow the user to 
  open the file explorer to find a filter file. */
  drop_block.addEventListener("click", openFileExplorer, false);
  drop_white.addEventListener("click", openFileExplorerWhite, false);

  // triggers the file input to handle the file when the file has been imported - whitelist
  input.addEventListener("change", function (evt) {
    var files = evt.target.files;
    handleFiles(files);
  });

  // triggers the file input to handle the file when the file has been imported - whitelist
  input_white.addEventListener("change", (evt) => {
    var files = evt.target.files;
    handleFilesWhite(files);
  });

  let blk_file = document.getElementById("blk-file-submit");
  let wht_file = document.getElementById("wht-file-submit");

  // disables buttons until a file has been drag and dropped.
  blk_file.disabled = true;
  wht_file.disabled = true;
});

// this will trigger the file explorer menu to open when the container is clicked - block
function openFileExplorer() {
  var input = document.getElementById("inputfile");
  input.click();
}

// this will trigger the file explorer menu to open when the container is clicked - whitelist
function openFileExplorerWhite() {
  var input = document.getElementById("inputFileWhite");
  input.click();
}

/* handles the files for when the user inserts the file via the blocked drag and drop */
function handleFiles(files) {
  let show_file = document.getElementById("filename");
  show_file.innerHTML = files[0].name;
  let blk_file = document.getElementById("blk-file-submit");
  blk_file.disabled = false;
  [...files].forEach(uploadFile);
}

// this will handle how the files will be imported via the whitelist drag and drop
function handleFilesWhite(files) {
  let show_file = document.getElementById("filenameWhiteList");
  show_file.innerHTML = files[0].name;
  let wht_file = document.getElementById("wht-file-submit");
  wht_file.disabled = false;
  [...files].forEach(uploadFile);
}

/* this will render the file and will make the file readable by the adblocker */
function uploadFile(file) {
  var fr = new FileReader();
  fr.onload = () => {
    // when the file is loaded do this

    // DOM elements for the blocking form:
    let out = document.getElementById("output");
    let blk_file = document.getElementById("blk-file-submit");
    let text_block = document.getElementById("text-block");
    let import_rules = document.getElementById("import-rules");
    let write_rules = document.getElementById("write-rules");
    // when the button is clicked set the blocked saved data to the data just imported
    blk_file.addEventListener("click", () => {
      let filters = formatFilters(fr.result);
      let allowData = JSON.parse(localStorage.getItem("user"))["white"];
      let data = { block: filters, white: allowData };
      localStorage.setItem("user", JSON.stringify(data));
      // place new rules in the textbox and hide the import section
      text_block.innerHTML = reverseFormatting(data.block);
      import_rules.style.display = "none";
      write_rules.style.display = "block";
      out.innerHTML =
        "Import Complete!<br/>Extension will restart in 5 seconds<br/>Here is your list:";
      setTimeout(() => {
        chrome.runtime.reload();
      }, 5000);
    });

    // DOM elements for the whitelisting form:
    let output = document.getElementById("output-white");
    let wht_file = document.getElementById("wht-file-submit");
    let text_block_white = document.getElementById("text-block-white");
    let import_rules_white = document.getElementById("import-rules-white");
    let write_rules_white = document.getElementById("write-rules-white");
    // when the button is clicked set the whitelist saved data to the data just imported
    wht_file.addEventListener("click", () => {
      let filters = formatWhiteList(fr.result);
      let blockData = JSON.parse(localStorage.getItem("user"))["block"];
      let data = { block: blockData, white: filters };
      localStorage.setItem("user", JSON.stringify(data));
      // place new rules in the textbox and hide the import section
      text_block_white.innerHTML = reverseFormatting(data.white);
      import_rules_white.style.display = "none";
      write_rules_white.style.display = "block";
      output.innerHTML =
        "Import Complete!<br/>Extension will restart in 5 seconds<br/>Here is your list:";
      setTimeout(() => {
        chrome.runtime.reload();
      }, 5000);
    });
  };
  fr.readAsText(file);
}

// we want this function to format each line of the filter list into a format that can be used to block
// this will return a list
function formatFilters(list) {
  let newList = [];
  list = list.split("\n");
  for (i in list) {
    // remove these additional attributes
    list[i] = list[i].replace("/*", "");
    list[i] = list[i].replace("\r", "");
    list[i] = list[i].replace("\n", "");
    list[i] = list[i].replace("^", "");

    // remove everything after the $ - this is for easylist
    let mod_word = "";
    for (j in list[i]) {
      if (list[i][j] === "$") {
        break;
      } else {
        mod_word += list[i][j];
      }
    }

    list[i] = mod_word;

    // main formatting :
    // After a format the filter is then added to a new list
    // if this is a host name then do this
    if (list[i][0] === "|") {
      let val = list[i].replaceAll("|", "");
      if (val[val.length - 1] === "/") {
        val = val + "*";
      } else if (val[val.length - 1] === "*") {
      } else {
        val = val + "/*";
      }
      newList.push("*://*." + val);
    }
    // if this is a host with an extension do this
    else if (list[i][0] === "#") {
      let val = list[i].replaceAll("#", "");
      if (val[val.length - 1] === "*") {
        newList.push("*://*." + val);
      } else newList.push("*://*." + val + "*");
    }
    // if its anything else
    else {
      let val = list[i];
      if (val.substring(val.length - 2, val.length - 0) === "js") {
        val = "*://*/*/*" + val;
        newList.push(val);
      } else if (val[val.length - 1] === "*") {
        val = "*://*/*/*" + val;
        newList.push(val);
      } else {
        val = "*://*/*/*" + val + "*";
        if (val === "*://*/*/**") {
          break;
        }
        newList.push(val);
      }
    }
  }
  return newList;
}

// format back to standards
function reverseFormatting(list) {
  return list
    .toString()
    .replaceAll(",", "\n")
    .replaceAll("*://*.", "||")
    .replaceAll("*://*/*/*", "");
}

// formats the whitelist into an easily read list - this data will be placed in the textbox.
function formatWhiteList(list) {
  let newList = [];
  list = list.split("\n");
  for (i in list) {
    list[i] = list[i].replace("\r", "");
    list[i] = list[i].replace("\n", "");
    newList.push(list[i]);
  }

  return newList;
}
