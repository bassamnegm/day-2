const http = require("http");// 
// express M E RN

let users = [{ name: "ali", age: 22 }, { name: "negm", age: 22 },
{ name: "ahmed", age: 22 },
{ name: "mohamed", age: 22 }
]
const fs = require("fs");
const server = http.createServer((req, res) => {
    // req : data req 
    // data
    // send res 
    console.log(req.url.split('/'));
    if (req.url == '/') {
        let html = fs.readFileSync("index.html");
        console.log(html.toString());
        res.write(html.toString())
    }
    else if (req.url == "/style.css") {
        let css = fs.readFileSync("style.css");
        res.write(css.toString())
    }
    else if (req.url == "/test.PNG") {
        let png = fs.readFileSync("test.PNG");
        res.write(png.toString())
    }
    else if (req.url == '/users') {
        res.write(JSON.stringify(users));
    }

    else if (req.url.split('/')[1] == "user") {
        let index = req.url.split('/')[2]
        if (index >= users.length) {
            res.write("Not found")
        }
        else
            res.write(JSON.stringify(users[index]))

    }
    // switch (req.url) {
    //     case '/users':
    //         res.write(JSON.stringify(users));
    //         break;
    //     case '/user':
    //         res.write(JSON.stringify(users[0]));
    //         break;
    //     case '/user/2':
    //         res.write(JSON.stringify(users[1]));
    //         break;
    //     default:
    //         res.write("Not found");

    // }
    // console.log("hi from server");
    // res.write("<h1> hi in ITI</h1>");
    res.end();

})


server.listen(5050, function () {
    console.log("server is listen now");
})