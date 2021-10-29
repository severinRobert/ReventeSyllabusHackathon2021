let OffreLivre = {};
let DemandeLivre = {};
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