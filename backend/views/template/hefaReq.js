module.exports = ({
	email ,
    hefaId,
	amountReq,
    particular,
	status,
    amountGiven,
	validatedBy,
    date
}) => {
	return `
    <!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Letter of Cred</title>
		<meta name="description" content="" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
	  <p><strong>${email}</strong></p>
	  <p><strong>${hefaId}</strong></p>
	  <p><strong>${amountReq}</strong></p>
	  <p><strong>${particular}</strong></p>
	  <p><strong>${status}</strong></p>
	  <p><strong>${amountGiven}</strong></p>
	  <p><strong>${validatedBy}</strong></p>
	  <p><strong>${date}</strong></p>
	</body>
</html>
    `;
};