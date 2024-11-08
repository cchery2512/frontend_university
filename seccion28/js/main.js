
//Ciclos en JavaScript
let variable = 0, initVal = 1;

//WHILE
while (variable < 5) {
    console.log('Iteración while No. '+initVal);
    variable++;
    initVal++;
}

console.log('\n');
//DO WHILE
variable = 0; initVal = 1;
do {
    console.log('Iteración do while No. '+initVal);
    variable++;
    initVal++;
} while (variable < 5);

console.log('\n');
//FOR (usando break y continue)
for (let index = 0; index < 10; index++) {
    console.log('Iteración for No. '+(index+1)+'\n');
    if(index == 5) continue;
    if(index == 7) break;
}