// Letter of credit Router 

// GET 
// @params 
// 
// <year:int> (start year)
//
// POST
// @params 
// 
// ! Cannot write huge number of parameter's here
// ! It affects readability
// 
// DELETE
// @params 
// 
// !xx
// 
// PATCH
// @params 
//
// !xx
// 
// @id 
// <year:int>

// Roles : 
// (i) create pdf
// (ii) send pdf
// (iii) delete pdf

// STATUS CODES
// 200 - Success Operation
// 201 - Success Creation
// 404 - Not found
// 500 - Server Error
// 403 - Forbidden Request

// Requirements
const express = require("express");
const cors = require("cors");
const path = require('path');
const bodyparser = require("body-parser");
const htmlpdf = require("html-pdf");
const util = require("./../../../controller/utils");

// BalanceSheet Router
const balanceSheetRouter = express.Router();

// Template
const pdfTemplate = require("../../../views/template/balanceSheet");

// Stores pdf with <year> as unique identifier

const gen_file_name = "balance_sheet";
const FILE_NAME = "balanceSheet.js";
const ROUTER_NAME = "balanceSheetRouter";

// Middleware
balanceSheetRouter.use(cors());
balanceSheetRouter.use(bodyparser.urlencoded({ extended: true }));
balanceSheetRouter.use(bodyparser.json());

// POST - to make server to genarate pdf
// GET - after making post request - again we need to ask the server to give the pdf generated by it

// Creates pdf
// notifies frontend that it has created the pdf
// Content : req.body

// Client will not about pdf storing in webs server 
balanceSheetRouter.post("/:year", (req, res) => {
	const debugText = util.RDebugText(FILE_NAME, "POST", ROUTER_NAME);
    console.log(debugText);
	
	const year = parseInt(req.params.year,10);

	const data = {
		sc20: req.body.sc20,
		sc19: req.body.sc19,
		ta20: req.body.ta20,
		ta19: req.body.ta19,
		tsc20_lia201: req.body.tsc20_lia201,
		tsc19: req.body.tsc19,
		ia20: req.body.ia20,
		ia19: req.body.ia19,
		rf20: req.body.rf20,
		rf19: req.body.rf19,
		cwip19: req.body.cwip19,
		cwip20: req.body.cwip20,
		trf20_lia201: req.body.trf20_lia201,
		trf19: req.body.trf19,
		oa20: req.body.oa20,
		oa19: req.body.oa19,
		tsf19: req.body.tsf19,
		tsf20: req.body.tsf20,
		fa19: req.body.fa19,
		fa20: req.body.fa20,
		nci19: req.body.nci19,
		nci20: req.body.nci20,
		ltb19: req.body.ltb19,
		ltb20: req.body.ltb20,
		dta19: req.body.dta19,
		dta20: req.body.dta20,
		dtl19: req.body.dtl19,
		dtl20: req.body.dtl20,
		ltlaa19: req.body.ltlaa19,
		ltlaa20: req.body.ltlaa20,
		otll19: req.body.otll19,
		otll20: req.body.otll20,
		onca19: req.body.onca19,
		onca20: req.body.onca20,
		ltp19: req.body.ltp19,
		ltp20: req.body.ltp20,
		tnca19: req.body.tnca19,
		tnca20: req.body.tnca20,
		tncl19: req.body.tncl19,
		tncl20: req.body.tncl20,
		stb19: req.body.stb19,
		stb20: req.body.stb20,
		ci19: req.body.ci19,
		ci20: req.body.ci20,
		tp19: req.body.tp19,
		tp20: req.body.tp20,
		i19: req.body.i19,
		i20: req.body.i20,
		ocl19: req.body.ocl19,
		ocl20: req.body.ocl20,
		tr19: req.body.tr19,
		tr20: req.body.tr20,
		stp19: req.body.stp19,
		stp20: req.body.stp20,
		cace19: req.body.cace19,
		cace20: req.body.cace20,
		tcl19: req.body.tcl19,
		tcl20: req.body.tcl20,
		stlaa19: req.body.stlaa19,
		stlaa20: req.body.stlaa20,
		tcal19: req.body.tcal19,
		tcal20: req.body.tcal20,
		tca19: req.body.tca19,
		tca20: req.body.tca20,
		oca19: req.body.oca19,
		oca20: req.body.oca20,
		toa19: req.body.toa19,
		toa20: req.body.toa20,
		years: year,
		yeare: year+1
	};

	htmlpdf
		.create(pdfTemplate(data), {})
		.toFile(`${gen_file_name}_${year}.pdf`, (err) => {
			if (err) {
				console.log(util.ErrorStream(FILE_NAME,"CREATING",`${gen_file_name}-pdf not created`,err));
				res.send({err:err});
				Promise.reject();
			}
			console.log(util.DebugStream(FILE_NAME,"SUCCESS",`${gen_file_name}-pdf created`));
			res.send(Promise.resolve());
		});
});

balanceSheetRouter.get("/:year", (req, res) => {
	const debugText = util.RDebugText(FILE_NAME, "GET", ROUTER_NAME);
    console.log(debugText);

	const year = req.params.year;

	const curr_path = path.normalize(`${__dirname}\\..\\..\\..\\`);
	res.sendFile(`${curr_path}/${gen_file_name}_${year}.pdf`);
	console.log(util.DebugStream(FILE_NAME,"SUCCESS",`${gen_file_name}-pdf sent`));
});

module.exports = balanceSheetRouter;