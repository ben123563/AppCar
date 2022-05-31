"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookedController = require('../controller/bookedController');
var express = require('express');
var router = express.Router();
router.route('/newBook').get(bookedController.newBook);
exports.default = router;
