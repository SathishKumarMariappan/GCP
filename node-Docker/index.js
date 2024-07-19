const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('GCP Works');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('the app is running');
});