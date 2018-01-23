import express from 'express';

import { getGames, getGame, postGame, deleteGame } from '../Controller/Game';


const app = express();
const router = express.Router();


router.route('/games')
    .get(getGames)
   

module.exports = {
    router: router
}