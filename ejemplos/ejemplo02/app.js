
function handleEvent(e) {
    e.preventDefault();
    
    const username = document.getElementById('username_input').value;
    const password = document.getElementById('password_input').value;

    if (!username) {
        // console.log("Introduce tu usuario");
        const alerta = document.createElement('p');
        alerta.innerHTML = "¡Introduce tu usuario!";
        document.body.appendChild(alerta);
    } 
    else if (password.length <= 5) {
        // console.log("Tu contraseña debe tener más de 5 caracteres");
        const alerta = document.createElement('p');
        alerta.innerHTML = "¡Tu contraseña debe tener más de 5 caracteres!";
        document.body.appendChild(alerta);
    }
    else {
        // console.log("Bienvenido");
        const alerta = document.createElement('p');
        alerta.innerHTML = "Bienvenido :)";
        document.body.appendChild(alerta);
    }
}

button_input.addEventListener('click', handleEvent, false);