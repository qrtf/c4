const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')
const form = document.getElementById('form')
const answer = document.getElementById('answer')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        
        password: password.value
    }
    if(password.value === 'cooperaccion'){
        console.log('bienvenido');
        form.classList.add('off')
        answer.classList.remove('off')
        a

    }else{
        console.log('denegados')
        window.alert('Contraseña incorrecta. No hagas trampa!')
    }

    console.log(data)
})