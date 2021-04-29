 var mensajesError = $('#mensajesError')
            mensajesError.hide()
            var btnContactar = $('#btnContactar')
            var txtNombres = $('#txtNombres')
            var txtEmail = $('#txtEmail')
            var txtComentario = $('#txtComentario')
            var contacto = $('#contacto')
            var txtSueldo = $('#txtSueldo')

            var cambioDeNombres = function () {
                contacto.html('<p>El nombre actual es: ' + txtNombres.val() + '</p>')
                console.log('Cambio el valor')
            }
            var cambioDeNombresFuncionFlecha = () => {
                contacto.html('<p>El nombre actual es: ' + txtNombres.val() + '</p>')
                console.log('Cambio el valor')
            }
            txtNombres.change(cambioDeNombres);

            txtNombres.focus(function () {
                console.log('Realizando Focus sobre txtNombres.')
            })
            function esValidoEmail(valor) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)
            }
            btnContactar.click(function () {
                var valorNombres = txtNombres.val();
                var valorEmail = txtEmail.val();
                var valorComentario = txtComentario.val();
                var valorSueldo = txtSueldo.val();
                var mensajeError = ''
                if (valorNombres.trim().length === 0) {
                    mensajeError += 'Los nombres son requeridos. <br>'
                }
                if (valorNombres.trim().length < 2) {
                    mensajeError += 'Los nombres deben tener minimo 2 caracteres. <br>'
                }
                if (valorNombres.trim().length > 40) {
                    mensajeError += 'Los nombres deben tener máximo 40 caracteres. <br>'
                }
                if (valorEmail.trim().length === 0) {
                    mensajeError += 'El correo es requerido. <br>'
                }
                if (valorEmail.trim().length < 2) {
                    mensajeError += 'El correo debe tener minimo 2 caracteres. <br>'
                }
                if (!esValidoEmail(valorEmail.trim())) {
                    mensajeError += 'El correo debe tener un formato de correo. <br>'
                }
                if (valorSueldo.trim().length === 0) {
                    mensajeError += 'El sueldo es requerido. <br>'
                }
                if (valorSueldo < 0) {
                    mensajeError += 'El sueldo debe ser mayor que 0. <br>'
                }

                if (mensajeError.trim().length > 0) {
                    mensajesError.html(mensajeError)
                    mensajesError.show();
                } else {
                    alert('Todo perfecto.')
                }