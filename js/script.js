// Start Menu and Clock

$(document).ready(function () {
    startTime();
    $('#startMenu').hide();
    $('#start').click(function () {
        $('#startMenu').toggle();
        $(this).toggleClass('startClick');
    });

    $('#desktop').click(function () {
        $('#startMenu').hide();
        $('#start').removeClass('startClick').addClass('startRest');
    })


    $('#about').click(function () {
        // alert($(this).setAttribute('href','');
        $(".about-popup").show();
    });

    $('#resume').click(function () {
        $(".resume-popup").show();
    });

    $('.close-popup').click(function () {
        $(this).parent().parent().hide();
    })

    $('.popup').css('transform', 'translate(0%,0%)');

});


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    var hd = h;
    $('#clock').html((hd = 0 ? "12" : hd > 12 ? hd - 12 : hd) + ":" + m + " " + (h < 12 ? "AM" : "PM"));
    t = setTimeout(function () { startTime() }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// Drag and drop icons
$(function() {
    $('.icon').draggable();
    $('.popup').draggable({
        // cursor: move,
        // stop: function(event, ui)
        // {
        //     $('.popup').zIndex(100);
        // }
    });
    $("html").droppable();
 });

// Resizeable windows 
$( function() {
    $( ".resizable" ).resizable();
} );
