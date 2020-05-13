/* Global Variables */
const Url = 'hhtps://api.openweathermap.org/data/2.5/weather?zip=';
const keyApi = ''

//HTML variables for events
const button = document.getElementById('generate');

//HTML elements to update
const zipCode = document.getElementById('zip');
const feelings = document.getElementById('feelings')


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


const weatherData = async ( Url, areaCode, keyAPI ) => {
      const response = await fetch(Url + areaCode + keyApi, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      }),

        body: JSON.stringify(projectData), 
    });

      try {
        const newData = await  response.json();
        console.log(newData);
        return newData;
      } catch(error) {
      console.log("error", error);
      }
  }

  button.addEventListener ('click',   
  getWeather(url, zip.value, keyApi)
  .then(temp => {
    return {date: newDate, temp, content: feelings.value}
  })
  .then(data => {
    saveData('/api/projectdata', data)
    return data
  })
  .then(({temp, date, content}) => updateUI(temp, date, content))
  .catch(e => {
    // There can be proper error handling with UI
    console.error(e)
  })
})
