/* Created by CDZ-Answers 2021 */

function searchFunction() {
  var input, filter, mainBody, label, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  mainBody = document.getElementById("mainBody");
  label = mainBody.getElementsByTagName("label");

  for (i = 0; i < label.length; i++) {
    if (label[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      label[i].style.display = "";
    } else {
      label[i].style.display = "none";
    }
  }
}
