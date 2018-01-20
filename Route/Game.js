import express from 'express';

import { getGames, getGame, postGame, deleteGame } from '../Services/Game';
import { verifyAuth } from '../Services/User';

const app = express();
const router = express.Router();

// API routes
// MiddleWare : VerifyAuth
router.route('/games')
    .get(getGames)
    .post(verifyAuth, postGame);
    
router.route('/games/:id')
    .get(getGame)
    .delete(verifyAuth, deleteGame);

module.exports = {
    router: router
}