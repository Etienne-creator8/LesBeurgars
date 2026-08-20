function HoverInSalamandre() {
    document.querySelector(".Sign").style.left = "12%"
    document.querySelector(".SalamandreTop").style.top = "-13%"
    document.querySelector(".SalamandreTop").style.right = "10%"
    document.querySelector(".SalamandreTop").style.transform = 'rotate(' + 10 + 'deg)';
    document.querySelector(".SalamandreBottom").style.bottom = "-10%"
    document.querySelector(".SalamandreBottom").style.left = "15%"
    document.querySelector(".SalamandreBottom").style.transform = 'rotate(' + -10 + 'deg)';
    document.querySelector(".Journal").style.bottom = "-10%"
    document.querySelector(".Journal").style.right = "5%"
 }

function HoverOutSalamandre() {
    document.querySelector(".Sign").style.left = "0%"
    document.querySelector(".SalamandreTop").style.top = "-17%"
    document.querySelector(".SalamandreTop").style.right = "0%"
    document.querySelector(".SalamandreTop").style.transform = 'rotate(' + 20 + 'deg)';
    document.querySelector(".SalamandreBottom").style.bottom = "-15%"
    document.querySelector(".SalamandreBottom").style.left = "5%"
    document.querySelector(".SalamandreBottom").style.transform = 'rotate(' + 0 + 'deg)';
    document.querySelector(".Journal").style.bottom = "-15%"
    document.querySelector(".Journal").style.right = "-5%"
 }

document.querySelector(".NouveauSpectacle").addEventListener("mouseover", HoverInSalamandre,false);
document.querySelector(".NouveauSpectacle").addEventListener("mouseout", HoverOutSalamandre,false);

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    if (!header) {
        console.error("Erreur : L'élément <header> n'a pas été trouvé dans la page.");
        return;
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    });
});