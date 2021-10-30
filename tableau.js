let OffreLivre = {"1":[{nom:"", mail:"",localisation:"lln", etat:"", prix:"", description:"", image:""}]}
let DemandeLivre = {"1":[{nom:"", mail:"",localisation:"wolluwe", etat:"", prix:"", description:"", image:""}]}


function chercherData(route,type){
    let data
    let xhr = new XMLHttpRequest();
    xhr.open(type, route, true);
    xhr.onload = function() {
        console.log(this.responseText);
        data = JSON.parse(this.responseText);
        console.log("onload fonctionne");
    };
    xhr.send();
}

function loadPageOffre() {
    document.getElementById("rechercheOffre").addEventListener("click", rechercherOffre);
}

function loadPageDemande() {
    document.getElementById("rechercheDemande").addEventListener("click", rechercherDemande);
}

function add_offre(IDDuc, nom, mail, localisation, etat, prix, description, image){
    let newObj = new Object();
    newObj.nom = nom;
    newObj.mail = mail;
    newObj.localisation = localisation;
    newObj.etat = etat;
    newObj.prix = prix;
    newObj.description = description;
    newObj.image = image;
    if (IDDuc in OffreLivre){
        OffreLivre[IDDuc].push(newObj);
    }else{
        OffreLivre[IDDuc] = [newObj];
    }
    ecrireOffre(OffreLivre)
}
function add_demande(IDDuc, nom, mail, localisation, prix){
    let newObj = new Object();
    newObj.nom = nom;
    newObj.mail = mail;
    newObj.localisation = localisation;
    newObj.prix = prix;
    if (IDDuc in DemandeLivre){
        DemandeLivre[IDDuc].push(newObj);
    }else {
        DemandeLivre[IDDuc] = [newObj];
    }
}

function rechercherOffre() {
    let IDDuc = document.getElementById("offre").value;
    let html = ""

    for(let i in OffreLivre[IDDuc]) {
        console.log(i)
        html += `<tr>
                <td>N°${i}</td>
                <td><img src="livre.jpg" alt="livre ephec" height="100" width="100"></td>
                <td>${OffreLivre[IDDuc][i].nom}</td>
                <td>${OffreLivre[IDDuc][i].etat}</td>
                <td>${OffreLivre[IDDuc][i].description}</td>
                <td>${OffreLivre[IDDuc][i].localisation}</td>
                <td>${OffreLivre[IDDuc][i].prix}€</td>
                <td>
                    <form>  
                        <a href="mailto:${OffreLivre[IDDuc][i].mail}?subject=livre occasion">contact</a>
                    </form>
                </td>
            </tr>`
    }
    document.getElementById("donneeTableau").innerHTML = html;
}

function rechercherDemande() {
    let IDDuc = document.getElementById("demande").value;
    let html = ""
    DemandeLivre = chercherData("","GET")
    for(let i in DemandeLivre[IDDuc]) {
        console.log(i)
        html += `<tr>
                <td>N°${i}</td>
                <td><img src="livre.jpg" alt="livre ephec" height="100" width="100"></td>
                <td>${DemandeLivre[IDDuc][i].nom}</td>
                <td>${DemandeLivre[IDDuc][i].localisation}</td>
                <td>${DemandeLivre[IDDuc][i].prix}€</td>
                <td>
                    <form>
                        <a href="mailto:${OffreLivre[IDDuc][i].mail}?subject=livre occasion">contact</a>
                    </form>
                </td>
            </tr>`
    }
    document.getElementById("donneeTableau").innerHTML = html;

}
function triDemande(){
    let loc = document.getElementById("localisation").value;
    let IDDuc = document.getElementById("demande").value;
    console.log(loc)
    let html = ""
    for (let i in OffreLivre[IDDuc]) {
        console.log(i)
        if (DemandeLivre[IDDuc][i].localisation === document.getElementById("localisation").value) {
            html += `<tr>
                <td>N°${i}</td>
                <td><img src="livre.jpg" alt="livre ephec" height="100" width="100"></td>
                <td>${DemandeLivre[IDDuc][i].nom}</td>
                <td>${DemandeLivre[IDDuc][i].localisation}</td>
                <td>${DemandeLivre[IDDuc][i].prix}€</td>
                <td>
                    <form>  
                        <a href="mailto:${DemandeLivre[IDDuc][i].mail}?subject=livre occasion">contact</a>
                    </form>
                </td>
            </tr>`
        }
        document.getElementById("donneeTableau").innerHTML = html;
    }
}

function triOffre() {
    let loc = document.getElementById("localisation").value;
    let IDDuc = document.getElementById("offre").value;
    console.log(loc)
    let html = ""
    for (let i in OffreLivre[IDDuc]) {
        console.log(i)
        if (OffreLivre[IDDuc][i].localisation === document.getElementById("localisation").value) {
            html += `<tr>
                <td>N°${i}</td>
                <td><img src="livre.jpg" alt="livre ephec" height="100" width="100"></td>
                <td>${OffreLivre[IDDuc][i].nom}</td>
                <td>${OffreLivre[IDDuc][i].etat}</td>
                <td>${OffreLivre[IDDuc][i].description}</td>
                <td>${OffreLivre[IDDuc][i].localisation}</td>
                <td>${OffreLivre[IDDuc][i].prix}€</td>
                <td>
                    <form>  
                        <a href="mailto:${OffreLivre[IDDuc][i].mail}?subject=livre occasion">contact</a>
                    </form>
                </td>
            </tr>`
        }
        document.getElementById("donneeTableau").innerHTML = html;
    }
}
