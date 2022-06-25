const PORT = 8000;

const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

//initialize express
const app = express();
const URL = "https://www.theguardian.com/international"
axios(URL)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        $('.fc-item__content ', html).each(function () {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title, url
            })
        })
        console.log(articles)

    }).catch(err =>console.log(err))

app.listen(PORT, () => console.log("server running on port ${PORT}"))