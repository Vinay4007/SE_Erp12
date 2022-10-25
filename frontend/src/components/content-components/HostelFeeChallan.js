import React from "react";
import { Button, Form } from "react-bootstrap";
import Style from "./../modules/HostelFeeChallan.module.css"
import FStyle from "./../modules/FormsModule.module.css";
import axios from "axios";
import "jspdf-autotable";
import { ButtonGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useFormik } from "formik";
import { saveAs } from "file-saver";

const FILE_NAME = "challan";
const PORT = 4000;

export function HostelFeeChallan() {
  const formik = useFormik({
		initialValues: {
			namech:"",
      rollch:"",
      depch:"",
      amountch:"",
		},
	});


  const createAndDownloadPdf = (event) => {
		axios
			.post(`http://localhost:${PORT}/challan/create`, formik.values)
			.then(() => {
				axios
					.get(`http://localhost:${PORT}/challan/get`, { responseType: "blob" })
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
				<h1>FEE CHALLAN</h1>
			</div>
			<div className={Style.col1}>
				{/* <h2>Letter Of Credit</h2> */}
				<form>
							<div>
								<label htmlFor="Name">Name</label>
								<input
									type="text"
									required
									placeholder="Name of the student"
									name="namech"
									value={formik.values.namech}
									onChange={formik.handleChange}
									className={FStyle.sinput}
								/>
							</div>
						</form>

            <form>
							<div>
								<label htmlFor="Roll Number">Roll Number</label>
								<input
									type="text"
									required
									placeholder="Roll Number of the student"
									name="rollch"
									value={formik.values.rollch}
									onChange={formik.handleChange}
									className={FStyle.sinput}
								/>
							</div>
						</form>
            <form>
							<div>
								<label htmlFor="Department">Department</label>
								<input
									type="text"
									required
									placeholder="Department"
									name="depch"
									value={formik.values.depch}
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
									placeholder="Amount to be paid"
									name="amountch"
									value={formik.values.amountch}
									onChange={formik.handleChange}
									className={FStyle.sinput}
								/>
							</div>
						</form>
            <div
					style={{
						color: "blue",
					}}
					className="btn"
				>
					<ButtonGroup className="Button">
						<OverlayTrigger
							key="top"
							placement="top"
							overlay={<Tooltip>Generate .pdf</Tooltip>}
						>
							<Button
								className={"GenBtn"}
								variant="secondary"
								onClick={createAndDownloadPdf}
							>
								Generate
							</Button>
						</OverlayTrigger>
					</ButtonGroup>
				</div>
    </div>
	</div>
			</section>
		</div>
  );
}
