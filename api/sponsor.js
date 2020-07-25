const Sponsor = require('../models/Sponsor');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.sponsor = (req, res, next) => {
    
        console.log("Inside Backend API")
        const { email, cardNumber, cvc, expiry, name, address1, city, postalCode, state } = req.body;
        // Validations 
        if ( !email || !cardNumber || !cvc || !expiry || !name || !address1 || !city || !postalCode || !state) {
            return res.status(400).json({ msg: 'Please enter all the fields' });
        }
        User.findOne({ email })
            .then(user => {
                if (!user) return res.status(400).json({ msg: 'No such email exists' })
                console.log("Inside here")
            })

        const sponsor = new Sponsor({
            email, cardNumber, cvc, expiry, name, address1, city, postalCode, state
        })
        sponsor.save()
                    .then(story => {
                        res.status(200).json({
                            success: true,
                            msg: 'Payment Success'
                        })
                    }).catch((error) => {
                        console.log("Error is ", error)
                    })
    } 
    
