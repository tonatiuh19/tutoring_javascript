'use strict';

function calcAge(x){
    const age = 2020-x;
    console.log(firstName);
    

    function printAge(){
        const output = `${firstName} you are ${age}, born in ${x}`;
        console.log(output);

        if(x >= 1981 && x <= 1996){
            var millenial = true;
            const str = `${firstName} you are a millenial`;
            console.log(str);
        }
        console.log(millenial);
    }
    printAge();
    return age;
}

const firstName = 'Felix';

calcAge(1993);