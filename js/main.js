console.log("hi")
$("#startBtn").click(function()
    {
        $("#startBtn").hide();
        $("#infoBtn").hide();
        $(".hiddenFriend").hide();
        $("#firstResp").show();
        $("#dialogue").show();

    })

$("#dia1").click(function(){
    console.log("dialogue 2");
    $("#firstResp").hide();
    $("#dialogue").hide();
    $("#secondResp").show();
    $("#happyResp").show();
})

$("#dia2").click(function(){
    console.log("dia2");
    $("#firstResp").hide();
    $("#dialogue").hide();
    $("#thirdResp").show();
    $("#dialogue2").show();
})

$("#dia3").click(function(){
    console.log("dia3");
    $("#thirdResp").hide();
    $("#dialogue2").hide();

    $("#fourthResp").show();

})
$("#dia4").click(function(){
    console.log("dia3");
    $("#thirdResp").hide();
    $("#dialogue2").hide();

    $("#fifthResp").show();

})