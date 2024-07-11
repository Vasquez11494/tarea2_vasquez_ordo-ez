
const form = document.getElementById('AlumnoFormulario');
const BtnAgregar = document.getElementById('BtnAgregar');
const BtnEliminar = document.getElementById('BtnEliminar');
let ContadorAlumno = 1;
let nombre = 1;
let apellido = 1;
let arma = 1;
let grado = 1;
let dependencia = 1;

BtnAgregar.addEventListener('click', () => {
    ContadorAlumno++;
    nombre++;
    apellido++;
    arma++;
    grado++;
    dependencia++;
    const NuevoAlumno = document.createElement('div');
    NuevoAlumno.classList.add('row', 'mb-3', 'align-items-center');
    NuevoAlumno.innerHTML = `
            <div class="col-12">
                <h4>Alumno ${ContadorAlumno}</h4>
            </div>
            <div class="col">
                <label for="${'nombre'+nombre}">Nombre del Alumno</label>
                <input type="text" name="${'nombre'+nombre}" class="form-control" required>
            </div>
            <div class="col">
                <label for="${'apellido'+apellido}">Apellidos del Alumno</label>
                <input type="text" name="${'apellido'+apellido}" class="form-control" required>
            </div>
            <div class="col">
                <label for="${'arma'+arma}">Arma del Alumno</label>
                <input type="text" name="${'arma'+arma}" class="form-control" required>
            </div>
            <div class="col">
                <label for="${'grado'+grado}">Grado del Alumno</label>
                <input type="text" name="${'grado'+grado}" class="form-control" required>
            </div>
            <div class="col">
                <label for="${'dependencia'+dependencia}">Dependencia</label>
                <input type="text" name="${'dependencia'+dependencia}" class="form-control" required>
            </div>
        `;
    form.insertBefore(NuevoAlumno, form.lastElementChild);
});

BtnEliminar.addEventListener('click', () => {
    const rows = form.querySelectorAll('.row.mb-3');
    if (rows.length > 1) {
        rows[rows.length - 2].remove();
    }
});

form.addEventListener('submit', (event) => {
    const inputs = form.querySelectorAll('input[required]');
    for (let input of inputs) {
        if (!input.value) {
            input.focus();
            event.preventDefault();
            return;
        }
    }
});
