import * as mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    type: Number,
    duration: String,
});

export default gameSchema;