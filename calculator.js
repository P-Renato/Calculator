const container = document.getElementById("container")

container.innerHTML = `
<section class="calculator">

    <div class="display">
        <span class="output"></span>
        
        </div>
        <div class="btnClear buttonValue" id="btnClear" data-key="32" data-value="Clear">C</div>

    <div class="btn7 buttonValue" data-key="103" data-value="7">7</div>
    <div class="btn8 buttonValue" data-key="104" data-value="8">8</div>
    <div class="btn9 buttonValue" data-key="105" data-value="9">9</div>
    <div class="btnMultiply buttonValue" data-key="106" data-value="*">×</div> 

    <div class="btn4 buttonValue" data-key="100" data-value="4">4</div>
    <div class="btn5 buttonValue" data-key="101" data-value="5">5</div>
    <div class="btn6 buttonValue" data-key="102" data-value="6">6</div>
    <div class="btnDivide buttonValue" data-key="111" data-value="/">÷</div>

    <div class="btn1 buttonValue" data-key="97" data-value="1">1</div>
    <div class="btn2 buttonValue" data-key="98" data-value="2">2</div>
    <div class="btn3 buttonValue" data-key="99" data-value="3">3</div>
    <div class="btnMinus buttonValue" data-key="109" data-value="-">−</div>

    <div class="btn0 buttonValue" data-key="96" data-value="0">0</div>
    <div class="btnDot buttonValue" data-key="190" data-value=".">.</div>
    <div class="btnEquals buttonValue" data-key="13"  data-value="=">=</div>
    <div class="btnPlus buttonValue" data-key="107" data-value="+">+</div>

</section>
`

const btnClear = document.getElementById('btnClear')
const output = document.querySelector('.output')  
const buttons = document.querySelectorAll('.buttonValue');
       
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        
        if (value === '=') {
            output.textContent = eval(output.textContent);
        } else {
            output.textContent += value; 
        }
    });
});

btnClear.addEventListener('click', () => {
    output.textContent = "";
    console.log("Clear")
})

window.addEventListener('keydown', (e)=>{
    const keys = document.querySelector(`[data-key="${e.keyCode}"]`)
    if(!keys) return;
    const value = keys.dataset.value;
    if (value === '=') {
        output.textContent = eval(output.textContent);
    } 
    else if(value === "Clear") {
        output.textContent = "";
    }
    else {
        output.textContent += value; 
    }
    
})