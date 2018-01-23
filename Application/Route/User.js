import express from 'express';

import { signup, login, verifyAuth } from '../Controller/User';

const app = express();
const router = express.Router();


router.post('/auth/login', login);
router.post('/auth/signup', signup);

module.exports = {
    router: router
}
