var pyramid=(a,e=1,r=1) => { a-r >= 0 && console.log(" ".repeat(a-r)+"*".repeat(e)) , r-1 != a && pyramid(a,e+=2,++r)};

pyramid(40);