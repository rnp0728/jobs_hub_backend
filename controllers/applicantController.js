const Applicant = require("../models/Applicant");

module.exports = {
  createApplicant: async (req, res) => {
    const newApplicant = new Applicant(req.body);

    try {
      const savedApplicant = await newApplicant.save();

      const { __v, createdAt, updatedAt, ...newApplicantInfo } = savedApplicant._doc;

      res.status(201).json(newApplicantInfo);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAllApplicants: async (req, res) => {
    try {
      const allApplicants = await Applicant.find({"agentId":req.user.id}).populate(['user','internship','job']);

      res.status(200).json(allApplicants);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  searchApplicants: async (req, res) => {
    try {
      const searchedApplicants = await Applicant.aggregate([{
        $search: {
          index: "applicantssearch",
          text: {
            query: req.params.key,
            path: {
              wildcard: "*",
            },
          },
        },
      }]);
      console.log(searchedApplicants);
      res.status(200).json(searchedApplicants);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
