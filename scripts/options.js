/* this script will manage the operations for the options/settings page that will control the ad-blocker */
document.addEventListener("DOMContentLoaded", function () {
  /* DOM content */
  var import_btn = document.getElementById("import-block");
  var rule_btn = document.getElementById("rule-area-block");
  var import_rules = document.getElementById("import-rules");
  var write_rules = document.getElementById("write-rules");

  /* Functions */

  /* Actions */
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
});
