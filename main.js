//Inicializando Variables -------------------------------------------------------------------------

let componente = ""
let patreons = ""
let producto = ""
let precio = 0
let total = 0
let vaAlCarrito = 0 
carrito = []
const promos = []

//Productos de Entrada y Salida -------------------------------------------------------------------

const productosEYS =[
    { id: 1,    nombre: "Mouse",       promocion: "no",   precio: 14489,   cantidad:0},
    { id: 2,    nombre: "Teclado",     promocion: "si",   precio: 12284,   cantidad:0},
    { id: 3,    nombre: "Cámara",      promocion: "no",   precio: 12028,   cantidad:0},
    { id: 4,    nombre: "Altavoces",   promocion: "si",   precio: 12778,   cantidad:0},
    { id: 5,    nombre: "Auriculares", promocion: "no",   precio: 12903,   cantidad:0},
    { id: 6,    nombre: "Microfono",   promocion: "si",   precio: 7266,    cantidad:0},
    { id: 7,    nombre: "Pantalla",    promocion: "no",   precio: 44763,   cantidad:0},
    { id: 8,    nombre: "Mousepad",    promocion: "si",   precio: 3899,    cantidad:0}
                    ]

const externos = ["Mouse", "Teclado", "Cámara", "Altavoces", "Auriculares", "Microfono", "Pantalla", "Mousepad"]

//Productos de Almacenamiento y Procesamiento -----------------------------------------------------

const productosAYP =[
    { id:1,     marca1:"Gigabyte",     marca2:"ASUS",          marca3:"Asrock",     precio: 34490},
    { id:2,     marca1:"Intel",        marca2:"AMD",           marca3:"",           precio: 72858},
    { id:3,     marca1:"Gigabyte",     marca2:"ASUS",          marca3:"MSI",        precio: 139900},
    { id:4,     marca1:"Kingston",     marca2:"Vulcan",        marca3:"Adata",      precio: 11019},
    { id:5,     marca1:"Corsair",      marca2:"Crucial",       marca3:"Geil",       precio: 13210},
    { id:6,     marca1:"Corsair",      marca2:"Cougar",        marca3:"Redragon",   precio: 8399},
    { id:7,     marca1:"Be Quiet!",    marca2:"Thermaltake",   marca3:"ID-Cooling", precio: 3948},
    { id:8,     marca1:"MAGNUMTECH",   marca2:"Thermaltake",   marca3:"Antec",      precio: 24880}
                    ]

const internos = ["Mother", "Procesador", "Placa de Video", "Disco Solido", "RAM", "Fuente", "Cooler", "Gabinete"]

//Funciones ----------------------------------------------------------------------------------------

function calcularPrecio(componente, patreons){
    if(patreons=="Redragon"){
        total+=1000
        alert(componente + " " + patreons + " : Producto agregado correctamente!")
    }else if(patreons=="Logitech"){
        total+=1500
        alert(componente + " " + patreons + " : Producto agregado correctamente!")
    }else if(patreons=="HyperX"){
        total+=2500
        alert(componente + " " + patreons + " : Producto agregado correctamente!")
    }else if(patreons!="Redragon"||"Logitech"||"HyperX"){
        while(patreons!="Redragon"||"Logitech"||"HyperX"){
            alert("Error de tipeo, por favor vuelva a ingresar su respuesta...")
            patreons = prompt(componente+"\n¿Prefiere Redragon, Logitech o HyperX?")
            calcularPrecio(componente, patreons);
            break;
        }
    }
}

//Código -------------------------------------------------------------------------------------------

let mensajeDeBienvenida = prompt("¡Hola, bienvenido a Red Line Project! ¿En que lo podemos ayudar?\nA) Ver promociones del día!\nB) Hardware de entrada y salida\nC) Hardware de almacenamiento y procesamiento\nD) Armar mi propia computadora\nE) Terminar compra")
while(mensajeDeBienvenida != "E"){
    if(mensajeDeBienvenida == "A"){
        let resultado = productosEYS.filter((producto)=>producto.promocion==="si")
        const listaOfertas = resultado.map (producto => {
            return '- ' +producto.nombre+ ' $' +producto.precio
        });
        alert (listaOfertas.join ('\n'))
    
    }else if(mensajeDeBienvenida == "B"){
        let aclaracionEYS = prompt("...y que es lo que precisaba? Por favor seleccione UNA opción:\n1) Mouse\n2) Teclado\n3) Cámara\n4) Altavoces\n5) Auriculares\n6) Microfono\n7) Pantalla\n8) Mousepad");
        switch(aclaracionEYS){
            case "1":
                componente = externos[0]
                precio = productosEYS[0].precio
                total+=14489
                patreons = prompt(componente+"\n¿Prefiere Redragon, Logitech o HyperX?")
                calcularPrecio(componente,patreons)
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            case "2":
                componente = externos[1]
                precio = productosEYS[1].precio
                total+=12284
                patreons = prompt(componente+"\n¿Prefiere Redragon, Logitech o HyperX?")
                calcularPrecio(componente,patreons)
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            case "3":
                componente = externos[2]
                precio = productosEYS[2].precio
                total+=12028
                patreons = prompt(componente+"\n¿Prefiere Redragon, Logitech o HyperX?")
                calcularPrecio(componente,patreons)
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            case "4":
                componente = externos[3]
                precio = productosEYS[3].precio
                total+=12778
                patreons = prompt(componente+"\n¿Prefiere Redragon, Logitech o HyperX?")
                calcularPrecio(componente,patreons)
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            case "5":
                componente = externos[4]
                precio = productosEYS[4].precio
                total+=12903
                patreons = prompt(componente+"\n¿Prefiere Redragon, Logitech o HyperX?")
                calcularPrecio(componente,patreons)
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            case "6":
                componente = externos[5]
                precio = productosEYS[5].precio
                total+=7266
                patreons = prompt(componente+"\n¿Prefiere Redragon, Logitech o HyperX?")
                calcularPrecio(componente,patreons)
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            case "7":
                componente = externos[6]
                precio = productosEYS[6].precio
                total+=44763
                patreons = prompt(componente+"\n¿Prefiere Redragon, Logitech o HyperX?")
                calcularPrecio(componente,patreons)
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            case "8":
                componente = externos[7]
                precio = productosEYS[7].precio
                total+=3899
                patreons = prompt(componente+"\n¿Prefiere Redragon, Logitech o HyperX?")
                calcularPrecio(componente,patreons)
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            }
        mensajeDeBienvenida = prompt("¡Hola, bienvenido a Red Line Project! ¿En que lo podemos ayudar?\nA) Ver promociones del día!\nB) Hardware de entrada y salida\nC) Hardware de almacenamiento y procesamiento\nD) Armar mi propia computadora\nE) Terminar compra")
        
    }else if (mensajeDeBienvenida == "C"){
        let aclaracionAYP = prompt("...y que es lo que precisaba? Por favor seleccione UNA opción:\n1) Mother Board\n2) Procesador\n3) Placa de Video\n4) Disco Solido\n5) RAM\n6) Fuente\n7) Cooler\n8) Gabinete");
        switch(aclaracionAYP){
            case "1":
                total+=34490
                componente = internos[0]
                precio = productosAYP[0].precio
                patreons = prompt(componente+" ¿Prefiere "+productosAYP[0].marca1+", "+productosAYP[0].marca2+" o "+productosAYP[0].marca3+"?")
                alert(componente+" "+patreons+" añadida al carrito de compras")
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            case "2":
                total+=72858
                componente = internos[1]
                precio = productosAYP[1].precio
                patreons = prompt(componente+" ¿Prefiere "+productosAYP[1].marca1+" o "+productosAYP[1].marca2+"?")
                alert(componente+" "+patreons+" añadido al carrito de compras")
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            case "3":
                total+=139900
                componente = internos[2]
                precio = productosAYP[2].precio
                patreons = prompt(componente+" ¿Prefiere "+productosAYP[2].marca1+", "+productosAYP[2].marca2+" o "+productosAYP[2].marca3+"?")
                alert(componente+" "+patreons+" añadida al carrito de compras")
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            case "4":
                total+=11019
                componente = internos[3]
                precio = productosAYP[3].precio
                patreons = prompt(componente+" ¿Prefiere "+productosAYP[3].marca1+", "+productosAYP[3].marca2+" o "+productosAYP[3].marca3+"?")
                alert(componente+" "+patreons+" añadido al carrito de compras")
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            case "5":
                total+=13210
                componente = internos[4]
                precio = productosAYP[4].precio
                patreons = prompt(componente+" ¿Prefiere "+productosAYP[4].marca1+", "+productosAYP[4].marca2+" o "+productosAYP[4].marca3+"?")
                alert(componente+" "+patreons+" añadida al carrito de compras")
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            case "6":
                total+=8399
                componente = internos[5]
                precio = productosAYP[5].precio
                patreons = prompt(componente+" ¿Prefiere "+productosAYP[5].marca1+", "+productosAYP[5].marca2+" o "+productosAYP[5].marca3+"?")
                alert(componente+" "+patreons+" añadida al carrito de compras")
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            case "7":
                total+=3948
                componente = internos[6]
                precio = productosAYP[6].precio
                patreons = prompt(componente+" ¿Prefiere "+productosAYP[6].marca1+", "+productosAYP[6].marca2+" o "+productosAYP[6].marca3+"?")
                alert(componente+" "+patreons+" añadido al carrito de compras")
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            case "8":
                total+=24880
                componente = internos[7]
                precio = productosAYP[7].precio
                patreons = prompt(componente+" ¿Prefiere "+productosAYP[7].marca1+", "+productosAYP[7].marca2+" o "+productosAYP[7].marca3+"?")
                alert(componente+" "+patreons+" añadido al carrito de compras")
                vaAlCarrito = "1 "+componente+" "+patreons+" - $"+precio
                carrito.push(vaAlCarrito)
                carrito.join("\n")
                break;
            }
        mensajeDeBienvenida = prompt("¡Hola, bienvenido a Red Line Project! ¿En que lo podemos ayudar?\nA) Ver promociones del día!\nB) Hardware de entrada y salida\nC) Hardware de almacenamiento y procesamiento\nD) Armar mi propia computadora\nE) Terminar compra")
        
    }else if (mensajeDeBienvenida == "D"){
        let procedimiento = prompt("El armado de PC's se acompaña de un seguimiento personalizado a cargo de la empresa, deje constancia de su numero movil y en breve un profesional de nuestro equipo lo estará asesorando");
        console.log(procedimiento)
        break;
    }
}
alert(carrito.join("\n")+"\n\nEl total de su compra es de: $"+total+"\n   Gracias por confiar en Red Line Project")  //-----------------------------------------------------------------------------------------------