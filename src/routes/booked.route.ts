import { Request, Response } from "express";

const bookedController = require('../controller/bookedController');

const express = require('express');
const router = express.Router();

router.route('/newBook').get(bookedController.newBook)

export default router;
