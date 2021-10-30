let OffreLivre = {"1":[{mail : "mail@students.ephec.be", localisation : "Woluwe", etat : "neuf", prix : "12", description : "oui", nom : "Logiciel et informatique de gestion"}]};
let DemandeLivre = {"1":[{mail : "mail@students.ephec.be", localisation : "Woluwe", prix : "12", nom : "Logiciel et informatique de gestion"}]};

function loadPageOffre() {
    document.getElementById("rechercheOffre").addEventListener("click", rechercherOffre);
}

function loadPageDemande() {
    document.getElementById("rechercheDemande").addEventListener("click", rechercherDemande);
}

function add_offre(IDDuc, mail, localisation, etat, prix, description, image){
    let newObj = new Object();
    newObj.mail = mail;
    newObj.localisation = localisation;
    newObj.etat = etat;
    newObj.prix = prix;
    newObj.description = description;
    newObj.image = image;
    if (OffreLivre.hasOwnProperty(IDDuc)){
        OffreLivre.IDDuc.push(newObj);
    }else{
        OffreLivre.IDDuc[newObj];
    }
}
function add_demande(IDDuc, mail, localisaton, prix){
    DemandeLivre.IDDuc += new Object();
    DemandeLivre.IDDuc.mail = mail;
    DemandeLivre.IDDuc.localisation = localisaton;
    DemandeLivre.IDDuc.prix = prix;
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
                        <button type="submit" formAction="index.html">achat</button>
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
        console.log(i)
        html += `<tr>
                <td>N°${i}</td>
                <td><img src="livre.jpg" alt="livre ephec" height="100" width="100"></td>
                <td>${DemandeLivre[IDDuc][i].nom}</td>
                <td>${DemandeLivre[IDDuc][i].localisation}</td>
                <td>${DemandeLivre[IDDuc][i].prix}€</td>
                <td>
                    <form>
                        <button type="submit" formAction="index.html">vente</button>
                    </form>
                </td>
            </tr>`
    }
    document.getElementById("donneeTableau").innerHTML = html;
}