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

var work ={
    "jobs": [
        {
            "employer": "ALLSpark Learning",
            "title": "Summer Internship : Online Course Creator",
            "date": "June 2014 - July 2014",
            "location": "Online",
            "description": "ALLSpark being a multi-featured educational platform ,my work as an intern was to design 4 courses Software Engineering, Operating System, Basic Computing and Web Technology and Basic Computation and Principles of Computer Programming. I design these courses according toa syllabus and it included the study materials, video lectures, notes from various universities and educational institutions all over the world."
        },
        {
            "employer": "JIS College of Engineering : ECell",
            "title": "Web Developer",
            "date": "August 2014 - September 2014",
            "location": "Kalyani, West Bengal , India",
            "description": "Developed the Entrepreneurship Cell (ECell) website of JIS College of Engineering using ASP.NET"
        }
    ]
}

var education ={
    "schools": [
        {
            "name": "JIS College of Engineering",
            "degree": "Bachelor of Technology",
            "dates": "2011 - 2015",
            "location": "Kalyani, West Bengal , India",
            "major": "Computer Science & Engineering (CSE)"
        },
        {
            "name": "Kohima Science College",
            "degree": "Higher Secondary",
            "dates": "2009 - 2011",
            "location": "Kohima, Nagaland, India",
            "major": "Science"
        }
    ],
    "onlineCourses": [
        {
            "title": "How to use Git and GitHub",
            "school": "Udacity",
            "dates": "December 2014",
            "url": "https://www.udacity.com/course/ud775"
        },
        {
            "title": "Programming Foundation with Python",
            "school": "Udacity",
            "dates": "December 2014",
            "url": "https://www.udacity.com/course/ud036"
        }
    ]
};

var projects={
    "projects" :[
    {
        "title": "USB port visibility controller",
        "dates": "2014",
        "description": "In this paper a new steganographic technique using an advanced cryptographic technique has been proposed. In the encryption part of this paper the concept of ASCII value of the English alphabets have been used. Besides this the binary conversion of those ASCII values and the concept of hamming distance measurement are also used here. Multiple Auxiliary keys are generated using one password and after the encryption, the steganographic part is done with the help of grey-scale concept.",
    },
    {
        "title": "Optimized Block Steganography based Crypt Encryption for Secured Data Transfer",
        "dates": "2013",
        "description": "A software was developed using visual basic such to prevent unauthorized person access information from a computer system by by plugging in portable devices into USB port. The proposed approach used the Administrator feature in windows to allow only those persons' with the admin password to plug in devices and obtain information.",
    }
    ]
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

if(bio.skills.length != 0)
{
$("#header").append(HTMLskillsStart);
  for(var i=0;i<4;i++)
  {
    var formattedSkills = HTMLskills.replace( "%data%" , bio.skills[i]);
    $("#header").append(formattedSkills);
  }
}


for(var i=0;i<2;i++)
{
    var formattedEmployer = HTMLworkEmployer.replace( "%data%" ,work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace( "%data%" ,work.jobs[i].title);
    var formattedDate = HTMLworkDates.replace( "%data%" ,work.jobs[i].date);
    var formattedWorkLocation = HTMLworkLocation.replace( "%data%" ,work.jobs[i].location);
    var formattedDescription = HTMLworkDescription.replace( "%data%" ,work.jobs[i].description);

    $("#workExperience").prepend(HTMLworkStart);
    $("#workExperience").append(formattedEmployer);
    $("#workExperience").append(formattedTitle);
    $("#workExperience").append(formattedDate);
    $("#workExperience").append(formattedWorkLocation);
    $("#workExperience").append(formattedDescription);
 
}

for(var i=0;i<2;i++)
{
var formattedschoolName = HTMLschoolName.replace( "%data%" , education.schools[i].name);
var formattedschoolDegree = HTMLschoolDegree.replace( "%data%" , education.schools[i].degree);
var formattedschoolDates = HTMLschoolDates.replace( "%data%" , education.schools[i].dates);
var formattedschoolLocation = HTMLschoolLocation.replace( "%data%" , education.schools[i].location);
var formattedschoolMajor =HTMLschoolMajor.replace( "%data%" , education.schools[i].major);

$("#education").append(HTMLschoolStart);
$("#education").append(formattedschoolName);
$("#education").append(formattedschoolDegree);
$("#education").append(formattedschoolDates);
$("#education").append(formattedschoolLocation);
$("#education").append(formattedschoolMajor);
}

$("#education").append(HTMLonlineClasses);
for(var i=0;i<2;i++)
{
var formattedOnlineTitle = HTMLonlineTitle.replace( "%data%" , education.onlineCourses[i].title);
var formattedOnlineSchool = HTMLonlineSchool.replace( "%data%" , education.onlineCourses[i].school);
var formattedOnlineDates = HTMLonlineDates.replace( "%data%" , education.onlineCourses[i].dates);
var formattedOnlineURL =HTMLonlineURL.replace( "%data%" , education.onlineCourses[i].url);


$("#education").append(formattedOnlineTitle);
$("#education").append(formattedOnlineSchool);
$("#education").append(formattedOnlineDates);
$("#education").append(formattedOnlineURL);
}

for(var i=0;i<2;i++)
{
    var formattedTitle = HTMLprojectTitle.replace( "%data%" , projects.projects[i].title);
    var formattedDates = HTMLprojectDates.replace( "%data%" , projects.projects[i].dates);
    var formattedDescription= HTMLprojectDescription.replace( "%data%" , projects.projects[i].description);

    $("#projects").append(HTMLprojectStart);
    $("#projects").append(formattedTitle);
    $("#projects").append(formattedDates);
    $("#projects").append(formattedDescription);

}

$("#footerContacts").prepend(formattedLocation);
$("#footerContacts").prepend(formattedGitHub);
$("#footerContacts").prepend(formattedTwitter);
$("#footerContacts").prepend(formattedEmail);
$("#footerContacts").prepend(formattedMobile);
