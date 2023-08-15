const btn = document.getElementById("btnSwitch");
const str = document.querySelectorAll("strong");

let t = 0;
let f = 0;

function cambiarValores() {

        for (let i = 0; i < str.length; i++) {
            if (btn.checked) {
                str[i].innerText = ((Number(str[i].innerText) * 10) + 0.09).toString().replace('8','9').substring(0,6);
            }else{
                str[i].innerText =((Number(str[i].innerText) / 10) - 0.009).toString().replace('8','9').substring(0,5);
            }
        }

}

btn.addEventListener("click", cambiarValores);