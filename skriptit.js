function autonValinta() {
    if (document.getElementById("autoA").checked) {
        polttoaine = document.getElementById("autoA").value;
    } else if (document.getElementById("autoB").checked) {
        polttoaine = document.getElementById("autoB").value;
    } else if (document.getElementById("autoC").checked) {
        polttoaine = document.getElementById("autoC").value;
    }

    var matkaMetreinä = document.getElementById("matka").value * 1000;

    var nopeus1 = document.getElementById("nopeus1").value / 3.6;
    var nopeus2 = document.getElementById("nopeus2").value / 3.6;

    var aika1 = matkaMetreinä / nopeus1;
    var aika2 = matkaMetreinä / nopeus2;
    console.log(aika1);
    console.log(aika2);
    var vertaaAjat = muunnaAika(aika1, aika2);
    document.getElementById("mikaAuto").innerHTML = vertaaAjat; // "polttoaine: " + polttoaine + " matka: " + matka + "m. nopeus1: " + nopeus1 + "m/s. nopeus2: " + nopeus2 + "m/s";
}

function muunnaAika(aika1, aika2) {
    var tunnit1 = Math.floor(aika1 / 60 / 60);
    var minuutit1 = Math.floor(aika1 / 60) - (tunnit1 * 60);

    var tunnit2 = Math.floor(aika2 / 60 / 60);
    var minuutit2 = Math.floor(aika2 / 60) - (tunnit2 * 60);

    aikaEro(tunnit1, minuutit1, tunnit2, minuutit2);
    var ajanEsitys1 = "";
    var ajanEsitys2 = "";

    var nopeampi = "";
    if (tunnit1 == 1) {
        ajanEsitys1 = " Aika 1: " + tunnit1 + " tunti " + minuutit1 + " minuuttia";
    } else {
        ajanEsitys1 = " Aika 1: " + tunnit1 + " tuntia " + minuutit1 + " minuuttia";
    }
    if (tunnit2 == 1) {
        ajanEsitys2 = " Aika 2: " + tunnit2 + " tunti " + minuutit2 + " minuuttia";
    } else {
        ajanEsitys2 = " Aika 2: " + tunnit2 + " tuntia " + minuutit2 + " minuuttia";
    }

    return nopeampi;
}