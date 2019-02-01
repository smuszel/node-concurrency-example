const app = require('express')();
const cors = require('cors');
app.use(cors());
let x = 0;

app.post('/', (req, res) => {
    x++
    setTimeout(() => {
        x++
        res.json({ text: 'action saved' });
    }, 5000);
})

app.get('/', (req, res) => {
    res.json({ val: x });
})

app.listen(80, '0.0.0.0');