
const SelectAll = (testJSON) => {
    let testTitles = Object.keys(testJSON);
    for (let i = 0; i < testTitles.length; i++) {
        for (let j = 0; j < testJSON[testTitles[i]].length; j++) {
            document.getElementById(testJSON[testTitles[i]][j][4]).checked = true;
        }
    }
}

const SelectNone = (testJSON) => {
    let testTitles = Object.keys(testJSON);
    for (let i = 0; i < testTitles.length; i++) {
        for (let j = 0; j < testJSON[testTitles[i]].length; j++) {
            document.getElementById(testJSON[testTitles[i]][j][4]).checked = false;
        }
    }
}

const SelectExistingTests = (existingTests) => {
    // console.log(existingTests);

    for (let i = 0; i < existingTests.length; i++) {
        let checkBox = document.getElementById(existingTests[i][4]);
        if (checkBox){
            checkBox.checked = true;
        }
    }
}

export { SelectAll, SelectNone, SelectExistingTests };