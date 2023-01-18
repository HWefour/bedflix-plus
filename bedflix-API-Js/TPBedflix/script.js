let key = `73ab5181`;
let recherche = document.querySelector('#recherche');
let btn = document.querySelector('#btnRecherche');
let val;
let film;
let poster1 ;
let sectionImg;
let imgfilms = document.getElementById('imgfilm');
function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}


async function rechercheFilm() {
    try {
        film = `https://www.omdbapi.com/?apikey=${key}&t=${val}`;
        val = recherche.value;
        poster1 = document.getElementById('PosterFilm1');
        await fetch(film)
            .then(reponse => reponse.json())
            .then(data => {
                console.log(data);
                if (data.Poster !== "N/A") {
                    poster1 = data.Poster;
                    console.log(data.Poster);
                    
                    let fuei =createDom('img'," ",imgfilms);
                    fuei.setAttribute('src', poster1);
                    console.log(fuei.src);

                }
                /* if(poster1 == "undefined" || poster1 == undefined){
                    imgfilms.remove();
                } */
                
                
            })
    } catch (error) {
        console.error(error);
    }
    
}

btn.addEventListener('click', function () {
    val = recherche.value;
    console.log(val);
    rechercheFilm();
    console.log(fuei);
    console.log(imgfilms);
    
}); 
 
