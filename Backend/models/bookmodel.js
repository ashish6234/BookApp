import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title:{
        title: String,
        required: true,
    },
    author: {
        type :String,
        required: true,
    },
    publisherYear: {
        type: Number,
        required: true,
    },
},
{
    timestamps:true, //this will add created at and updated at fields to the schema
}
);

export const Book = mongoose.model('book', bookSchema );