import * as mongoose from "mongoose";
import Player from './player.interface';
import Game from './game.interface'
interface Room extends mongoose.Document {
    players: Player[],
    game: Game,
}

export default Room;