function calc() {
    let p = document.getElementsByName("price");
    let c = document.getElementsByName("count");
    let a = document.getElementsById("answer");
    if ((/^[1-9][0-9]*$/).test(p[0].value) && (/^[1-9][0-9]*$/).test(c[0].value)) {
        a.innerHTML = "Ответ: " + parseInt(p[0].value) * parseInt(c[0].value);
    } else {
        a.innerHTML = "Некорректные данные";
    }
}
window.addEventListener("DOMContentLoaded", function(event) {
    let b = document.getElementById("result");
    b.addEventListener("click", calc);
});
