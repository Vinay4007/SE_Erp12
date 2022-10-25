// Annual Budget
module.exports = ({ name, number }) => {
	return `
    <!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>My Custom generated PDF</title>
		<meta name="description" content="" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
		<strong>Name</strong>
		<p>${name}</p>
		<strong>Number</strong>
		<p>${number}</p>
	</body>
</html>
    `;
};

// Note : Change Later  - Just simply added
