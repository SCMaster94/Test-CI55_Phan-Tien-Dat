function findOppositeNumber(n, inputNumber){
    if (inputNumber<(n/2)){
        let result = inputNumber + n/2
        console.log(result)
    } else if(inputNumber>n/2){
        let result = inputNumber - n/2
        console.log(result)
    } else{
        let result = 0
        console.log(result)
    }
}
findOppositeNumber(10,2)
findOppositeNumber(10,6)



function merge2String(String1, String2){
	let i,
        l = Math.min(String1.length, String2.length),
        temp = '';

    for(i = 0; i < l; i++) {
        temp += String1[i] + String2[i];
    }
    console.log(temp + String1.slice(i) + String2.slice(i));
}

merge2String('123','abc');
merge2String('1234','abc');
merge2String('123','abcd');