$(document).ready(function() {
    $('#calcul').click(function() {

        var note1 = $('#note1').val();
        var note2 = $('#note2').val();
        var note3 = $('#note3').val();
        var note4 = $('#note4').val();
        var note5 = $('#note5').val();

        if (note1 && note2 && note3 && note4 && note5 && parseFloat(note1) <= 20 && parseFloat(note2) <= 20 && parseFloat(note3) <= 20 && parseFloat(note4) <= 20 && parseFloat(note5) <= 20) {
            var resultat = (parseFloat(note1) + parseFloat(note2) + parseFloat(note3) + parseFloat(note4) + parseFloat(note5)) / 5;

            if (resultat < 10)
                alert('Votre moyenne :' + resultat + ' Appréciation : En dessous de la moyenne');
            else if (resultat >= 10 && resultat < 13)
                alert('Votre moyenne est de: ' + resultat + ' Appréciation : Moyen');
            else if (resultat >= 13 && resultat < 16)
                alert('Votre moyenne : ' + resultat + ' Appréciation : Bien');
            else if (resultat >= 16 && resultat < 20)
                alert('Votre moyenne : ' + resultat + ' Appréciation : Très Bien');
            else if (resultat == 20)
                alert('Votre moyenne : ' + resultat + ' Appréciation : Exellent !');


        } else {
            alert('veuillez entrer toutes les notes !');
        }
    });
});