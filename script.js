// $('Selector').Action()


// Submit Button///////////////////////////

$('#submit-btn-1').click(function () {
    var firstName = $('#firstName').val();
    var middleName = $('#middleName').val();
    var lastName = $('#lastName').val();
    var fullName = firstName+' '+middleName+' '+lastName;
    $('#fullName').val(fullName)
});


// Keyup & Blur /////////////////////////


$('#firstName2').keyup(function () {
    var firstName = $('#firstName2').val();
    $('#res1').text(firstName);
})
$('#lastName2').keyup(function () {
    var lastName = $('#lastName2').val();
    $('#res2').text(lastName);
})
$('#lastName2').blur(function () {
    var firstName = $('#firstName2').val();
    var lastName = $('#lastName2').val();
    $('#res3').text(firstName+' '+lastName);
})


// Message Box////////////////////////////


$(document).ready(function(){
    $("#message-me").click(function(){
        $("#message-box").slideDown("slow");
    });
});

// Scroll////////////////////////////////



var firstScrollPosition = 0;

$('#scroll-1').scroll(function () {
    // $('#scroll-event').css('display', 'block').fadeOut(1000);

    var scrollPosition = $('#scroll-1').scrollTop();
    $('#scroll-event').text(scrollPosition);
    if(scrollPosition > firstScrollPosition) {
        $('#scroll-event').text('You are scrolling Down');
    } else {
        $('#scroll-event').text('You are scrolling Up')
    }
    firstScrollPosition = scrollPosition

});


// Fixed Hello World when Scroll/////////////////////

$(window).scroll(function () {
    var windowsScrollPosition = $(window).scrollTop();
    var fixedHelloWorld = $('#fixedHelloWorld').position();
    if(windowsScrollPosition >= fixedHelloWorld) {
        $('#fixedHelloWorld').css ({
            'position' : 'fixed',
                'top' : '0px'
        )}
    } else {
        $('#fixedHelloWorld').css ({
            'position' : 'relative',
            'top' : '0px'
        )}
    }
})




// Define element position
//
// var scrollDivPosition = $('#fixedHelloWorld').position();
// $('#scroll-posiion-print2').text(scrollDivPosition);





