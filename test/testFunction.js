const chai = require( 'chai' );
const expect = chai.expect;
const Students = require( './../store' );
const app = require( './../app' );
const supertest = require( 'supertest' );
function addTwoNumbers( num1, num2 ){
    return num1 + num2;
}


it('Should return a 10', () => {
    let num1 = 4;
    let num2 = 6;

    expect( addTwoNumbers( num1, num2 ) ).to.equal( 10 );

});

it('It should not return a 10', () => {
    let num1 = 7;
    let num2 = 6;

    expect( addTwoNumbers( num1, num2 ) ).to.not.equal( 10 );

});

it( 'It should return an array of students', () => {
    expect( Students ).to.be.an('array');
    Students.forEach( student => {
        expect( student ).to.be.an('object');
        expect( student ).to.have.all.keys('name', 'id');
    });
});

it( 'It should return an array of students', () => {

    return supertest(app)
                .get('/api/getStudents')
                .then( res => {
                    expect( res.body ).to.be.an('array');
                    res.body.forEach( student => {
                        expect( student ).to.be.an('object');
                        expect( student ).to.have.all.keys('name', 'id');
                    }); 
                 });
})