let express = require('express');
let router = express.Router();

//Decides where the views are referenced

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
  }

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about/index', { title: 'About' });
  }

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects/index', { title: 'Projects' });
  }

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services/index', { title: 'Services' });
  }

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact/index', { title: 'Contact' });
  }