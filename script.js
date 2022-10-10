



var VectorNombres = [];
var Nombre="";
var Title="";
var vision="";
var nation="";




ConexionAPI();




function ConexionAPI() {
    let url = 'https://api.genshin.dev/characters/';
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

    var mostrarData = (data) => {
        //console.log(data)   //Informacion del Json
        let body = ""
        for (let index = 0; index < data.length; index++) {
            //console.log(data[index]);
            VectorNombres.push(data[index]);


        }

        TraerDatosPj();
        //createCard();
        


        //console.log(body)
    }

}



function TraerDatosPj() {

    for (let index = 0; index < VectorNombres.length; index++) {
        var url = `https://api.genshin.dev/characters/${VectorNombres[index]}`;
        image=`https://api.genshin.dev/characters/${VectorNombres[index]}/icon.png`

        fetch(url)
            .then(response => response.json())
            .then(data => mostrarData(data))
            .catch(error => console.log(error))

        var mostrarData = (data) => {
                console.log(data);

            Nombre=data.name;
            Title=data.title;
            vision=data.vision;
            nation=data.nation;
            


            createCard(Nombre,Title,vision,nation,image);

            //console.log(body)
        }
    }



}


function createCard(texto1,texto2,texto3,texto4) {

    let card = document.getElementById("row row-cols-1 row-cols-md-2");

    
        card.innerHTML += `   <div class="col mb-4">
        <div class="card">
            <div class="card-body">
            <div class="container">
                       
            <img src="https://api.genshin.dev/characters/${texto1.toLowerCase().replace(" ","-")}/icon.png"  class="rounded-circle" alt="Cinque Terre" width="100" height="100"> 
          </div>
                <h5 class="card-title">Nombre Personaje: ${texto1}</h5> 
                <p class="card-text">${texto2}.</p>
                <p class="card-text">${texto3}.</p>
                <p class="card-text">${texto4}.</p>
            </div>
    
        </div>
    </div>
    `;
    

}

