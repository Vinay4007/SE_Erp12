import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import Style from "./../modules/LetterOfCredit.module.css";
import FStyle from "./../modules/FormsModule.module.css";
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";
import "jspdf-autotable";
import { saveAs } from "file-saver";

const FILE_NAME = "loc";
const PORT = 4000;
const routerRouteDB = "data/loc";
const routerRoutePDF = "util/pdf/loc";

export function LetterOfCredit() {
	const formik = useFormik({
		initialValues: {
			recipient: "Devansh",
			bank: "SBI",
			address: "Tirupati",
			amount: "$5000",
			date: "10-10-2022",
			subject: "Import requests for the Project Accounts",
			attention: "Department of Academic Affairs",
			valid: "10-12-2022",
			addressB: "Settipalli, Tirupati",
		},
	});

	var uniqueId = 0;

	const saveStateinDB = (event) => {
		axios
			.post(
				`http://localhost:${PORT}/${routerRouteDB}/${uniqueId}`,
				formik.values
			)
			.then((value) => {
				console.log(`Posted ${value}`);
				uniqueId++;
			})
			.catch((err) => {
				console.log(`Error : ${err}`);
			});
	};

	const createAndDownloadPdf = (event) => {
		axios
			.post(`http://localhost:${PORT}/${routerRoutePDF}`, formik.values)
			.then(() => {
				axios
					.get(`http://localhost:${PORT}/${routerRoutePDF}`, {
						responseType: "blob",
					})
					.then((res) => {
						const pdfblob = new Blob([res.data], { type: "application/pdf" });
						saveAs(pdfblob, `${FILE_NAME}.pdf`);
					});
			});
	};

	return (
		<div className={Style.forSection}>
			<section>
				<div className={Style.register}>
					<div className={Style.forHead}>
						<h1>Letter Of Credit</h1>
						<span>Add details and create a LOC</span>
					</div>
					<div className={Style.col1}>
						{/* <h2>Letter Of Credit</h2> */}
						<form>
							<div>
								<label htmlFor="Reciepient">Recipient Name</label>
								<input
									type="text"
									required
									placeholder="Enter Recipient name"
									name="recipient"
									value={formik.values.recipient}
									onChange={formik.handleChange}
									className={FStyle.sinput}
								/>
							</div>
						</form>
						<form>
							<div>
								<label htmlFor="Attention">Attention</label>
								<input
									type="text"
									required
									placeholder="Enter the attention to be added in the letter"
									name="attention"
									value={formik.values.attention}
									onChange={formik.handleChange}
									className={FStyle.sinput}
								/>
							</div>
						</form>
						<form>
							<div>
								<label htmlFor="AddressB">Bank's Address</label>
								<input
									type="text"
									required
									placeholder="Enter the address of the bank"
									name="addressB"
									value={formik.values.addressB}
									onChange={formik.handleChange}
									className={FStyle.sinput}
								/>
							</div>
						</form>
						<form>
							<div>
								<label htmlFor="Subject">Subject</label>
								<input
									type="text"
									required
									placeholder="Enter the subject"
									name="subject"
									value={formik.values.subject}
									onChange={formik.handleChange}
									className={FStyle.sinput}
								/>
							</div>
						</form>
						{/* <h2>Letter Of Credit</h2> */}
						{/* <span>Add details and create a LOC</span> */}
						<form>
							<div>
								<label htmlFor="bankName">Bank Name</label>
								<input
									type="text"
									required
									placeholder="Enter Bank name"
									name="bank"
									value={formik.values.bank}
									onChange={formik.handleChange}
									className={FStyle.sinput}
								/>
							</div>
						</form>
						<form>
							<div>
								<label htmlFor="enterAddress">Sender's Address</label>
								<input
									type="text"
									required
									placeholder="Enter Address"
									name="address"
									value={formik.values.address}
									onChange={formik.handleChange}
									className={FStyle.sinput}
								/>
							</div>
						</form>
						<form>
							<div>
								<label htmlFor="Amount">Amount</label>
								<input
									type="text"
									required
									placeholder="Enter Amount"
									name="amount"
									value={formik.values.amount}
									onChange={formik.handleChange}
									className={FStyle.sinput}/>
							</div>
						</form>
						{/* <span>Add details and create a LOC</span> */}
						<form>
							<div>
								<label htmlFor="Date">Date</label>
								<input
									type="text"
									required
									placeholder="Enter Date"
									name="date"
									value={formik.values.date}
									onChange={formik.handleChange}
									className={FStyle.sinput}
								/>
							</div>
						</form>
						<form>
							<div>
								<label htmlFor="validity">Validity Date</label>
								<input
									type="text"
									required
									placeholder="Enter Valid till date"
									name="valid"
									value={formik.values.valid}
									onChange={formik.handleChange}
									className={FStyle.sinput}
								/>
							</div>
						</form>
					</div>
					<div className="col-2">
						{/* <h2>Letter Of Credit</h2> */}
						{/* <span>Add details and create a LOC</span> */}
						<br></br>
					</div>
				</div>
				<div
					style={{
						color: "blue",
					}}
					className="btn"
				>
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
							<Button
								className={Style.genBut}
								variant="secondary"
								onClick={saveStateinDB}
							>
								Save
							</Button>
						</OverlayTrigger>
					</ButtonGroup>
				</div>
			</section>
		</div>
	);
}
