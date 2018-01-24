import {expect} from 'chai'

import GameService from '../Implementation/Game'

require('../../Database/Connection/MongoDB');

describe('Game Service', () => {

    it('Get Games', async () => {
        const games = await GameService.getGames()
        expect(games.length).to.equal(2,'Game not equal to 2')
    });

})