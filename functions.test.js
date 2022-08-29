const {returnTwo, greetings, add} = require('./functions.js')

test('returnTwo value is 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('greeting should return value Hello, James.', () => {
    expect(greetings('James')).toEqual('Hello, James.')
})

test('greeting should return value of Hello, Jane.', () => {
    expect(greetings('Jill')).toEqual('Hello, Jill.')
})

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toEqual(3)
})

test('adds 5 + 9 to equal 14', () => {
    expect(add(5, 9)).toEqual(14)
})