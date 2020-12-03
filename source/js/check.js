function validate() {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.getElementById("email").value;
  if (reg.test(address) == false) {
    document.getElementById("password").disabled = true;
    return false;
  } else {
    document.getElementById("password").disabled = false;
  }
}
