const express = require ('express');
const path = require('path');
const port = 3000


const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/views/index.html")
})

app.use(function(req, res, next) {
    res.status(404).sendFile(__dirname + "/views/404.html")
});

app.listen(port, () => {
	console.log('App listening at port: 3000')
})

module.exports = app;