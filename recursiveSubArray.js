var chunks = (space, star, temp = '') => {
    console.log('=======' + temp + '=======')
    if (space + star <= 0) { console.log(temp.split("")); return temp.split(""); }
    else {
        var arr;
        // console.log('----------------> space: ' + space+ ' | star-> ' + star);
        // console.log('temp legth : '+ temp.length);
        // console.log('space value: ' + space);
        arr = (temp.length <= space) ? ' ' :  '*';
        // console.log('value of arr: ' + arr);

        if (arr == '*') { 
            star = star-1;
            // console.log('star vaue: ' + star);
        } else { 
            space=space-1; 
            // console.log('space vaue: ' + space);
        }

		// console.log('bool: '+ (arr == '*') + '| space: ' + space+ ' | star-> ' + star);
		// console.log('Temp array value: ' + temp);
        console.log('sending data to fuction again ========> space > ' + space + ' start >  ' + star + 'tempvalue >' + (temp+arr));
        chunks(space, star, (temp + arr));
    }
}

var output = chunks(2,2);
console.log(output);



// var chunks = (space, star, temp = '') => {
//     if (space + star <= 0) { console.log(temp.split("")); return temp.split(""); }
//     else {
//         var arr = (temp.length <= space) ? ' ' :  '*';
//         arr == '*' ? star = star-1 : space=space-1;
//         chunks(space, star, (temp + arr));
//     }
// }

// var output = chunks(2,2);
// console.log(output);