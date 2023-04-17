const reverseString = function(str) {
    const strLength = str.split(" ").length;

    if( strLength === 1){
        return str.split("").reverse().join("")
    }else{
        return str.split(" ").map((rev)=>rev.split("").reverse().join("")).reverse().join(" ")
    }

};

// Do not edit below this line
module.exports = reverseString;
