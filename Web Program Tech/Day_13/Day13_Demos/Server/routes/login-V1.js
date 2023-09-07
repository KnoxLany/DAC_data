const express = require('express');

const appForLogin = express.Router();

appForLogin.post("/", (request, response)=>{
    console.log("Login credentials received from Client ")
    console.log(request.body)
    if(request.body.username == "mahesh" &&
        request.body.password =="mahesh@123")
        {
            response.setHeader("Content-Type",
                                "application/json");
            var reply = {"isValid": "true"}
            response.write(JSON.stringify(reply));

        }
        else
        {
            response.setHeader("Content-Type",
            "application/json");
            var reply = {"isValid": "false"}
            response.write(JSON.stringify(reply))
        }

    response.end();
})

module.exports = appForLogin;