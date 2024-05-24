import mongoose, { Schema } from "mongoose";

try {
    mongoose.connect(process.env.MONGODB_URI);
    mongoose.Promise = global.Promise;
    console.log('database connected');
}
catch (err) {
    console.error(err.message)
}

const ticketSchema = new Schema({
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
},
    {
        timestamps: true,
    }
)

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;