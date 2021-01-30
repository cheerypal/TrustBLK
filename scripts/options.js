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
});
