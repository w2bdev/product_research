import express from 'express';

import { getGames, getGame, addGame, deleteGame } from '../Controller/Game';


const app = express();
const router = express.Router();


router.route('/games')
    .post(addGame)
    .get(getGames)

router.route('/game/:id')
    .get(getGame)
    .delete(deleteGame)
   

module.exports = {
    router: router
}