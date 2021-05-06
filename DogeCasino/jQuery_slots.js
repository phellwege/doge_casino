$(document).ready(function () {
    function Diceroll() {
        var roll = Math.floor(Math.random() * (7 - 1) + 1)
        return roll
    }


    $("#Roll").click(function () {
        var roll = Diceroll()
        $("#craps").html("<div><img class='dice' src='./images/GoldDice" + roll + ".jpg' alt='Gold Dice'" + roll + "'></div>")

        $("#craps").append("<div></div>")
        roll = Diceroll()
        $("#craps").append("<div><img class='dice' src='./images/GoldDice" + roll + ".jpg' alt='Gold Dice'" + roll + "'></div>")
    })
    // $("#rules").slideToggle(function (){

    // })
})