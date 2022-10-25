const locSchemaBody = {
   bsonType: "object",
	title: "Letter of Credit Validation",
	required: [
		"recipient",
		"bank",
		"address",
		"amount",
		"date",
		"subject",
		"attention",
		"valid",
		"addressB",
	],
	properties: {
		recipient: {
			bsonType: "string",
			description:
				"'name' must be a string, is required, Name of the recipient",
		},
		bank: {
			bsonType: "string",
			description: "'bank' must be a string . is required, Name of the bank",
		},
		address: {
			bsonType: "string",
			description:
				"'address' must be a string, is required, Address of the sender",
		},
		amount: {
			bsonType: "string",
			description: "'amount' must be a string , is required, Amount requested for",
		},
		date: {
			bsonType: "string",
			description: "'date' must be a string , is required, Date of issue",
		},
		subject: {
			bsonType: "string",
			description: "'subject' must be a string , is required, Subject regarding the letter",
		},
		attention: {
			bsonType: "string",
			description: "'attention' must be a string , is required, Attention/Designation/Department of the applicant",
		},
		valid: {
			bsonType: "string",
			description: "'valid' must be a string , is required, Valid till date",
		},
		addressB: {
			bsonType: "string",
			description: "'bank' must be a string , is required, Address of the Bank",
		},
	},
};

export default {locSchemaBody};
