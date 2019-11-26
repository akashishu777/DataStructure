import { subArr } from './subarr';

console.log(subArr);

// subArr(1,3);

// var n = 3;
// var totalElem = (n*2)-1;
// var arr = [];
// var space = 0;
// var temp = 0;

// console.log('Total elem: ' + totalElem);



// for (i = n; i > 0; i--) {
//     arr[n] = subArr(space, totalElem - temp);
//     space++;
//     temp = temp + 2; 
// }

// console.log(arr);




var subArray = (space, star) => {
    subArr = [];
    for (i = 0; i < (space + star); i++ ) {
        (i < space) ? subArr.push(' ') :  subArr.push('*');
    }
    return subArr;
};

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