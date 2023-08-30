
function handleEvent(e) {
    e.preventDefault();
    
    const username = document.getElementById('username_input').value;
    const password = document.getElementById('password_input').value;

    if (!username) {
        // console.log("Introduce tu usuario");
        const alerta = document.createElement('p');
        alerta.innerHTML = "¡Introduce tu usuario!";
        document.body.appendChild(alerta);
        // alert("¡Introduce tu usuario!")
    } 
    else if (password.length <= 5) {
        // console.log("Tu contraseña debe tener más de 5 caracteres");
        const alerta = document.createElement('p');
        alerta.innerHTML = "¡Tu contraseña debe tener más de 5 caracteres!";
        document.body.appendChild(alerta);
        // alert("¡Tu contraseña debe tener más de 5 caracteres!")
    }
    else {
        // console.log("Bienvenido");
        const alerta = document.createElement('p');
        alerta.innerHTML = `Bienvenido ${username} :)`;
        document.body.appendChild(alerta);
    }
}

button_input.addEventListener('click', handleEvent, false);