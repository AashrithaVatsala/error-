class Game {
    constructor(){

    }
    
    getState(){
        var playerStateRef = database.ref('gameState');
        playerStateRef.on("value",(data)=>{
          gameState = data.val();
        })
      }
    
      updateState(state){
        database.ref('/').update({
          gameState : state
        });
      }

      start(){
          if (gameState === 0) {
              form = new Form();
              form.display();

              player = new Player ();
              player.getCount();
          }
      }

    
}