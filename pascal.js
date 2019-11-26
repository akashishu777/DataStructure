// var subArray = (space, star) => {
//     subArr = [];
//     for (i = 0; i < (space + star); i++ ) {
//         (i < space) ? subArr.push(' ') :  subArr.push('*');
//     }
//     return subArr;
// };

// var subArray = (space, star, temp = '') => {
//     if (space + star <= 0) { return (temp.split("")); }
//     else {
//         var arr = (temp.length <= space) ? ' ' :  '*';
//         //var arr = (temp.length <= star) ? '*' :  ' ';
//         arr == '*' ? star = star-1 : space=space-1;
//         return subArray(space, star, (temp + arr));
//         //return subArray(space, star, (arr+temp));
//     }
// }


var pascal = (size, space = 0, temp = 0) => {
    var arr = [];

    for (x = size; x > 0; x--) {
        arr[x-1] = subArray(space, ((size*2)-1) - temp);
        space++;
        temp = temp + 2; 
    }

    for (m=0; m < arr.length; m++){
        console.log(arr[m].join(''));
    }
}

pascal(5);


// var subArray = (space, star, subArr = []) => {
//     if (subArr.length == (space + star)) { return subArr; }
//     else {
//         subArr(space, star, (i < space) ? subArr.push(' ') :  subArr.push('*'));
//     }
// }
