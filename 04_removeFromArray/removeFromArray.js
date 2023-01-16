const removeFromArray = function() {
    let args = Array.from(arguments);
    let resultArray = args.shift();
    let itemsToRemove = args;
    itemsToRemove.forEach(
        (item) => { 
            let index = resultArray.findIndex(element => element === item);
            if (index >= 0) resultArray.splice(index, 1); 
        }
    );
    return resultArray;

};

// Do not edit below this line
module.exports = removeFromArray;
