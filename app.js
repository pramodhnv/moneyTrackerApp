const csv = require('csvtojson')
let cate = require('./category.js')
// let db = require('./mongoDBAPI.js')

const url = "mongodb://localhost:27017";

const csvFilePath = process.argv[2]


csv({
    noheader: true,
    headers: ['Date', 'price', 'cardNo', 'unknown', 'sellType', 'vendor', 'Balance']
})
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log("Total number of transactions = " + jsonObj.length + "\n")
        // console.log("Date range is " + jsonObj[jsonObj.length - 1].Date + " to " + jsonObj[0].Date + "\n")

        for (const i in jsonObj) {
            var p = parseFloat(jsonObj[i].price)
            if (p > 0) {
                jsonObj[i].credit = p
                jsonObj[i].debit = 0
            } else {
                jsonObj[i].debit = p
                jsonObj[i].credit = 0
            }

            var d = new Date(jsonObj[i].Date + " UTC")
            jsonObj[i].DateObj = d
            let category = cate.getCategory(jsonObj[i].vendor)
            jsonObj[i].type = category
        }

        // cate.printExpsPerCategory("grocery" , jsonObj)
        // cate.printExpsPerCategory("eatingOut" , jsonObj)
        // cate.printExpsPerCategory("phAndInternetNetFlix" , jsonObj)
        // cate.printExpsPerCategory("publicTransport" , jsonObj)
        // cate.printExpsPerCategory("liquor" , jsonObj)
        // cate.printExpsPerCategory("electricity" , jsonObj)
        // cate.printExpsPerCategory("fuel" , jsonObj)
        // cate.printExpsPerCategory("medicals" , jsonObj)
        // cate.printExpsPerCategory("insurance" , jsonObj)
        // cate.printExpsPerCategory("gamble" , jsonObj)
        // cate.printExpsPerCategory("councilCharge" , jsonObj)
        // cate.printExpsPerCategory("UNKNOWN" , jsonObj)
        // cate.printTotalExpenses(jsonObj)

        // console.log(jsonObj)


        //  db.dbconnect(url,jsonObj);


        var uniqueNames = [];

        for (i = 0; i < jsonObj.length; i++) {
            if (uniqueNames.indexOf(jsonObj[i].type) === -1) {
                uniqueNames.push(jsonObj[i].type);
            }

        }

        var categorySpent = {}

        for (j = 0; j < uniqueNames.length; j++) {
            var totaldebit = 0;
            for (const i in jsonObj) {
                //  console.log(jsonObj)
                if (jsonObj[i].type == uniqueNames[j]) {
                    console.log(jsonObj[i].Date + " " + jsonObj[i].type + "   ->   " + jsonObj[i].vendor + "  -->   " + jsonObj[i].debit)
                    totaldebit = totaldebit + jsonObj[i].debit
                }
                categorySpent[uniqueNames[j]] = totaldebit

            }
            console.log("----------------------------------------------------------------")
            console.log("Money spent for " + uniqueNames[j] + " " + parseFloat(Math.round(totaldebit * 100) / 100).toFixed(2))
            console.log("=================================================================")
        }

        var totaldebit = 0;
        for (const i in jsonObj) {
            //  console.log(jsonObj[i].type + "   ->   " +  jsonObj[i].vendor + "  -->   " + jsonObj[i].debit)
            totaldebit = totaldebit + jsonObj[i].debit
        }
        console.log("Total Money spent " + parseFloat(Math.round(totaldebit * 100) / 100).toFixed(2))
            
    })
