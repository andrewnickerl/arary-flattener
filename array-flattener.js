const arrayFlattener = (multiDimArray) => {
    var flatArray = []
    for(let i=0; i<multiDimArray.length; i++) {
        if(!!Array.isArray(multiDimArray[i])) {
            for(let j=0; j<multiDimArray[i].length; j++) {
                flatArray.push(multiDimArray[i][j])
            }
        }
        else flatArray.push(multiDimArray[i])
    }
    return flatArray;
}

console.log(arrayFlattener([1,[2, 3], 4]))