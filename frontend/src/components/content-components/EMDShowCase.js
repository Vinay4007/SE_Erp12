import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Style from "./../modules/LetterOfCredit.module.css";
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";
import "jspdf-autotable";
import { saveAs } from "file-saver";

const FILE_NAME = "EMD.pdf";
const PORT = 4000;

export function EMDShowCase() {
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

	const createAndDownloadPdf = (event) => {
		axios
			.post(`http://localhost:${PORT}/emdStorage/create`, formik.values)
			.then(() => {
				axios
					.get(`http://localhost:${PORT}/emdStorage/get`, { responseType: "blob" })
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
								/>
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
						{/* <OverlayTrigger
							key="top"
							placement="top"
							overlay={<Tooltip>Save in database</Tooltip>}
						>
							<Button className={Style.genBut}>Save</Button>
						</OverlayTrigger> */}
					</ButtonGroup>
				</div>
			</section>
		</div>
	);
}
