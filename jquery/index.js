$(document).ready(() => {
    $("h1").addClass("big-title margin-50");
    //$("h1").removeClass("big-title");

    $("button").html("<em>Hey<em>")

    $("button").click(() => {
        $("h1").css("color", "purple");
    })

    $(document).keypress((event)=> {
        $("h1").text(event.key);
    })
})
