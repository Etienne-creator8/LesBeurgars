var AgeOr = document.getElementById("AgeOr");
var LaGrandeMagie = document.getElementById("LaGrandeMagie");
var LaMegereApprivoise = document.getElementById("LaMegereApprivoise");
var FunerailledHiver = document.getElementById("FunerailledHiver");

document.getElementById("AnnaHorloge").style.left = "-15vw"
document.getElementById("AlixLouisXV").style.left = "-7.5vw"
document.getElementById("TeddyCartouche").style.left = "-12.5vw"
document.getElementById("ManonMedicis").style.left = "-17vw"


function HoverInAgeOr() {
    document.getElementById("AnnaHorloge").style.left = "5vw"
    document.getElementById("AlixLouisXV").style.left = "7vw"
    document.getElementById("TeddyCartouche").style.left = "4vw"
    document.getElementById("ManonMedicis").style.left = "0vw"
    document.getElementById("AfficheAgeOr").style.transform = 'rotate(' + 7 + 'deg)';
 }

function HoverOutAgeOr() {
    document.getElementById("AnnaHorloge").style.left = "-15vw"
    document.getElementById("AlixLouisXV").style.left = "-7.5vw"
    document.getElementById("TeddyCartouche").style.left = "-12.5vw"
    document.getElementById("ManonMedicis").style.left = "-17vw"
    document.getElementById("AfficheAgeOr").style.transform = 'rotate(' + 0 + 'deg)';
 }

function OnClickAgeOr() {
    window.location="AgeOr/age-or.html";
}

AgeOr.addEventListener("mouseover", HoverInAgeOr,false);
AgeOr.addEventListener("mouseout", HoverOutAgeOr,false);
AgeOr.addEventListener("click", OnClickAgeOr,false);

function HoverInMagie() {
    document.getElementById("MaloOtto").style.right = "-1.5vw"
    document.getElementById("FloraEva").style.right = "-6.5vw"
    document.getElementById("FloraEtienneSpectacle").style.right = "-2.5vw"
    document.getElementById("AlixInspecteur").style.right = "-7.5vw"
    document.getElementById("MayaMilitaire").style.right = "-5vw"
    document.getElementById("EmericMaitreHotel").style.right = "-5vw"
    document.getElementById("Eva").style.right = "-3vw"
    document.getElementById("EnkiGuiseppe").style.right = "-2.5vw"
    document.getElementById("EtienneCalogero").style.right = "0vw"
    document.getElementById("ZoeMartha").style.right = "0vw"
    document.getElementById("AfficheGrandeMagie").style.transform = 'rotate(' + -7 + 'deg)';
 }

function HoverOutMagie() {
    document.getElementById("MaloOtto").style.right = "-10vw"
    document.getElementById("FloraEva").style.right = "-14.5vw"
    document.getElementById("FloraEtienneSpectacle").style.right = "-10.25vw"
    document.getElementById("AlixInspecteur").style.right = "-15vw"
    document.getElementById("MayaMilitaire").style.right = "-12vw"
    document.getElementById("EmericMaitreHotel").style.right = "-13vw"
    document.getElementById("Eva").style.right = "-9vw"
    document.getElementById("EnkiGuiseppe").style.right = "-11vw"
    document.getElementById("EtienneCalogero").style.right = "-8vw"
    document.getElementById("ZoeMartha").style.right = "-10vw"
    document.getElementById("AfficheGrandeMagie").style.transform = 'rotate(' + 0 + 'deg)';
 }

 function OnClickMagie() {
    window.location="LaGrandeMagie/la-grande-magie.html";
}

LaGrandeMagie.addEventListener("mouseover", HoverInMagie,false);
LaGrandeMagie.addEventListener("mouseout", HoverOutMagie,false);
LaGrandeMagie.addEventListener("click", OnClickMagie,false);

function HoverInMegere() {
    document.getElementById("FlorianPetruchio").style.right = "-3vw"
    document.getElementById("MariageFloraEnki").style.right = "-3vw"
    document.getElementById("MayaKatarina").style.right = "-4vw"
    document.getElementById("EvaBloque").style.right = "0vw"
    document.getElementById("ZoeManon").style.right = "0vw"
    document.getElementById("AndreaDanse").style.right = "2vw"
    document.getElementById("MaloCambio").style.right = "0vw"
    document.getElementById("AfficheLaMegereApprivoise").style.transform = 'rotate(' + 7 + 'deg)';
 }

function HoverOutMegere() {
    document.getElementById("FlorianPetruchio").style.right = "8vw"
    document.getElementById("MariageFloraEnki").style.right = "8vw"
    document.getElementById("MayaKatarina").style.right = "5vw"
    document.getElementById("EvaBloque").style.right = "7vw"
    document.getElementById("ZoeManon").style.right = "11vw"
    document.getElementById("AndreaDanse").style.right = "8vw"
    document.getElementById("MaloCambio").style.right = "14vw"
    document.getElementById("AfficheLaMegereApprivoise").style.transform = 'rotate(' + 0 + 'deg)';
 }

 function OnClickMegere() {
    window.location="LaMegereApprivoise/la-megere-apprivoiser.html";
}

LaMegereApprivoise.addEventListener("mouseover", HoverInMegere,false);
LaMegereApprivoise.addEventListener("mouseout", HoverOutMegere,false);
LaMegereApprivoise.addEventListener("click", OnClickMegere, false);

function HoverInFuneraille() {
    document.getElementById("SamandriaOeuf").style.right = "5vw"
    document.getElementById("FamillePleure").style.right = "-3.5vw"
    document.getElementById("Hymalaya").style.right = "1vw"
    document.getElementById("Mariage").style.right = "7vw"
    document.getElementById("MoineHymalaya").style.right = "7vw"
    document.getElementById("Samandrina").style.right = "0vw"
    document.getElementById("AfficheFunerailledHiver").style.transform = 'rotate(' + -7 + 'deg)';
 }

function HoverOutFuneraille() {
    document.getElementById("SamandriaOeuf").style.right = "0vw"
    document.getElementById("FamillePleure").style.right = "-7vw"
    document.getElementById("Hymalaya").style.right = "-3vw"
    document.getElementById("Mariage").style.right = "0vw"
    document.getElementById("MoineHymalaya").style.right = "-2vw"
    document.getElementById("Samandrina").style.right = "-10vw"
    document.getElementById("AfficheFunerailledHiver").style.transform = 'rotate(' + 0 + 'deg)';
 }

 function OnClickFuneraille() {
    window.location="FunerailleHiver/funeraille-dhiver.html";
}

FunerailledHiver.addEventListener("mouseover", HoverInFuneraille,false);
FunerailledHiver.addEventListener("mouseout", HoverOutFuneraille,false);
FunerailledHiver.addEventListener("click", OnClickFuneraille, false);