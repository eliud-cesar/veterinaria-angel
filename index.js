// USUARIOS DEL SISTEMA //

// La base de datos //
let UsuarioDelSistema = [
    {
        id: 1,
        nombre: 'Simon',
        telefono: '765-456-4544',
        email: 'simon@simon.com'
    },
    {
        id: 2,
        nombre: 'Angel',
        telefono: '741-114-9823',
        email: 'angel@angel.com'
    }
]

// Esta funcion lista todos los usuarios del sistema //
const ListarUsuarios = () => {
    UsuarioDelSistema.forEach(ele => {
        console.log(ele)
    });
}

// Esta funcion agrega un usuario con los datos correctos //
const AgregarUsuario = (id, nombre, telefono, email) => {
    if(!id, !telefono, !nombre, !email) {
        return console.error("Agrega los datos completos del usuario - (id, 'nombre', 'telefono', 'email')")
    }
    UsuarioDelSistema.push({id, nombre, telefono, email})
}


// CLIENTES DEL SISTEMA

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
    ClientesDelSistema.forEach(ele => {
        console.log(ele)
    });
}

// Esta funcion agrega un cliente con todos los datos correctos //
const AgregarClientes = (id, nombre, telefono, email, edad, direccion) => {
    if(!id, !telefono, !nombre, !email, !edad, !direccion) {
        return console.error("Agrega los datos completos del cliente - (id, 'nombre', 'telefono', 'email', edad, 'direccion')")
    }
    ClientesDelSistema.push({id, nombre, telefono, email, edad, direccion})
}


// PRODUCTOS

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
    Productos.forEach(ele => {
        console.log(ele)
    });
}

// Esta funcion agrega un producto con los datos correspondientes //
const AgregarProducto = (id, nombre, clave, categoria, seccion, existencias, precio) => {
    if(!id, !nombre, !clave, !categoria, !seccion, !existencias, !precio) {
        return console.error("Agrega los datos completos del producto - (id, 'nombre', 'clave', 'categoria', 'seccion', existencias, precio)")
    }
    Productos.push({id, nombre, clave, categoria, seccion, existencias, precio})
}


// VENDER

// Esta funcion lo que hace es vender con los 2 parametros
const Vender = (clave, cantidad) => {
    // En caso de que no existan 1 o los 2 parametros
    if(!clave, !cantidad) {
        return console.error('Agrega los datos completos para vender - ("clave del producto", cantidad a vender)')
    } else {
        // Si todo bien, luego busca el producto
        const res = Productos.find(p => p.clave === clave)
        // Si existe el producto hace la logica de vender
        if(res && res.existencias >= cantidad) {
            console.log('TOTAL: ' + (res.precio * cantidad))
            res.existencias = res.existencias - cantidad
            setTimeout(() =>console.log(`PRODUCTO: ${res.nombre}  CANTIDAD EN ALMACEN: ${res.existencias}`), 600)
            IngresarRegistro(Date(), res.nombre, cantidad, res.precio, (res.precio * cantidad))
        } else {
            // En caso de que no exista el producto
            console.error('El producto no existe o quieres vender mas de lo que tienes')
        }
    }
}

// REGISTRO

// La base de datos de los registros de las ventas
let DataRegistro = []

// Una funcion que se ejecuta cuando se vende un producto, lo que hace es crear un nuevo registro
const IngresarRegistro = (tiempo, producto, cantidad, precioUnitario, precioTotal) => {
    DataRegistro.push({tiempo, producto, cantidad, precioUnitario, precioTotal})
}

// Esta funcion lista los registros que se tiene
const ListarRegistro = () => {
    DataRegistro.forEach(reg => {
        console.log(reg)
    })
}


// $ INGRESOS $

// Esta funcion dice cuanto se ha ganado por el momento de ingreso
const TotalIngreso = () => {
    let calcularIngresoTotal = new Promise((resolve, reject) => {
        let Ingreso = 0
        DataRegistro.forEach(reg => {
            Ingreso = Ingreso + reg.precioTotal
        })
        resolve(Ingreso)
        reject('Fallido')
    })
    calcularIngresoTotal.then((TotalIngresado) => {
        console.log('El total que has ganado hasta el momento es: ' + TotalIngresado)
    })
}



// ----------------- TESTING -----------------

// const BtnEjecutar = document.getElementById("button-ejecutar")
// const InputFuncion = document.getElementById("input-funcion")

// BtnEjecutar.addEventListener('click', () => {
//     let ValueInput = InputFuncion.value
//     // ValueInput
//     switch (ValueInput) {
//         case 'ListarProductos':
//             ListarProductos()
//             break;
    
//         default:
//             console.log('Putoo')
//             break;
//     }
// })
