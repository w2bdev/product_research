import GameRepository from '../../Repository/MongoDB/Model/Game';

const getGames = async () => {
    try {
        return await GameRepository.find(null, null, { sort: { postDate: 1 } }).exec();
    } catch (error) {
        return error.message;
    }
}

const getGameByID = async id => {
    try {
        return await GameRepository.findById(id).exec();
    } catch (error) {
        return error.message;
    }
}

const addGame = async (data) => {
    try {
        let game = Object.assign(new GameRepository(), data);
        await game.save();
    } catch (error) {
        return error.message;
    }
};

const deleteGameByID = async (id) => {
    try {
        return await GameRepository.remove({ _id: id });
    } catch (error) {
        return error.message;
    }
};

export default{
    getGames,
    addGame,
    getGameByID,
    deleteGameByID
}

