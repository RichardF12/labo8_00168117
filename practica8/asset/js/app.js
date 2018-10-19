
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = { 
    cant:cont, 
    fecha: formulario[1].value, 
    descripcion: formulario[2].value, 
    cantidad: formulario[3].value 
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();

}); 

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => { 
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click"); 
        tr.appendChild(td); 
    }); 
    tbody.appendChild(tr); 
}

const eliminar= (tbody)=>{
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

const agregar= ()=>{ 
    var eventtr = document.querySelectorAll(".click"); 
      eventtr.forEach((item, index) => { 
      item.addEventListener("click", () => { 
      document.querySelector("#fecha").value = item.childNodes[1].textContent; 
      document.querySelector("#descp").value = item.childNodes[2].textContent; 
      document.querySelector("#cant").value = item.childNodes[3].textContent; 
     }); 
    }) 
}

const mostrar = ()=>{ 
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) { 
     eliminar(document.querySelector(".tabla-btc tbody")); 
    } 
    bitacoras.forEach(item => { 
     crearElemento(item, document.querySelector(".tabla-btc tbody")); 
    }); 
    agregar(); 
   } 

/* <input type="date" id="fecha" placeholder="Fecha de la actividad">

   <textarea name="" id="descp" cols="30" rows="10" placeholder="Descripcion"></textarea>

   <input type="number" name="" id="cant">
                    
<input type="submit" value="Enviar">*/

var valdate = document.getElementById("fecha");
var valtext = document.getElementById("descp");
var valhour = document.getElementById("cant");

valdate.oninput = () =>{
    var valor = valdate.value;

    if(valor == "" || valor == null){
        valdate.style.borderColor = "red";
    }else{
        valdate.style.borderColor = "green";
    }
}

valtext.oninput = () =>{
    var valor = valtext.value;

    if(valor == "" || valor == null){
        valtext.style.borderColor = "red";
    }else{
        valtext.style.borderColor = "green";
    }
}

valhour.oninput = () =>{
    var valor = valhour.value;

    if(valor == "" || valor == null){
        valhour.style.borderColor = "red";
    }else{
        valhour.style.borderColor = "green";
    }
}




/*
¿Qué contienen la variable formulario ?
//El contenido de la form.

¿Qué hace el método evt.preventDefault() ?
//Previene que el boton submit haga un submit del formulario.

¿Qué es lo que contiene formulario[x]?
//Los nodos de fecha, descripcion y cantidad. 

¿Qué contienen las variables tr y td ?
//Nodos de tipo tr y td respectivamente.

¿Qué contienen la variable content ?
//Muestra los datos que se ingresan por nodo.

¿Qué valor tendra tbody al finalizar la iteración?
//El valor del nodo tr.

Describa en pocas palabras lo que realizara esta función
//Crea el objeto que se enviara a la tabla.

¿Qué es lo que hace .firstChild?

Después de realizar el while ¿Comó quedara el elemento tbody ?

¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent;?

¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ?

¿Qué hace el método childElementCount?

¿Qué se mostrara en pantalla cuando se ejecute la función agregar()?

¿Qué se mostrara en el navegador despues de ejecutar la función mostrar?

*/

