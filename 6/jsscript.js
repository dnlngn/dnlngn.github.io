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
    let p;
    p = document.getElementById('prod_type');
    switch (p.value) {
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
        let p, c, r, ch, a;
        p = document.getElementById('prod_type');
        c = document.getElementById('count2');
        r = document.getElementsByName('radio');
        ch = document.getElementsByName('checkbox');
        a = document.getElementById('answer2');
        if (!(/^[1-9][0-9]*$/).test(c.value)) {
            a.innerHTML = "Некорректное количество";
        } else {
            switch (p.value) {
                case '1':
                    a.innerHTML = "Ответ: " + parseInt(c.value) * 2000;
                    break;
                case '2':
                    if (r[0].checked) {
                        a.innerHTML = "Ответ: " + parseInt(c.value) * 300;
                    }
                    if (r[1].checked) {
                        a.innerHTML = "Ответ: " + parseInt(c.value) * 500;
                    }
                    break;
                case '3':
                    let res = parseInt(c.value) * 1500;
                    if (ch[0].checked) {
                        res += parseInt(c.value) * 1000;
                    }
                    if (ch[1].checked) {
                        res += parseInt(c.value) * 500;
                    }
                    a.innerHTML = "Ответ: " + res;
                    break;
            }
        }
    }

  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("result").addEventListener("click", calc);
    document.getElementById("prod_type").addEventListener("click", hiden);
    document.getElementById("prod_type").addEventListener("change", calc2);
    document.getElementById("count2").addEventListener("change", calc2);
    document.getElementById("rad1").addEventListener("change", calc2);
    document.getElementById("rad2").addEventListener("change", calc2);
    document.getElementById("ch1").addEventListener("change", calc2);
    document.getElementById("ch2").addEventListener("change", calc2);
  });
