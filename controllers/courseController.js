const Course = require("../models/Course");

module.exports = {
  createCourse: async (req, res) => {
    const newCourse = new Course(req.body);

    try {
      const savedCourse = await newCourse.save();

      const { __v, createdAt, updatedAt, ...newCourseInfo } = savedCourse._doc;

      res.status(201).json(newCourseInfo);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateCourse: async (req, res) => {
    try {
      const updatedCourse = await Course.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );

      const { __v, createdAt, updatedAt, ...updatedCourseInfo } = updatedCourse._doc;

      res.status(200).json(updatedCourseInfo);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteCourse: async (req, res) => {
    try {
      await Course.findByIdAndDelete(req.params.id);

      res.status(200).json("Course Deleted Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAnCourse: async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);

      const { __v, createdAt, updatedAt, ...CourseData } = course._doc;

      res.status(200).json(CourseData);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAllCourses: async (req, res) => {
    try {
      const allCourses = await Course.find({});

      res.status(200).json(allCourses);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  searchCourses: async (req, res) => {
    try {
      const searchedCourses = await Course.aggregate([{
        $search: {
          index: "coursesearch",
          text: {
            query: req.params.key,
            path: {
              wildcard: "*",
            },
          },
        },
      }]);
      console.log(searchedCourses);
      res.status(200).json(searchedCourses);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
