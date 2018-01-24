import GameRepository from '../../Repository/Model/Game';
import GameService from '../../Service/Implementation/Game';

// to be change :  talk to server instead

const getGames = async (req, res) => {
    try {
        const games = await GameService.getGames();
        res.json(games);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getGame = async (req, res) => {
    try {
        const games = await GameService.getGameByID(req.params.id);
        res.json(games);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const addGame = async (req, res) => {
    try {
        await GameService.addGame(req.body);
        res.json({status: 'success', message: 'game created successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteGame = async (req, res) => {
    try {
        await GameService.deleteGameByID(req.params.id);
        res.json({status: 'success', message: 'game deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export { getGames, getGame, addGame, deleteGame };