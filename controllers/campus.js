const Campus = require("../models/Campus");

exports.createCampus = async (req, res) => {
  const { name, code, group } = req.body;

  await Campus.create({ name, code, group });

  res.status(201).json({ messaje: "Campus created" });
};

exports.updateCampus = async (req, res) => {
  await Campus.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({ messaje: "campus updated" });
};

exports.getCampuses = async (req, res) => {
  const campuses = await Campus.find();
  res.status(200).json({ campuses });
};

exports.getCampus = async (req, res) => {
  const campus = await Campus.findById(req.params.id);
  res.status(200).json(campus);
};
