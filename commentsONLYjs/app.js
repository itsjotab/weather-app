// Personal API Key for OpenWeatherMap API

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */
app.post('/addAnimal', addAnimal);

function addAnimal(req,res){

  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav
  }

  animalData.push(newEntry)
  console.log(animalData)
}

/* Function to GET Project Data */

