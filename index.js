
function findMatching(arr, str){
    const matchingNames = arr.filter(element => element.toLowerCase() === str.toLowerCase());
    return matchingNames;
}

//test each letter to see if it is in the element string use str.length
function fuzzyMatch(arr, str){
    const fuzzyWuzzy = arr.filter(element => element.substring(0, str.length) === str);
    return fuzzyWuzzy;
}

function matchName(arr, str){
    return arr.filter(element => element.name === str);
}