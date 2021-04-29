   var btnContactar = $('#btnContactar')
            var txtNombres = $('#txtNombres')
            var txtEmail = $('#txtEmail')
            var txtComentario = $('#txtEmail')
            txtNombres.change(function () {
                if ($(this).val().trim().length == 0)
                    console.log('Valor vacio.')
            });
            txtEmail.change(function () {
                if ($(this).val().trim().length == 0)
                    console.log('Valor vacio.')
            });

            txtComentario.change(function () {
                if ($(this).val().trim().length == 0)
                    console.log('Valor vacio.')
            });

            txtNombres.change(function () {
                if ($(this).val().trim().length == 0)
                    console.log('Valor vacio.')
            });
            btnContactar.click(function () {
                if (txtNombres.val().trim().length == 0)
                    console.log('Valor está vacio :(')
                console.log('Hice click!!!!')
            })