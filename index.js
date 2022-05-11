const BtnEjecutar = document.getElementById('button-ejecutar')
const InputFuncion = document.getElementById("input-funcion")
const InformacionFunciones = document.getElementById("informacion-de-funciones")

// INPUTS DEL FORMULARIO
const clave = document.getElementById('form-clave')
const cantidad = document.getElementById('form-cantidad')
const id = document.getElementById('form-id')
const nombre = document.getElementById('form-nombre')
const categoria = document.getElementById('form-categoria')
const seccion = document.getElementById('form-seccion')
const existencias = document.getElementById('form-existencias')
const precio = document.getElementById('form-precio')
const telefono = document.getElementById('form-telefono')
const email = document.getElementById('form-email')
const edad = document.getElementById('form-edad')
const direccion = document.getElementById('form-direccion')

// ----------- USUARIOS DEL SISTEMA //

// Base de datos //
let UsuarioDelSistema = [
    {
        id: 1,
        nombre: 'Simon',
        telefono: '765-456-4544',
        email: 'simon@simon.com'
    },
    {
        nombre: 'Angel',
        telefono: '741-114-9823',
        email: 'angel@angel.com'
    }
]

// Esta funcion lista todos los usuarios del sistema //
const ListarUsuarios = () => {
    while(InformacionFunciones.children.length > 0) {
        InformacionFunciones.firstChild.remove()
    }
    UsuarioDelSistema.forEach(ele => {
        let data = `
        <p>
        <span>${ele.nombre} -</span>
        <span>${ele.telefono} -</span>
        <span>${ele.email}</span>
        </p>
        `
        InformacionFunciones.insertAdjacentHTML('beforeend', data)
    });
    
}

// Esta funcion agrega un usuario con los datos correctos //
const AgregarUsuario = () => {
    while(InformacionFunciones.children.length > 0) {
        InformacionFunciones.firstChild.remove()
    }
    let AUid = parseInt(id.value)
    let AUtelefono = telefono.value
    let AUnombre = nombre.value
    let AUemail = email.value
    if(!AUid, !AUtelefono, !AUnombre, !AUemail) {
        return InformacionFunciones.insertAdjacentHTML('beforeend', "<p class='red'>Agrega los datos completos del usuario - (id, 'nombre', 'telefono', 'email')</p>")
    }
    UsuarioDelSistema.push({id: AUid.parse, nombre: AUnombre, telefono: AUtelefono, email: AUemail})
    InformacionFunciones.insertAdjacentHTML('beforeend', "<p>Usuario agregado correctamente</p>")
}


// ----------- CLIENTES DEL SISTEMA

// Base de datos //
let ClientesDelSistema = [
    {
        id: 1,
        nombre: 'Pepe',
        telefono: '741-174-4536',
        email: 'pepe@gmail.com',
        edad: 19,
        direccion: 'Ometepec'
    },
    {
        id: 2,
        nombre: 'Leandro',
        telefono: '741-124-9823',
        email: 'leo@gmail.com',
        edad: 23,
        direccion: 'Ometepec'
    }
]

// Esta funcion lista todos los clientes registrados //
const ListarClientes = () => {
    while(InformacionFunciones.children.length > 0) {
        InformacionFunciones.firstChild.remove()
    }
    ClientesDelSistema.forEach(ele => {
        let data = `<p>
            <span>${ele.nombre} -</span>
            <span>${ele.telefono} -</span>
            <span>${ele.email} -</span>
            <span>${ele.edad} -</span>
            <span>${ele.direccion}</span>
        </p>`
        InformacionFunciones.insertAdjacentHTML('beforeend', data)
    });
}

// Esta funcion agrega un cliente con todos los datos correctos //
const AgregarClientes = () => {
    while(InformacionFunciones.children.length > 0) {
        InformacionFunciones.firstChild.remove()
    }
    let ACid = parseInt(id.value)
    let ACtelf = telefono.value
    let ACnombre = nombre.value
    let ACemail = email.value
    let ACedad = parseInt(edad.value)
    let ACdire = direccion.value
    if(!ACid, !ACtelf, !ACnombre, !ACemail, !ACedad, !ACdire) {
        return InformacionFunciones.insertAdjacentHTML('beforeend', "<p class='red'>Agrega los datos completos del cliente - (id, 'nombre', 'telefono', 'email', edad, 'direccion')</p>")
    }
    ClientesDelSistema.push({id: ACid, nombre: ACtelf, telefono: ACtelf, email: ACemail, edad: ACedad, direccion: ACdire})
    InformacionFunciones.insertAdjacentHTML('beforeend', "<p>Cliente agregado correctamente</p>")
}


// ----------- PRODUCTOS

// Base de datos //
let Productos = [
    {
        id: 1,
        nombre: 'Croquetas para perro',
        clave: 'croperro',
        categoria: 'Alimento para perro',
        seccion: 'Perros',
        existencias: 12,
        precio: 30
    },
    {
        id: 2,
        nombre: 'Croquetas para gato',
        clave: 'crogato',
        categoria: 'Alimento para gato',
        seccion: 'gatos',
        existencias: 6,
        precio: 20
    },
]


// Esta funcion lista todos los productos //
const ListarProductos = () => {
    while(InformacionFunciones.children.length > 0) {
        InformacionFunciones.firstChild.remove()
    }
    Productos.forEach(ele => {
        let data = `<p>
            <span>${ele.nombre} -</span>
            <span>${ele.clave} -</span>
            <span>${ele.categoria} -</span>
            <span>${ele.seccion} -</span>
            <span>${ele.existencias} -</span>
            <span>$ ${ele.precio}</span>
        </p>`
        InformacionFunciones.insertAdjacentHTML('beforeend', data)
    });
}

// Esta funcion agrega un producto con los datos correspondientes //
const AgregarProducto = () => {
    while(InformacionFunciones.children.length > 0) {
        InformacionFunciones.firstChild.remove()
    }
    let APid = parseInt(id.value)
    let APnombre = nombre.value
    let APclave = clave.value
    let APcate = categoria.value
    let APseccion = seccion.value
    let APexistencias = parseInt(existencias.value)
    let APprecio = parseInt(precio.value)
    if(!APid, !APnombre, !APclave, !APcate, !APseccion, !APexistencias, !APprecio) {
        return InformacionFunciones.insertAdjacentHTML('beforeend', "<p class='red'>Agrega los datos completos del producto - (id, 'nombre', 'clave', 'categoria', 'seccion', existencias, precio)</p>")
    }
    Productos.push({id: APid, nombre: APnombre, clave: APclave, categoria: APcate, seccion: APseccion, existencias: APexistencias, precio: APprecio})
    InformacionFunciones.insertAdjacentHTML('beforeend', "<p>Producto agregado correctamente</p>")
}


// ----------- VENDER

// Esta funcion lo que hace es vender con los 2 parametros
const Vender = () => {
    while(InformacionFunciones.children.length > 0) {
        InformacionFunciones.firstChild.remove()
    }
    let Vclave = clave.value
    let Vcantidad = parseInt(cantidad.value)
    
    if(!Vclave, !Vcantidad) {
        return InformacionFunciones.insertAdjacentHTML('beforeend', "<p class='red'>Agrega los datos completos para vender - ('clave del producto', cantidad a vender)</p>")
    } else {
        console.log(Vcantidad | Vclave)

        // Si todo bien, luego busca el producto
        const res = Productos.find(p => p.clave === Vclave)
        // Si existe el producto hace la logica de vender
        if(res && res.existencias >= Vcantidad) {
            InformacionFunciones.insertAdjacentHTML('beforeend', `<p>TOTAL:  + ${res.precio * Vcantidad}</p>`)
            res.existencias = res.existencias - Vcantidad
            setTimeout(() => InformacionFunciones.insertAdjacentHTML('beforeend', `<p>Producto: ${res.nombre}  |  Restante en almacen: ${res.existencias}</p>`), 600)
            IngresarRegistro(Date(), res.nombre, Vcantidad, res.precio, (res.precio * Vcantidad))
        } else {
            InformacionFunciones.insertAdjacentHTML('beforeend', "<p class='red'>El producto no existe o quieres vender mas de lo que tienes</p>")
        }
    }
}

// ----------- REGISTRO

// La base de datos de los registros de las ventas
let DataRegistro = []

// Una funcion que se ejecuta cuando se vende un producto, lo que hace es crear un nuevo registro
const IngresarRegistro = (tiempo, producto, cantidad, precioUnitario, precioTotal) => {
    DataRegistro.push({tiempo, producto, cantidad, precioUnitario, precioTotal})
}

// Esta funcion lista los registros que se tiene
const ListarRegistro = () => {
    while(InformacionFunciones.children.length > 0) {
        InformacionFunciones.firstChild.remove()
    }
    DataRegistro.length > 0
    ?
    DataRegistro.forEach(reg => {
        let data = `<p>
            <span>${reg.tiempo} -</span>
            <span>${reg.producto} -</span>
            <span>${reg.cantidad} -</span>
            <span>${reg.precioUnitario} -</span>
            <span>${reg.precioTotal}</span>
        </p>`
        InformacionFunciones.insertAdjacentHTML('beforeend', data)
    })
    : InformacionFunciones.insertAdjacentHTML('beforeend', '<p class="red">No hay registro por el momento<p>')

}


// ----------- $ INGRESOS $

// Esta funcion dice cuanto se ha ganado por el momento de ingreso
const TotalIngreso = () => {
    while(InformacionFunciones.children.length > 0) {
        InformacionFunciones.firstChild.remove()
    }
    let calcularIngresoTotal = new Promise((resolve, reject) => {
        let Ingreso = 0
        DataRegistro.forEach(reg => {
            Ingreso = Ingreso + reg.precioTotal
        })
        resolve(Ingreso)
        reject('Fallido')
    })
    calcularIngresoTotal.then((TotalIngresado) => {
        InformacionFunciones.insertAdjacentHTML('beforeend', `<p>El total que has ganado hasta el momento es: $${TotalIngresado}</p>`)
    })
}


// ----------------- AYUDA DE FUNCIONES -----------------
const ListarFunciones = () => {
    while(InformacionFunciones.children.length > 0) {
        InformacionFunciones.firstChild.remove()
    }

    InformacionFunciones.insertAdjacentHTML('beforeend', `
    <p>Funciones:</p>
    <ul>
        <li>Listar Productos</li>
        <li>Listar Usuarios</li>
        <li>Listar Clientes</li>
        <li>Registro</li>
        <li>Total Ingreso</li>
        <li>Agregar Usuario</li>
        <li>Agregar Cliente</li>
        <li>Agregar Producto</li>
        <li>Vender</li>
        <li>cls (limpiar la consola)</li>
    </ul>
    `)
}


// ----------------- EJECUCION DE FUNCIONES -----------------

BtnEjecutar.addEventListener('click', () => {
    let ValueInput = InputFuncion.value
    
    switch (ValueInput) {
        // --------------- LISTAR ---------------
        case 'Listar Productos':
            ListarProductos()
            break;

        case 'Listar Usuarios':
            ListarUsuarios()
            break;
            
        case 'Listar Clientes':
            ListarClientes()
            break;
            
        // --------------- REGISTRO Y DINERO ---------------
        case 'Registro':
            ListarRegistro()
            break;

        case 'Total Ingreso':
            TotalIngreso()
        break;

        // --------------- AGREGAR ---------------
        case 'Agregar Usuario':
            AgregarUsuario()
        break;
        
        case 'Agregar Cliente':
            AgregarClientes()
        break;
        
        case 'Agregar Producto':
            AgregarProducto()
            break;
            
        // --------------- VENDER ---------------
        case 'Vender':
            Vender()
            break;

        // --------------- OPCIONES ---------------
        case 'cls':
            while(InformacionFunciones.children.length > 0) InformacionFunciones.firstChild.remove()
            break;

        case 'Ayuda':
            ListarFunciones()
            break;
    
        default:
            InformacionFunciones.innerHTML = "<p>EJECUTA UNA FUNCION VALIDA</p>"
            break;
    }
})
