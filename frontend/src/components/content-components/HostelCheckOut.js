import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Style from './../modules/HostelCheckOut.module.css'
import FStyle from "./../modules/FormsModule.module.css";
import { useFormik } from "formik";
export function HostelCheckOut() {
  
	const formik = useFormik({
		initialValues: {
			nameout:"",
      rollout:"",
		},
    onSubmit:values=>{
     console.log('Form data',values)
    },
    validate: values=>{
      let errors={}
      if(!values.nameout)
      {
        errors.nameout='Required'
      }
      if(!values.rollout)
      {
        errors.rollout='Required'
      }
      return errors
    }
	});
 
  

	const [dateValue, setDateValue] = useState(null);
	const [dateValueInEpoch, setDateValueInEpoch] = useState(null);
	function handleDateUpdate(e) {
		const dateValue = e.target.value;
		console.log("dateValue", dateValue);
		setDateValue(dateValue);
		const dateValueInEpoch = new Date(dateValue).getTime(); // logic to convert date to epoch format
		console.log("dateValueInEpoch", dateValueInEpoch);
		setDateValueInEpoch(dateValueInEpoch);
	}
	return (
		
		<div className={Style.checkout}>
			<div classname={Style.contai}>
				<h1>HOSTEL CHECK OUT</h1>
        <form onSubmit={formik.handleSubmit}>
		        <form>
							<div>
								<label htmlFor="Name">Name</label>
								<input
									type="text"
									required
									placeholder="Name of the student"
									name="nameout"
									value={formik.values.nameout}
									onChange={formik.handleChange}
									className={FStyle.sinput}
								/>
                {formik.errors.nameout?<div className={Style.error}>{formik.errors.nameout}</div>:null}
							</div>
						</form>

                        <form>
							<div>
								<label htmlFor="Roll Number">Roll Number</label>
								<input
									type="text"
									required
									placeholder="Roll Number of the student"
									name="rollout"
									value={formik.values.rollout}
									onChange={formik.handleChange}
									className={FStyle.sinput}
								/>
                 {formik.errors.rollout?<div className={Style.error}>{formik.errors.rollout}</div>:null}
							</div>
						</form>
            
				<div className="mb-2">
					<span>Date : </span>
					<input type="date" onChange={(e) => handleDateUpdate(e)} />
					{dateValue ? (
						<div className="dateformats">
							<div>Date value in YYYY-MM-DD format: {dateValue}</div>
						</div>
					) : null}
				</div>

				<Button variant="dark" type="submit">
					Submit
				</Button>
        </form>
				</div>	
		</div>
		
		
	);
}
