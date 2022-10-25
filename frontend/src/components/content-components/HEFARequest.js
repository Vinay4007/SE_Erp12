/*HEFA*/
import React, { createContext, useState } from "react";
import Style from "./../modules/HEFARequest.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import "./../modules/MuiCustoms.css"
import {motion} from "framer-motion/dist/framer-motion"

import {StyledMenu} from "./../utils/styles/MenuStyle"

import {
	Accordion,
	Button,
	Col,
	Container,
	FloatingLabel,
	InputGroup,
	Modal,
	OverlayTrigger,
	Popover,
	Stack,
	Tooltip,
	Row,
	Form,
} from "react-bootstrap";
import * as Yup from "yup";
import { Formik } from "formik";
import { Backdrop, CircularProgress, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Snackbar } from "@mui/material";
import { sleep } from "../utils/UtilFuncs";
import { ClearAllRounded, CopyAllRounded, EmailRounded, HelpRounded, PrintRounded, PrintSharp } from "@mui/icons-material";
import { HEFAModel } from "./HEFAModel";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { LoadingPage } from "./LoadingPage";


const HEFARequest = () => {
	const HEFA_ID_Max = 100000;
	const PASS_MIN = 8;
	const PASS_MAX = 20;
	const AMOUNT_MAX = 20000000;
	const AMOUNT_MIN = 50000;
	var myformik;

	const [show, setShow] = useState(false);
	const [bkdopen, bkdsetOpen] = useState(false);
	const [showCtxMenu, setShowctxMenu] = useState(null);
	const [snkbropen, snkbrsetOpen] = useState(null);

	const ctxHandleMenu = (event) => {
		event.preventDefault();
		setShowctxMenu((curr) => curr === null ? { mouseXpos: event.clientX + 5, mouseYpos: event.clientY } : null)
	}
	const ctxHandleClose = (event) => {
		setShowctxMenu(null)
	}

	const bkdhandleClose = () => {
		bkdsetOpen(false);
	};
	const bkdhandleToggle = () => {
		bkdsetOpen(!bkdopen);
	};

	// --------------TODO - implement auth checking without sleep
	const authId = (event) => {
		bkdhandleToggle();
		sleep(4000).then((value) => {
			bkdhandleClose();
		});
	}


	const validationSchema = Yup.object({
		email: Yup.string()
			.required("Email required")
			.email("invalid email address format")
			.ensure()
			.typeError("Only enter valid character"),
		hefaid: Yup.number()
			.required("HEFA Id required")
			.positive("HEFA Id must be positive")
			.max(HEFA_ID_Max, `HEFA Id can't be more than ${HEFA_ID_Max}`)
			.integer("HEFA Id must be a integer")
			.typeError("Only Numeric Values are allowed"),
		password: Yup.string()
			.required("Password required")
			.min(PASS_MIN, `Password must be ${PASS_MIN} character's long`)
			.max(PASS_MAX, `Password must be less ${PASS_MAX} character's long`),
		amount: Yup.number()
			.required("Amount is required")
			.typeError("Amount must be number")
			.max(AMOUNT_MAX, `Amount exceeds ${AMOUNT_MAX} .`)
			.min(
				AMOUNT_MIN,
				`Minimum amount not supported . Amount is lesser than ${AMOUNT_MIN} `
			),
	});

	const initialValues = {
		email: "nishantharun64@gmail.com",
		hefaid: 3456,
		password: "nishanth",
		amount: 0,
	};

	const onSubmit = (values) => {
		console.log(values);
	};


	return (
		<div className={Style.container} onContextMenu={ctxHandleMenu}>
			<br />
			<Container>
				<Row>
					<Col lg="7">
						<Formik
							initialValues={initialValues}
							onSubmit={onSubmit}
							validationSchema={validationSchema}
						>
							{(formik) => {
								const { errors, handleChange, values, touched, handleBlur } =
									formik;
								myformik = formik; // to use formik outside the component scope
								return (
									<Form>
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Container fluid>
												{/* <Row className='justify-content-md-start'> */}
												<Row>
														<motion.h3 animate={{fontSize : 20 , color : "red"}}>Email</motion.h3>
												</Row>
												<Row>
													<InputGroup>
														<Col>
															<div
																style={{
																	"margin-top": "12px",
																	"margin-right": "10px",
																}}
															>
																<OverlayTrigger
																	placement="top"
																	trigger="focus"
																	overlay={
																		<Tooltip>Email linked with HEFA ID</Tooltip>
																	}
																>
																	<Form.Control
																		type="email"
																		placeholder="enter email here"
																		name="email"
																		onChange={handleChange}
																		value={values.email}
																		onBlur={handleBlur}
																		isValid={!errors.email && touched.email}
																		isInvalid={errors.email && touched.email}
																	/>
																	{/* To DO Create Validation */}
																</OverlayTrigger>
																<Form.Control.Feedback type="valid">
																	Valid Email
																</Form.Control.Feedback>
																<Form.Control.Feedback type="invalid">
																	{formik.errors.email}
																</Form.Control.Feedback>
															</div>
														</Col>
														<Col xs lg="2">
															<div
																style={{ "padding-top": "5px", width: "90px" }}
															>
																<OverlayTrigger
																	trigger="click"
																	placement="right"
																	overlay={
																		<Popover>
																			<Popover.Header>
																				HEFA Email More help
																			</Popover.Header>
																			<Popover.Body>
																				This email is required to validate that
																				the authenticated user is applying for
																				HEFA request
																			</Popover.Body>
																		</Popover>
																	}
																>
																	<Button>More</Button>
																</OverlayTrigger>
															</div>
														</Col>
													</InputGroup>
												</Row>
												{/* </Row> */}
											</Container>
										</Form.Group>

										<Form.Group className="mb-3" controlId="formid">
											<Container fluid>
												{/* <Row className='justify-content-md-start'> */}
												<Row>
													<Form.Label>
														<h3>HEFA Id</h3>
													</Form.Label>
												</Row>
												<Row>
													<InputGroup>
														<Col>
															<div
																style={{
																	"padding-top": "0px",
																	"margin-right": "10px",
																}}
															>
																<OverlayTrigger
																	placement="top"
																	trigger="focus"
																	overlay={<Tooltip>HEFA Account Id</Tooltip>}
																>
																	<Form.Control
																		type="text"
																		placeholder="enter id here"
																		name="hefaid"
																		onChange={handleChange}
																		value={values.hefaid}
																		onBlur={handleBlur}
																		isValid={!errors.hefaid && touched.hefaid}
																		isInvalid={errors.hefaid && touched.hefaid}
																	/>
																</OverlayTrigger>
																<Form.Control.Feedback type="valid">
																	Valid HEFA Id
																</Form.Control.Feedback>
																<Form.Control.Feedback type="invalid">
																	{formik.errors.hefaid}
																</Form.Control.Feedback>
															</div>
														</Col>
														<Col xs lg="2">
															<div
																style={{ "padding-top": "5px", width: "90px" }}
															>
																<OverlayTrigger
																	trigger="click"
																	placement="right"
																	overlay={
																		<Popover>
																			<Popover.Header>
																				HEFA Account ID More Help
																			</Popover.Header>
																			<Popover.Body>
																				This email is required to validate that
																				the authenticated user is applying for
																				HEFA request
																			</Popover.Body>
																		</Popover>
																	}
																>
																	<Button>More</Button>
																</OverlayTrigger>
															</div>
														</Col>
													</InputGroup>
												</Row>
											</Container>
										</Form.Group>

										<Form.Group className="mb-3" controlId="formpassl">
											<Container fluid>
												{/* <Row className='justify-content-md-start'> */}
												<Row>
													<Form.Label>
														<h3>Password</h3>
													</Form.Label>
												</Row>
												<Row>
													<InputGroup>
														<Col>
															<div
																style={{
																	"padding-top": "0px",
																	"margin-right": "10px",
																}}
															>
																<OverlayTrigger
																	placement="top"
																	trigger="focus"
																	overlay={
																		<Tooltip>HEFA Account Id Password</Tooltip>
																	}
																>
																	<Form.Control
																		type="password"
																		placeholder="enter password here"
																		name="password"
																		onChange={handleChange}
																		value={values.password}
																		onBlur={handleBlur}
																		isValid={
																			!errors.password && touched.password
																		}
																		isInvalid={
																			errors.password && touched.password
																		}
																	/>
																</OverlayTrigger>
																<Form.Control.Feedback type="valid">
																	Valid Password
																</Form.Control.Feedback>
																<Form.Control.Feedback type="invalid">
																	{formik.errors.password}
																</Form.Control.Feedback>
															</div>
														</Col>
														<Col xs lg="2">
															<div
																style={{ "padding-top": "5px", width: "90px" }}
															>
																<OverlayTrigger
																	trigger="click"
																	placement="right"
																	overlay={
																		<Popover>
																			<Popover.Header>
																				HEFA Password More help
																			</Popover.Header>
																			<Popover.Body>
																				This email is required to validate that
																				the authenticated user is applying for
																				HEFA request
																			</Popover.Body>
																		</Popover>
																	}
																>
																	<Button>More</Button>
																</OverlayTrigger>
															</div>
														</Col>
													</InputGroup>
												</Row>
												{/* </Row> */}
											</Container>
										</Form.Group>

										<Form.Group>
											<Container fluid>
												{/* <Row className='justify-content-md-start'> */}
												<Row>
													<Form.Label>
														<h3>Amount</h3>
													</Form.Label>
												</Row>
												<Row>
													<InputGroup>
														<Col>
															<div
																style={{
																	"padding-top": "0px",
																	"margin-right": "10px",
																}}
															>
																<OverlayTrigger
																	placement="top"
																	trigger="focus"
																	overlay={
																		<Tooltip>Amount you request for</Tooltip>
																	}
																>
																	<Form.Control
																		type="text"
																		placeholder="enter amount here(in )"
																		name="amount"
																		onChange={handleChange}
																		value={values.amount}
																		onBlur={handleBlur}
																		isValid={!errors.amount && touched.amount}
																		isInvalid={errors.amount && touched.amount}
																	/>
																</OverlayTrigger>
																<Form.Control.Feedback type="valid">
																	Valid Amount
																</Form.Control.Feedback>
																<Form.Control.Feedback type="invalid">
																	{formik.errors.amount}
																</Form.Control.Feedback>
															</div>
														</Col>
														<Col xs lg="2">
															<div
																style={{ "padding-top": "5px", width: "90px" }}
															>
																<OverlayTrigger
																	trigger="click"
																	placement="right"
																	overlay={
																		<Popover>
																			<Popover.Header>
																				Amount More help
																			</Popover.Header>
																			<Popover.Body>
																				Amount field here denotes the amount of
																				money you require but don't expect it as
																				what you get . Minimum supported money
																				is <strong>{AMOUNT_MIN}</strong> and Max
																				supported is{" "}
																				<strong>{AMOUNT_MAX}</strong>.
																			</Popover.Body>
																		</Popover>
																	}
																>
																	<Button>More</Button>
																</OverlayTrigger>
															</div>
														</Col>
													</InputGroup>
												</Row>
											</Container>
										</Form.Group>

										<div style={{ margin: "20px 10px", width: "120px" }}>
											<Button
												variant="primary"
												type="button"
												onClick={
													authId
												}
											>
												Request
											</Button>
										</div>
									</Form>
								);
							}}
						</Formik>
					</Col>
					<Col sm="3">
						<div className={Style.widget}>
							<Stack>
								<FloatingLabel>
									<h3>FAQ</h3>
								</FloatingLabel>
								<Accordion flush>
									<Accordion.Item eventKey="0">
										<Accordion.Header>What is HEFA Request ?</Accordion.Header>
										<Accordion.Body>
											Higher Education Financing Agency (HEFA) is a joint
											venture company of Canara Bank and Ministry of Education
											GoI. HEFA provides financial assistance for creation of
											educational infrastructure and R&D in India's premier
											educational Institutions.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="1">
										<Accordion.Header>Who can apply for ?</Accordion.Header>
										<Accordion.Body>
											To provide timely finance at low interest rates for
											capital assets creation in india's higher education
											institutions and supplement it with grants by channelizing
											CSR funds from the corporate and donations from others.{" "}
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="2">
										<Accordion.Header>Range of loan provided</Accordion.Header>
										<Accordion.Body>
											Range is <strong>{AMOUNT_MIN} </strong> to{" "}
											<strong>{AMOUNT_MAX} </strong>
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="3">
										<Accordion.Header>
											When should one apply for this money
										</Accordion.Header>
										<Accordion.Body>Anytime bro</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="4">
										<Accordion.Header>Legal Regulations</Accordion.Header>
										<Accordion.Body>Some regulations</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</Stack>
						</div>
					</Col>
				</Row>
			</Container>
			<StyledMenu
				open={showCtxMenu !== null}
				onClose={ctxHandleClose}
				anchorReference="anchorPosition"
				anchorPosition={
					showCtxMenu !== null
						? { top: showCtxMenu.mouseYpos, left: showCtxMenu.mouseXpos }
						: undefined
				}>
				<MenuItem onClick={ctxHandleClose}>
					<ListItemIcon>
						<CopyAllRounded fontSize="small"/>
					</ListItemIcon>
					<ListItemText>
						Copy
					</ListItemText>
				</MenuItem>

				<MenuItem onClick={ctxHandleClose}>
					<ListItemIcon>
						<ClearAllRounded  fontSize="small"/>
					</ListItemIcon>
					<ListItemText>
						Reset
					</ListItemText>
				</MenuItem>

				<MenuItem onClick={ctxHandleClose}>
					<ListItemIcon>
						<PrintRounded fontSize="small"/>
					</ListItemIcon>
					<ListItemText>
						Print
					</ListItemText>
				</MenuItem>

				<Divider sx={{"bgColor" : "secondary.light"}}/>

				<MenuItem onClick={ctxHandleClose}>
					<ListItemIcon>
						<EmailRounded fontSize="small"/>
					</ListItemIcon>
					<ListItemText>
						Email
					</ListItemText>
				</MenuItem>

				<MenuItem onClick={ctxHandleClose}>
					<ListItemIcon>
					<HelpRounded fontSize="small" />
					</ListItemIcon>
					<ListItemText>
						Help
					</ListItemText>
				</MenuItem>
			</StyledMenu>

			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={bkdopen}
				onClick={bkdhandleClose}
			>
				Loading  <CircularProgress color="inherit" />
			</Backdrop>

			<Snackbar>

			</Snackbar>

		<HEFAModel />
		</div>
	);
}

export default withAuthenticationRequired(HEFARequest , {
	onRedirecting : () => <LoadingPage />
})

// main rebase
