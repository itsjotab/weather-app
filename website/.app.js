/* Global Variables */
const URL = 'hhtps://api.openweathermap.org/data/2.5/weather?zip=';
const keyAPI = ''

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


const postData = async ( URL, data, keyAPI = {})

function {
    console.log(projectData);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },

        body: JSON.stringify(projectData), 
    });

      try {
        const newData = await  response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }