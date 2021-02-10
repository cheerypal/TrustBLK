/* this script will manage the operations for the options/settings page that will control the ad-blocker */
document.addEventListener("DOMContentLoaded", function () {
  /* DOM content */

  /* Block Options */
  var import_btn = document.getElementById("import-block");
  var rule_btn = document.getElementById("rule-area-block");
  var import_rules = document.getElementById("import-rules");
  var write_rules = document.getElementById("write-rules");

  /* Whitelist options */
  var import_btn_white = document.getElementById("import-block-white");
  var rule_btn_white = document.getElementById("rule-area-white");
  var import_rules_white = document.getElementById("import-rules-white");
  var write_rules_white = document.getElementById("write-rules-white");

  /* Drag and drop DOM */
  var drop_block = document.getElementById("drop-block");
  var drop_white = document.getElementById("drop-white");
  var input = document.getElementById("inputfile");
  /* Functions */

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
  var out = document.getElementById("output");
  console.log(file);
  let show_file = document.getElementById("filename");
  show_file.innerHTML = file.name;
  var fr = new FileReader();
  fr.onload = function () {
    out.textContent = fr.result;
  };
  fr.readAsText(file);
}
