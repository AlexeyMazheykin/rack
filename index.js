/*function solution(str){

    let sub= ""
    let newArr = [];
    for (let i = 0; i < str.length; i+=2) {

        if(str[i+1] === undefined) {
            sub = str[i] + "_";
        }   else {
            sub = str[i] + str[i+1];
        }

        newArr.push(sub)

    }

    return newArr
}
let arr = solution("dddd")*/


/*
function narcissistic(value) {
    let strVal = value.toString()
    let arrDigit = strVal.split('');
    let sum = 0;
    arrDigit.forEach(item => {
        let digit = item**(strVal.length)
        sum += digit
    })
    if (sum == value) {
        return true
    } else return false;
}*/

/*
function isPangram(string) {

    let strLower = string.toLowerCase()
    const testReg = new RegExp('[A-z]')
    let arrString = [];
    let arrChars = [];
    for (let i = 0; i < strLower.length; i++) {
        if (testReg.test(strLower[i])) {
            arrString.push(strLower[i])
        }
    }
    if (arrString.length >= 26) {
        arrChars.push(arrString[0])
        for (let chr of arrString) {
            if (!arrChars.includes(chr)) {
                arrChars.push(chr)
            }
        }
        if (arrChars.length === 26) {
            return true;
        }

    }
    return false
}*/
/*function bouncingBall(h, bounce, window) {

    let count = -1;

    if (h > 0 && 0 < bounce && bounce < 1 && window < h) {
        while (h > window) {
            h *= bounce
            count += 2;
        }
    }
    return count
}

console.log(bouncingBall(5, 0.5, 1.1))*/


/*function generateHashtag (str) {

let strResult = false;

if (str) {
    strResult = "#"
    str.split(' ').map(item => item.replace(/[A-z]/, chr=>chr.toUpperCase())).forEach(item => {
        strResult += item;
    })
}
if (strResult.length >= 140 ) {
    return false
}
    return strResult;
}
generateHashtag (" Hello world")*/


/*function permutations(string) {
    let count = fac(string.length)
    let arRes = [string];
    let arToShuffle = Object.keys(string);
    let shuffledArr = (s) =>[...new Set(s) ];


    while (shuffledArr.length < count) {
        arToShuffle.sort(() => Math.random() - 0.5);
        if (!shuffledArr.includes(arToShuffle.join(''))) {
            shuffledArr(arToShuffle)
        }
    }
    for (let key in shuffledArr) {
        shuffledArr[key] = shuffledArr[key].split('')
    }
    for (let i = 0; i < shuffledArr.length; i++) {
        let item = '';
        for (let j = 0; j < string.length; j++) {
            item += string[shuffledArr[i][j]];
        }
        if (!arRes.includes(item)) {
            arRes.push(item);
        }

    }

    return arRes
}

function fac(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return n * fac(n - 1)
}*/
/*function permutations(str) {
    debugger
    return (str.length <= 1) ? [str] :
        Array.from(new Set(
            str.split('')
                .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
                .reduce((r, x) => r.concat(x), [])
        ));
}*/

/*const unique = function (xs) {
    return [...new Set(xs)]
}
const concat = function (a, b) {
    return [...a, ...b]
}

const drop = function (i) {
    return function (xs) {
        return [...xs.slice(0, i), ...xs.slice(i + 1)]
    }
}

const permute = function (x, i, xs) {

    return combinations(drop(i)(xs)).map(y => x + y)
}


const combinations = function (s) {

    return s.length === 1 ? [s] : [...s].map(permute).reduce(concat)
}


const permutations = function (s) {
    debugger
    return unique(combinations(s))
}
function drop (arr) {
    
arr.map(item =>{

})
}*/

/*class Total {


    constructor(key) {
        this._score = 0;
        this._total = 0;
        this._key = key
    }
    get total () {
        return this._total
    }

    get score() {
        return this._score
    }

    set score(value) {

        this._score = this._score + value
        if (this._score / this._key >= 3) {
            this._total = this._key === 1 ? this._key * 1000 : this._key * 100
            let rest = this._score / this._key - 3;
            if (this._key === 1 || this._key === 5) {
                this._total += this._key === 1 ? rest * 100 : rest * 50
            }
        } else {
            if (this._key === 1 || this._key === 5) {
                this._total = this._key === 1 ? this._score / this._key * 100 : this._score / this._key * 50
            }
        }
    }

}

function score(dice) {

    let obj = {}
    let total = 0
    dice.forEach((item, i, arr) => {
        if (!obj[item]) {
            obj[item] = new Total(item)
        }
        obj[item].score = item

        if (i === arr.length - 1) {
            for (let key in obj) {
                total += obj[key].total
            }
        }
    })

    return obj;
}*/
// function pickPeaks(arr = []){
//     let picks = {pos:[],peaks:[]}
//
//     for (let i = 0; i < arr.length; i++)
//
//         if (i !== 0 && i !== arr.length - 1 ) {
//             if (arr[i - 1] < arr[i] && arr[i+1] < arr[i] ) {
//                 picks.pos.push(i)
//                 picks.peaks.push(arr[i])
//             }
//             if (arr[i+1] === arr[i]) {
//                 while ()
//             }
//
//         }
//
//     return picks
// }
// console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]))


/*class RomanNumerals {

    static toRomeSearch(i, item, templ = []) {
        let romanNumber = '';
        if (item === 0) {
            return romanNumber;
        }
        if (item <= 3) {
            for (let j = 1; j <= item; j++) {
                romanNumber += templ[i][0]
            }
        }
        if (item === 4) {
            romanNumber += templ[i][0] + templ[i][1]
        }
        if (item >= 5 && item < 9) {

            let rest = item - 5;
            romanNumber += templ[i][1];
            for (let j = 1; j <= rest; j++) {
                romanNumber += templ[i][0]
            }
        }
        if (item === 9) {
            romanNumber += templ[i][0] + templ[i - 1][0]
        }

        return romanNumber;
    }

    static toRoman(number = 0) {
        let romeTemplate = [
            ['M'],
            ["C", "D"],
            ["X", "L"],
            ["I", "V"]
        ]
        let romanNumber = ''
        let numberToArr = Array.from(Number(number).toString())
        let template = [0, 0, 0, 0]
        let templateArr = template.map((item, i) =>
            +numberToArr[numberToArr.length - template.length + i] || 0)
        templateArr.forEach((item, i) => {
            romanNumber += this.toRomeSearch(i, item, romeTemplate)
        })
        return romanNumber
    }

    static fromRoman(roman = '') {
        let arabNumbersArr = []
       // let romeTemplate = "MDCLXVI"
        let romeTemplate = {
            "M": {
                value: 1000,
                index: 1
            },
            'D': {
                value: 500,
                index: 2
            },
            "C": {
                value: 100,
                index: 3
            },
            "L": {
                value: 50,
                index: 4
            },
            "X": {
                value: 10,
                index: 5
            },
            "V": {
                value: 5,
                index: 6
            },
            "I": {
                value: 1,
                index: 7
            }
        }

        let romeInputArr = Array.from(roman)
        romeInputArr.forEach((item, i)=>{
            
        })

    }

}


console.log(RomanNumerals.toRoman(1111), 'M')
console.log(RomanNumerals.toRoman(999), "CMXCIX")
console.log(RomanNumerals.toRoman(4), 'IV')
console.log(RomanNumerals.toRoman(1), 'I')
console.log(RomanNumerals.toRoman(1991), 'MCMXCI')
console.log(RomanNumerals.toRoman(2006), 'MMVI')
console.log(RomanNumerals.toRoman(2020), 'MMXX')
//
 console.log(RomanNumerals.fromRoman('XXI'), 21)*/
// console.log(RomanNumerals.fromRoman('I'), 1)
// console.log(RomanNumerals.fromRoman('III'), 3)
// console.log(RomanNumerals.fromRoman('IV'), 4)
// console.log(RomanNumerals.fromRoman('MMVII'), 2007)
// console.log(RomanNumerals.fromRoman('MDCLXIX'), 1669)


//const https = require("https");

/*const client_id = "7a1f533c-8e63-4e95-ad6f-9c4ef52982a5_2bf48c45-9bc4-4240-8849-714c34d887c3";
const client_secret = "kl69nXFPDNqbMopAxKZ0RZAOMfQYK0OQ8CipIkejwpk=";
const scope = "icdapi_access";
const grant_type = "client_credentials";
let token;*/
//const Authorization = `Basic ${new Buffer.from(`${client_id}:${client_secret}`).toString("base64").toString("utf-8")}`;
/*console.log(Authorization)
function getToken() {

    // http header fields to set
    const Authorization = `Basic ${new Buffer.from(`${client_id}:${client_secret}`).toString("base64").toString("utf-8")}`;

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization
    };

    // http options
    const options = {
        hostname: "icdaccessmanagement.who.int",
        port: 443,
        path: "/connect/token",
        method: "POST",
        headers
    };
    const data = `grant_type=${grant_type}&scope=${scope}`;

    // make request
    return new Promise((resolve, reject) => {
        let req = https.request(options, res => {
            let data = "";

            res.on("data", chunck => {
                data += chunck;
                console.log(data)
            });

            res.on("end", () => {
                resolve(JSON.parse(data.toString()).access_token);
            });
        });

        req.on("error", error => {
            console.error("ERR", error);
            reject(error);
        });

        req.write(data, "utf-8");
        req.end();
    });
}

function get(id) {

    // http header fields to set
    const headers = {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Accept-Language": "en",
        "API-Version": "v2"
    };

    // http options
    const options = {
        hostname: "id.who.int",
        port: 443,
        path: `/icd/entity/${id}`,
        method: "GET",
        headers
    };

    // make request
    return new Promise((resolve, reject) => {
        let req = https.request(options, res => {
            let data = "";

            res.on("data", chunck => {
                data += chunck;
            });

            res.on("end", () => {
                resolve(JSON.parse(data.toString()));
            });
        });

        req.on("error", error => {
            console.error("ERR", error);
            reject(error);
        });

        req.end();
    });
}

async function search(term) {

    // query
    let res = await get(encodeURI(`search?q=${term}`));
    let results = res.destinationEntities;
    let first = results[0];
    let id = first.id.match(/\d+/)[0];

    // get first result
    return await get(id);
}

// async code
(async () => {

    // get the oauth2 token
    token = await getToken();

    // access ICD API
    let res = await get("");

    // search for a term
    let tb = await search("tuberculosis");

    // print results
    console.log(res);
    console.log(tb);
})();*/

/*
let Authorization = "Basic "+window.btoa("7a1f533c-8e63-4e95-ad6f-9c4ef52982a5_2bf48c45-9bc4-4240-8849-714c34d887c3:kl69nXFPDNqbMopAxKZ0RZAOMfQYK0OQ8CipIkejwpk=")

let header = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization
}
let httpHeaders = new Headers(header)
fetch("https://icdaccessmanagement.who.int/connect/token", {
    method: "POST",
    mode: "no-cors",
    body: 'grant_type=client_credentials&scope=icdapi_access&client_id=' + client_id + '&client_secret=' + client_secret,
    headers: header
})  .then((response) => {
    return response;
}).then(data=>{
    console.log(data)
})
*/


































