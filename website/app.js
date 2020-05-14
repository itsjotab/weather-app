/* Global Variables */
const Url = 'hhtps://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '8e77ce8fdd43b74cdfa1a37d0567c630'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Function called by event listener */
const button = document.getElementById('generate').addEventListener('click', getResults);

// function called by event listner
function getResults(e) {
const areaCode = document.getElementById('zip');
const feelings = document.getElementById('feelings')
   
getWeather(Url, zip.value, apiKey)
 .then(temp => {
    return {date: newDate, temp, content: feelings.value}
  })
  .then(data => {
    saveData('/api/projectdata', data)
    return data
  })
  .then(({date, temp, content}) => updateUI(date, temp, content))
  .catch(e => {
    console.error(e)
  })

// function to GET web API data
 const weatherData = async ( Url, areaCode, apiKey ) => {
      const response = await fetch(Url + areaCode + apiKey );
      try {
        const newData = await  response.json();
        console.log(newData);
      } catch(error) {
      console.log("error", error);
      }
  }

/* Function to POST data */
const postData = async ( Url = '', data = {})=>{
  console.log(data)
    const response = await fetch(Url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),       
  });

    try {
      const newData = await response.json();
      return newData
    }catch(error) {
    console.log("error", error);
    }
} 

// function to GET project Data
const updateUI = async () => {
  const request = await fetch('/all', projectData = {});
  try{
    const allData = await request.json();
    document.getElementById('date').innerHTML = allData[0].date;
    document.getElementById('temp').innerHTML = allData[0].temp;
    document.getElementById('content').innerHTML = allData[0].content;

  }catch(error){
    console.log("error", error);
  }
}}
