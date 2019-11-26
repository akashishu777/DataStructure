var noOfLines = 100;
var totalElements = (noOfLines * 2) - 1;
var start = new Date().getTime();
for (i = 1; i <= noOfLines; i++){
    var spaceReq = noOfLines - i;
    var starReq = totalElements - (spaceReq * 2);
    var lineToPrint = '';

    for( j=0; j < spaceReq; j++ ) {
        lineToPrint += ' ';
    }
    for( j=0; j < starReq; j++ ) {
        lineToPrint += '*';
    }
    console.log(lineToPrint);
}
var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time);