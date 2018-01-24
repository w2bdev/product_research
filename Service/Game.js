import GameService from './Implementation/Game'

require('../Database/Connection/MongoDB');


const runGames = async()=>{
     const games = await GameService.getGames();

console.log(games);
}

runGames();