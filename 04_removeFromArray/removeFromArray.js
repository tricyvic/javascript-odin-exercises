const removeFromArray = function(arr,...args) {
    
    return arr.filter(no => {
        for (let i = 0; i < args.length; i++) {
            no === args[i]
        }
    })
    
};

// Do not edit below this line
module.exports = removeFromArray;
