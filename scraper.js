const fetch = require("fetch")
let query = `INSERT_QUERY_HERE`

let lowerCaseQ = query.toLowerCase()

let finalQ = lowerCaseQ.split(' ').join('+')

let toScrap = `https://edx.org/search?q=algebra`

// Array for HTML data 
var links = []
fetch.fetchUrl(toScrap, function(error, meta, body){ 
    console.log(body.toString())
    
})
