var subArray = (space, star, temp = '') => {
    if (space + star <= 0) { return (temp); }
        var arr = (temp.length < space+temp.length) ? ' ' :  '*';
        arr == '*' ? star = star-1 : space=space-1;
        return subArray(space, star, (temp + arr));
}
 
var pyramid = (size, _ast = 1, x = 1) => {
        if (x-1 == size) { return false }
        console.log(subArray(size-x, _ast));
        pyramid(size, _ast+= 2, ++x);
}

pyramid(10);


var pascal = (size, sta = 1) => {
    for (x = 1; x <= size; x++) {
        console.log(' '.repeat(size-x) + '*'.repeat(sta));
        sta += 2;
    }
}


var pyramid = (_s, _st = 1, x = 1) => { if (_s-x >= 0) { console.log(' '.repeat(_s-x)+'*'.repeat(_st)); } (x-1 == _s) ? false : pyramid(_s, _st+= 2, ++x); }
//var pyramid=(a,e=1,r=1) => { a-r >= 0 && console.log(" ".repeat(a-r)+"*".repeat(e)) , r-1 != a && pyramid(a,e+=2,++r)};

var pyramid = (size, _ast = 1, x = 1) => {
    if (size-x >= 0) { console.log(' '.repeat(size-x) + '*'.repeat(_ast)) }
    (x-1 == size) ? false : pyramid(size, _ast+= 2, ++x);
}



// var pascal = (size, sta = 1) => {
//     var start = new Date().getTime();
//     for (x = 1; x <= size; x++) {
//         console.log(subArray(size-x, sta));
//         sta += 2;
//     }
//     var end = new Date().getTime();
//     var time = end - start;
//     console.log('Execution time: ' + time);
// }



// var pascal = (size, space = 0, temp = 0) => {
//     var arr = [];

//     for (x = size; x > 0; x--) {
//         arr[x-1] = subArray(space++, ((size*2)-1) - temp);
//         temp = temp + 2; 
//     }

//     for (m=0; m < arr.length; m++){
//         console.log(arr[m].join(''));
//     }
// }

pascal(18);

