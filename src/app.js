const path = require('path');
const express = require('express');
const hbs = require('hbs');
const mapper = require('./utils/geocode');
const forecast = require('./utils/forecast');


const app = express();
const port = process.env.PORT || 4000;


const publicDirectory = path.join(__dirname, '../public');
const viewsDirectory = path.join(__dirname, '../templates/views');
const partialsDirectory = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsDirectory)
app.use(express.static(publicDirectory));
hbs.registerPartials(partialsDirectory);

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather',
        name: 'zack'
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'zack'
    });
})
app.get('/help', (req, res) => {
    res.render('help', {
        help: 'how can we help you?',
        title: 'Help',
        name: 'zack'
    });
})
app.get('/help/*', (req, res) => {
    res.render('404', {
        msg: 'help article',
        title: '404',
        name: 'aduoli'
    });
})
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'you must provide an address!'
        })
    }
    const unpack = (error, {latitude, longitude, location} = { latitude: 'unavailable', longitude: 'unavailable', location: 'unavailable'}) => {
        if(error) {
            return res.send({
                error
            });
        };
        
        forecast(latitude, longitude, (error, data) => {
            if(error) {
                res.send({
                    error
                });
            } else {
                res.send({
                    location,
                    data
                });
            }
        });
    }
    mapper.geocode(req.query.address, unpack);
});
app.get('*', (req, res) => {
    res.render('404', {msg: 'page', name: 'aduoli', title: '404'});
});


app.listen(port, () => {
    console.log('server is up and running! 0n port ' + port);
})