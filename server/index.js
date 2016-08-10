var express = require('express');
var bodyParser = require('body-parser');
var app = express();

function isInt(x) {
    return typeof x === 'number' && (x - Math.floor(x)) === 0;
}

function isPrime(x) {
    if (!isInt(x)) {
        return null;
    }
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrime(x) {
    while (!isPrime(x)) {
        x++;
    }
    return x;
}

app.use(express.static('./public'));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    var x = Number(req.body.num);
    console.time('calc');
    res.send(getPrime(x) + '');
    console.timeEnd('calc');
});

app.get('/', (req, res) => {
    res.render('index');
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Listening " + port);
});

if (module.parent) {
    module.exports = {
        isPrime: isPrime
    };
}