import { Types } from "mongoose";

interface Player extends Types.Subdocument {
    username: string;
    score: number;
}

export default Player;