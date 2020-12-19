class Game{
    constructor(){

    }
getState(){
var gameStateref = database.ref("gameState");
gameStateref.on("value",function(data){
    gameState = data.val();
});
}
updateState (state){
database.ref('/').update({
    gameState:state
})
}
start(){
    if (gameState === 0){
        player=new Player();
        player.getCount();
        form = new Form();
        form.display();
    }
}
play(){
form.hide();
textSize(30);
text("gamestart",400,200);
Player.getplayerinfo();
if(allPlayer !== undefined){
var displayposition = 130
for(var p in allPlayer){
 if(p === "player" +player.index){
     fill("red");
 }   
 else{
    fill("black");
 }
 displayposition += 20;
 textSize(15);
 text(allPlayer[p].name+":"+allPlayer[p].distance,120,display.position)
}
}
}

}