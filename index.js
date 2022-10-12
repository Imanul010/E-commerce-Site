const http = require('http');
const fs = require('fs');

const port = 5000;

function requestHandler(req, res) {
    console.log(req.url);

    res.writeHead(200, { 'content-type': 'text/html' });

    let filePath;
    switch (req.url) {
        case '/':
            filePath = './index.html'
            break;
        case '/product':
            filePath = './product.html'
            break;
        case '/login':
            filePath = './login.html'
            break;
        case '/setting':
            filePath = './setting.html'
            break;
        case '/signup':
            filePath = './signup.html'
            break;
        default:
            filePath = './404.html'
    }

    fs.readFile(filePath, function (err, data) {
        if (err) {
            console.log('error', err);
            return res.end('<h1>Error!</h1>');
        }
        return res.end(data);
    })

}

const server = http.createServer(requestHandler);


server.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Server is up and running on port:", port);
})
