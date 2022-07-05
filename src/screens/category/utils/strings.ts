export const replaceCharacter = (stringCurrent,valueCurrent,valueReplace) => stringCurrent.replace(valueCurrent,valueReplace);

export const formatText = (stringCurrent) => {

    let words = stringCurrent.split("-");

    return words.map((word)=>{
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");

}


export const alphabeticalOrder = (data : Array<String>) => {

    return data.sort((a,b)=>a.localeCompare(b));

}