function change()
{
	document.getElementById("valRed1").value = document.getElementById("slideRed1").value;
	document.getElementById("valGreen1").value = document.getElementById("slideGreen1").value;
	document.getElementById("valBlue1").value = document.getElementById("slideBlue1").value;
	document.getElementById("valWidth").value = document.getElementById("slideWidth").value;
	document.getElementById("valRed2").value = document.getElementById("slideRed2").value;
	document.getElementById("valGreen2").value = document.getElementById("slideGreen2").value;
	document.getElementById("valBlue2").value = document.getElementById("slideBlue2").value;
	input();
}

function input()
{
	var r1 = document.getElementById("valRed1").value;
	var g1 = document.getElementById("valGreen1").value;
	var b1 = document.getElementById("valBlue1").value;
	var w = document.getElementById("valWidth").value;
	var r2 = document.getElementById("valRed2").value;
	var g2 = document.getElementById("valGreen2").value;
	var b2 = document.getElementById("valBlue2").value;
	var t = document.getElementById("Exp");
	document.getElementById("slideRed1").value = r1;
	document.getElementById("slideGreen1").value = g1;
	document.getElementById("slideBlue1").value = b1;
	document.getElementById("slideWidth").value = w;
	document.getElementById("slideRed2").value = r2;
	document.getElementById("slideGreen2").value = g2;
	document.getElementById("slideBlue2").value = b2;
	t.style.backgroundColor = 'rgb(' + r2 + ',' + g2 +',' + b2 +')';
	t.style.borderColor = 'rgb(' + r1 + ',' + g1 +',' + b1 +')';
	t.style.borderWidth = w + 'px';
}

function Ex4()
{
	var r1 = document.getElementById("valRed1").value;
	var g1 = document.getElementById("valGreen1").value;
	var b1 = document.getElementById("valBlue1").value;
	var w = document.getElementById("valWidth").value;
	var r2 = document.getElementById("valRed2").value;
	var g2 = document.getElementById("valGreen2").value;
	var b2 = document.getElementById("valBlue2").value;
	var t = document.getElementById("text");
	t.style.backgroundColor = 'rgb(' + r2 + ',' + g2 +',' + b2 +')';
	t.style.borderColor = 'rgb(' + r1 + ',' + g1 +',' + b1 +')';
	t.style.borderWidth = w + 'px';
}
