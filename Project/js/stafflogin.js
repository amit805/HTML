function login()
{
var a=document.getElementById('username').value
var b=document.getElementById('password').value
if(a==""||b=="")
{
alert("!!! please fill the details !!!");
}
else 
if(a=="raj" && b=="12345")
{
window.open("management.html");
}
else
if(a=="sameer" && b=="12345")
{
window.open("management.html");
}
else
if(a=="ranjeet" && b=="12345")
{
window.open("management.html");
}
else
if(a=="rohit" && b=="12345")
{
window.open("management.html");
}
else
if(a=="sachin" && b=="12345")
{
window.open("management.html");
}
else
if(a=="rahul" && b=="12345")
{
window.open("management.html");
}
else
{
alert("wrong username/password");
}

}