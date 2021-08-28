const express = require('express');

const app =express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/game/:gameTitle/:gameCreator", function(req, res){
    const title = req.params.gameTitle;
    const creator = req.params.gameCreator;
    res.render("game.ejs", {
        title: title,
        creator: creator
    });
});

app.get("/gamelist", function(req, res){ //Will list all of our games

    //An array of objects that holds all our games. Basically a database.
    const games = [
        {title: "Fortnite", creator: "Epic Games"},
        {title: "Dirty Bomb", creator: "Splash Damage"},
        {title: "Battlefield 1", creator: "EA"}
    ]

    res.render("gamelist.ejs", {
        gamesList: games //we send the array to the gamelist.ejs page
    });
});

app.get("/", function(req, res){

//const city= req.params.cityname;
//const area= req.params.areaname;
  res.render('home', {

    headline:'Welcome To My City'
  //  city: 'Italy',
  //  area: 'Paris'
  });
});
app.get("/Italy", function(req, res){

res.send("Welcome To My Home");
});

request("https://api.unsplash.com/photos/?client_id=z3jXSS7ZvUwPQn7_xkba8jgDawwVpngyXs1dyfshWBY", function(error, response, body){
  if(error){
    console.log(error);
  }
  else{
   var data =JSON.parse(body);
   console.log(data);
  }
});

app.listen("3000", function(){

  console.log("iLoveMyCity Application");
});
