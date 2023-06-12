const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const jobRoute = require("./routes/job");
const internshipRoute = require("./routes/internship");
const bookmarkRoute = require("./routes/bookmark");
const courseRoute = require("./routes/course");

dotenv.config();
// process.env.VARIABLE_NAME


//Connecting to DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DataBase connected Successfully"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/", authRoute);
app.use("/api/users", userRoute);
app.use("/api/jobs", jobRoute);
app.use("/api/internships", internshipRoute);
app.use("/api/bookmarks", bookmarkRoute);
app.use("/api/courses", courseRoute);



app.get("/", (req, res) => res.send("Welcome to Jobs Hub"));


app.listen(process.env.PORT || 5557, () =>
  console.log(`Jobs Hub app listening on port ${process.env.PORT}!`)
);
