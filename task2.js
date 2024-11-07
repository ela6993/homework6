document.getElementById('calc').addEventListener('click', calculate);

function calculate() {
    const first = document.getElementById('first');
    const fvalue = Number(first.value);
    const second = document.getElementById('second');
    const svalue = Number(second.value);
    const operation = document.getElementById('operation');
    const opvalue = operation.value;

    if(fvalue && svalue){
        let result

        if (opvalue == '+') {
            result = fvalue + svalue;
        } else if (opvalue == '-') {
            result = fvalue - svalue;
        } else if (opvalue == '*') {
            result = fvalue * svalue;
        } else if (opvalue == '/') {
            result = fvalue / svalue;
        }

        document.getElementById('result').textContent = result;
    }else{
        alert('Введите все числа!!!')
    }
    
}
