var db = require('./models')

var projectList = [];

projectList.push ({
  name: "FreeGoldWatch",
  details: [ "Consumer-facing site for a local screenprinting shop / pinball arcade.",
            "Functioning state machine controls the movement of print orders in database.",
            "Improves responsive design / UX of the business's current website.",
            "Interacts with the PinballMap & Instagram APIs" ],
  role: "Consulting Web Developer / Designer",
  tech: [ "Squarespace CMS",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "jQuery",
        "HTML5" ],
  image: "/images/portfolio/fgw.png"
});


 db.Project.remove({}, function(err, courses){
   projectList.forEach(function(projectData){
     var project = new db.Project({
       name: projectData.name,
       details: projectData.details,
       role: projectData.role,
       role: projectData.role,
       tech: projectData.tech,
       image: projectData.image
     });

    console.log('saved: ' + project); // sanity check

    project.save(function(err, savedProject){
      if(err){return console.log(err);}
      return console.log('all projects seeded successfully!');
    });
  })
 });
