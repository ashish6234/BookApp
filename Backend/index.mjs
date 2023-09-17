import express, { request, response } from "express";
import { PORT, mongoDBURL } from './config.mjs'; // Check the relative path
import mongoose from 'mongoose';
import { Book } from './models/bookmodel';

const app = express();

app.get('/', (request, response) => {

    console.log(request)
    return response.status(234).send('<body style="background-color: #414141"><h1 style="color: white">Something will appear</h1></body>')
});

// book model


app.post('/books', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: "Please provide all fields",
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const book = await Book.create(newBook);
        return response.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });

    }
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });