let optionsOffre = '<label htmlFor="etat">Etat du livre</label><br>' +
    '<select id="etat">' +
        '<option value="">Choisissez</option>' +
        '<option value="neuf">Neuf</option>' +
        '<option value="cNeuf">Comme neuf</option>' +
        '<option value="utilise">Utilisé</option>' +
    '</select><br>' +
    '<label htmlFor="image">Image du livre</label><br>' +
    '<input type="file" id="image" name="image"><br><br>' +
        '<label htmlFor="description">Description</label><br>' +
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
    let IDLivre = form.IDLivre.value
    let prix = form.prix.value
    if(confirm("êtes-vous sûre ")) {

    }
}