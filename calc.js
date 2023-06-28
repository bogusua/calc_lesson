const result_id = 'result';

function enter_data (value) {
    let result_filed = document.getElementById(result_id);
    let result_value = result_filed.innerText;
    result_value += value;
    result_filed.innerText = result_value;
}

// this function should to clear result field
function  clear_data() {

}

// I want to calculate all in a string, that's bad idea, but I want to do it with  eval()
function calculate() {

}
