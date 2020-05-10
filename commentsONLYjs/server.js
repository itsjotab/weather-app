// Setup empty JS object to act as endpoint for all routes
projectData = {}

// Require Express to run server and routes
const express = required ('express');
const bodyParser = required ('body-Parser');

// Start up an instance of app
const app = express ();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = required ('cors');
app.use(cors())

// Initialize the main project folder
app.use(express.static('website'));

//port variable
const port = 6000;

// Setup Server
const server = app.listen(port, listening);
function listening(){
    console.log(`running localhost: ${port}`);
};
// GET function 
app.get('/', function (req, res) {
    res.send('projectData');
  })

  // POST function
  app.post('/addData', function (req, res) {
    projectData.push(req.body);
    res.send('Working!');
  })