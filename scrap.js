/*PORT = 8080;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const fs = require('fs');

const app = express();

axios('https://www.zillow.com/homedetails/74-Hill-St-Ansonia-CT-06401/57882408_zpid/')
.then(res => {
    const html = res.data;
    const $ = cheerio.load(html);
    const list = []
    $(`.Text-c11n-8-65-2__sc-aiai24-0`, html).each(function() {
        const title = $(this).text();
        console.log(title)
        list.push(title)
        fs.writeFile('html.txt', title, function(err){
            console.log(err)
            
        })
    })
    console.log(list)
    
}).catch(err => console.log(err))



app.listen(PORT, () => console.log(`Listing at port ${PORT}`));
*/
