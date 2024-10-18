
const getSelectedTests = (testJson, tests) => {
    let testTitles = Object.keys(testJson);
    let selectedTests = [...tests];
    
    for(let i = 0; i < testTitles.length; i++){
        for(let j = 0; j < testJson[testTitles[i]].length; j++){
            if(document.getElementById(testJson[testTitles[i]][j][4]).checked){
                if (!selectedTests.includes(testJson[testTitles[i]][j])) {
                    selectedTests.push(testJson[testTitles[i]][j]);
                }
            } else {
                if (selectedTests.includes(testJson[testTitles[i]][j])) {
                    selectedTests.splice(selectedTests.indexOf(testJson[testTitles[i]][j]), 1);
                }
            }
        }
    }

    return selectedTests;
        
}

export default getSelectedTests;