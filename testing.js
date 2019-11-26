
var n = 5;

// const natural = (n) => { 
//     console.log("value received: " +n);
//     if(n == 0) {
//         return false;
//     } else {
//         natural(n-1);
//         console.log(n);
//     }
// }

// natural(n);

const naturall = (n, i = 1) => { 
    // console.log("value received: " +n);
    if( i > n ) {
        return false;
    } else {
        console.log(i);
        naturall(n, ++i);
    }
}

naturall(n);

var substr = (str , findex, lindex, trim = '') => findex > lindex ? console.log(trim) : substr(str, ++findex, trim+trim[findex]);


var reverse = (str, rev = '') => str.length == 0 ? console.log(rev) : reverse((str.substr(0,str.length -1)), (rev + str.substr(str.length -1 , 1)));

var toLower = (str) => {
	var lower = '';
	for (i = 0; i < str.length; i++) {
		var ch = str.charCodeAt(i);
		var newCh = ch + 32;
		lower = lower + String.fromCharCode(newCh); 
		
    }
	return lower;
}

var noOfRows = 3;
var totalElements = (noOfRows * 2) -1;
for(i = 1; i <= noOfRows; i++){
var spaceReq = noOfRows - i;
var starReq = totalElements - (spaceReq *2);
var valueToPrint = '';
for(j =0; j < spaceReq; j++){ valueToPrint += (' ');}
for(j =0; j < starReq; j++){ valueToPrint += ('*');}
console.log(valueToPrint);
}