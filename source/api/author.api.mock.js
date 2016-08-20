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
        id: 'cory-house',
        firstName: 'Cory',
        lastName: 'House'
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