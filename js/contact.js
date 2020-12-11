$(document).ready(function () {

    $(".sendMessage").click(function () {

        var ime = $(".name").val();
        var email = $(".email").val();
        var phone = $(".phone").val();
        var text = $(".text").val();

        if (ime == "" || email == "" || phone == "" || text == "") {
            alert("Niste popunili sva polja.");
            return false;
        }

        if (!validateEmail(email)) {
            alert("Email koji ste uneli nije dobro struktuiran.");
            return false;
        }

        var nameProvera = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if (!nameProvera.test(ime)) {
            alert("Morate uneti i ime i prezime.");
            return false;
        }

        if (localStorage.getItem("rentira") == "true") {
            alert("Uspešno ste rentirali vozilo.");
            localStorage.removeItem("rentira");
        }
        else {
            alert("Uspesno ste poslali poruku. Kontaktiracemo vas u najkracem roku");
        }




        return false;
    })






})
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
