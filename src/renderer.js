// renderer.js

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('Render cargando...');

    const registerBtn = document.getElementById('registerBtn');
    const loginBtn = document.getElementById('loginBtn');

    // Comprobar si los botones existen en el DOM
    if (!registerBtn) {
        console.error("El botón de registro no se encontró en el DOM");
        return; // Salir si el botón no existe
    }
    if (!loginBtn) {
        console.error("El botón de inicio de sesión no se encontró en el DOM");
        return; // Salir si el botón no existe
    }

    registerBtn.addEventListener('click', () => {
        // Redirigir a la página de registro
        window.api.send('loadPage', 'pages/register.html'); // Enviar solicitud para cargar la página de registro
    });

    loginBtn.addEventListener('click', () => {
        // Redirigir a la página de inicio de sesión
        window.api.send('loadPage', 'pages/login.html'); // Enviar solicitud para cargar la página de inicio de sesión
    });
});

// Manejar el registro
async function handleRegister() {
    const form = document.getElementById('registerForm'); // Asegúrate de que el formulario tenga este ID
    if (!form) {
        console.error("El formulario de registro no se encontró en el DOM");
        return; // Salir si el formulario no existe
    }
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        const formData = new FormData(form);
        const data = {
            nombre: formData.get('nombre'),
            correo: formData.get('correo'),
            movil: formData.get('movil'),
            password: formData.get('password')
        };
        console.log(data);
        
        window.api.send('register', data); // Enviar datos al proceso principal

        // Escuchar la respuesta
        window.api.receive('registerResponse', (response) => {
            console.log(response);
            
            if (response.error) {
                alert('Error al registrar: ' + response.error);
            } else {
                alert('Registro exitoso');
                window.api.send('loadPage', 'pages/login.html'); // Enviar solicitud para cargar la página de inicio de sesión
            }
        });
    });
}

// Manejar el inicio de sesión
async function handleLogin() {
    const form = document.getElementById('loginForm'); // Asegúrate de que el formulario tenga este ID
    if (!form) {
        console.error("El formulario de inicio de sesión no se encontró en el DOM");
        return; // Salir si el formulario no existe
    }
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        const formData = new FormData(form);
        const data = {
            correo: formData.get('correo'),
            password: formData.get('password')
        };

        window.api.send('login', data); // Enviar datos al proceso principal

        // Escuchar la respuesta
        window.api.receive('loginResponse', (response) => {
            if (response.error) {
                alert('Error al iniciar sesión: ' + response.error);
            } else {
                alert('Inicio de sesión exitoso');
                // Enviar solicitud para cargar la página principal
                window.api.send('loadPage', 'pages/home.html'); // Cambia 'home.html' según tu estructura
            }
        });
    });
}

// Llamar a las funciones según la página
if (document.getElementById('registerForm')) {
    handleRegister(); // Llama a la función de registro si estamos en la página de registro
}

if (document.getElementById('loginForm')) {
    handleLogin(); // Llama a la función de inicio de sesión si estamos en la página de inicio de sesión
}
