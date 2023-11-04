const randomVals = {
	413771792: [
		"House officer",
		"Resident",
		"Trainee",
		"Lecturer",
		"Demonstrator",
	],
	1180332213: ["Ziauddin", "Civil", "Jsmu", "Baqai", "Altamash", "Jpmc"],
	1022497621: [
		"Anatomy",
		"Physiology",
		"Medicine",
		"General surgery",
		"Omfs",
		"Operative",
		"Prosthodontics",
		"Orthodontics",
		"ENT",
		"Urology",
	],
};

function generateUrl(submit = true) {
	let formUrl =
		"https://docs.google.com/forms/d/e/1FAIpQLSeGppQUsXNrZLcD3pHcOd5URcnZelfe_u1lE89ySPyWsuPXfQ/";

	if (submit) {
		formUrl += "formResponse?";
	} else {
		formUrl += "viewform?";
	}
	console.log("getRandomFromVals(413771792): ", getRandomFromVals(413771792));
	//designation
	formUrl += getRandomFromVals(413771792);
	//hostpital
	formUrl += getRandomFromVals(1180332213);
	//department
	formUrl += getRandomFromVals(1022497621);

	//all remaining random options
	formUrl += getAllRandomOptions();

	window.open(formUrl, "_blank");
}
document.getElementById("urlLinkSubmit").addEventListener("click", () => {
	generateUrl();
});
document.getElementById("urlLinkPreview").addEventListener("click", () => {
	generateUrl(false);
});

function getRandomFromVals(entry) {
	const entryArr = randomVals[entry];
	const random = Math.floor(Math.random() * entryArr.length);
	return `&entry.${entry}=${entryArr[random]}`;
}

function getAllRandomOptions() {
	let urlParams = "";
	const allOptions = {
		651477488: ["A", "B", "C", "D"],
		2081888076: ["A", "B", "C", "D"],
		1269845227: ["A", "B", "C", "D"],
		2011620848: ["A", "B", "C", "D"],
		1672864690: ["A", "B", "C", "D"],
		799705615: ["A", "B", "C", "D"],
		1169244760: ["No comments", "n/a", "N/A", "Nothing"],
		304527606: ["No comments", "n/a", "N/A", "Nothing"],
		105862243: ["No comments", "n/a", "N/A", "Nothing"],
		123469485: ["Under 21", "21 to 34", "35 to 44", "45 to 54", "55 or older"],
		819787418: [
			"Less than 1 year",
			"1 year to less than 2 years",
			"2 years to less than 5 years",
			"5 years to less than 10 years",
			"10 years or more",
		],
		1276413494: ["Male", "Female"],
		10727587: ["Married", "Unmarried"],
		181672836: [
			"Less than 6 months",
			"Less than 1 year",
			"Less than 5 years",
			"indefinitely",
			"Until retirement",
		],
		1670276194: ["1", "2", "3", "4", "5", "6"],
		2103431866: ["1", "2", "3", "4", "5", "6"],
		121489726: ["1", "2", "3", "4", "5", "6"],
		207934508: ["1", "2", "3", "4", "5", "6"],
		1208551278: ["1", "2", "3", "4", "5", "6"],
		83410908: ["1", "2", "3", "4", "5", "6"],
		809604102: ["1", "2", "3", "4", "5", "6"],
		44054298: ["1", "2", "3", "4", "5", "6"],
		835385026: ["1", "2", "3", "4", "5", "6"],
		1444468777: ["1", "2", "3", "4", "5", "6"],
		883501453: ["1", "2", "3", "4", "5", "6"],
		1532059988: ["1", "2", "3", "4", "5", "6"],
		448278398: ["1", "2", "3", "4", "5", "6"],
		296242265: ["1", "2", "3", "4", "5", "6"],
		702726463: ["1", "2", "3", "4", "5", "6"],
		801998015: ["1", "2", "3", "4", "5", "6"],
		441568323: ["1", "2", "3", "4", "5", "6"],
		142642306: ["1", "2", "3", "4", "5", "6"],
		647176806: ["1", "2", "3", "4", "5", "6"],
		1509104534: ["1", "2", "3", "4", "5", "6"],
		1475777240: ["1", "2", "3", "4", "5", "6"],
		889245434: ["1", "2", "3", "4", "5", "6"],
		1426423067: ["1", "2", "3", "4", "5", "6"],
		1915061716: ["1", "2", "3", "4", "5", "6"],
		2071256407: ["1", "2", "3", "4", "5", "6"],
		1961536511: ["1", "2", "3", "4", "5", "6"],
		882523969: ["1", "2", "3", "4", "5", "6"],
		2090436947: ["1", "2", "3", "4", "5", "6"],
		1259366586: ["1", "2", "3", "4", "5", "6"],
		436565993: ["1", "2", "3", "4", "5", "6"],
		1089774927: ["1", "2", "3", "4", "5", "6"],
		1630781152: ["1", "2", "3", "4", "5", "6"],
		150910453: ["1", "2", "3", "4", "5", "6"],
		125936658: ["1", "2", "3", "4", "5", "6"],
		1311389532: ["1", "2", "3", "4", "5", "6"],
		131138953: ["1", "2", "3", "4", "5", "6"],
		147577724: ["1", "2", "3", "4", "5", "6"],
		593339096: ["1", "2", "3", "4", "5", "6"],
		163078115: ["1", "2", "3", "4", "5", "6"],
		889245434: ["1", "2", "3", "4", "5", "6"],
		154436972: ["1", "2", "3", "4", "5", "6"],
		108977492: ["1", "2", "3", "4", "5", "6"],
		314494099: ["1", "2", "3", "4", "5", "6"],
		794658189: ["1", "2", "3", "4", "5", "6"],
		167027619: ["1", "2", "3", "4", "5", "6"],
		191506171: ["1", "2", "3", "4", "5", "6"],
		207125640: ["1", "2", "3", "4", "5", "6"],
		196153651: ["1", "2", "3", "4", "5", "6"],
		209043694: ["1", "2", "3", "4", "5", "6"],
		249893915: ["1", "2", "3", "4", "5", "6"],
	};
	Object.keys(allOptions).forEach(function (entry, index) {
		const entryArr = allOptions[entry];
		const random = Math.floor(Math.random() * entryArr.length);
		urlParams += `&entry.${entry}=${entryArr[random]}`;
	});
	return urlParams;
}
