import { Types } from "mongoose";

interface Game extends Types.Subdocument {
    type: string,
    duration: number,
}

export default Game;