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
    });
    $("html").droppable();
    // $('#about-popup').resizable({minHeight:300, minWidth:500});
    // $('#resume-popup').resizable();
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
    $('#about-popup').css('top','10%');
    $('#about-popup').css('left','25%');
    // $('#about-popup').css('height', '45%');
    // $('#about-popup').css('width', '45%');

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
// Show resume when clicking taskbar icon
$('#resume-taskbar').click(function () {
    $('#resume-popup').toggle();
    // $(this).toggleClass("taskbar-icon-rest");
    $(this).toggleClass('taskbar-icon-click');
    unfocusWindows();
    $('#resume-popup').css('z-index','3');
});
// Show resume when clicking on the icon
$('#resume').click(function () {
    $("#resume-popup").show();
    $("#resume-taskbar").show();
    $('#resume-taskbar').addClass('taskbar-icon-click');
    unfocusWindows();
    $('#resume-popup').css('z-index','3');
    $('#resume-popup').css('top','2%');
    $('#resume-popup').css('left','15%');
    // $('#resume-popup').css('height', '90%');
    // $('#resume-popup').css('width', '70%');
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

// INTERNET PAGES //////////////////////////////////////
$('#linkedin').click(function () {
    $('#ie-frame').attr('src','https://www.linkedin.com/in/hershnagpal');
    $('#ie-title').text("  Hersh's Linkedin Page - Microsoft Internet Explorer");
});

$('#instagram').click(function () {
    $('#ie-frame').attr('src','https://www.instagram.com/wafer_wave');
    $('#ie-title').text("  wafer_wave's Instagram Page - Microsoft Internet Explorer");
});

//Open pages on doubleclick
$('#linkedin').dblclick(function () {
    window.open('https://www.linkedin.com/in/hershnagpal','_blank');
});
$('#instagram').dblclick(function () {
    window.open('https://www.instagram.com/wafer_wave','_blank');
});

// Minimize the ie window when the _ button is clicked
$('#minimize-ie').click(function () {
    $("#ie-popup").hide();
    $('#ie-taskbar').removeClass('taskbar-icon-click');
});
// Close the ie window when the 'x' is clicked
$('.close-ie').click(function () {
    $("#ie-popup").hide();
    $("#ie-taskbar").hide();
    $('#ie-taskbar').removeClass('taskbar-icon-click');
    $('#ie-popup').css('z-index','1');
});
// Show ie window when an ie icon is clicked
$('.ie').click(function () {
    $("#ie-popup").show();
    $("#ie-taskbar").show();
    $('#ie-taskbar').addClass('taskbar-icon-click');
    unfocusWindows();
    $('#ie-popup').css('z-index','3');
    $('#ie-popup').css('top','2%');
    $('#ie-popup').css('left','15%');
    // $('#resume-popup').css('height', '90%');
    // $('#resume-popup').css('width', '70%');
});
// Show ie window when clicking on the taskbar icon
$('#ie-taskbar').click(function () {
    $('#ie-popup').toggle();
    // $(this).toggleClass("taskbar-icon-rest");
    $(this).toggleClass('taskbar-icon-click');
    unfocusWindows();
    $('#ie-popup').css('z-index','3');
});
