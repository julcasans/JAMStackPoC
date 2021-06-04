
const axios = require('axios');
require('dotenv').config();

exports.handler = async function(event, context, callback) {

  const { lat, long } = event.queryStringParameters;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}}&units=metric`;

  const response = await axios.get(url);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response.data)
  });
};