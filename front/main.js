const app = require('express')();
const path = require('path')
const index = path.join(__dirname, 'index.html');

app.get('/', (req, res) => {
    res.sendFile(index);
})

app.listen(80, '0.0.0.0');
