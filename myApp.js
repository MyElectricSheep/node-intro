///////////////////////////////
// READING DATA FROM THE OS //
/////////////////////////////

// const os = require('os')

// console.log({
//     info: "Ben's computer",
//     totalmem: os.totalmem(),
//     freemem: os.freemem(),
//     platform: os.platform(),
//     cpu: os.cpus()
// })

////////////////////////////////////////
// READING THE CONTENT OF A DIRECTORY //
///////////////////////////////////////

// const fs = require('fs');

// fs.readdir("/", (err, files) => {
//     if (err) return console.log('Oh no!')
//     console.log(files)
// })

///////////////////////////////////
// READING THE CONTENT OF A FILE //
//////////////////////////////////

// fs.readFile("./turtles.txt", 'utf8', (error, file) => {
//     // console.log(error)
//     if (error) {
//         console.log('Oh no, the file is not found!')
//     } else {
//         console.log(file)
//     }
// })

//////////////////////////////
// BASIC NODE JS WEB SERVER //
/////////////////////////////

const http = require('http')
const fs = require('fs')

const requestListener = (req, res) => {
    // res.writeHead(200)
    // res.end("Hello Turtles")
    fs.readFile('./index.html', null, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write('File not found! ahah')
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
        }
        res.end()
    })
}

const server = http.createServer(requestListener)

const port = 8080

server.listen(port, () => {
    console.log(`🚀 Server started and listening on port ${port}`)
})

///////////////////////////////
// IMPORT INSTEAD OF REQUIRE //
//////////////////////////////

// const os = require('os')
// import { totalmem, freemem, platform, cpus } from "os"

// console.log({
//     info: "Ben's computer",
//     totalmem: totalmem(),
//     freemem: freemem(),
//     platform: platform(),
//     cpu: cpus()
// })