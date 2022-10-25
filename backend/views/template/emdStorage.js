module.exports = ({
	recipient,
	bank,
	addressB,
	address,
	valid,
	date,
	subject,
	amount,
	attention,
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
		<div
			style="
				border: 4px solid #808080;
				width: 80%;
				height: 80%;
				margin: 60px auto 0;
				padding: 35px;
				border: 3px solid steelblue;
				border-radius: 70px 0 70px 0;
				font-size: large;
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
					Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
					sans-serif;
			"
		>
			<div style="padding: 50px">
				<h1 style="text-align: center">Letter of Credit</h1>
				<br />
				<br />
				<b>From</b>
				<br />
				<b>Name:</b> Indian Institute Of Technology Tirupati
				<br />
				<b>Address:</b> ${address}
				<br />
				<br />
				<b>Date:</b> ${date}
				<br />
				<br />
				<b>To</b>
				<br />
				<b>Name of the recipient:</b> ${recipient}
				<br />
				<b>Address:</b> ${addressB}
				<br />
				<br />
				<b>Subject:</b> Letter Of Credit for ${subject}
				<br />
				<br />
				<b>Dear Sir/ Madam</b>,
				<br />
				<p>
					The institute's ${attention} writing this letter to you in support of
					${bank}. You are at this moment informed that our bank had issued a
					credit letter in your name for INR ${amount}. This letter is being
					issued to you upon the given request. The letter has validity till
					${valid}.
				</p>
				<p>
					This expiration date will not get an extension unless the authorized
					bank gives it in a written format. If the bank provides a notice in
					writing for extending the date, then the date will be developed as per
					the rules and regulations specified.
				</p>
				<br />
				<br />
				<b>Thanking you</b>
				<br />
				<br />
				Yours sincerely,
				<br />
				<b>${recipient}</b>
			</div>
		</div>
	</body>
</html>
    `;
};
