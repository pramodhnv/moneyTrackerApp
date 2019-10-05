let _ = require('lodash');
let csvToJson = require('csvtojson');
let cate = require('./category.js')

csvToJson()
.fromFile("./statements/2018/dec.csv")
.then((json)=>{
	
console.log("Total number of transactions = " + json.length + "\n")
console.log("Date range is " + json[json.length-1].date + " to " + json[0].date + "\n")

for ( const i in json) {
    json[i].type = "UNKNOWN"
	delete json[i].purchaseType 
	delete json[i].empty 
	let category = cate.getCategory(json[i].description)
	// console.log ( json[i].description + '-> ' + c)
	json[i].type = category
}

cate.printExpsPerCategory("grocery" , json)
cate.printExpsPerCategory("eatingOut" , json)
cate.printExpsPerCategory("phAndInternetNetFlix" , json)
cate.printExpsPerCategory("publicTransport" , json)
cate.printExpsPerCategory("liquor" , json)
cate.printExpsPerCategory("electricity" , json)
cate.printExpsPerCategory("fuel" , json)
cate.printExpsPerCategory("medicals" , json)
cate.printExpsPerCategory("insurance" , json)
cate.printExpsPerCategory("gamble" , json)
cate.printExpsPerCategory("councilCharge" , json)
cate.printExpsPerCategory("UNKNOWN" , json)
cate.printTotalExpenses(json)

})