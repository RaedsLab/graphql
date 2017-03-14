let express = require('express');
let router = express.Router();


/* START */
import GraphQLHTTP from 'express-graphql';
import schema from '../data/schema';

router.use('/api', GraphQLHTTP({
        schema,
        graphiql: false
    })
);
/* END */

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
