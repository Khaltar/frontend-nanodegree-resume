/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
	"jobs": [{
		"employer": "Laboratory of Biostatistics and Medical Informatics",
		"title": "Research Trainee",
		"location": "Faculty of Medicine - University of Coimbra",
		"dates": "May 2015 - Present",
		"description": "Using R and Python for data analysis of healthcare data and building machine learning models for prediction"
	}, {"employer": "NEM/AAC",
       "title": "Coordinator of the Department of Public, Reproductive and Environmental Health",
       "location": "Faculty of Medicine - University of Coimbra",
       "dates": "December 2013 - September 2014",
       "description": "Coordinating volunteers and all the activities of the department in order to promote health in Coimbra"
      }
]};

var projects = {
    "projects": [{
        "title": "Portfolio Webpage",
        "dates": "January 2016",
        "description": "Using Twitter Bootstrap to create a portfolio webpage",
        "images": ["images/portfolio.jpg"]
    }]
};

var bio = {
	"name": "José Pereira",
	"role": "Front-End Developer",
	"welcomeMessage": "Hello and welcome to my interactive resume!",
	"contacts": {
		"mobile": "Not avaliable",
		"email": "Amystery@gmail.com",
		"github": "Khaltar",
		"twitter": "@whoknows",
		"location": "Portugal"
	},
	"skills": ["HTML", "CSS", "Javascript", "JQuery", "Bootstrap", "Python", "R"],
    "biopic": "https://pbs.twimg.com/profile_images/3309741408/eff94615a3653c01a9d5a178ced7fbb5_400x400.jpeg"
};

var education = {
	"schools": [{
			"name": "Faculty of Human Kinetics - Technical University of Lisbon",
			"location": "Lisbon",
			"degree": "B.A",
			"majors": ["Psychomotor Rehabilitation"],
			"dates": "2008-2011",
			"url": "http://www.fmh.utl.pt/pt/"
		},

		{
			"name": "Faculty of Pharmacy - University of Lisbon",
			"location": "Lisbon",
			"degree": "M.S",
			"majors": ["Pharmaceutical Sciences"],
			"dates": "2011-2013",
			"url": "http://www.ff.ul.pt"
		},

		{
			"name": "Faculty of Medicine - University of Coimbra",
			"location": "Coimbra",
			"degree": "M.D",
			"majors": ["Medicine"],
			"dates": "2013-2019",
			"url": "http://www.uc.pt/fmuc"
		}
	],
    "onlineCourses": [
        {"title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"},
        {"title": "Introduction to HTML5",
        "school": "Coursera - University of Michigan",
        "dates": "2015",
        "url": "https://www.coursera.org/account/accomplishments/records/9ECDLSRWTGMH"},
        {"title": "Introduction to CSS3",
        "school": "Coursera - University of Michigan",
        "dates": "2015",
        "url": "https://www.coursera.org/account/accomplishments/records/YKBWKE2XDMQM"}
        ]
}

    
//Header function\\

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedMessage);
    $("#header").append(formattedPicture);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);
    
    if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }    
    }
};

bio.display();

//Education Function\\

education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedDates);
        if (education.schools[school].majors.length > 0) {
            for (var major in education.schools[school].majors) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $(".education-entry:last").append(formattedMajor);
            }
        }
    }
    $("#education").append(HTMLonlineClasses);
    for (var onlineCourse in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedTitle);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedUrl);
    }
};

education.display();



//Work Function\\

work.display = function(){
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }    
};

work.display();


//Projects Function\\

projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        
        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();

//Google Maps\\

$("#mapDiv").append(googleMap);
