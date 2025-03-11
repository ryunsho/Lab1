function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    // background(0, 150, 50, 10);
    // if(mouseX < 200){
    //     rect(mouseX, mouseY, 100, 100);
    // }else{
    //     rect(mouseX, mouseY, 10, 10, 10);
    // }

    background('lavender');
    fill('pink')
    stroke('white');

    for(var i = 0; i < 1000; i++){
        rect((i*10)%width, (i*10)%height, 20, 20, 20);
    }
    fill('tomato');
    for(var i = 0; i < 100; i++){
        rect((i*10)%width, (i*10)%height, 10, 10);
    }

    fill('lightblue');
    stroke('navy');
    if(mouseX < 200){
        rect(mouseX, mouseY, 100, 100);
    }else{
        rect(mouseX, mouseY, 50, 50, 25);
    }
}