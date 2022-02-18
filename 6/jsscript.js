function calc() {
    let p = document.getElementsByName("price");
    let c = document.getElementsByName("count");
    let a = document.getElementById("answer");
    if ((/^[1-9][0-9]*$/).test(p[0].value) && (/^[1-9][0-9]*$/).test(c[0].value)) {
        a.innerHTML = "Ответ: " + parseInt(p[0].value) * parseInt(c[0].value);
    } else {
        a.innerHTML = "Некорректные данные";
    }
    return false;
}

function hiden() {
    let prod;
    prod = document.getElementById('prod').value;
    switch (prod) {
        case'1':
            document.getElementById("radio").hidden = true;
            document.getElementById("checkbox").hidden = true;
            break;
        case'2':
            document.getElementById("radio").hidden = false;
            document.getElementById("checkbox").hidden = true;
            break;
        case'3':
            document.getElementById("radio").hidden = true;
            document.getElementById("checkbox").hidden = false;
            break;
    }
}
function calc2() {
        let prod, count, checkbox, radio, answer;
        let result = 0;
        prod = document.getElementById('prod').value;
        count = parseInt(document.getElementById('count2').value);
        checkbox = document.getElementsByName('checkbox');
        radio = document.getElementsByName('radio');
        answer = document.getElementById('answer2');
        if (!(/^[1-9][0-9]*$/).test(count) || (count < 0)) {
            answer.innerHTML = "Некорректное количество";
        } else {
            switch (prod) {
                case '1':
                    result = count * 300;
                    break;
                case '2':
                    if (radio[0].checked) {
                        result = count * 100;
                    }
                    if (radio[1].checked) {
                        result = count * 7000;
                    }
                    break;
                case '3':
                    result = count * 400;
                    if (checkbox[0].checked) {
                        result += count * 200;
                    }
                    if (checkbox[1].checked) {
                        result += count * 100;
                    }
                    break;
            }
            answer.innerHTML = result + " руб.";
        }
    }

  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("result");
    b.addEventListener("click", calc);
    document.getElementById("prod").addEventListener("click", hiden);
    document.getElementById("count").addEventListener("change", calc2);
    document.getElementById("prod").addEventListener("change", calc2);
    document.getElementById("r1").addEventListener("change", calc2);
    document.getElementById("r2").addEventListener("change", calc2);
    document.getElementById("chk1").addEventListener("change", calc2);
    document.getElementById("chk2").addEventListener("change", calc2);
  });
