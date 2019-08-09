// Start Menu and Clock

$(document).ready(function () {
    $('#desktop').click(function () {
        $('#startMenu').hide();
        $('#start').removeClass('startClick').addClass('startRest');
    })
    // Set the clock and start menu up
    startTime();
    $('#startMenu').hide();
    $('#start').click(function () {
        $('#startMenu').toggle();
        $(this).toggleClass('startClick');
    });
    // Toggle the about page when the taskbar is clicked

    
    // Close windows when clicking close button
    $('.close-popup').click(function () {
        $(this).parent().parent().hide();
    });
    //Put window on top when clicked
    $('.popup').click(function () {
        unfocusWindows();
        $(this).css('z-index', '3');
    });
    // $('.popup').css('transform', 'translate(-50%,-50%)');
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

// OVERALL FUNCTIONALITY //////////////////////////////////////////
$(function() {
    $('.icon').draggable();
    $('.popup').draggable({
        scroll: false
        // cursor: move,
        // stop: function(event, ui)
        // {
        //     $('.popup').zIndex(100);
        // }
    });
    $("html").droppable();
});

function unfocusWindows() {
    $('.popup').css('z-index','1');
}


// ABOUT PAGE //////////////////////////////////////////
// Show the about page when the taskbar icon is clicked
$('#about-taskbar').click(function () {
    $('#about-popup').toggle();
    // $(this).toggleClass("taskbar-icon-rest");
    $(this).toggleClass('taskbar-icon-click');
    unfocusWindows();
    $('#about-popup').css('z-index','3');
});
// Show the about page when the icon is clicked
$('#about').click(function () {
    $("#about-popup").show();
    $("#about-taskbar").show();
    $('#about-taskbar').addClass('taskbar-icon-click');
    unfocusWindows();
    $('#about-popup').css('z-index','3');
});
// Close the about page when the x is clicked
$('.close-about').click(function () {
    $("#about-popup").hide();
    $("#about-taskbar").hide();
    $('#about-taskbar').removeClass('taskbar-icon-click');
    $('#about-popup').css('z-index','1');
});
// Minimize the about page when the _ button is clicked
$('#minimize-about').click(function () {
    $("#about-popup").hide();
    $('#about-taskbar').removeClass('taskbar-icon-click');
});


// RESUME PAGE /////////////////////////////////////////
// Show resume when clicking icon
$('#resume-taskbar').click(function () {
    $('#resume-popup').toggle();
    // $(this).toggleClass("taskbar-icon-rest");
    $(this).toggleClass('taskbar-icon-click');
});
// Show resume when clicking on the taskbar icon
$('#resume').click(function () {
    $("#resume-popup").show();
    $("#resume-taskbar").show();
    $('#resume-taskbar').addClass('taskbar-icon-click');
    unfocusWindows();
    $('#resume-popup').css('z-index','3');
});
// Minimize the resume window when the _ button is clicked
$('#minimize-resume').click(function () {
    $("#resume-popup").hide();
    $('#resume-taskbar').removeClass('taskbar-icon-click');
});
// Close the resume when the 'x' is clicked
$('.close-resume').click(function () {
    $("#resume-popup").hide();
    $("#resume-taskbar").hide();
    $('#resume-taskbar').removeClass('taskbar-icon-click');
    $('#resume-popup').css('z-index','1');
});