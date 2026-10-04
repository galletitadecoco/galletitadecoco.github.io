// ========================================
// INICIO DE SESIÓN
// ========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        // Evitar que el formulario recargue la página
        event.preventDefault();

        // Obtener datos
        const usuario = document
            .getElementById("usuario")
            .value
            .trim()
            .toLowerCase();

        const password = document
            .getElementById("password")
            .value
            .trim();


        // ========================================
        // USUARIOS DE PRUEBA
        // ========================================

        const usuarios = {

            admin: {
                password: "1234",
                pagina: "paginas/administrador.html"
            },

            copaci: {
                password: "1234",
                pagina: "paginas/copaci.html"
            },

            usuario: {
                password: "1234",
                pagina: "paginas/usuario.html"
            }

        };


        // ========================================
        // VALIDAR CAMPOS
        // ========================================

        if (usuario === "" || password === "") {

            alert("Por favor, completa todos los campos.");

            return;
        }


        // ========================================
        // VALIDAR USUARIO Y CONTRASEÑA
        // ========================================

        if (
            usuarios[usuario] &&
            usuarios[usuario].password === password
        ) {

            // Guardar usuario
            sessionStorage.setItem(
                "usuario",
                usuario
            );


            // Guardar rol
            sessionStorage.setItem(
                "rol",
                usuario
            );


            // Redireccionar
            window.location.href = usuarios[usuario].pagina;

        } else {

            alert("Usuario o contraseña incorrectos.");

        }

    });

}
