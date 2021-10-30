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
    if (IDDuc in OffreLivre){
        OffreLivre[IDDuc].push(newObj);
    }else{
        OffreLivre[IDDuc] = [newObj];
    }
}
function add_demande(IDDuc, mail, localisaton, prix){
    let newObj = new Object();
    newObj.mail = mail;
    newObj.localisation = localisation;
    newObj.prix = prix;
    if (IDDuc in DemandeLivre){
        DemandeLivre[IDDuc].push(newObj);
    }else {
        DemandeLivre[IDDuc] = [newObj];
    }
}
