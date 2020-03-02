function Ex1()
{
  var p1 = document.getElementById("p1").value;
  var p2 = document.getElementById("p2").value;
  if (p1 == p2) {
    if(p1.length<8) {
      alert("The passwords are not at least 8 characters long");
    }
    else {
      alert("Pass the validator");
    }
  }
  else {
    alert("The passwords entered don't match");
  }
}
