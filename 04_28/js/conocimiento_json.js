var alumno = {
                  nombre: 'Gustavo',
                  apellido: 'Diaz',
                  asignaturas: ['Programación Web', 'Modelamiento base de Datos', 'Programación BD']
              }
  
              var asignaturas_como_string = alumno.asignaturas.join(', ')
              console.log(alumno.nombre, alumno.apellido, alumno.asignaturas, asignaturas_como_string)
             