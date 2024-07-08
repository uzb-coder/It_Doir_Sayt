   
   document.addEventListener("DOMContentLoaded", function() {
        var counter = document.getElementById("counter");
        var count = 1;
        var interval = setInterval(function() {
            counter.textContent = count  + "%";
            if (count >= 95) {
                clearInterval(interval); // To'xtatish
            }
            count++;
        }, 25); // Millisekundlar bilan belgilangan vaqt oraligi
    });      

    document.addEventListener("DOMContentLoaded", function() {
        var counter = document.getElementById("counter2");
        var count = 1;
        var interval = setInterval(function() {
            counter.textContent = count;
            if (count >= 50) {
                clearInterval(interval); // To'xtatish
            }
            count++;
        }, 25); // Millisekundlar bilan belgilangan vaqt oraligi
    });      

    document.addEventListener("DOMContentLoaded", function() {
        var counter = document.getElementById("counter3");
        var count = 1;
        var interval = setInterval(function() {
            counter.textContent = count;
            if (count >= 80) {
                clearInterval(interval); // To'xtatish
            }
            count++;
        }, 25); // Millisekundlar bilan belgilangan vaqt oraligi
    });      

    document.addEventListener("DOMContentLoaded", function() {
        var counter = document.getElementById("counter4");
        var count = 1;
        var interval = setInterval(function() {
            counter.textContent = count  + "%";
            if (count >= 90) {
                clearInterval(interval); // To'xtatish
            }
            count++;
        }, 25); // Millisekundlar bilan belgilangan vaqt oraligi
    });      

/* Rasimlarni ozgarish  */
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 1
            }
        }
    });
    
    // Change images every 3 seconds
    setInterval(function(){
        owl.trigger('next.owl.carousel');
    }, 5000);
});