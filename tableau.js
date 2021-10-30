let OffreLivre = {1 : [{mail:"q.roeland@dtudents.ephec.be",nom:"mon premier livre",localisation:"LLN",etat:"neuf",prix:5,description:"livre de cours",image:"livre.png"},
                      {mail:"test@dtudents.ephec.be",nom:"mon livre de cours",localisation:"LLN",etat:"presque neuf",prix:6,description:"livre de cours",image:"livre.png"},
                      {mail:"moi@dtudents.ephec.be",nom:"un livre",localisation:"LLN",etat:"neuf",prix:5.5,description:"livre de cours",image:"livre.png"}],
                  2 : [{mail:"quelquun@dtudents.ephec.be",nom:"livre de math",localisation:"Wolluwe",etat:"neuf",prix:5,description:"livre compléter",image:"livre.png"},
                      {mail:"q.roeland@dtudents.ephec.be",nom:"mon premier livre",localisation:"Wolluwe",etat:"utilise",prix:4,description:"livre de cours",image:"livre.png"}],
                  3 : [{mail:"test@dtudents.ephec.be",nom:"livre de python",localisation:"LLN",etat:"neuf",prix:5,description:"livre de cours",image:"livre.png"},
                      {mail:"etudiant@dtudents.ephec.be",nom:"livre de python",localisation:"woluwe",etat:"neuf",prix:6,description:"livre de cours",image:"livre.png"},
                      {mail:"moi@dtudents.ephec.be",nom:"livre de python",localisation:"LLN",etat:"neuf",prix:5.4,description:"livre de cours",image:"livre.png"}]}
let DemandeLivre = {1 : [{mail:"q.roeland@dtudents.ephec.be",nom:"livre de cours",localisation:"LLN",prix:5},
                        {mail:"test@dtudents.ephec.be",nom:"livre de cours ",localisation:"LLN",prix:5}],
                    2 : [{mail:"moi@dtudents.ephec.be",nom:"mon premier livre",localisation:"Wolluwe",prix:5}]};
document.addEventListener('DOMContentLoaded', loadPage());
function loadPage(){
    for (let i in OffreLivre){
        
    }
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
    for(let i in DemandeLivre[IDDuc]) {
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