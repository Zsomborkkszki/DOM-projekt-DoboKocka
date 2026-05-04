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