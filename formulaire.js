let optionsOffre = '<label for="etat">Etat du livre</label><br>' +
    '<select id="etat" required>' +
        '<option value="">Choisissez</option>' +
        '<option value="neuf">Neuf</option>' +
        '<option value="cNeuf">Comme neuf</option>' +
        '<option value="utilise">Utilisé</option>' +
    '</select><br>' +
    '<label for="image">Image du livre</label><br>' +
    '<input type="file" id="image" name="image"><br><br>' +
        '<label for="description">Description</label><br>' +
        '<textarea id="description" placeholder="Décrire l\'état du livre">' +
        '</textarea>' +
        '<br><br>'

function changeForm(e) {
    if(e.value == "offre") {
        document.getElementById('optionOffre').innerHTML = optionsOffre;
    }else {
        document.getElementById('optionOffre').innerHTML = '';
    }
}

function submitForm(form) {
    let offreDemande = form.offreDemande.value
    let mail = form.mail.value
    let IDDuc = form.IDLivre.value
    let prix = form.prix.value
    let nom = form.nom.value
    let localisation = form.localisation.value

    if(offreDemande == '') {
        alert("Vous n'avez pas sélectionné ")
    } else if(offreDemande == 'offre') {
        let etat = form.etat.value
        let image = form.image.value
        let description = form.description.value
        console.log(image);
        if(confirm(`Merci de vérifier les données :\n 
                    Type Demande/Offre : ${offreDemande} \n 
                    Localisation : ${localisation} \n 
                    Mail : ${mail} \n 
                    ID Duc : ${IDDuc} \n
                    Intitulé : ${nom} \n
                    Prix : ${prix} \n
                    Etat : ${etat} \n
                    description : ${description}`)) {
            add_offre(IDDuc, nom, mail, localisation, etat, prix, description, image)

        }
    } else if(confirm(`Merci de vérifier les données :\n 
                    Type Demande/Offre : ${offreDemande} \n 
                    Localisation : ${localisation} \n 
                    Mail : ${mail} \n 
                    ID Duc : ${IDDuc} \n
                    Intitulé : ${nom} \n
                    Prix : ${prix} \n`)) {
        add_demande(IDDuc, nom, mail, localisation, prix)
        console.log(IDDuc, nom, mail, localisation, prix)
    }

}