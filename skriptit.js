var polttoaine;

function autoValittu(autoNimi, pa) {
    var a = document.getElementsByClassName("autot");
    for (var i = 0; i < a.length; i++) {
        a[i].style.display = "none";
    }

    document.getElementById(autoNimi).style.display = "block";
    polttoaine = pa;
    //autonValinta(polttoaine);
    //document.getElementById("autoBB").style.display = "none";
}
// Tarkistetaan, mikä auto on valittu
function autoLaskut() {
    /*var polttoaine = 0;
    if (document.getElementById("autoA").checked) {
        polttoaine = document.getElementById("autoA").value;
    } else if (document.getElementById("autoB").checked) {
        polttoaine = document.getElementById("autoB").value;
    } else if (document.getElementById("autoC").checked) {
        polttoaine = document.getElementById("autoC").value;
    }*/

    var matka = document.getElementById("matka").value;
    var matkaMetreinä = matka * 1000;

    var n1 = document.getElementById("nopeus1").value;
    var n2 = document.getElementById("nopeus2").value;
    var nopeus1 = n1 / 3.6;
    var nopeus2 = n2 / 3.6;

    //Täällä virhe, esim 99 ja 100 näyttää et ois sama nopeus

    var aika1 = matkaMetreinä / nopeus1;
    var aika2 = matkaMetreinä / nopeus2;

    muunnaAika(aika1, aika2);

    polttoaineKulutus(polttoaine, matka, n1, n2);
}

// Muuntaa ajan tunneiksi ja minuuteiksi ja tulostaa molempien nopeuksien ajat ja aikaeron
function muunnaAika(aika1, aika2) {
    var tunnit1 = Math.floor(aika1 / 3600);
    var minuutit1 = Math.floor(aika1 / 60) - (tunnit1 * 60);
    var sekunnit1 = Math.floor(aika1 - (tunnit1 * 3600) - (minuutit1 * 60));
    console.log(tunnit1 + " " + minuutit1 + " " + sekunnit1);

    var tunnit2 = Math.floor(aika2 / 3600);
    var minuutit2 = Math.floor(aika2 / 60) - (tunnit2 * 60);
    var sekunnit2 = Math.floor(aika2 - (tunnit2 * 3600) - (minuutit2 * 60));
    console.log(tunnit2 + " " + minuutit2 + " " + sekunnit2);

    //Lisää vielä sekunnit! 
    document.getElementById("nopeusEka").innerHTML = tulostaAika(tunnit1, minuutit1, sekunnit1);
    document.getElementById("nopeusToka").innerHTML = tulostaAika(tunnit2, minuutit2, sekunnit2);
    document.getElementById("aikojenEro").innerHTML = aikaEro(tunnit1, minuutit1, sekunnit1, tunnit2, minuutit2, sekunnit2);
}

//Tulostaa molempien eri nopeuksien mukaan kuluneen matka-ajan
function tulostaAika(t, m, s) {
    var aika;
    if (t == 1) {
        aika = t + " tunti " + m + " minuuttia " + s + " sekuntia.";
    } else {
        aika = t + " tuntia " + m + " minuuttia " + s + " sekuntia.";
    }
    return aika;
}

// Vertaa molempia aikoja ja laskee kuinka paljon nopeampi toinen aika on
function aikaEro(t1, m1, s1, t2, m2, s2) {
    var nopeampi;
    var tuntiEro = 0;
    var minuuttiEro = 0;
    var sekuntiEro = 0;

    if (t1 > t2 || t1 == t2 && m1 > m2 || t1 == t2 && m1 == m2 && s1 > s2) {
        if (m1 > m2 && s1 < s2) { //tunnitE minuutitE sekunnitV && tunnitY minuutitE sekunnitV	
            tuntiEro = t1 - t2;
            minuuttiEro = m1 - 1 - m2;
            sekuntiEro = s1 + 60 - s2;
        } else if (t1 > t2 && m1 < m2 && s1 < s2) { //tunnitE minuutitV sekunnitV
            tuntiEro = t1 - 1 - t2;
            minuuttiEro = m1 + 60 - 1 - m2;
            sekuntiEro = s1 + 60 - s2;
        } else if (t1 > t2 && m1 < m2 && s1 >= s2) { //tunnitE minuutitV sekunnitE
            tuntiEro = t1 - 1 - t2;
            minuuttiEro = m1 + 60 - m2;
            sekuntiEro = s1 - s2;
        } else { //tunnitE minuutitE sekunnitE &&tunnitY	minuutitE sekunnitE	 && 		1 tunnitY minuutitE sekunnitY
            tuntiEro = t1 - t2;
            minuuttiEro = m1 - m2;
            sekuntiEro = s1 - s2;
        }
        nopeampi = "Nopeus 2 on nopeampi " + tuntiEro + " t " + minuuttiEro + " min " + sekuntiEro + " sekuntia.";

        /* if (tuntiEro == 1) {
             nopeampi = "Nopeus 2 on " + tuntiEro + " tunnin ja " + minuuttiEro + " minuuttia nopeampi."
         } else if (tuntiEro == 0) {
             nopeampi = "Nopeus 2 on " + minuuttiEro + " minuuttia nopeampi."
         } else if (tuntiEro == 1 || minuuttiEro == 0) {
             nopeampi = "Nopeus 2 on " + tuntiEro + " tunnin nopeampi."
         } else if (minuuttiEro == 0) {
             nopeampi = "Nopeus 2 on " + tuntiEro + " tuntia nopeampi."
         } else {
             nopeampi = "Nopeus 2 on " + tuntiEro + " tuntia ja " + minuuttiEro + " minuuttia nopeampi."
         }*/
    } else if (t1 < t2 || t1 == t2 && m1 < m2 || t1 == t2 && m1 == m2 && s1 < s2) {
        if (m1 < m2 && s1 > s2) {
            tuntiEro = t2 - t1;
            minuuttiEro = m2 - 1 - m1;
            sekuntiEro = s2 + 60 + s1;
        } else if (t1 < t2 && m1 > m2 && s1 > s2) {
            tuntiEro = t2 - 1 - t1;
            minuuttiEro = m2 - 1 + 60 - m1;
            sekuntiEro = s2 + 60 + s1;
        } else if (t1 < t2 && m1 > m2 && s1 <= s2) { //tunnitV minuutitE sekunnitV
            tuntiEro = t2 - 1 - t1;
            minuuttiEro = m2 + 60 - m1;
            sekuntiEro = s2 - s1;
        } else {
            tuntiEro = t2 - t1;
            minuuttiEro = m2 - m1;
            sekuntiEro = s2 - s1;
        }
        /*if (tuntiEro == 1) {
            nopeampi = "Nopeus 1 on " + tuntiEro + " tunnin ja " + minuuttiEro + " minuuttia nopeampi."
        } else if (tuntiEro == 0) {
            nopeampi = "Nopeus 1 on " + minuuttiEro + " minuuttia nopeampi."
        } else if (tuntiEro == 1 || minuuttiEro == 0) {
            nopeampi = "Nopeus 1 on " + tuntiEro + " tunnin nopeampi."
        } else if (minuuttiEro == 0) {
            nopeampi = "Nopeus 1 on " + tuntiEro + " tuntia nopeampi."
        } else {
            nopeampi = "Nopeus 1 on " + tuntiEro + " tuntia ja " + minuuttiEro + " minuuttia nopeampi."
        }*/
        nopeampi = "Nopeus 1 on nopeampi " + tuntiEro + " t " + minuuttiEro + " min " + sekuntiEro + " sekuntia.";
    } else {
        nopeampi = "Sama nopeus."
    }
    return nopeampi;
}

//Muutetaan ensin polttoaineenkulutus per 1 km ja sen jälkeen lasketaan nopeuden ja matkan perusteella kokonaiskulutus
function polttoaineKulutus(p, m, n1, n2) {

    var kulutus1 = p / 100;
    var kulutus2 = p / 100;

    for (var i = 0; i < n1 - 1; i++) {
        kulutus1 = kulutus1 * 1.009;
    }
    kulutus1 = (kulutus1 * m).toFixed(2);
    document.getElementById("polttoaineEka").innerHTML = "Nopeus 1 kuluttaa polttoainetta " + kulutus1 + " litraa.";

    for (var j = 0; j < n2 - 1; j++) {
        kulutus2 = kulutus2 * 1.009;
    }
    kulutus2 = (kulutus2 * m).toFixed(2);
    document.getElementById("polttoaineToka").innerHTML = "Nopeus 2 kuluttaa polttoainetta " + kulutus2 + " litraa.";

    suurempiKulutus(kulutus1, kulutus2);
}

// Tarkistaa kumpi nopeus kuluttaa enemmän polttoainetta ja kuinka paljon
function suurempiKulutus(k1, k2) {
    var suurempi = k1;
    var erotus;

    if (k1 < k2) {
        suurempi = k2;
        erotus = (k2 - k1).toFixed(2);
        document.getElementById("polttoaineEro").innerHTML = "Nopeus 2 kuluttaa polttoainetta " + erotus + " litraa enemmän kuin nopeus 1.";
    } else {
        erotus = (k1 - k2).toFixed(2);
        document.getElementById("polttoaineEro").innerHTML = "Nopeus 1 kuluttaa polttoainetta " + erotus + " litraa enemmän kuin nopeus 2.";
    }
}