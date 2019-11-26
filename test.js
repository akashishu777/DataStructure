const array = [16, 32, 64, 128];
for (var i = 0; i < 4; i++) {
   setTimeout(function() {
     console.log('Ind_Val: ' + i + ', elem: ' + array[i]);
   }, 3000);
}