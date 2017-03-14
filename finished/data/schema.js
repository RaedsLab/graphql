/**
 * Created by Raed Chammam on 3/14/17.
 */
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';

import Library from './library';

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: {
        name: {
            type: GraphQLString,
            resolve: (root) => {
                return root.name;
            }
        },
        birthday: {
            type: GraphQLString,
            resolve: (root) => {
                return root.birthday;
            }
        }
    }
});

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: {
        id: {type: GraphQLInt},
        category: {type: GraphQLString},
        author: {type: AuthorType},
        title: {type: GraphQLString},
        isbn: {type: GraphQLString},
        price: {type: GraphQLFloat}
    }
});

const LibraryType = new GraphQLObjectType({
    name: 'Library',
    fields: {
        book: {
            args: {id: {type: new GraphQLNonNull(GraphQLInt)}},
            type: BookType,
            resolve: (root, {id}) => {
                return Library.filter((book) => book.id === id)[0];
            }
        },
        library: {
            type: new GraphQLList(BookType),
            args: {
                limit: {type: GraphQLInt},
                offset: {type: GraphQLInt},
            },
            resolve: (root, {limit, offset}) => {

                limit = limit || Library.length - 1;
                offset = offset || 0;

                console.log(`Limit ${limit} off ${offset}`);

                let i = offset;
                const retVal = [];
                while (i <= limit && i < Library.length) {
                    retVal.push(Library[i]);
                    i++;
                }
                return retVal;
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: LibraryType
});

export default schema;