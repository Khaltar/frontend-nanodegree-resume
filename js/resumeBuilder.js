/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace("%data%", "José Pereira");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Web Developer");

var work = {
	"jobs": [{
		"employer": "Laboratory of Biostatistics and Medical Informatics",
		"title": "Research Trainee",
		"location": "Faculty of Medicine - University of Coimbra",
		"dates": "May 2015 - Present",
		"description": "Using R and Python for data analysis of healthcare data and building machine learning models for prediction"
	}]

};

var projects = {
    "projects": [{
        "title": "Portfolio Webpage",
        "dates": "January 2016",
        "description": "Using Twitter Bootstrap to create a portfolio webpage",
        "images": []
    }]
};

var bio = {
	"name": "José Pereira",
	"role": "Front-End Developer",
	"welcomeMessage": "Hello and welcome to my interactive resume!",
	"contacts": {
		"mobile": "Not avaliable",
		"email": "jafcpereira@gmail.com",
		"github": "Khaltar",
		"twitter": "@jafcpereira",
		"location": "Portugal"
	},
	"skills": ["HTML", "CSS", "Javascript", "JQuery", "Bootstrap", "Python", "R"]
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
			"degree": "M.S",
			"majors": ["Medicine"],
			"dates": "2013-2019",
			"url": "www.uc.pt/fmuc"
		}
	],
    "onlineCourses": [
        {"title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016-present",
        "url": "www.udacity.com"}
    ]
};
    


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }    
}

   

var displayWork = function(){
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkStart.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }    
}

displayWork();


var inName = function(name) {
    var names = name.trim().split(" ");
    var firstName = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    var lastName = names[1].toUpperCase();
    var finalName = firstName + " " + lastName;
    return finalName;                                                               
}

$("#main").append(internationalizeButton);

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDates = HTMLprojectTitle.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLprojectTitle.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display()

$("#mapDiv").append(googleMap);
