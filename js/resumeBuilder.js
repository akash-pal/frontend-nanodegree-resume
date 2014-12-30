//$("#main").append("Akash Pal");

//var awesomeThoughts = "I am Akash Pal and I am AWESOME!"

//console.log(awesomeThoughts);

//[string].replace([old],[new])

//var funthoughts = awesomeThoughts.replace("AWESOME!","FUN");

//$("#main").append(funthoughts);

/*
var name = "Akash Pal";

var formattedName = HTMLheaderName.replace( "%data%" , name );

var role = "Software Engineer";

var formattedRole = HTMLheaderRole.replace( "%data%" , role );

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

//var skills = ["Java" , "C" , "C++" , "ASP.NET"];  //array

//$("#main").append(skills[0]);
//$("#main").append(skills);
//console.log(skills.length);

//object bio with name-value pair
var bio ={
    "Name": "Akash Pal",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "+918927453732",
        "email": "akashpa93@gmail.com",
        "twitter": "@akashpaljis",
        "github": "akash-pal",
        "location": "Krishnagar, West Bengal, India"
    },
    "welcome_message": "Kindly go through my resume",
    "skills": [
        "Java",
        "C",
        "C++",
        "ASP.NET"
    ],
    "picture_URL": "images/AkashPal.jpg"
}

var formattedName = HTMLheaderName.replace( "%data%" , bio.Name );
var formattedRole = HTMLheaderRole.replace( "%data%" , bio.role );

var formattedContacts = HTMLcontactGeneric.replace( "%data%" , bio.contacts);
var formattedMobile = HTMLmobile.replace( "%data%" , bio.contacts.mobile);
var formattedEmail = HTMLemail.replace( "%data%" , bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace( "%data%" , bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace( "%data%" , bio.contacts.github);
var formattedLocation = HTMLlocation.replace( "%data%" ,bio.contacts.location);

var formattedbioPic = HTMLbioPic.replace( "%data%" , bio.picture_URL);
var formattedWelcomeMsg= HTMLWelcomeMsg.replace( "%data%" , bio.welcome_message);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedbioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);

for(var i=0;i<4;i++)
{
var formattedSkills = HTMLskills.replace( "%data%" , bio.skills[i]);
$("#header").append(formattedSkills);
}

$("#footerContacts").prepend(formattedLocation);
$("#footerContacts").prepend(formattedGitHub);
$("#footerContacts").prepend(formattedTwitter);
$("#footerContacts").prepend(formattedEmail);
$("#footerContacts").prepend(formattedMobile);
