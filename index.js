let startButton = document.getElementById("Start");
let start_2 = document.getElementById("start-2");
let section_1 = document.getElementsByClassName("one");
let section_2 = document.getElementsByClassName("two");
let white = document.getElementById("color_white");
let black = document.getElementById("color_black");
let red = document.getElementById("color_red");
let blue = document.getElementById("color_blue");
let green = document.getElementById("color_green");
let yellow = document.getElementById("color_yellow");
let purple = document.getElementById("color_purple");
let car = document.getElementsByClassName("car");
let section_3 = document.getElementsByClassName("three");
let main_car = document.getElementById("main_car");
let money = document.getElementById("money");
let obstacleSpeed = 10;
let moneyCount = 0;
let price_black = document.getElementById("price_black");
let price_red = document.getElementById("price_red");
let price_blue = document.getElementById("price_blue");
let price_green = document.getElementById("price_green");
let price_yellow = document.getElementById("price_yellow");
let price_purple = document.getElementById("price_purple");
let moneyDisplay = document.getElementById("money-count");
let leftButton = document.getElementById("button_left");
let rightButton = document.getElementById("button_right");
startButton.addEventListener("click", function() {
    section_1[0].style.display = "none";
    section_2[0].style.display = "block";
    
})
leftButton.addEventListener("click", function() {
    if(car_x > 50){
        car_x -= 140;
        main_car.style.left = car_x + "px";
    }
}
);
rightButton.addEventListener("click", function() {
    if(car_x < 280){
    car_x += 140;
    main_car.style.left = car_x + "px";
    }
});
white.addEventListener("click", function() {
    car[0].style.backgroundImage = "url('white-car-Photoroom.png')";
    main_car.style.backgroundImage = "url('main-car-Photoroom.png')"; 

    
});
black.addEventListener("click", function() {

    if (moneyCount >= 10) {
        moneyCount -= 10;
        moneyDisplay.textContent = moneyCount;
        money.textContent = moneyCount+" $";
        car[0].style.backgroundImage = "url('black-car-Photoroom.png')";
        price_black.textContent=""

    }
    if (price_black.textContent ===""){
        car[0].style.backgroundImage = "url('black-car-Photoroom.png')";
        main_car.style.backgroundImage = "url('main_car_black-Photoroom.png')";

    }
    else {
        alert("Not enough money!");
    }
    
});
red.addEventListener("click", function() {
    if (moneyCount >= 15) {
        moneyCount -= 15;
        moneyDisplay.textContent = moneyCount;
        money.textContent = moneyCount+" $";
        car[0].style.backgroundImage = "url('red-car-Photoroom.png')";
        price_red.textContent=""
    }
    if (price_red.textContent ===""){
        car[0].style.backgroundImage = "url('red-car-Photoroom.png')";
        main_car.style.backgroundImage = "url('main_car_red-Photoroom.png')";

    }
    else {
        alert("Not enough money!");
    }
});
blue.addEventListener("click", function() {
    if (moneyCount >= 20) {
        moneyCount -= 20;
        moneyDisplay.textContent = moneyCount;
        money.textContent = moneyCount+" $";
        car[0].style.backgroundImage = "url('blue-car-Photoroom.png')";
        price_blue.textContent=""
    }
        if (price_blue.textContent ===""){
        car[0].style.backgroundImage = "url('blue-car-Photoroom.png')";
        main_car.style.backgroundImage = "url('main_car_blue-Photoroom.png')";

    }
    else {
        alert("Not enough money!");
    }

});
green.addEventListener("click", function() {
    if (moneyCount >= 25) {
        moneyCount -= 25;
        moneyDisplay.textContent = moneyCount;
        money.textContent = moneyCount+" $";
        car[0].style.backgroundImage = "url('green-car-Photoroom.png')";
        price_green.textContent=""
    }
    if (price_green.textContent ===""){
        car[0].style.backgroundImage = "url('green-car-Photoroom.png')";
        main_car.style.backgroundImage = "url('main_car_green-Photoroom.png')";
    }
    else {
        alert("Not enough money!");
    }
});
yellow.addEventListener("click", function() {
    if (moneyCount >= 30) {
        moneyCount -= 30;
        moneyDisplay.textContent = moneyCount;
        money.textContent = moneyCount+" $";
        car[0].style.backgroundImage = "url('yellow-car-Photoroom.png')";
        price_yellow.textContent=""
    }
    if (price_yellow.textContent ===""){
        car[0].style.backgroundImage = "url('yellow-car-Photoroom.png')";
        main_car.style.backgroundImage = "url('main_car_yellow-Photoroom.png')";
        
    }
    else {
        alert("Not enough money!");
    }
});
purple.addEventListener("click", function() {
    if (moneyCount >= 35) {
        moneyCount -= 35;
        moneyDisplay.textContent = moneyCount;
        money.textContent = moneyCount+" $";
        car[0].style.backgroundImage = "url('purple-car-Photoroom.png')";
        price_purple.textContent=""
    }
    if (price_purple.textContent ===""){
        car[0].style.backgroundImage = "url('purple-car-Photoroom.png')";
        main_car.style.backgroundImage = "url('main_car_purple-Photoroom.png')";
    }
    else {
        alert("Not enough money!");
    }
});

let spawninterval;
let timerinterval;
let speedinterval;
let moneyinterval;
let grabmoneyinterval;

start_2.addEventListener("click", function() {
    obstacleSpeed = 10;
   

    section_2[0].style.display = "none";
    section_1[0].style.display = "none";
    section_3[0].style.display = "block";
    spawninterval=setInterval(spawnObstacles, 1000);
    timerinterval=setInterval(function() {
        let timer = document.getElementById("timer");
        timer.textContent = Number(timer.textContent) + 1;
    }, 1000);
    speedinterval=setInterval(function() {
    obstacleSpeed += 2;
}, 10000);
    moneyinterval=setInterval(() => {
        spawnmoney();
    }, 5000);
    grabmoneyinterval=setInterval(() => {
            grabmoney();
    }, 10);

});

let car_x = 170;
document.addEventListener("keydown", function(a) {
    if(a.key === "ArrowLeft" && car_x > 50){
        car_x -= 140;
        main_car.style.left = car_x + "px";
    }
    if(a.key === "ArrowRight" && car_x < 280){
        car_x += 140;
        main_car.style.left = car_x + "px";
    }
});


 function spawnObstacles() {
    let obstacles = document.createElement("div");
    obstacles.classList.add("obstacle");

    let lane = Math.floor(Math.random() * 3);
    obstacles.style.left = (20+ lane * 140) + "px";

    document.getElementById("game-area").appendChild(obstacles);

    moveObstacle(obstacles); 
}



function moveObstacle(obstacle) {
    let y = 0;

    let interval = setInterval(function () {
        y += obstacleSpeed;
        obstacle.style.top = y + "px";

        checkCollision(obstacle);

        if (y > 700) {
            obstacle.remove();
            clearInterval(interval);
        }
    }, 10);
}

function checkCollision(obstacle) {
    let obsRect = obstacle.getBoundingClientRect();
    let carRect = main_car.getBoundingClientRect();

    if (
        obsRect.bottom > carRect.top &&
        obsRect.top < carRect.bottom &&
        obsRect.right > carRect.left &&
        obsRect.left < carRect.right
    ) {
        alert("GAME OVER!");

        section_3[0].style.display = "none";
        section_2[0].style.display = "block";
        timer.textContent = "0";
        clearInterval(spawninterval); 
        clearInterval(timerinterval);
        clearInterval(speedinterval);
        clearInterval(moneyinterval);
        clearInterval(grabmoneyinterval);


        let all = document.getElementsByClassName("obstacle");
        while (all.length > 0) {
            all[0].remove();
        }
        carLeft = 170;
        main_car.style.left = carLeft + "px";
    }
}

    function spawnmoney() {
    let m = document.createElement("div");
    m.classList.add("money");

    let lane = Math.floor(Math.random() * 3);
    m.style.left = (50 + lane * 140) + "px";

    m.style.top = "600px";

    document.getElementById("game-area").appendChild(m);

    setInterval(() => {
        if (m) m.remove();
    }, 2000);
}


function grabmoney() {
    let moneyItems = document.getElementsByClassName("money");
    let carRect = main_car.getBoundingClientRect();

    for (let i = 0; i < moneyItems.length; i++) {
        let mRect = moneyItems[i].getBoundingClientRect();

        if (
            mRect.bottom > carRect.top &&
            mRect.top < carRect.bottom &&
            mRect.right > carRect.left &&
            mRect.left < carRect.right
        ) {
            moneyItems[i].remove();
            moneyCount+=5;
            moneyDisplay.textContent = moneyCount;
            money.textContent = moneyCount+" $";
        }
    }
}


