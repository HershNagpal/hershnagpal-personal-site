// Start Menu and Clock

$(document).ready(function () {
    $('#desktop').click(function () {
        $('#startMenu').hide();
        $('#start').removeClass('startClick').addClass('startRest');
    })

    // TASKBAR
    startTime();
    $('#startMenu').hide();
    $('#start').click(function () {
        $('#startMenu').toggle();
        $(this).toggleClass('startClick');
    });

    // Toggle the about page when the taskbar is clicked
    $('#about-taskbar').click(function () {
        $('#about-popup').toggle();
        // $(this).toggleClass("taskbar-icon-rest");
        $(this).toggleClass('taskbar-icon-click');
    });
    // Show the about page when the icon is clicked
    $('#about').click(function () {
        $("#about-popup").show();
        $("#about-taskbar").show();
        $('#about-taskbar').addClass('taskbar-icon-click');
    });
    // Close the about page when the x is clicked
    $('.close-about').click(function () {
        $("#about-popup").hide();
        $("#about-taskbar").hide();
        $('#about-taskbar').removeClass('taskbar-icon-click');
    });
    // Minimize the about page when the _ button is clicked
    $('#minimize-about').click(function () {
        $("#about-popup").hide();
        $('#about-taskbar').removeClass('taskbar-icon-click');
    });
    // Show resume when clicking icon
    $('#resume-taskbar').click(function () {
        $('#resume-popup').toggle();
        // $(this).toggleClass("taskbar-icon-rest");
        $(this).toggleClass('taskbar-icon-click');
    });
    $('#resume').click(function () {
        $("#resume-popup").show();
        $("#resume-taskbar").show();
        $('#resume-taskbar').addClass('taskbar-icon-click');
    });
    // Minimize the resume window when the _ button is clicked
    $('#minimize-resume').click(function () {
        $("#resume-popup").hide();
        $('#resume-taskbar').removeClass('taskbar-icon-click');
    });
    $('.close-resume').click(function () {
        $("#resume-popup").hide();
        $("#resume-taskbar").hide();
        $('#resume-taskbar').removeClass('taskbar-icon-click');
    });

    // Close windows when clicking close button
    $('.close-popup').click(function () {
        $(this).parent().parent().hide();
    });

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
