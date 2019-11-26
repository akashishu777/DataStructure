var subArray = (space, star) => {
    subArr = [];
    if (space == 0) {
        for (i = 0; i < star; i++) {
            subArr.push('*');
        }
    } else {
        for (i = 0; i < (space + star); i++ ) {
            (i < space) ? subArr.push(' ') :  subArr.push('*');
        }
    }
    return subArr;
};

var n = 10;
var totalElem = (n*2)-1;
var arr = [];
var space = 0;
var temp = 0;

console.log('Total elem: ' + totalElem);

console.log('vlue of loop: ' + n);

for (ii = n; ii > 0; ii--) {
    var start = totalElem - temp;
    console.log('value of n -----------------: ' + ii);
    console.log('space: ' + space + ' start:  ' + start + '\n');
    arr[ii-1] = subArray(space, start);
    space++;
    temp = temp + 2; 
}

for (m=0; m < arr.length; m++){
    console.log(arr[m].join(''));
}
