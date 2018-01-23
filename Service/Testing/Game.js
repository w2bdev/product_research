import {expect} from 'chai'

import GameService from '../Implementation/Game'

describe('Game Service', function () {
    
    it('Say Hello', async function () {
        GameService.sayHello()
        expect(GameService.sayHello()).to.equal('Hello', 'Incorrect Hello')
    })


})