var express = require('express'),
    app = express();

app.listen(8000);
console.log('Listening on port 8000');

app.use(express.static(__dirname));