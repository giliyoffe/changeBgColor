// Activate on press Enter key
document.getElementById('bgColorTxt').onkeypress = function(e) 
{
	if (!e) e = window.event;
	var keyCode = e.keyCode || e.which;
	if (keyCode == '13') 
	{
		var txt = document.getElementById("bgColorTxt").value;
		document.body.style.backgroundColor = txt;
	}
}
// Activate on button press
document.getElementById("nodeGoto").addEventListener("click", function yep() 
{
	var txt = document.getElementById("bgColorTxt").value;
	document.body.style.backgroundColor = txt;
});
	