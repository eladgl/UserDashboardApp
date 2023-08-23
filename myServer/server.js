//server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

//create server for REST api interface
const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const filePath = path.join(__dirname, 'mySchemaData.json');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.method === 'GET' && req.url === '/mySchemaData') {
        // Read the JSON file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    }
    else if (req.method === 'POST' && req.url === '/saveState') {
        let body = '';
        
        // Collect the data from the request body
        req.on('data', chunk => {
          body += chunk.toString();
        });
    
        // Process the collected data after the request is complete
        req.on('end', () => {
          try {
            const updatedState = JSON.parse(body);
            //read existing data from file
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                } else {
                    //save file's existing dat
                    const existingData = JSON.parse(data);
                    //save the updated mySchems.users.user from the parsed state
                    existingData.users.user = updatedState.users;
                    //convert everything to json format to be parsed again into the file
                    //in order to save the state
                    const updatedData = JSON.stringify(existingData, null, 2);
                    fs.writeFile(filePath, updatedData, 'utf8', err => {
                        if (err) {
                            res.writeHead(500, { 'Content-Type': 'text/plain' });
                            res.end('Internal Server Error');
                        } else {
                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify({ message: 'State saved successfully' }));
                        }
                    });
                }
            });
        } catch (error) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Invalid JSON data');
        }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

//set port on 3001
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
