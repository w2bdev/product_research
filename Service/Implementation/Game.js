import awilix from 'awilix';

import Game from '../../Persistence/Model/Game';

export default{
    
    getGames: () => {
        return Game.find(null, null, { sort: { postDate: 1 } }, (err, games) => {
            if (err)
                res.send(err);
            res.json(games);
        });
    },

    sayHello : () => {
        return "Hello";
    }

}

