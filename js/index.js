var green_box = document.querySelector(".green-box");
var red_box = document.querySelector(".red-box");
var yellow_box = document.querySelector(".yellow-box");
var blue_box = document.querySelector(".blue-box");
var col = [];
var clicked_arr = [];
var i, j;
var flag = false;

green_box.addEventListener("click", function () {
    if(flag == true)
    {
        clicked_arr.push("green");
        var ccheck = check_color();
        var lcheck = check_length();
        if(ccheck === true)
        {
            if(lcheck === true)
            {
                i++;
                setTimeout(function(){gameplay()}, 700);
            }
        }
        else
        {
            var audio = new Audio('sounds/wrong.mp3');
            audio.play();
            $("#content .game-rules h1").html("Game Over ! Press any Key to Play Again.");
            flag = false;
        }
    }
});

red_box.addEventListener("click", function () {
    if(flag == true)
    {
        clicked_arr.push("red");
        var ccheck = check_color();
        var lcheck = check_length();
        if(ccheck === true)
        {
            if(lcheck === true)
            {
                i++;
                setTimeout(function(){gameplay()}, 700);
            }
        }
        else
        {
            var audio = new Audio('sounds/wrong.mp3');
            audio.play();
            $("#content .game-rules h1").html("Game Over ! Press any Key to Play Again.");
            flag = false;
        }
    }
});

blue_box.addEventListener("click", function () {
    if(flag == true)
    {
        clicked_arr.push("blue");
        var ccheck = check_color();
        var lcheck = check_length();
        if(ccheck === true)
        {
            if(lcheck === true)
            {
                i++;
                setTimeout(function(){gameplay()}, 700);
            }
        }
        else
        {
            var audio = new Audio('sound/wrong.mp3');
            audio.play();
            $("#content .game-rules h1").html("Game Over ! Press any Key to Play Again.");
            flag = false;
        }
    } 
});

yellow_box.addEventListener("click", function () {
    if(flag == true)
    {
        clicked_arr.push("yellow");
        var ccheck = check_color();
        var lcheck = check_length();
        if(ccheck === true)
        {
            if(lcheck === true)
            {
                i++;
                setTimeout(function(){gameplay()}, 700);
            }
        }
        else
        {
            sound('wrong');
            $("#content .game-rules h1").html("Game Over ! Press any Key to Play Again.");
            flag = false;
        }
    }
});

document.addEventListener("keydown", function () {
    if(flag == false)
    {
        flag = true;
        i = 1;   
        gameplay();
    }
});

function gameplay() {
    col = [];
    clicked_arr = [];
    color_generate();
    j = 1;
    color_show();
}

function color_generate() {
    $("#content .game-rules h1").html("Level - " + i);
    for (j = 1; j <= i; j++) {
        var generated_color = Math.floor(Math.random() * 4) + 1;
        if (generated_color == 1)
            col.push("green");
        else if (generated_color == 2)
            col.push("red");
        else if (generated_color == 3)
            col.push("yellow");
        else
            col.push("blue");
    }
}

function color_show() {
    setTimeout(function(){
        if(j > i)
        {

        }
        else
        {
            sound(col[j - 1]);
            if (col[j - 1] == "green") {
                // document.querySelector(".green-box").classList.add("box-show");
                // setTimeout(function () { document.querySelector(".green-box").classList.remove("box-show"); }, 700);
                $(".green-box").fadeOut(90);
                $(".green-box").fadeIn(90);
            }
            else if (col[j - 1] == "red") {
                // document.querySelector(".red-box").classList.add("box-show");
                // setTimeout(function () { document.querySelector(".red-box").classList.remove("box-show"); }, 700);
                $(".red-box").fadeOut(90);
                $(".red-box").fadeIn(90);
            }
            else if (col[j - 1] == "yellow") {
                // document.querySelector(".yellow-box").classList.add("box-show");
                // setTimeout(function () { document.querySelector(".yellow-box").classList.remove("box-show"); }, 700);
                $(".yellow-box").fadeOut(90);
                $(".yellow-box").fadeIn(90);
            }
            else {
                // document.querySelector(".blue-box").classList.add("box-show");
                // setTimeout(function () { document.querySelector(".blue-box").classList.remove("box-show"); }, 700);
                $(".blue-box").fadeOut(90);
                $(".blue-box").fadeIn(90);
            }
            j++;
            color_show();
        }
    }, 1000);
}

function sound(color)
{
    var audio = new Audio('sounds/' + color + '.mp3');
    audio.play();
}

function check_color()
{
    for(j = 0; j < clicked_arr.length; j++)
    {
        if(clicked_arr[j] !== col[j])
        {
            break;
        }
    }
    if(j != clicked_arr.length)
    return false;
    else
    return true;
}

function check_length()
{
    if(clicked_arr.length === col.length)
    return true;
    else
    return false;
}
