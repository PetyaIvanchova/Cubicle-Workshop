const Cube = require('../models/Cube');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = (req, res) => {
    //req.body is the db
    const {name, description, imageUrl, difficultyLevel } = req.body;

    let cube = new Cube(name, description, imageUrl, difficultyLevel );

    Cube.save(cube);

    res.redirect('/');
}