const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const Validator = require('validatorjs');
const { ServiceModel } = require('../models/service');

//GET /services

router.get('/', isAuthenticated, (req, res, next) => {
    ServiceModel.find({}, (error, services) => {
        if (error) {
            res.status(404).json({
                code: 400,
                message: error
            })
            next()
        }

        res.status(200).json({
            code: 200,
            services
        })
    })
});

//POST /services

router.post('/', isAuthenticated, (req, res, next) => {
    const { body } = req;
    const serviceRules = {
        slug: 'required|string',
        name: 'required|string'
    };

    const validation = new Validator(body, serviceRules);
    if (validation.fails()) {
        const { errors } = validation.errors;
        return res.status(400).json({
            code: 400,
            errors,
        });
    };
    const { slug, name } = body;
    const newService = new ServiceModel({
        slug,
        name,
    });

    ServiceModel.findOne({ slug: slug }).then(service => {
        if (!service) {
            newService.save();
            return res.status(201).json()
        }
        return res.status(400).json({
            code: 400,
            message: 'This service already exists.'
        })

    }).catch(err => {
        return res.status(400).json({
            code: 400,
            message: err.message,
        });
    })
});


module.exports = router;