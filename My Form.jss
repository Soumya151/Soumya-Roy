<html>
<head>
<title> My Form </title>
</head>
<body>
<script>
function ValidateForm()
{
	var i= document.forms["my form"][fname].value;
	if(i==null||i=="")
	{
		alert("Name must be filled");
		return false;
	}

}
</script>
<form name="my form" action ="demo.php" on submit="return ValidateForm()" method="post">
Name:<input type="text" name="fname">
     <input type="Submit" value="Submit">
</form>
</body>
</html>
