import { useFormik } from "formik";
import React, { useState } from "react";

import Style from "./../modules/IncomeSheetGen.module.css";

import axios from "axios";
import "jspdf-autotable";
import { saveAs } from "file-saver";
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from "react-bootstrap";

const FILE_NAME = "IncomeSheet"; // don't give .pdf file extension (for people who keeps on adding .pdf file extension even after frequent changing)
const PORT = 4000;

// const routerRouteDB = "data/loc";
const routerRoutePDF = "util/pdf/incomeSheet";

export function IncomeSheetGen() {
	const formik = useFormik({
		initialValues: {
			sc20: 0.0,
			sc19: 0.0,
			ta20: 0.0,
			ta19: 0.0,
			tsc20_lia201: 0.0,
			tsc19: 0.0,
			ia20: 0.0,
			ia19: 0.0,
			rf20: 0.0,
			rf19: 0.0,
			cwip19: 0.0,
			cwip20: 0.0,
			trf20_lia201: 0.0,
			trf19: 0.0,
			oa20: 0.0,
			oa19: 0.0,
			tsf19: 0.0,
			tsf20: 0.0,
			fa19: 0.0,
			fa20: 0.0,
			ppi20: 0.0,
			ppi19: 0.0,
			nci19: 0.0,
			nci20: 0.0,
			ltb19: 0.0,
			ltb20: 0.0,
			dta19: 0.0,
			dta20: 0.0,
			ltlaa19: 0.0,
			ltlaa20: 0.0,
		},
	});

	const year = 2021;

	const createAndDownloadPdf = (event) => {
		axios
			.post(`http://localhost:${PORT}/${routerRoutePDF}/${year}`, formik.values)
			.then(() => {
				axios
					.get(`http://localhost:${PORT}/${routerRoutePDF}/${year}`, {
						responseType: "blob",
					})
					.then((res) => {
						const pdfblob = new Blob([res.data], { type: "application/pdf" });
						saveAs(pdfblob, `${FILE_NAME}_${year}.pdf`);
					});
			});
	};

	return (
		<div>
			{
				<head>
					<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
					<link
						type="text/css"
						rel="stylesheet"
						href="../modules/IncomeSheetGen.module.css"
					/>
					<style type="text/css"></style>
				</head>
			}

			<body>
				<div className="ritz grid-container" dir="ltr">
					<table className={Style.ritz.waffle} cellspacing="2" cellpadding="5 ">
						<thead>
							<th className="s0" dir="ltr" colSpan="8">
								Income Sheet
							</th>
							<tr>
								<th className="row-header freezebar-origin-ltr"></th>
								<th
									id="126933298C0"
									className={Style.columnheadersbackground}
								></th>
								<th
									id="126933298C1"
									//style="width:100px;"
									className={Style.columnheadersbackground}
								></th>
								<th
									id="126933298C2"
									//style="width:100px;"
									className={Style.columnheadersbackground}
								></th>
								<th
									id="126933298C3"
									//style="width:36px;"
									className={Style.columnheadersbackground}
								></th>
								<th
									id="126933298C4"
									//style="width:253px;"
									className={Style.columnheadersbackground}
								></th>
								<th
									id="126933298C5"
									//style="width:100px;"
									className={Style.columnheadersbackground}
								></th>
								<th
									id="126933298C6"
									//style="width:100px;"
									className={Style.columnheadersbackground}
								></th>
							</tr>
						</thead>
						<tbody>
							<tr /*style="height: 20px"*/>
								<th
									id="126933298R0"
									////style="height: 20px;"
									className="row-headers-background"
								>
									<div
										className="row-header-wrapper" /*style="line-height: 20px"*/
									>
										1
									</div>
								</th>
								<td></td>
								<td className="s1" dir="ltr"></td>
								<td className="s1" dir="ltr"></td>
								<td className="s1" dir="ltr"></td>
								<td className="s1" dir="ltr"></td>
							</tr>
							<tr /*style="height: 20px"*/>
								<th
									id="126933298R1"
									//style="height: 20px;"
									className="row-headers-background"
								>
									<div
										className="row-header-wrapper" /*style="line-height: 20px"*/
									>
										2
									</div>
								</th>
							</tr>
							<tr /*style="height: 20px"*/>
								<th
									id="126933298R2"
									//style="height: 20px;"
									className="row-headers-background"
								>
									<div
										className="row-header-wrapper" /*style="line-height: 20px"*/
									>
										3
									</div>
								</th>
								<td className="s2" dir="ltr">
									Income
								</td>
								<td className="s3" dir="ltr">
									2022
								</td>
								<td className="s3" dir="ltr">
									2021
								</td>
								<td></td>
								<td className="s2" dir="ltr">
									Expenditure
								</td>
								<td className="s3" dir="ltr">
									2022
								</td>
								<td className="s3" dir="ltr">
									2021
								</td>
								<td></td>
								<td></td>
							</tr>
							<tr /*style="height: 20px"*/>
								<th
									id="126933298R3"
									//style="height: 20px;"
									className="row-headers-background"
								>
									<div
										className="row-header-wrapper" /*style="line-height: 20px"*/
									>
										4
									</div>
								</th>
								<td className="s4" dir="ltr"></td>
								<td className="s4"></td>
								<td className="s4"></td>
								<td></td>
								<td className="s4" dir="ltr"></td>
								<td className="s4"></td>
								<td className="s4"></td>
								<td></td>
								<td></td>
							</tr>
							<tr /*style="height: 20px"*/>
								<th
									id="126933298R4"
									//style="height: 20px;"
									className="row-headers-background"
								>
									<div
										className="row-header-wrapper" /*style="line-height: 20px"*/
									>
										5
									</div>
								</th>
								<td className="s1" dir="ltr">
									Academic Receipts
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="sc20"
										name="sc20"
										value={formik.values.sc20}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="sc19"
										name="sc19"
										value={formik.values.sc19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td className="s1" dir="ltr">
									Staff Payments and Benefits
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="ta20"
										name="ta20"
										value={formik.values.ta20}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="ta19"
										name="ta19"
										value={formik.values.ta19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td></td>
							</tr>
							<tr /*style="height: 20px"*/>
								<th
									id="126933298R5"
									//style="height: 20px;"
									className="row-headers-background"
								>
									<div
										className="row-header-wrapper" /*style="line-height: 20px"*/
									>
										6
									</div>
								</th>
								<td className="s1" dir="ltr">
									Grants/Subsidies
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="tsc20_lia201"
										name="tsc20_lia201"
										value={formik.values.tsc20_lia201}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="tsc19"
										name="tsc19"
										value={formik.values.tsc19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td className="s1" dir="ltr">
									Academic Expenses
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="ia20"
										name="ia20"
										value={formik.values.ia20}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="ia19"
										name="ia19"
										value={formik.values.ia19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td></td>
							</tr>
							<tr /*style="height: 20px"*/>
								<th
									id="126933298R6"
									//style="height: 20px;"
									className="row-headers-background"
								>
									<div
										className="row-header-wrapper" /*style="line-height: 20px"*/
									>
										7
									</div>
								</th>
								<td className="s1" dir="ltr">
									Income from Investments
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="rf20"
										name="rf20"
										value={formik.values.rf20}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="rf19"
										name="rf19"
										value={formik.values.rf19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td className="s1" dir="ltr">
									Administration and General Expenses
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="cwip20"
										name="cwip20"
										value={formik.values.cwip20}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="cwip19"
										name="cwip19"
										value={formik.values.cwip19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td className="s1" dir="ltr"></td>
							</tr>
							<tr /*style="height: 20px"*/>
								<th
									id="126933298R7"
									//style="height: 20px;"
									className="row-headers-background"
								>
									<div
										className="row-header-wrapper" /*style="line-height: 20px"*/
									>
										8
									</div>
								</th>
								<td className="s1" dir="ltr">
									Interest Earned/Accrued
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="trf20_lia201"
										name="trf20_lia201"
										value={formik.values.trf20_lia201}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="trf19"
										name="trf19"
										value={formik.values.trf19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td className="s1" dir="ltr">
									Transportation Expenses
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="oa20"
										name="oa20"
										value={formik.values.oa20}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="oa19"
										name="oa19"
										value={formik.values.oa19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td className="s1" dir="ltr"></td>
							</tr>
							<tr /*style="height: 20px"*/>
								<th
									id="126933298R8"
									//style="height: 20px;"
									className="row-headers-background"
								>
									<div
										className="row-header-wrapper" /*style="line-height: 20px"*/
									>
										9
									</div>
								</th>
								<td className="s1" dir="ltr">
									Other Income
								</td>
								<td className="s5 form-group" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="tsf20"
										id="tsf20"
										name="tsf20"
										value={formik.values.tsf20}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="tsf19"
										id="tsf19"
										name="tsf19"
										value={formik.values.tsf19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td className="s1" dir="ltr">
									Repairs and Maintainance
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="fa20"
										id="fa20"
										name="fa20"
										value={formik.values.fa20}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="fa19"
										id="fa19"
										name="fa19"
										value={formik.values.fa19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td className="s1" dir="ltr"></td>
							</tr>
							<tr /*style="height: 20px"*/>
								<th
									id="126933298R9"
									//style="height: 20px;"
									className="row-headers-background"
								>
									<div
										className="row-header-wrapper" /*style="line-height: 20px"*/
									>
										10
									</div>
								</th>
								<td className="s1" dir="ltr">
									Prior Period Income
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="ppi20"
										name="ppi20"
										value={formik.values.ppi20}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										className="ppi19"
										name="ppi19"
										value={formik.values.ppi19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td className="s1" dir="ltr">
									Finance Costs
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="nci20"
										name="nci20"
										value={formik.values.nci20}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										className="nci19"
										name="nci19"
										value={formik.values.nci19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td></td>
							</tr>
							<tr /*style="height: 20px"*/>
								<th
									id="126933298R10"
									//style="height: 20px;"
									className="row-headers-background"
								>
									<div
										className="row-header-wrapper" /*style="line-height: 20px"*/
									>
										11
									</div>
								</th>
								<td className="s1" dir="ltr">
									Total(A)
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="ltb20"
										name="ltb20"
										value={formik.values.ltb20}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										step="0.01"
										className="ltb19"
										name="ltb19"
										value={formik.values.ltb19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td className="s1" dir="ltr">
									Depreciation
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										className="dta20"
										name="dta20"
										value={formik.values.dta20}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										className="dta19"
										name="dta19"
										value={formik.values.dta19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td></td>
							</tr>
							<tr /*style="height: 20px"*/>
								<th
									id="126933298R11"
									//style="height: 20px;"
									className="row-headers-background"
								>
									<div
										className="row-header-wrapper" /*style="line-height: 20px"*/
									>
										12
									</div>
								</th>
								<td className="s1" dir="ltr"></td>
								<td></td>
								<td></td>
								<td></td>
								<td className="s1" dir="ltr">
									Total(B)
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										className="ltlaa20"
										name="ltlaa20"
										value={formik.values.ltlaa20}
										onChange={formik.handleChange}
									/>
								</td>
								<td className="s5" dir="ltr">
									<input
										type="number"
										className="ltlaa19"
										name="ltlaa19"
										value={formik.values.ltlaa19}
										onChange={formik.handleChange}
									/>
								</td>
								<td></td>
								<td></td>
							</tr>
							<ButtonGroup className={Style.actBtngrp}>
								<OverlayTrigger
									key="top"
									placement="top"
									overlay={<Tooltip>Generate .pdf</Tooltip>}
								>
									<Button
										className={Style.genBut}
										variant="secondary"
										onClick={createAndDownloadPdf}
									>
										Generate
									</Button>
								</OverlayTrigger>
								<OverlayTrigger
									key="top"
									placement="top"
									overlay={<Tooltip>Save in database</Tooltip>}
								>
									<Button className={Style.genBut} variant="secondary">
										Save
									</Button>
								</OverlayTrigger>
							</ButtonGroup>
						</tbody>
					</table>
				</div>
			</body>

			<>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
				<script type="text/javascript" src="script.js"></script>
			</>
		</div>
	);
}
