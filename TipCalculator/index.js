const btnEl = document.getElementById("calculate")

const totalEl = document.getElementById("total")


btnEl.addEventListener("click", function() {

    billValue = document.getElementById("bill").value   
    tipValue = document.getElementById("tip").value
    
    const total = billValue * (1 + tipValue / 100);

    totalEl.innerHTML = '$' + total;

})