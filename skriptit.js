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

    muunnaAika(aika1, aika2);
    //document.getElementById("mikaAuto").innerHTML = vertaaAjat; // "polttoaine: " + polttoaine + " matka: " + matka + "m. nopeus1: " + nopeus1 + "m/s. nopeus2: " + nopeus2 + "m/s";
}

function muunnaAika(aika1, aika2) {
    var tunnit1 = Math.floor(aika1 / 60 / 60);

    var minuutit1 = Math.floor(aika1 / 60) - (tunnit1 * 60);
    console.log("tunnit 1 " + tunnit1 + " minuutit 1 " + minuutit1);
    var tunnit2 = Math.floor(aika2 / 60 / 60);
    var minuutit2 = Math.floor(aika2 / 60) - (tunnit2 * 60);
    console.log("tunnit 2 " + tunnit2 + " minuutit 2 " + minuutit2);
    document.getElementById("nopeusEka").innerHTML += tulostaAika(tunnit1, minuutit1);
    document.getElementById("nopeusToka").innerHTML += tulostaAika(tunnit2, minuutit2);
    document.getElementById("aikojenEro").innerHTML = aikaEro(tunnit1, minuutit1, tunnit2, minuutit2);
}

function tulostaAika(t, m) {
    var aika;
    if (t == 1) {
        aika = "Matkaan kulunut aika: " + t + " tunti " + m + " minuuttia.";
    } else if (t == 0) {
        aika = "Matkaan kulunut aika: " + m + " minuuttia.";
    } else if (t == 1 && m == 0) {
        aika = "Matkaan kulunut aika: " + t + " tunti.";
    } else if (m == 0) {
        aika = "Matkaan kulunut aika: " + t + " tuntia.";
    } else {
        aika = "Matkaan kulunut aika: " + t + " tuntia " + m + " minuuttia.";
    }
    return aika;
}

function aikaEro(t1, m1, t2, m2) {
    var nopeampi;
    var tuntiEro;
    var minuuttiEro;

    if (t1 > t2 || t1 == t2 && m1 > m2) {
        if (t1 > t2 && m1 < m2) {
            tuntiEro = t1 - 1 - t2;
            minuuttiEro = m1 + 60 - m2;
        } else {
            tuntiEro = t1 - t2;
            minuuttiEro = m1 - m2;
        }
        if (tuntiEro == 1) {
            nopeampi = "Nopeus 2 on " + tuntiEro + " tunnin ja " + minuuttiEro + " minuuttia nopeampi."
        } else if (tuntiEro == 0) {
            nopeampi = "Nopeus 2 on " + minuuttiEro + " minuuttia nopeampi."
        } else if (tuntiEro == 1 || minuuttiEro == 0) {
            nopeampi = "Nopeus 2 on " + tuntiEro + " tunnin nopeampi."
        } else if (minuuttiEro == 0) {
            nopeampi = "Nopeus 2 on " + tuntiEro + " tuntia nopeampi."
        } else {
            nopeampi = "Nopeus 2 on " + tuntiEro + " tuntia ja " + minuuttiEro + " minuuttia nopeampi."
        }
    } else if (t1 < t2 || t1 == t2 && m1 < m2) {
        if (t1 < t2 && m1 > m2) {
            tuntiEro = t2 - 1 - t1;
            minuuttiEro = m2 + 60 - m1;
        } else {
            tuntiEro = t2 - t1;
            minuuttiEro = m2 - m1;
        }
        if (tuntiEro == 1) {
            nopeampi = "Nopeus 1 on " + tuntiEro + " tunnin ja " + minuuttiEro + " minuuttia nopeampi."
        } else if (tuntiEro == 0) {
            nopeampi = "Nopeus 1 on " + minuuttiEro + " minuuttia nopeampi."
        } else if (tuntiEro == 1 || minuuttiEro == 0) {
            nopeampi = "Nopeus 1 on " + tuntiEro + " tunnin nopeampi."
        } else if (minuuttiEro == 0) {
            nopeampi = "Nopeus 1 on " + tuntiEro + " tuntia nopeampi."
        } else {
            nopeampi = "Nopeus 1 on " + tuntiEro + " tuntia ja " + minuuttiEro + " minuuttia nopeampi."
        }
    } else {
        nopeampi = "Sama nopeus."
    }
    return nopeampi;
}