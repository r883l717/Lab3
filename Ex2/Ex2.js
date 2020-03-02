function Ex2p()
{
  var img = document.getElementById("ID").value;
  switch (img) {
    case "1":
      document.getElementById("myImgId").src="5.jpeg";
      document.getElementById("ID").value="5";
      break;
    case "2":
      document.getElementById("myImgId").src="1.jpeg";
      document.getElementById("ID").value="1";
      break;
    case "3":
      document.getElementById("myImgId").src="2.jpeg";
      document.getElementById("ID").value="2";
      break;
    case "4":
      document.getElementById("myImgId").src="3.jpeg";
      document.getElementById("ID").value="3";
      break;
    case "5":
      document.getElementById("myImgId").src="4.jpeg";
      document.getElementById("ID").value="4";
      break;
    default:
    document.getElementById("demo").innerHTML = "Error";
    break;
  }
}

function Ex2n()
{
  var img = document.getElementById("ID").value;
  switch (img) {
    case "1":
      document.getElementById("myImgId").src="2.jpeg";
      document.getElementById("ID").value="2";
      break;
    case "2":
      document.getElementById("myImgId").src="3.jpeg";
      document.getElementById("ID").value="3";
      break;
    case "3":
      document.getElementById("myImgId").src="4.jpeg";
      document.getElementById("ID").value="4";
      break;
    case "4":
      document.getElementById("myImgId").src="5.jpeg";
      document.getElementById("ID").value="5";
      break;
    case "5":
      document.getElementById("myImgId").src="1.jpeg";
      document.getElementById("ID").value="1";
      break;
    default:
    document.getElementById("demo").innerHTML = "Error";
    break;
  }
}
