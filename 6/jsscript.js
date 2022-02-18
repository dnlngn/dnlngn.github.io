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
    p = document.getElementById('prod_type').value;
    switch (p) {
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
        let p, c, ch, r, a;
        let res = 0;
        p = document.getElementById('prod_type');
        c = document.getElementById('count2');
        ch = document.getElementsByName('checkbox');
        r = document.getElementsByName('radio');
        a = document.getElementById('answer2');
        if (!(/^[1-9][0-9]*$/).test(c.value)) {
            a.innerHTML = "Некорректное количество";
        } else {
            switch (p.value) {
                case '1':
                    result = parseInt(c.value) * 2000;
                    break;
                case '2':
                    if (r[0].checked) {
                        result = parseInt(c.value) * 300;
                    }
                    if (r[1].checked) {
                        result = parseInt(c.value) * 500;
                    }
                    break;
                case '3':
                    res = parseInt(c.value) * 1500;
                    if (ch[0].checked) {
                        res += parseInt(c.value) * 1000;
                    }
                    if (ch[1].checked) {
                        res += parseInt(c.value) * 500;
                    }
                    break;
            }
            a.innerHTML = res;
        }
    }

  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("result");
    b.addEventListener("click", calc);
    document.getElementById("prod_type").addEventListener("click", hiden);
    document.getElementById("count").addEventListener("change", calc2);
    document.getElementById("prod").addEventListener("change", calc2);
    document.getElementById("r1").addEventListener("change", calc2);
    document.getElementById("r2").addEventListener("change", calc2);
    document.getElementById("chk1").addEventListener("change", calc2);
    document.getElementById("chk2").addEventListener("change", calc2);
  });
