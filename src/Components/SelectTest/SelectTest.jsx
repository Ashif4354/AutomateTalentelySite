import React from "react";
import "./styles.css";

const SelectTest = () => {
    
    var All_tests = { "26/06/2023": [["a", "q", "number system", 1, "Number system_Level_2_Test 1"], ["a", "q", "number system", 3, "Number system_Level_3_Test 1"], ["a", "q", "hcf & lcm", 5, "HCF and LCM_Level_3_Test 1"], ["a", "r", "syllogisms", 3, "Syllogism_Level_3_Test_1"], ["a", "r", "puzzle", 4, "Puzzle_level_1_test_1"], ["a", "r", "puzzle", 2, "number puzzle_level_2_test 1"], ["a", "r", "puzzle", 3, "character puzzle_level_2_test 1"], ["a", "v", "sentence completion", 2, "Sentence Completion_Level_2_Test 1"], ["a", "v", "sentence completion", 4, "Sentence Completion_Level_3_Test 1"], ["c", "b", "basic input output and data types", 4, "Basic_I/P_O/P_Level_3"]], "27/06/2023": [["a", "q", "percentage", 2, "Percentage_Level_1_Test_2"], ["a", "q", "percentage", 4, "Percentage_Lvel_2_Test_2"], ["a", "q", "time & work", 2, "Time and Work_Level_1_Test 1"], ["a", "r", "puzzle", 1, "Puzzle_Level_3_Test 1"], ["a", "r", "data sufficiency", 4, "Data Sufficiency_Level_2_Test 2"], ["a", "r", "data sufficiency", 5, "Data Sufficiency_level_3_test_2"], ["a", "r", "team_formation", 1, "Team formation_Level_1_Test 1"], ["a", "v", "spotting error", 2, "Spotting Errors_Level_1_Test 2"], ["a", "v", "spotting error", 3, "Spotting Errors_Level_2_Test 1"], ["c", "b", "conditional statements (if / while etc)", 3, "Conditional_Statement_Level _2"]], "28/06/2023": [["a", "q", "time & work", 1, "Time and Work_Level_1_Test 2"], ["a", "q", "time & work", 3, "Time and Work_Level_2_Test 1"], ["a", "q", "time & work", 4, "Time and Work_Level_2_Test 2"], ["a", "r", "assertion and reason", 1, "Assertion and Reason_Level_1_Test 1"], ["a", "r", "image analysis", 1, "Image Analysis_Level_1_Test 1"], ["a", "r", "dot situation", 1, "Dot situations_Level_1_Test 1"], ["a", "r", "embedded image", 1, "Embedded Image_Level_1_Test 1"], ["a", "v", "sentence formation", 1, "Sentence Formation_Level_1_Test 1"], ["a", "v", "synonyms", 2, "Synonyms_Level_1_Test 2"], ["c", "b", "looping", 3, "Looping_Level_2"]], "29/06/2023": [["a", "q", "pipes and cisterns", 1, "Pipes and Cistern_Level_1_Test 1"], ["a", "q", "pipes and cisterns", 3, "Pipes and Cistern_Level_2_Test 1"], ["a", "q", "time speed distance", 2, "Time_Speed_Distance_Level_1_Test_1"], ["a", "r", "direction sense", 1, "Direction Sense_Level_1_Test 1"], ["a", "r", "direction sense", 3, "Direction Sense_Level_2_Test 1"], ["a", "r", "coding and decoding", 1, "Coding and Decoding_Level_1_Test 1"], ["a", "r", "coding and decoding", 3, "Coding and Decoding_Level_2_Test 1"], ["a", "v", "selecting words", 1, "Selecting words_Level_1_Test 1"], ["a", "v", "selecting words", 2, "Selecting words_Level_2_Test 1"], ["c", "b", "patterns", 4, "Pattern_Level_2"]], "30/06/2023": [["a", "q", "time speed distance", 3, "Time_Speed_Distance_Level_2_Test_1"], ["a", "q", "problems on trains", 1, "Problems on Trains_Level_1_test 1"], ["a", "r", "blood relation", 1, "Blood Relation_Level_1_Test 1"], ["a", "r", "blood relation", 2, "Blood Relation_Level_1_Test 2"], ["a", "r", "blood relation", 3, "Blood Relation_Level_2_Test 1"], ["a", "r", "blood relation", 4, "Blood Relation_Level_2_Test 2"], ["a", "v", "passage and inference", 1, "Passage and Inference_Level_1_Test 1"], ["c", "b", "patterns", 5, "Pattern_Level_3"]], "01/07/2023": [["a", "q", "boats and stream", 2, "Boats and Streams_Level_1_test 2"], ["a", "q", "boats and stream", 3, "Boats and Streams_Level_2_test 1"], ["a", "q", "problems on ages", 3, "Problems on Ages_Level_2_test 1"], ["a", "r", "critical reasoning", 1, "Critical Reasoning_Level_1_Test 1"], ["a", "r", "critical reasoning", 2, "Critical Reasoning_Level_2_Test 1"], ["a", "r", "figure matrix", 1, "Figure Matrix_Level_1_Test 1"], ["a", "r", "grouping of images", 1, "Grouping Of Images_Level_1_Test 1"], ["a", "v", "reading comprehension", 1, "Reading Comprehension_Level_1_Test 1"], ["a", "v", "reading comprehension", 2, "Reading Comprehension_Level_3_Test 1"], ["c", "b", "number crunching", 2, "Number_Crunching_Level_1"]], "03/03/2023": [["a", "q", "averages", 1, "Averages_Level_3_Test 1"], ["a", "q", "averages", 2, "Averages_Level_1_Test 1"], ["a", "q", "averages", 3, "Averages_Level_2_Test 1"], ["a", "r", "pattern completion", 1, "Pattern Completion_Level_1_Test 1"], ["a", "r", "pattern completion", 2, "pattern completion_level_2_test 1"], ["a", "r", "shape construction", 1, "Shape Construction_Level_1_Test 1"], ["a", "r", "coding and decoding", 5, "Coding and Decoding_Level_1_Test 3"], ["c", "b", "number crunching", 3, "Number_Crunching_Level_2"]], "04/07/2023": [["a", "q", "problems on trains", 2, "Problems on Trains_Level_1_test 2"], ["a", "q", "problems on trains", 3, "Problems on Trains_Level_2_test 1"], ["a", "q", "permutation and combination", 2, "Permutation and Combination_Level_1_test 1"], ["a", "r", "logical deduction", 1, "Logical Deduction_Level_1_Test 1"], ["a", "r", "logical deduction", 2, "Logical Deduction_Level_2_Test 1"], ["a", "r", "logical order", 1, "Logical Order_Level_1_Test 1"], ["a", "r", "venn diagram", 1, "Venn Diagram_Level_1_Test 1"], ["a", "v", "jumbled sentence", 2, "Jumbled sentences_Level_1_test_1"], ["c", "b", "number based problems", 1, "Number_Based_Problem_Level_0"]], "05/07/2023": [["a", "q", "permutation and combination", 3, "Permutation_Combination_Level_1_Test_2"], ["a", "q", "permutation and combination", 1, "Permutation and Combination_Level_2_test 1"], ["a", "q", "permutation and combination", 6, "Permutation_and_Combination_Level_2_Test_2"], ["a", "r", "venn diagram", 2, "Venn Diagram_Level_2_Test 1"], ["a", "r", "venn diagram", 3, "Venn Diagram_Level_3_Test_1"], ["a", "r", "seating arrangement", 2, "Seating Arrangement_Level_3_Test 1"], ["a", "r", "seating arrangement", 4, "Seating Arrangement_Level_2_Test 1"], ["a", "v", "jumbled sentence", 1, "Jumbled Sentence_Level_3_Test 1"], ["a", "v", "jumbled sentence", 3, "Jumbled sentences_Level_2_test_1"], ["c", "b", "number based problems", 2, "Number_Based_Problem_Level_1"]], "06/07/2023": [["a", "q", "probability", 1, "Probability_Level_1_test 1"], ["a", "q", "probability", 2, "Probability_Level_1_test 2"], ["a", "q", "probability", 3, "Probability_Level_1_test 3"], ["a", "q", "probability", 4, "Probability_Level_3_test 1"], ["a", "q", "probability", 5, "Probability_Level_2_test 1"], ["a", "r", "number sequence and series", 1, "Number series_Level_1_Test_1"], ["a", "r", "number sequence and series", 2, "Number series_Level_2_Test_1"], ["a", "v", "theme detection", 1, "Theme Detection_Level_1_Test 1"], ["a", "v", "sentence improvement", 1, "Sentence Improvement_Level_1_Test 1"], ["c", "b", "number based problems", 3, "Number_Based_Problem_Level_2"]], "07/07/2023": [["a", "q", "partnership", 1, "Partnership_Level_1_test 1"], ["a", "q", "partnership", 2, "Partnership_Level_3_test 1"], ["a", "r", "data arrangement", 1, "Data Arrangement_Level_1_Test 1"], ["a", "r", "data arrangement", 2, "data arrangement_level_2_test 1"], ["a", "r", "data arrangement", 3, "data arrangement_level_2_test 2"], ["a", "r", "data arrangement", 4, "Data Arrangement_Level_1_Test 2"], ["a", "v", "sentence improvement", 2, "Sentence Improvement_Level_1_Test 2"], ["a", "v", "sentence improvement", 3, "Sentence Improvement_Level_2_Test 1"], ["c", "b", "functions", 1, "Function_Level_0"]], "08/07/2023": [["a", "q", "algebra", 1, "Algebra_Level_1_test 1"], ["a", "q", "algebra", 2, "Algebra_Level_2_test 1"], ["a", "q", "simple interest & compound interest", 1, "Simple Interest and Compound Interest_Level_1_Test 1"], ["a", "r", "functions", 1, "Functions_Level_1_test_1"], ["a", "r", "rearranging words", 1, "Rearranging words_Level_1_test_1"], ["c", "b", "functions", 2, "Function_Level_1"], ["c", "b", "functions", 3, "Function_Level_2"]], "10/07/2023": [["a", "q", "clocks", 1, "Clocks_Level_1_test 1"], ["a", "q", "clocks", 2, "Clocks_level_2_test 1"], ["a", "q", "calendar", 1, "Calendar_Level_1_test 1"], ["a", "r", "odd man out", 1, "Odd man out_Level_1_test_1"], ["a", "r", "odd man out", 2, "Odd man out_Level_2_test_1"], ["a", "r", "odd man out", 3, "Odd man out_Level_1_test_2"], ["a", "v", "fill in the blanks", 1, "Fill in the blanks_level_1_test_1"], ["a", "v", "fill in the blanks", 2, "Fill in the blanks_level_1_test_2"], ["c", "b", "arrays", 1, "Array_Level_0"]], "11/07/2023": [["a", "q", "height and distance", 1, "Heights and distance_Level_1_test 1"], ["a", "q", "surds and indices", 1, "Surds and Indices_Level_1_test 1"], ["a", "q", "surds and indices", 2, "Surds and Indices_Level_1_test 2"], ["a", "r", "statements and conclusions", 1, "Statements and Conclusions_Level_1_test_1"], ["a", "r", "statements and conclusions", 2, "Statements and Conclusions_Level_2_test_1"], ["a", "r", "statements and conclusions", 3, "Statement and Conclusion_Level_3_Test_1"], ["a", "r", "course of action", 1, "Course of action_level_2_test 1"], ["a", "v", "passage comprehensive", 1, "Passage comprehensive_level_1_test_1"], ["a", "v", "articles", 1, "Articles level_1_test_1"], ["c", "b", "arrays", 2, "Array_Level_1"]], "12/07/2023": [["a", "q", "races and games", 1, "Races and Games_Level_1_test 1"], ["a", "q", "chain rule", 1, "Chain Rule_Level_1_test 1"], ["a", "q", "chain rule", 2, "Chain Rule_Level_1_test 2"], ["a", "r", "statement and assumption", 1, "Statement and assumption_level_2_test 1"], ["a", "r", "statement and assumption", 2, "Statement and Assumption_Level_3_Test_1"], ["a", "r", "image based problems", 1, "image based problems_level_2_test_1"], ["a", "r", "paper cutting", 1, "Paper cutting_level_2_test 1"], ["a", "v", "sentence selection", 1, "Sentence selection_level_1_test_1"], ["a", "v", "sentence selection", 2, "Sentence selection_level_2_test_1"], ["c", "b", "strings", 2, "String_Level_1"]], "13/07/2023": [["a", "q", "sequence and series", 1, "Sequence and Series_Level_1_test 1"], ["a", "q", "mixture and alligation", 1, "Mixture and Alligation_Level_1_test 1"], ["a", "q", "mixture and alligation", 2, "Mixture and Alligation_Level_1_test 2"], ["a", "q", "mixture and alligation", 3, "Mixture and Alligation_Level_3_test 1"], ["a", "q", "mixture and alligation", 4, "Mixture and Alligation_Level_2_test 1"], ["a", "r", "dices and cubes", 1, "dices and cubes_level_2_test 1"], ["a", "r", "graph chart", 1, "graph chart_level_2_test 1"], ["a", "v", "grammatical error", 1, "Grammatical error_level_1_test_1"], ["a", "v", "sentence correction", 1, "Sentence Correction_level_2_test 1"], ["c", "b", "strings", 3, "String_Level_2"]], "14/07/2023": [["a", "q", "ratio and proportion", 2, "Ratio and Proportion_Level_1_Test 1"], ["a", "q", "ratio and proportion", 3, "Ratio and Proportion_Level_3_Test 1"], ["a", "q", "ratio and proportion", 4, "Ratio and Proportion_Level_2_Test 1"], ["a", "r", "cube and cuboids", 1, "cube and cuboids_level_2_test 1"], ["a", "r", "cube and cuboids", 2, "cube and cuboids_level_1_test 1"], ["a", "r", "number puzzles", 1, "Number Puzzles_Level_2_test_1"], ["a", "v", "idioms and phrases", 1, "Idioms and phrases_level_1_test 1"], ["a", "v", "idioms and phrases", 2, "Idioms and phrases_level_2_test 1"], ["c", "b", "bitwise operator", 2, "Biwise_Level_1"]], "15/07/2023": [["a", "q", "mensuration", 1, "Mensuration_Level_1_test 1"], ["a", "q", "mensuration", 4, "Mensuration_Level_2_test 2"], ["a", "q", "geometry", 2, "Geometry_Level_1_test 2"], ["a", "r", "paper folding", 1, "Paper Folding_Level_2_test_1"], ["c", "b", "2d array", 1, "2D_Level_0"], ["c", "b", "2d array", 3, "upd_2D_Level_2"]] }

    function save() {
        var tests = { 'TESTS': [] }
        for (let i = 1; i < count; i++) {
            let check_box = document.getElementById('test' + i);
            if (check_box.checked) {
                let value = check_box.value

                for (let date in All_tests) {
                    for (let j = 0; j < All_tests[date].length; j++) {


                        if (All_tests[date][j][4] == value) {
                            tests['TESTS'].push(All_tests[date][j])
                        }
                    }
                }


            }
        }
        //console.log(tests)
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

        const fileName = "tests.json";

        fetch('http://127.0.0.1:5000', requestOptions)
            .then(res => { console.log(res.text()) })
        
            alert('Tests Updated. Now you may close this window')
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



    //const keys = Object.keys(All_tests);

    //console.log(keys)

    var table = document.createElement('table');
    // table.border = 1

    var dummyTable = {
        date: "254y",
        data: ["srhsrh", "srpgh og"],
    }

    var count = 1

    console.log(dummyTable)
    for (let date in All_tests) {
        var row = document.createElement('tr');
        var cell = document.createElement('th');

        cell.textContent = date
        cell.colSpan = 6;
        row.appendChild(cell);

        table.appendChild(row);
        //console.log(All_tests[date])
        //break;

        for (let i = 0; i < All_tests[date].length; i += 3) {
            //console.log(test)
            let row = document.createElement('tr');
            row.className = "tableRow";

            let cell = document.createElement('td');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox'
            checkbox.id = 'test' + count
            checkbox.value = All_tests[date][i][4]

            cell.appendChild(checkbox)
            row.appendChild(checkbox);

            let cell2 = document.createElement('td');
            cell2.textContent = All_tests[date][i][4]
            row.appendChild(cell2);

            count++;

            try {
                if (i + 1 <= All_tests[date].length) {

                    cell = document.createElement('td');
                    checkbox = document.createElement('input');
                    checkbox.type = 'checkbox'
                    checkbox.id = 'test' + count
                    checkbox.value = All_tests[date][i + 1][4]

                    cell.appendChild(checkbox)
                    row.appendChild(checkbox);

                    cell2 = document.createElement('td');
                    cell2.textContent = All_tests[date][i + 1][4]
                    row.appendChild(cell2);

                    count++;
                }

            } catch (error) {
                //console.log(error);
                // break;
            }

            try {
                if (i + 2 <= All_tests[date].length) {

                    cell = document.createElement('td');
                    checkbox = document.createElement('input');
                    checkbox.type = 'checkbox'
                    checkbox.id = 'test' + count
                    checkbox.value = All_tests[date][i + 2][4]

                    cell.appendChild(checkbox)
                    row.appendChild(checkbox);

                    cell2 = document.createElement('td');
                    cell2.textContent = All_tests[date][i + 2][4]
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

    const footerElement = document.createElement('footer');

    // Create the paragraphs for the footer
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = "Built With \uD83D\uDC93 For Students"; // Use Unicode for the emoji
    
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = "Developed by DG and friends";
    
    // Append the paragraphs to the footer element
    footerElement.appendChild(paragraph1);
    footerElement.appendChild(paragraph2);
    
    // Append the footer to the body of the document
    document.body.appendChild(footerElement);    return (
        <div>
            <h1 class="Header">SELECT TESTS</h1>
    <h3 class="note">Click save after selecting tests</h3>
    <br />
    <ul class="ulList">
        <li>
            <p class="notes">This lists only tests assigned by the training cell</p>
        </li>
    </ul>
    <ul class="ulList">
        <li>
            <p class="notes">Changes will not be reflected unless you reset your progress</p>
        </li>
    </ul>
    <ul class="ulList">
        <li>
            <p class="notes">Test names listed below are the exact names from talentely portal</p>
        </li>
    </ul>
    <ul class="ulList">
        <li>
            <p class="notes">After you click save button, 'tests.json' file will be downloaded automatically</p>
        </li>
    </ul>
    <ul class="ulList">
        <li>
            <p class="notes">Just replace the 'tests.json' file in the root directory with the downloaded
                'tests.json' file</p>
        </li>
    </ul>
    <ul class="ulList">
        <li>
            <p class="notes">Changes will not be reflected unless you reset your progress using reset progress option
            </p>
        </li>
    </ul>
    <br />
    <div class="btns">
        <button class="btn" onClick={() => selectall()}>Select all</button>
        <button class="btn" onClick={() => selectnone()}>Select none</button><br /><br />
        <button class="btn save" onClick={() => save()}>Save</button><br /><br />
    </div>
    
        </div>
    )
}

export default SelectTest;