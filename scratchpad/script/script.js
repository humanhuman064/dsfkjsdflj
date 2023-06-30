var lottery_list = [
    {
    "lottery_name": "GOOD GAME",
    "lottery_image": "lottery0.jpg",
    "fg": "#0CFF7F",
    "lottery_price": 100,
    "lottery_description": 
'Соберите 3 одинаковых элемента и получите приз!\n\
    🍎 🍎 🍎 - 100 ₽\n\
    🍋 🍋 🍋 - 100 ₽\n\
    🍓 🍓 🍓 - 100 ₽\n\
    🍑 🍑 🍑 - 100 ₽'
},

    {"lottery_name": "BAD GAME",
    "lottery_image": "lottery1.jpg",
    "fg": "#FFC90D",
    "lottery_price": 100,
    "lottery_description": "sd;lfsdlfkl;fdks;lfddsf"},

    {"lottery_name": "OK GAME",
    "lottery_image": "lottery2.jpg",
    "fg": "#0D43FF",
    "lottery_price": 100,
    "lottery_description": "sd;lfsdlfkl;fdks;lfddsf"},

    {"lottery_name": "WELL GAME",
    "lottery_image": "lottery3.jpg",
    "fg": "#90FF0D",
    "lottery_price": 100,
    "lottery_description": "sd;lfsdlfkl;fdks;lfddsf"},

    {"lottery_name": "TERRIBLE GAME",
    "lottery_image": "lottery4.jpg",
    "fg": "#0DFEC7",
    "lottery_price": 100,
    "lottery_description": "sd;lfsdlfkl;fdks;lfddsf"}
    

];

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
};

urlParams = parseURLParams(window.location.href);

let lottery_info = lottery_list[urlParams["lottery_number"]]
$("#image").attr("src","lottery_images/"+lottery_info["lottery_image"]);

var pad = $('#scratch').wScratchPad({
    size        : 25,          // The size of the brush/scratch.
    bg          : 'src/index.jpg',  // Background (image path or hex color).
    fg          : lottery_info["fg"],  // Foreground (image path or hex color).
    realtime    : true,       // Calculates percentage in realitime.
    cursor      : null, // Set cursor.
  });
  pad.wScratchPad('enable',);

$(".calculation").hide();

$(".buy_lottery").on("click", function() {
    $('#scratch').wScratchPad('enable', true)

    $('.buy_lottery').css("background-color", "#108F22")
    $('.buy_lottery').css("color", "#113A22")

    // $('.buy_lottery').animate({backgroundColor: "#108F22", color: "#113A22"}, 1);
    $('.buy_lottery').text("Посчитать выигрыш")
    $('.buy_lottery').addClass("check")
})

$(".check").on("click", function() {
    $('.calculation_text').each(function () {

        $('#scratch').wScratchPad('clear');

        $(".calculation").show(); 

        $('.check').prop('disabled', true);

        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    
})