const Cube = require('../models/Cube');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = (req, res) => {
    //req.body is the db
    let cube = new Cube(req.body);

    Cube.save(cube);

    res.redirect('/');
}