require("dotenv").config();

const express = require("express");

const app = express();

const userRouter = require("./api/users/user.router");

app.use(express.json());

/* 
//test route
app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "this is rest apis working"
    });
}); */

app.use("/api/users", userRouter )

app.listen(process.env.APP_PORT, ()=> {
    console.log("server up and runing on port : ", process.env.APP_PORT);
});