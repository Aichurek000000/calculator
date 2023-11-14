document.addEventListener("DOMContentLoaded", myFunction)

function myFunction () {
    console.log('hi')
    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")
    const plus_button = document.getElementsByTagName("button")[0]
    plus_button.addEventListener("click", mySum)

    const n1 = document.getElementById("n1")
    const n2 = document.getElementById("n2")
    const minus_button = document.getElementsByTagName("button")[0]
    const result = document.getElementById("res1")

    multiplication_button.addEventListener("click", minus)
    const nu1 = document.getElementById("n1")
    const nu2 = document.getElementById("n2")
    const multiplication_button = document.getElementsByTagName("button")[0]
    const result = document.getElementById("res2")
    multiplication_button.addEventListener("click", multiplication)

    const nur1 = document.getElementById("nur1")
    const nur2 = document.getElementById("nur2")
    const division_button = document.getElementsByTagName("button")[0]
    const result = document.getElementById("res3")
    division_button.addEventListener("click", division)

    function mySum() {
        console.log('call mySum')
        value1 = Number(num1.value)
        value2 = Number(num2.value)
        sm = value1 + value2
        // console.log(sm)
        (document.getElementById("res")).textContent = sm     
    }
    function minus(){
        console.log('call minus')
        val1 = number1(n1.value)
        value1 = number2(n2.value)
        sm = val1 - value1
        (document.getElementById("res")).textContext = sm
    }
function multiplication(){
    console.log('call multiplication')
    val1 = numbe1(nu1.value)
    value1 = numbe2(nu2.value)
    sm = val1 - value1
    (document.getElementById("res2")).textContext = sm
}
function division(){
    console.log('call division')
    val1 = numbr1(nur1.value)
    value1 = numr2(nur2.value)
    sm = val1 - value1
    (document.getElementById("res3")).textContext = sm
    }
}