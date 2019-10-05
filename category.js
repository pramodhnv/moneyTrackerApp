grocery = ["COLES", "WOOLWORTHS", "ALDI", 
"SPICE VALLEY OF BRIS" , "INDIAN SPICE SHOP", "SWAPNIL VISHN","WORLD OF SPICES", "PATEL SPICE"]

eatingOut = ["BALTI", "BYBLOS", "BURGER",
"CHAMP", "CUPCAKE", "Campbell",
"GINGER&GARLIC", "GUZMAN",
"HELLO PHO", 
"KFC",
"MCDONALDS",
"THAI",
"VgeRama",
"SUBWAY", "HUDSON CORNER", "DOMINOS" , "GRILLD" , "CAFE" , "COFFEE" , "SUSHI" ,"KARAAGE",
"SITAR FOODS PTY", "HELLCAT MAGGIE", "MING RUI" , "ESPRESSO LEGENDS" , "RASHAYS", "BE HAPPY CUISINE"
,"BRISBANE SINDHI", "AAMAYA", "MVR FOODS","MIRCHH MASALA", "Guzman" , "LITTLE MARU",
"Jee's Burger", "JAI SAKHI BABA" , "Metropole Bar" , "Lemaire's Bistro"]

phAndInternetNetFlix = ["AMAYSIM", "OPTUS", "NETFLIX", "IINET" , "Belong" , "VODAFONE"]

household = ["KMART", "BIG W" , "BUNNINGS" ,  "HARVEY NORMAN" , "BATTERY WORLD", "IKEA" , "NEIL HEWITT"] 

shoesNClothes = ["TARGET" , "MYER" ,"ZARA" , "MATHERS FOR SHOES" , "DISCOVER SINGAPORE" , "H&M"]

liquor = ["DAN MURPHYS" , "LIQUORLAND"]

electricity = ["AGL" , "ALINTA ENERGY"]

medicals = ["CHEMIST", "PRICELINE" , "PLINE"]

fuel = ["PUMA", "7-ELEVEN"]

insurance = ["RACQ", "FRANK"]

gamble = ["THELOTT"]

councilCharge = ["BCC RATES"]

entertainment = ["AUSTRALIA ZOO","LOLLIPOPS CANNON" , "VANILLA POD" , "LOLLIPOPS PLAYLAND" , "BIRCH CARROLL","UNDERWATER WORLD"]

carAndDrivingExpenses = ["TRANSPORTMAINRDS"]

personalCare = ["Just Cuts", "MAGIC BROWS"]
publicTransportAndParking = ["TRANSLINK" , "SECURE A SPOT" , "PARKING" , "UBER" , "OLA" ,"BWC BRISBANE" , "GM CABS PTY LTD"]
onlineShopping = ["AMAZON" , "Patpat.com", "AMZN Mktp US"]


function getCategory(desc) {

	if (descInArray(desc, grocery)) {
		return "grocery";
	}
	else if (descInArray(desc, eatingOut)) {
		return "eatingOut";
	}
	else if (descInArray(desc, phAndInternetNetFlix)) {
		return "phAndInternetNetFlix"
	}
	else if (descInArray(desc, household)) {
		return "household"
	}
	else if (descInArray(desc, publicTransportAndParking)) {
		return "publicTransport"
	}
	else if (descInArray(desc, liquor)) {
		return "liquor"
	}
	else if (descInArray(desc, electricity)) {
		return "electricity"
	}
	else if (descInArray(desc, medicals)) {
		return "medicals"
	}
	else if (descInArray(desc, insurance)) {
		return "insurance"
	}
	else if (descInArray(desc, gamble)) {
		return "gamble"
	}
	else if (descInArray(desc, fuel)) {
		return "fuel"
	}
	else if (descInArray(desc, councilCharge)) {
		return "councilCharge"
	}
	else if (descInArray(desc, entertainment)) {
		return "entertainment"
	}
	else if (descInArray(desc, carAndDrivingExpenses)) {
		return "carAndDrivingExpenses"
	}
	else if (descInArray(desc, shoesNClothes)) {
		return "shoesNClothes"
	}
	else if (descInArray(desc, personalCare)) {
		return "personalCare"
	}
	else if (descInArray(desc, onlineShopping)) {
		return "onlineShopping"
	}
	else { return "UNKNOWN"; }
}

function printTotalExpenses (o) {
	let total = 0
	for (const i in o) {
			let p = parseInt(o[i].price, 10)
			// console.log(o[i].description + ' = ' + p);
			total += p
		
	}
  console.log('Total ' + ' Expenses ' + ' = ' + total)
}

function printExpsPerEntity(entity, o) {
	let total = 0
	for (const i in o) {
		if (o[i].description.includes(entity)) {
			let p = parseInt(o[i].price, 10)
			console.log(o[i].description + ' = ' + p);
			total += p
		}
	}
//	console.log('Total ' + ' at ' + entity + ' = ' + total)
}



function printExpsPerCategory (category, o) {
	console.log("CATEGORY : - " , category , '\n')   
	let total = 0
	for (const i in o) {
		if (o[i].type.includes(category)) {
			let p = parseInt(o[i].price, 10)
			console.log(o[i].description + ' = ' + p);
			total += p
		}
	}
	console.log('\nTotal ' + ' at ' + category + ' = ' + total)
	console.log('----------------------------------------------------------------\n')
}



function descInArray(desc, arr) {
	for (let i = 0; i < arr.length; i++) {
		if (desc.includes(arr[i])) {
			// console.log("desc " + desc + " arr[i] " + arr[i])
			return true;
		}
	}
	return false;
}



module.exports = {
	getCategory: getCategory,
	printExpsPerEntity: printExpsPerEntity,
	printExpsPerCategory: printExpsPerCategory,
	printTotalExpenses: printTotalExpenses
}
