let OffreLivre = {"1" : [{mail:"q.roeland@dtudents.ephec.be",nom:"mon premier livre",localisation:"lln",etat:"neuf",prix:5,description:"livre de cours",image:"livre.png"},
                      {mail:"test@dtudents.ephec.be",nom:"mon livre de cours",localisation:"lln",etat:"presque neuf",prix:6,description:"livre de cours",image:"livre.png"},
                      {mail:"moi@dtudents.ephec.be",nom:"un livre",localisation:"lln",etat:"neuf",prix:5.5,description:"livre de cours",image:"livre.png"}],
                  "2" : [{mail:"quelquun@dtudents.ephec.be",nom:"livre de math",localisation:"wolluwe",etat:"neuf",prix:5,description:"livre compléter",image:"livre.png"},
                      {mail:"q.roeland@dtudents.ephec.be",nom:"mon premier livre",localisation:"wolluwe",etat:"utilise",prix:4,description:"livre de cours",image:"livre.png"}],
                  "3" : [{mail:"test@dtudents.ephec.be",nom:"livre de python",localisation:"lln",etat:"neuf",prix:5,description:"livre de cours",image:"livre.png"},
                      {mail:"etudiant@dtudents.ephec.be",nom:"livre de python",localisation:"wolluwe",etat:"neuf",prix:6,description:"livre de cours",image:"livre.png"},
                      {mail:"moi@dtudents.ephec.be",nom:"livre de python",localisation:"lln",etat:"neuf",prix:5.4,description:"livre de cours",image:"livre.png"}]}
let DemandeLivre = {"1" : [{mail:"q.roeland@dtudents.ephec.be",nom:"livre de cours",localisation:"lln",prix:5},
                        {mail:"test@dtudents.ephec.be",nom:"livre de cours ",localisation:"lln",prix:5}],
                    "2" : [{mail:"moi@dtudents.ephec.be",nom:"mon premier livre",localisation:"wolluwe",prix:5}]};
function loadPageO(){
    let html='';
    let comp = 1
    for (let i in OffreLivre){
        for (let j in OffreLivre[i]){
            html += `<tr>
                <td>N°${comp}</td>
                <td><img src="livre.jpg" alt="livre ephec" height="100" width="100"></td>
                <td>${OffreLivre[i][j].nom}</td>
                <td>${OffreLivre[i][j].etat}</td>
                <td>${OffreLivre[i][j].description}</td>
                <td>${OffreLivre[i][j].localisation}</td>
                <td>${OffreLivre[i][j].prix}€</td>
                <td>
                    <form>  
                        <a href="mailto:${OffreLivre[i][j].mail}?subject=livre occasion">contact</a>
                    </form>
                </td>
            </tr>`
            comp ++
        }
        document.getElementById("donneeTableau").innerHTML = html;
    }
}
function loadPageD(){
    let html='';
    let comp = 1
    for (let i in DemandeLivre){
        for (let j in DemandeLivre[i]){
            html += `<tr>
                <td>N°${comp}</td>
                <td>${DemandeLivre[i][j].nom}</td>
                <td>${DemandeLivre[i][j].localisation}</td>
                <td>${DemandeLivre[i][j].prix}€</td>
                <td>
                    <form>  
                        <a href="mailto:${DemandeLivre[i][j].mail}?subject=proposition livre ephec">contact</a>
                    </form>
                </td>
            </tr>`
            comp ++;
        }
        document.getElementById("donneeTableau").innerHTML = html;
    }
}
function loadPageOffre() {
    document.addEventListener('DOMContentLoaded', loadPageO());
    document.getElementById("rechercheOffre").addEventListener("click", rechercherOffre);
}

function loadPageDemande() {
    document.addEventListener('DOMContentLoaded', loadPageD());
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
function triDemande(){
    let loc = document.getElementById("localisation").value;
    let IDDuc = document.getElementById("demande").value;
    console.log(loc)
    let html = ""
    for (let i in OffreLivre[IDDuc]) {
        console.log(i)
        if (DemandeLivre[IDDuc][i].localisation == document.getElementById("localisation").value) {
            html += `<tr>
                <td>N°${i}</td>
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
    let html = "";
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
