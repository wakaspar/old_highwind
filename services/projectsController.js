var db = require('../models');


// READ (all) /api/projects
function index(req, res) {
  db.Project.find({}, function(err, allProjects) {
    res.json(allProjects);
  });
}

// READ /api/projects
function show(req, res) {
  db.Project.findById(req.params.projectId, function(err, foundProject) {
    if(err) { console.log('projectsController.show error', err); }
    console.log('projectsController.show responding with', foundProject);
    res.json(foundProject);
  });
}

// CREATE /api/projects
function create(req, res) {
  console.log('body', req.body);

  db.Project.create(req.body, function(err, project) {
    if (err) { console.log('error', err); }
    console.log(project);
    res.json(project);
  });
}

// DESTROY /api/projects
function destroy(req, res) {
  db.Project.findOneAndRemove({ _id: req.params.projectId }, function(err, foundProject){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundProject);
  });
}

// UPDATE /api/projects
function update(req, res) {
  console.log('updating with data', req.body);
  db.Project.findById(req.params.projectId, function(err, foundProject) {
    if(err) { console.log('projectsController.update error', err); }
    foundProject.name = req.body.name;
    foundProject.details = req.body.details;
    foundProject.role = req.body.role;
    foundProject.tech = req.body.tech;
    foundProject.image = req.body.image;
    foundProject.save(function(err, savedProject) {
      if(err) { console.log('saving altered project failed'); }
      res.json(savedProject);
    });
  });

}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
