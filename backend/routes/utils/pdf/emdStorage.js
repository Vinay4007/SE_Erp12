// Emd Storage router

// Applications :
// (i) to create Emd pdf

// Requirements
const express = require("express");
const cors = require("cors");
const path = require('path');
const bodyparser = require("body-parser");
const htmlpdf = require("html-pdf");

// EmdStorage Router
const emdStorageRouter = express.Router();

// Templates
const pdfTemplate = require("../../../views/template/emdStorage");

// Per file Variables
// Not thread safe - Need to mutex guard in further release
var file_count = 1;
const gen_file_name = "emd_storage";

// Middleware
emdStorageRouter.use(cors());
emdStorageRouter.use(bodyparser.urlencoded({ extended: true }));
emdStorageRouter.use(bodyparser.json());

// POST - to make server to genarate pdf
// GET - after making post request - again we need to ask the server to give the pdf generated by it

// Creates pdf
// notifies frontend that he created the pdf
emdStorageRouter.post("/", (req, res) => {
	htmlpdf
		.create(pdfTemplate(req.body), {})
		.toFile(`${gen_file_name}_${file_count}.pdf`, (err) => {
			if (err) {
				Promise.reject();
			}
			res.send(Promise.resolve());
		});
});

// He gives the pdf which is created by the createpdf
emdStorageRouter.get("/", (_req, res) => {
	const curr_path = path.normalize(`${__dirname}\\..\\..\\`);
	res.sendFile(`${curr_path}/${gen_file_name}_${file_count}.pdf`);
	file_count++;
});

module.exports = emdStorageRouter;