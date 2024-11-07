const button = document.getElementById('submit')
const main = document.getElementById('container')

button.addEventListener('click', () => {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    
    const namevalue = name.value
    const emailvalue = email.value
    const passwordvalue = password.value

    function checkname(namevalue){
        if(namevalue == ''){
            return false
        }
        else{
            return true
        }
    }

    function checkemail(emailvalue){
        if(emailvalue.includes('@') && emailvalue.includes('.')){
            return true
        }
        else{
            return false
        }
    }

    function checkpassword(passwordvalue){
        if(passwordvalue.length >= 8){
            return true
        }
        else{
            return false
        }
    }

    if(checkname(namevalue) && checkemail(emailvalue) && checkpassword(passwordvalue)){
        alert('Вы успешно зарегистрировались')
    }
    else{
        alert('Ошибка при регистрации. Проверьте данные')

        if(checkname(namevalue)){
            name.style.borderColor = 'green'
        }
        else{
            name.style.borderColor = 'red'
            name.style.backgroundColor = '#f09d97'
        }

        if(checkemail(emailvalue)){
            email.style.borderColor = 'green'
        }
        else{
            email.style.borderColor = 'red'
            email.style.backgroundColor = '#f09d97'
        }

        if(checkpassword(passwordvalue)){
            password.style.borderColor = 'green'
        }
        else{
            password.style.borderColor = 'red'
            password.style.backgroundColor = '#f09d97'
        }
    }
})