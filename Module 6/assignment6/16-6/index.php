<!DOCTYPE html>

<!-- Fig. 16.8: PullImagesOntoPage.html -->
<!-- Image catalog that uses Ajax to request XML data asynchronously. -->
<html>
<head>
<meta charset="utf-8">
<title> Pulling Images onto the Page </title>
<style type = "text/css">
li { display: inline-block; padding: 4px; width: 120px; }
img { border: 1px solid black }
</style>
</head>
<body>
<input type = "radio" name ="Books" value = "all"
id = "all"> All Books
<input type = "radio" name = "Books" value = "simply"
id = "simply"> Simply Books
<input type = "radio" name = "Books" value = "howto"
id = "howto"> How to Program Books
<input type = "radio" name = "Books" value = "dotnet"
id = "dotnet"> .NET Books
<input type = "radio" name = "Books" value = "javaccpp"
id = "javaccpp"> Java/C/C++ Books
<input type = "radio" checked name = "Books" value = "none"
id = "none"> None
<div id = "covers"></div>
</body>
</html>
<script src="16-6.js"></script>