import delay from './delay';

const authors = [
    {
        id: 'andrew-pavlyuk',
        firstName: 'Andrew',
        lastName: 'Pavlyuk'
    },
    {
        id: 'alex-savchuk',
        firstName: 'Alex',
        lastName: 'Savchuk'
    },
    {
        id: 'vladimir-olifer',
        firstName: 'Vladimir',
        lastName: 'Olifer'
    }
];

class AuthorApi {
    static getAllAuthors() {
        return Object.assign([], authors);
    }

    static saveAuthor(author) {

    }

    static deleteAuthor(authorId) {

    }
}

export default AuthorApi;