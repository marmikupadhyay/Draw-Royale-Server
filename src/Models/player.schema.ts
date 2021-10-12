import * as mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    username: String,
    score : Number,
});

export default playerSchema;