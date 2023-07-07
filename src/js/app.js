import GameSavingLoader from "./gamesavingloader";

(async () => {
    try {
        const save = await GameSavingLoader.load();
        return save;
    } catch (error) {
        return error;
    }
})();