/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace("%data%", "José Pereira");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Web Developer");


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);