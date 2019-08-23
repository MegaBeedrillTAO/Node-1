const express = require("express");
const app = express();
const users = require("./users")

app.get("/api/users", (request, response, next) => {
    console.log(request.query);
    if (request.query.first_name){
        const filteredUsers = users.filter(el => {
            return el.first_name === request.query.first_name;
        })
        if (filteredUsers.find(el =>{
            return el.first_name === request.query.first_name;
        })){
            response.json(filteredUsers);
        }
        else{
            response.status(404).json("No user with that name.");
        }
        
    }
    else{
        response.json(users);
    }
     
})

app.get("/api/users/:userId", (req, res) =>{
    const user = users.find((element) =>{
        return element.id === +req.params.userId;
    })
    if(!user){
        res.status(404).json("No user found");

    }
    else{
        res.json(user);
    }
    
})

app.listen(5050, () =>{
    console.log("Listening on port 5050");
})