
const axios = require('axios');
const countries = require("./countries.json");
require('dotenv').config();

async function getNews(country) {
  try {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}`
    const response = await axios.get(url);
    return {
      country: country,
      articles: response.data.articles
    }
  } catch(err) {
    console.error(err);
  }
};

module.exports = async function() {

  const newsPromises = countries.map(getNews);

  return Promise.all(newsPromises).then( newsObjects => {
    console.log({newsObjects});
    return [].concat.apply([], newsObjects);
  })
};