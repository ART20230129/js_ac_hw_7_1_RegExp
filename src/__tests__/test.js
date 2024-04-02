import Validator from '../js/nickname';

test('Checking for a pattern match', () =>{
        const unit = new Validator('tes-_123t');
        expect(unit.validateUsername()).toBeTruthy();

})

test('Checking for the number at the beginning of the line', () =>{
        const unit = new Validator('2test');
        expect(unit.validateUsername()).toBeFalsy();

})

test('Checking for the number at the end of the line', () =>{
        const unit = new Validator('test3');
        expect(unit.validateUsername()).toBe(false);

})

test('Checking for the number of digits in the name', () =>{
        const unit = new Validator('t-1234est');
        expect(unit.validateUsername()).toBe(false);

})

test('Checking for extraneous characters', () =>{
        const unit = new Validator('tes!t');
        expect(unit.validateUsername()).toBe(false);

})