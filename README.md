# BookApp
# Book App Using MERN Stack

This repository contains the code for a book application developed using the MERN (MongoDB, Express, React, Node.js) stack. This application allows users to search for books, save them to their reading list, and leave reviews.

## Prerequisites

To run this application, you need to have the following installed on your local machine:

- Node.js
- MongoDB

## Installation

1. Clone this repository to your local machine:

​
   git clone https://github.com/your-username/book-app.git
   


2. Navigate to the project directory:

​
   cd BookApp
   


3. Install the dependencies for both the server and client by running the following command:

​
   npm install
   


4. Create a `.env` file in the root of the server directory and specify the following environment variables:

​
   PORT=3000
   MONGODB_URI=mongodb://localhost/book_app
   


5. Start the server:

​
   npm start
   


6. Open a new terminal window, navigate to the client directory, and start the client:

​
   cd Frontend
   npm start
   


7. Open your browser and access the application at `http://localhost:3000`.

## Usage

Upon accessing the application, you will see a search bar where you can search for books using keywords. The search functionality is powered by the Google Books API.

You can save books to your reading list by clicking the "Save" button next to each book. To view and manage your reading list, navigate to the "My Books" page.

To leave a review for a book, click on the book's title and navigate to its details page. There, you will be able to leave a review and view other users' reviews.

## Contributing

Contributions are always welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- This project was inspired by The Odin Project curriculum.
- Thanks to the creators and maintainers of the MERN stack for providing such useful tools and technologies.