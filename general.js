const axios = require('axios');
const BASE_URL = 'http://localhost:5000';

const getAllBooks = async () => {
    const res = await axios.get(`${BASE_URL}/`);
    console.log(JSON.stringify(res.data, null, 2));
};

const getBookByISBN = (isbn) => {
    return axios.get(`${BASE_URL}/isbn/${isbn}`).then(res => console.log(res.data));
};

const getBooksByAuthor = async (author) => {
    const res = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
    console.log(res.data);
};

const getBooksByTitle = async (title) => {
    const res = await axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
    console.log(res.data);
};

getAllBooks();
getBookByISBN(1);
getBooksByAuthor("Chinua Achebe");
getBooksByTitle("Things Fall Apart");

module.exports = { getAllBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle };