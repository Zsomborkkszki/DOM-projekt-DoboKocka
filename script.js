const kep1        = document.getElementById("kocka1-kep");
const kep2        = document.getElementById("kocka2-kep");
const szam1       = document.getElementById("jatekos1-szam");
const szam2       = document.getElementById("jatekos2-szam");
const kartya1     = document.getElementById("jatekos1-kartya");
const kartya2     = document.getElementById("jatekos2-kartya");
const eredmenyElem= document.getElementById("eredmeny");
const gomb        = document.getElementById("dobas-gomb");
const lista       = document.getElementById("tortenet-lista");
const dobsszamLab = document.getElementById("dobas-szamlalo");
const stat1Elem   = document.getElementById("stat-anna");
const stat2Elem   = document.getElementById("stat-bela");
const statDElem   = document.getElementById("stat-dontetlen");

let korSzam  = 0;
let statAnna = 0;
let statBela = 0;
let statDont = 0;

function veletlenDobas() {
    return Math.floor(Math.random() * 6) + 1;
}

function kockaKepetFrissit(kepElem, ertek) {
    kepElem.src = "kepek/kocka" + ertek + ".svg";
    kepElem.alt = ertek + " pontos kocka";
}

function szamotKiir(szamElem, ertek) {
    szamElem.innerText = ertek;
}

function gyoztesMeghataroz(ertek1, ertek2) {
    if (ertek1 > ertek2) {
        return { szoveg: "Anna nyert!", osztaly: "kek", kartya: "1" };
    }
    if (ertek2 > ertek1) {
        return { szoveg: "Béla nyert!", osztaly: "piros", kartya: "2" };
    }
    return { szoveg: "Döntetlen!", osztaly: "szurke", kartya: null };
}

function eredmenytKiir(szoveg) {
    eredmenyElem.innerText = szoveg;
}


function kartyakatStilusoz(gyoztes) {
    kartya1.classList.remove("nyertes", "vesztes");
    kartya2.classList.remove("nyertes", "vesztes");

    if (gyoztes.kartya === "1") {
        kartya1.classList.add("nyertes");
        kartya2.classList.add("vesztes");
    } else if (gyoztes.kartya === "2") {
        kartya2.classList.add("nyertes");
        kartya1.classList.add("vesztes");
    }
}

function statisztikatNoveli(gyoztes) {
    if (gyoztes.kartya === "1") statAnna++;
    else if (gyoztes.kartya === "2") statBela++;
    else statDont++;
}

function statisztikatKiir() {
    stat1Elem.innerText = statAnna;
    stat2Elem.innerText = statBela;
    statDElem.innerText = statDont;
}

function dobas() {
    korSzam++;

    const ertek1 = veletlenDobas();
    const ertek2 = veletlenDobas();
    const gyoztes = gyoztesMeghataroz(ertek1, ertek2);

    kockaKepetFrissit(kep1, ertek1);
    kockaKepetFrissit(kep2, ertek2);

    szamotKiir(szam1, ertek1);
    szamotKiir(szam2, ertek2);

    eredmenytKiir(gyoztes.szoveg);
    kartyakatStilusoz(gyoztes);

    statisztikatNoveli(gyoztes);
    statisztikatKiir();
}

gomb.addEventListener("click", dobas);