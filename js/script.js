$(document).ready(function () {

    $(document).on("mouseenter", ".carRent", function() {

        $(this).effect("bounce","slow")
    });

    $(document).on("click", ".rent", function () {

        localStorage.setItem("rentira", "true");
        window.location.href = "contact.html";

    });


    $('#car-brand').change(function () {
        var odabranaOpcija = $(this).val();

        if (odabranaOpcija != "none") {
            resetujListuModela();
            prikaziModeleZaMarku(odabranaOpcija);
        } else {
            prikaziSveAutomobile();
        }
    });

    prikaziSveAutomobile();
    prikaziSveBrendoveUSelektu();
    staviCopyrightDatum();

});


var automobiliZaRentiranje = {
    "Mercedes": {
        "CLA-klasa": {
            "cena": 200,
            "slika": "images/cars/mercedescla.jpg"
        },
        "CLS-klasa": {
            "cena": 400,
            "slika": "images/cars/mercedescls.jpg"
        },
        "C-klasa": {
            "cena": 300,
            "slika": "images/cars/mercedesc.jpg"
        },
        "GLA-klasa": {
            "cena": 200,
            "slika": "images/cars/mercedesgla.jpg"
        }
    },

    "BMW": {
        "3": {
            "cena": 250,
            "slika": "images/cars/bmw3.jpg"
        },
        "5": {
            "cena": 350,
            "slika": "images/cars/bmw5.jpg"
        },
        "x3": {
            "cena": 300,
            "slika": "images/cars/bmwx3.jpg"
        },
        "x5": {
            "cena": 350,
            "slika": "images/cars/bmwx5.jpg"
        },
        "x6": {
            "cena": 450,
            "slika": "images/cars/bmwx6.jpg"
        }
    },

    "Audi": {
        "A3": {
            "cena": 150,
            "slika": "images/cars/audia3.jpg"
        },
        "A4": {
            "cena": 250,
            "slika": "images/cars/audia4.jpg"
        },
        "Q3": {
            "cena": 300,
            "slika": "images/cars/audiq3.jpg"
        },
        "Q5": {
            "cena": 350,
            "slika": "images/cars/audiq5.jpg"
        },
        "Q8": {
            "cena": 550,
            "slika": "images/cars/audiq8.jpg"
        }
    },

    "RangeRover": {
        "Velar": {
            "cena": 400,
            "slika": "images/cars/rangevelar.jpg"
        },
        "Sport": {
            "cena": 350,
            "slika": "images/cars/rangesport.jpg"
        },
        "Evoque": {
            "cena": 250,
            "slika": "images/cars/rangeevoque.jpg"
        }
    },

    "Jaguar": {
        "Fpace": {
            "cena": 200,
            "slika": "images/cars/jaguarfpace.jpg"
        },
        "Epace": {
            "cena": 300,
            "slika": "images/cars/jaguarepace.jpg"
        }
    },

    "Volkswagen": {
        "Golf8": {
            "cena": 100,
            "slika": "images/cars/golf8.jpg"
        },
        "Passat": {
            "cena": 200,
            "slika": "images/cars/passat.jpg"
        },
        "Arteon": {
            "cena": 300,
            "slika": "images/cars/arteon.jpg"
        }
    },
}

function staviCopyrightDatum() {
    var currentYear = (new Date).getFullYear();
    $('.copyDate').html(currentYear);
}

function resetujListuModela() {
    $(".allVehicles").html("");
}

function prikaziModeleZaMarku(marka) {
    for (modelAutomobila in automobiliZaRentiranje[marka]) {
        var element = $('.clone').clone();
        $(element).find('.model').html(marka + " " + modelAutomobila);
        $(element).find('.price').html("&euro; " + automobiliZaRentiranje[marka][modelAutomobila]['cena']);
        $(element).find('.vehicleImage').attr('src', automobiliZaRentiranje[marka][modelAutomobila]['slika']);
        $(element).removeClass('clone');
        $('.allVehicles').append(element);
    }
}

function prikaziSveBrendoveUSelektu() {
    for (markaAutomobila in automobiliZaRentiranje) {
        $("#car-brand").append("<option>" + markaAutomobila + "</option>");
    }
}

function prikaziSveAutomobile() {
    resetujListuModela();
    for (markaAutomobila in automobiliZaRentiranje) {
        prikaziModeleZaMarku(markaAutomobila);
    }
}