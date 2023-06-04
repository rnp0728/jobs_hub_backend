const Bookmark = require("../models/Bookmark");
const Job = require("../models/Job");

module.exports = {
    createBookmark: async (req, res) => {
        const job = req.body.job;
        try {
          const jobFound = await Job.findById(job);
          if(!jobFound) {
            return res.status(404).json({error: "Job not Found"});
          }
          const newBookmark = new Bookmark({job: jobFound, userId: req.user.id});
          console.log(newBookmark);
            const savedBookmark = await newBookmark.save();
            const {__v, updatedAt, ...newBookmarkInfo} = savedBookmark._doc;
            res.status(201).json(newBookmarkInfo);

        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteBookmark: async (req, res) => {
        try {
            const userId = req.user.id;
            const jobId = req.params.id;
            await Bookmark.findByIdAndDelete({ userId, jobId});
      
            res.status(200).json("Bookmark Deleted Successfully");
          } catch (error) {
            res.status(500).json(error);
          }
    },

    getBookmarks: async (req, res) => {
        try {
            const bookmarks = await Bookmark.find({userId: req.user.id}).populate('job');
      
            res.status(200).json(bookmarks);
          } catch (error) {
            res.status(500).json(error);
          }
    },
}