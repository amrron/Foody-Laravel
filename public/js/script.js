$(document).ready(function() {
    var burger = $(".burger");
    var link = $(".link");
    var overlay = $(".overlay")
    var tinggi = $("#tinggi")
    var berat = $("#berat")
    var hitung = $("#hitung")
    var modalBody = $("#modal-body")


    burger.click(function () {
        link.toggleClass("burger-visible");
        burger.toggleClass("burger-close");
        overlay.toggle();
        
        return false;
    });

    $(document).click(function (e) {
        if (!link.is(e.target) && !link.has(e.target).length && !burger.is(e.target) && link.hasClass("burger-visible")) {
            link.removeClass("burger-visible");
            burger.removeClass("burger-close");
            overlay.hide();
        }
    });

    hitung.click(function(){
        // alert("Nilai BMI anda adalah: " + (berat.val() / Math.pow((tinggi.val()/100), 2)))
        modalBody.html("Nilai BMI anda adalah: <strong>" + (berat.val() / Math.pow((tinggi.val()/100), 2)).toFixed(2) + "</strong>") 
    });

})