import React from "react";
import "./styles.css";
// import AptitudeTests from './AptitudeTests.json'
import AptitudeTests from './CTests.json'

const SelectTest = () => {
    
    function save() {
        var tests = { 'TESTS': [] }
        for (let i = 1; i < count; i++) {
            let check_box = document.getElementById('test' + i);
            if (check_box.checked) {
                let value = check_box.value

                for (let test_ in AptitudeTests) {
                    for (let j = 0; j < AptitudeTests[test_].length; j++) {


                        if (AptitudeTests[test_][j][4] === value) {
                            tests['TESTS'].push(AptitudeTests[test_][j])
                        }
                    }
                }
            }
        }
        save_json(tests)
    }

    function save_json(tests) {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tests)
        };

        var response_confirm = window.confirm('Are you sure that you want to update your tests.\nThis will RESET your PROGRESS')

        if (response_confirm) {
            fetch('http://127.0.0.1:2210', requestOptions)
                .then(res => {
                    console.log(res.text());
                    alert('Tests Updated. Now you may close this window');
                })
                .catch(error => {
                    alert('It seems that ATS is not running in your pc')
                })
        }


    }

    function selectall() {
        for (let i = 1; i < count; i++) {
            let check_box = document.getElementById('test' + i);

            check_box.checked = true;
        }
    }

    function selectnone() {
        for (let i = 1; i < count; i++) {
            let check_box = document.getElementById('test' + i);

            check_box.checked = false;
        }
    }



    //const keys = Object.keys(AptitudeTests);

    //console.log(keys)

    var table = document.createElement('table');
    // table.border = 1

    var count = 1

    for (let test_ in AptitudeTests) {
        var row = document.createElement('tr');
        var cell = document.createElement('th');

        cell.textContent = test_.toUpperCase();
        cell.colSpan = 6;
        row.appendChild(cell);

        table.appendChild(row);
        //console.log(AptitudeTests[test_])
        //break;

        for (let i = 0; i < AptitudeTests[test_].length; i += 3) {
            //console.log(test)
            let row = document.createElement('tr');
            row.classNameName = "tableRow";

            let cell = document.createElement('td');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox'
            checkbox.id = 'test' + count
            checkbox.value = AptitudeTests[test_][i][4]

            cell.appendChild(checkbox)
            row.appendChild(checkbox);

            let cell2 = document.createElement('td');
            cell2.textContent = AptitudeTests[test_][i][4]
            row.appendChild(cell2);

            count++;

            try {
                if (i + 1 <= AptitudeTests[test_].length) {

                    cell = document.createElement('td');
                    checkbox = document.createElement('input');
                    checkbox.type = 'checkbox'
                    checkbox.id = 'test' + count
                    checkbox.value = AptitudeTests[test_][i + 1][4]

                    cell.appendChild(checkbox)
                    row.appendChild(checkbox);

                    cell2 = document.createElement('td');
                    cell2.textContent = AptitudeTests[test_][i + 1][4]
                    row.appendChild(cell2);

                    count++;
                }

            } catch (error) {
                //console.log(error);
                // break;
            }

            try {
                if (i + 2 <= AptitudeTests[test_].length) {

                    cell = document.createElement('td');
                    checkbox = document.createElement('input');
                    checkbox.type = 'checkbox'
                    checkbox.id = 'test' + count
                    checkbox.value = AptitudeTests[test_][i + 2][4]

                    cell.appendChild(checkbox)
                    row.appendChild(checkbox);

                    cell2 = document.createElement('td');
                    cell2.textContent = AptitudeTests[test_][i + 2][4]
                    row.appendChild(cell2);

                    count++;
                }
            } catch (error) {
                //console.log(error);
                // break;
            }

            table.appendChild(row);
            // const lineBreak = document.createElement('br');

            // // Append the br element to the body (or any other appropriate element)            
        }
    }

    document.body.appendChild(table);
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(document.createElement('br'));

    const btns = document.createElement("div");
    btns.className = "btns";

    const saveBtn = document.createElement("button");
    saveBtn.className = "btn save";
    saveBtn.innerHTML = 'Save'
    saveBtn.onclick = () => { save() }


    btns.appendChild(saveBtn);
    document.body.appendChild(btns);

    const footerElement = document.createElement('div');

    footerElement.className = "footer";

    // Create the paragraphs for the footer
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = "Built With \uD83D\uDC93 For Students"; // Use Unicode for the emoji

    const paragraph2 = document.createElement('p');
    paragraph2.textContent = "Developed by DG and friends";

    // Append the paragraphs to the footer element
    footerElement.appendChild(paragraph1);
    footerElement.appendChild(paragraph2);

    // Append the footer to the body of the document
    document.body.appendChild(footerElement);

    return (
        <div>
            <h1 className="Header">SELECT TESTS</h1>
            <h3 className="note">Click save after selecting tests</h3>
            <br />
            <ul className="ulList">
                <li>
                    <p className="notes">This lists only tests assigned by the training cell</p>
                </li>
            </ul>
            <ul className="ulList">
                <li>
                    <p className="notes">Changes will not be reflected unless you reset your progress</p>
                </li>
            </ul>
            <ul className="ulList">
                <li>
                    <p className="notes">Test names listed below are the exact names from talentely portal</p>
                </li>
            </ul>
            <br />
            <div className="btns">
                <button className="btn" onClick={() => selectall()}>Select all</button>
                <button className="btn" onClick={() => selectnone()}>Select none</button><br /><br />
                <button className="btn save" onClick={() => save()}>Save</button><br /><br />
            </div>
        </div>
    )
}

export default SelectTest;