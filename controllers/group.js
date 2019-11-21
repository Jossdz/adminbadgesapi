const Group = require("../models/Group");
const Campus = require("../models/Campus");

exports.createGroup = async (req, res) => {
  const { course, month, year, spreadsheetId, campusId } = req.body;

  const { _id } = await Group.create({ course, month, year, spreadsheetId });

  await Campus.findByIdAndUpdate(campusId, { $push: { groups: _id } });

  res.status(201).json({ messaje: "Group created" });
};

exports.updateGroup = async (req, res) => {
  await Group.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({ messaje: "Group updated" });
};

exports.getGroups = async (req, res) => {
  const Groups = await Group.find();
  res.status(200).json({ Groups });
};

exports.getGroup = async (req, res) => {
  const Group = await Group.findById(req.params.id);
  res.status(200).json(Group);
};

exports.getGroupsByCampus = async (req, res) => {
  const { code } = req.params;
  const { groups } = await Campus.findOne({ code }).populate("groups");

  res.status(200).json({ groups });
};

exports.getGroupsByCampusAndCourse = async (req, res) => {
  const { code, course } = req.params;

  const result = await Campus.findOne({ code }).populate("groups");

  const filteredGroups = result.groups.filter(group => group.course === course);
  res.status(200).json({ groups: filteredGroups });
};
