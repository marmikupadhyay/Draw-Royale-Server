import * as mongoose from "mongoose";
import Room from  "../Interfaces/model/room.interface";
import playerSchema from "./player.schema";

const roomSchema = new mongoose.Schema({
    players: [playerSchema],
    
});

const roomModel = mongoose.model<Room & mongoose.Document>("Room",roomSchema);

export default roomModel;