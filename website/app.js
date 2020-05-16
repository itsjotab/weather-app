/* Global Variables */
const Url = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = ',us&appid=8e77ce8fdd43b74cdfa1a37d0567c630&units=metric'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Function called by event listener */
const button = document.getElementById('generate')
const areaCode = document.getElementById('zip');
const feelings = document.getElementById('feelings')

//event listner
button.addEventListener('click', () => {
weatherData(Url, areaCode, apiKey)
 .then(temp => {
    return {date: newDate, temp, content: feelings.value}
  })
  .then(data => {
    postData('/addData', data)
    return data
  })
  .then(({date, temp, content}) => updateUI(date, temp, content))
  .catch(error => {
    console.error(error)
  })
})

// function to GET web API data
 const weatherData = async ( Url, areaCode, apiKey ) => {
      const response = await fetch(`${Url}${areaCode.value}${apiKey}`);
      try {
        const newData = await  response.json();
        console.log(newData);
       const {
        main: {temp},
      } = newData
      return temp;
    } catch (error) {
      console.log ('error', error)
    }
  }

/* Function to POST data */
const postData = async ( Url = '', data = {}) =>{
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
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.content;

  }catch(error){
    console.log("error", error);
  }
}
