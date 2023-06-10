const Internship = require("../models/Internship");

module.exports = {
  createInternship: async (req, res) => {
    const newInternship = new Internship(req.body);

    try {
      const savedInternship = await newInternship.save();

      const { __v, createdAt, updatedAt, ...newInternshipInfo } = savedInternship._doc;

      res.status(201).json(newInternshipInfo);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateInternship: async (req, res) => {
    try {
      const updatedInternship = await Internship.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );

      const { __v, createdAt, updatedAt, ...updatedInternshipInfo } = updatedInternship._doc;

      res.status(200).json(updatedInternshipInfo);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteInternship: async (req, res) => {
    try {
      await Internship.findByIdAndDelete(req.params.id);

      res.status(200).json("Internship Deleted Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAnInternship: async (req, res) => {
    try {
      const internship = await Internship.findById(req.params.id);

      const { __v, createdAt, updatedAt, ...InternshipData } = internship._doc;

      res.status(200).json(InternshipData);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAllInternships: async (req, res) => {
    try {
      const allInternships = await Internship.find({});

      res.status(200).json(allInternships);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  searchInternships: async (req, res) => {
    try {
      const searchedInternships = await Internship.aggregate([{
        $search: {
          index: "internshipsearch",
          text: {
            query: req.params.key,
            path: {
              wildcard: "*",
            },
          },
        },
      }]);
      console.log(searchedInternships);
      res.status(200).json(searchedInternships);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
