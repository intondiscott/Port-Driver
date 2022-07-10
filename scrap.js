/*PORT = 8080;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const fs = require('fs');

const app = express();

axios('https://www.panynj.gov/bridges-tunnels/en/george-washington-bridge.html')
.then(res => {
    const html = res.data;
    const $ = cheerio.load(html);
    const list = []
    $(`<span class="text-3xl font-bold mr-2">8</span>`, html).each(function() {
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
