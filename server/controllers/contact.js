let express = require('express');
let router = express.Router();

// create a reference to the db schema
let contactModel = require('../models/contact');

module.exports.displayContactList = (req, res, next) =>{
    contactModel.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else {
           // console.log(contactList);

            res.render('contacts/index', {
                title: 'Contact List',
                contactList: contactList
            });
            
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contacts/add', {
        title: 'Add New Contact'
    });
}

module.exports.processAddPage = (req, res, next) => {

    let newContact = contactModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "phone": req.body.phone,
        "email": req.body.email,
        "message": req.body.message
    });

    contactModel.create(newContact, (err, contactModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    contactModel.findById(id, (err, contactObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('contacts/edit', {
                title: 'Edit Contact',
                contact: contactObject
            });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = contactModel({
        "_id": id,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "phone": req.body.phone,
        "email": req.body.email,
        "message": req.body.message
    });

    contactModel.update({_id: id}, updatedContact, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
}

