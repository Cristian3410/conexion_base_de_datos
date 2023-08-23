

// conexion para el servidor local
const express = require ("express"); // accediendo a la libreria express
const app = express(); // ejecuando la libreria express

app.set("view engine", "ejs"); // inidcando que vamos a utilizar el motor de visualizacion ejs en la carpeta vew para renderizar nuestro html en nuestro servidor

app.use(express.json()); //
app.use(express.urlencoded({extended:false})); //  

const  mysql = require("mysql"); // requiriendo la libreria de MYSQL



let conexion = mysql.createConnection({ // creando la conexion para la base de datos MYSQL
    host:'localhost',
    database: "mgdt",
    user:"root1",
    password:"123456789",
    port:"3307"
})


app.get("/",function(req,res){   //le estamos indicando que nos renderice o nos muestre en la ruta "/" la informacion a nuestro servidor con el metodo req
    res.render("registro");
});


app.post("/validar", function(req,res){
    const datos = req.body;  //obtenemos todos los datos que se envian  del formulario y los guardamos en esta variable 

    let nombres =  datos.nombres; //separamos el dato que tenemos de nombre y lo guardamos en esta variable
    let password = datos.password;//separamos el dato que tenemos de pasword y lo guardamos en esta variable
    let edad =  datos.edad; //separamos el dato que tenemos de edad y lo guardamos en esta variable
    let  email = datos.email; //separamos el dato que tenemos de email  y lo guardamos en esta variable
    let cargo = datos.cargo; //separamos el dato que tenemos de cargo y lo guardamos en esta variable

    let registrar = "INSERT INTO usuarios (nombres_y_apellidos,contrasena,edad,correo_corporativo,cargo) VALUES ('"+nombres+"','"+password+"','"+edad+"','"+email+"','"+cargo+"')"

   conexion.query(registrar,function(error){
    if(error){
        throw error;
    }else{
        console.log("datos almacenados correctamente")
    }
})
})

app.listen(444,function(){
    console.log("servidor creado http://localhost:444")
})

//conexion para la base de datos por mysql
