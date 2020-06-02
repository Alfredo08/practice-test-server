
const express = require( 'express' );
const app = express();
const { PORT } = require( './config' ); 
const Students = require( './store' );

app.get( '/api/getStudents', ( req, res ) => {
    return res.status( 200 ).json( Students );
});



app.listen( PORT, () => {
    console.log( `App running in port ${ PORT }.` );
});

module.exports = app;