
// $(document).ready(function () {
//     $('div.hidden').fadeIn(1000).removeClass('hidden');
// });

// $(document).ready(function() {
// $('container').css('display', 'none');
// $('container').fadeIn(1000);

// $('.link').click(function() {
// event.preventDefault();
// newLocation = this.href;
// $('container').fadeOut(1000, newpage);
// });

$(document).ready(function () {
    $('div.hidden').fadeIn(1000).removeClass('hidden');
});

// ======== Image Slider ========= //

 var speed = 300;

    $(".prev").click(function() {
        var now = $(this).parent().next("ul.gallery").children(":visible"),
            last = $(this).parent().next("ul.gallery").children(":last"),
            prev = now.prev();
            prev = prev.index() == -1 ? last : prev;
        now.fadeOut(speed, function() {prev.fadeIn(speed);});
    });

    $(".next").click(function() {
        var now = $(this).parent().next("ul.gallery").children(':visible'),
            first = $(this).parent().next("ul.gallery").children(':first'),
            next = now.next();
            next = next.index() == -1 ? first : next;
        now.fadeOut(speed, function() {next.fadeIn(speed);});
    });



//////////////=============//

$(document).ready(function() {
$(".projects").click(function() {
    $(".project-title").slideToggle(400);
});
});

// $(document).ready(function() {
// $(".projects").click(function) {
//     $(".projects")css('color','black');

//     if ( $(".projects").hasClass("active") ) {
//     $(".projects")css('color', 'black');
//     } else {
//     $(".projects")css('color', '#adadad');
//     }
//     }
// });
// });


// var timedelay = 1;
// function delayCheck()
// {
// if(timedelay == 5)
// {
// $('.smileyface').show();
// timedelay = 1;
// }
// timedelay = timedelay+1;
// }
 
// $(document).mousemove(function() {
// $('.smileyface').hide();
// timedelay = 1;
// clearInterval(_delay);
// _delay = setInterval(delayCheck, 500);
// });
// // page loads starts delay timer
// _delay = setInterval(delayCheck, 500)


