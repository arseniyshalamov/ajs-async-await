import read from "./reader";
import json from "./parser";
import GameSaving from "./game_saving";

export default class GameSavingLoader {
    static async load() {
        try {
            const data = await read(); // возвращается Promise!
            const value = await json(data); // возвращается Promise!
            const saving = new GameSaving(JSON.parse(response));
            return value;
        } catch (error) {
            return error;
        }
    }
}