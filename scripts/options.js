/* this script will manage the operations for the options/settings page that will control the ad-blocker */
document.addEventListener("DOMContentLoaded", function () {
  /* DOM content */

  /* forms */
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

  /* Drag and drop DOM */
  var drop_block = document.getElementById("drop-block");
  var drop_white = document.getElementById("drop-white");
  var input = document.getElementById("inputfile");

  /* form submits */
  var blk_submit = document.getElementById("blk-submit");
  var wht_submit = document.getElementById("wht-submit");

  /* Functions */

  // on load get the block list from storage and present it in the textbox
  text_block.innerHTML = reverseFormatting(
    JSON.parse(localStorage.getItem("user"))["block"]
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
  drop_white.addEventListener("drop", handleDrop, false);

  function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;
    handleFiles(files);
  }

  /* triggers the click action to allow the user to 
  open the file explorer to find a filter file. */
  drop_block.addEventListener("click", openFileExplorer, false);
  input.addEventListener("change", function (evt) {
    var files = evt.target.files;
    handleFiles(files);
  });
});

/* Allows the user to open up the file explorer to pick a file to upload */

function openFileExplorer() {
  var input = document.getElementById("inputfile");
  input.click();
}

/* handles the files for when the user inserts the file */
function handleFiles(files) {
  [...files].forEach(uploadFile);
}

/* this will render the file and will make the file readable by the adblocker */
function uploadFile(file) {
  let show_file = document.getElementById("filename");
  show_file.innerHTML = file.name;
  var fr = new FileReader();
  fr.onload = () => {
    // when the file is loaded do this

    // DOM elements :
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
