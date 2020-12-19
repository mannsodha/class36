class Form{
    constructor(){
        this.title = createElement('h2')
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement('h3')
    }
hide(){
    this.input.hide();
    this.button.hide();
    this.tittle.hide();
    this.greeting.hide();
}
    display(){

this.title.html("Car Racing Game")
this.title.position(500,100)

this.input.position(400,200)

this.button.position(400,250)

this.button.mousePressed(function(){
    this.input.hide();
   this.button.hide();
    player.name = input.value();
    playerCount += 1;
    player.index = playerCount;
    player.update(player.name);
    player.updateCount(playerCount);
    this.greeting.html("welcome "+player.name)
    this.greeting.position(500,250)
});
}   
}