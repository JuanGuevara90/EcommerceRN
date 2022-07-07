export const replaceCharacter = (stringCurrent : string,valueCurrent:string,valueReplace:string) => stringCurrent.replace(valueCurrent,valueReplace);

export const formatText = (stringCurrent: string) => {

    let words = stringCurrent.split("-");

    return words.map((word)=>{
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");

}


export const alphabeticalOrder = (data : Array<string>) => {

    return data.sort((a,b)=>a.localeCompare(b));

}