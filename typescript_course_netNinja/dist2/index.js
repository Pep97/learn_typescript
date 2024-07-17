"use strict";
/*

// INTRODUCTION TO TYPESCRIPT

// install typescript: npm install -g typescript


let age = 30;
console.log(age);
// even if this look like javascript, you won't be able to change a number into a string later.
// to run it you need to complite it first: tsc index.ts
// this will create a new file index.js

// you can your console.log in the terminal with: node index.js

let age2: number = 30;
age2 = '30'; // this will give you an error

let firstName: string = 'Mario';
let isFictional: boolean

age = 31
firstName = 'Luigi'
isFictional = true

// you can also use type inference

let planet = 'Earth'
let moon = 1
let isLarge = false

// in all this cases you see directly the type of the variable, just hovering over it

planet = 'Mars'
moon = 2
isLarge = true

// null and undefined
// when we give something a value of null we're intentionally saying that it's empty
// undefined is something unintentionally empty

let something: null
let anotherThing: undefined

something = 10 // this will give you an error, it can be only null
anotherThing = 10 // this will give you an error, it can be only undefined

// AUTOMATE COMPILER IN TYPESCRIPT & WATCH FOR CHANGES

// install typescript: npm install -g typescript
// run tsc --init to create a tsconfig.json file
// look for "rootDir" & "outDir" and uncomment them. this specify where the compiler should look for the files and where to put the compiled files
// change in this way -> "rootDir": "./src"
// and this way -> "outDir": "./dist"
// then create a new folder src and move index.ts inside it
// create a new folder dist
// run tsc -w to watch for changes in the files and compile them automatically
// look for "rootDir" & "outDir" and uncomment them. this specify where the compiler should look for the files and where to put the compiled files
// change in this way -> "rootDir": "./src"
// and this way -> "outDir": "./dist"
// then create a new folder src and move index.ts inside it
// create a new folder dist
// run tsc -w to watch for changes in the files and compile them automatically
// don't close the terminal, name it and open a new one
// run node --watch dist/index.js to watch for changes in the compiled file and run it automatically in the terminal -> everything you console.log will be printed in the terminal
// don't close the terminal, name it and open a new one


// -----------------------------------------------------------------------------------------------------------------

// ARRAYS

let names: string[] = ['Mario', 'Luigi', 'Peach'] // if you try to add a number you will get an error
let ages: number[] = [30, 31, 32] // if you try to add a string you will get an error

names.push('Toad') // this will work
ages.push('33') // this will give you an error
ages.push(33) // this will work

let fruits = ['Apple', 'Banana', 'Orange'] // this will be an array of strings
fruits.push(10) // this will give you an error
fruits.push('peaches') // this will work

const f = fruits[3] // this will be a string

let things = [1, true, 'hello'] // this will be an array of any type you inserted so it can be a number, a boolean or a string

const t = things[2] // the value will be a string, however you can change it to a number or a boolean

//OBJECTS

let user: {firstName: string, age: number, id: number} = {firstName: 'Mario', age: 30, id: 1} // this will be an object with firstName, age and id as properties
// if you try to add a property that is not in the object you will get an error -> isFictional: true

user.firstName = 'Luigi' // this will work
user.email = 'test@gmail.com' // this will give you an error, because email is not a property of the object
user.id = 2 // this will work

let person = {name: 'Luigi', score: 35}
person.name = true // this won't work because name is a string
person.score = '35' // this won't work because score is a number
person.id = 1 // this won't work because id is not a property of the object

const score = person.score // this will be a number



// -----------------------------------------------------------------------------------------------------------------

// FUNCTIONS

function addTwoNumbers(a, b) {
    return a + b
} // as you can see you get the "a" and "b" highlighted because you have to specify the type of the parameters


function addTwoNumbers2(a: number, b: number) {
    return a + b
} // this will work

const subtrcatTwoNumbers = (a: number, b: number) :number => {
    return a - b
} // this will work

 
console.log(addTwoNumbers2(10, 20))

console.log(subtrcatTwoNumbers(10, 20))

function addAllNumbers(items: number[]) {
    const total = items.reduce((a, b) => a + b, 0)
    console.log(total)
}

addAllNumbers([10, 20, 30])
//:void is a type annotation used to specify that a function does not return any value.


// FUNCTION SIGNATURES

type Calculator = (numOne: number, numTwo: number) => number // this is a function signature
// when you create function signatures you can have as many arguments as you want.

function addTwoNumbers(a: number, b: number): number {
    return a + b
}

function multiplyTwoNumbers(a: number, b: number): number {
    return a * b
}

function squareNumber(num: number): number {
    return num * num
}

function joinTwoNumbers(a: number, b: number){
    return `${a}${b}` // this will be a string
}

let calcs: Calculator[] = []

calcs.push(addTwoNumbers)
calcs.push(multiplyTwoNumbers)
calcs.push(squareNumber)
calcs.push(joinTwoNumbers) // this will give you an error because joinTwoNumbers doesn't match the function signature

// FUNCTION SIGNATURES ON INTERFACES

interface HasArea {
    name: string
    calcArea: (a: number) => number
}

const shapeOne: HasArea = {
name : 'square',
calcArea:(l:number) => {
    return l *1
    }
}

console.log(shapeOne.calcArea(10))





// -----------------------------------------------------------------------------------------------------------------

//ANY TYPE

// this can be any type and change.

let age:any = 30
age = '30'
age = true

let title // this will be automatically any type

title = 10
title = '10'

let things :any [] = ['hello', 10, true]  // this will be an array of any type

function addTogether(value:any):any {
    return value + value
}

const resultOne = addTogether(10) // this will be any type
//expect -> resultOne = 20

// this functionality can be really useful when you're migrating from javascript to typescript and you don't want to specify the type of every variable
// because you won't have to change the type of every variable in your code

// -----------------------------------------------------------------------------------------------------------------

//TUPLES

//tuples is like an array but you have specify the type of every element and follow the order

let person: [string, number, boolean] = ['Mario', 30, true]
// if you try to change the type of one of the elements you will get an error

let hsla: [number,string,string,number]
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [10, 20]

function useCoords(): [number, number] {

    const lat = 100
    const long = 50

    return  [lat, long]
}

const [lat, long] = useCoords() // this will be a number

let user: [name: string,age: number]

user = ['Mario', 30]
console.log(user)

// -----------------------------------------------------------------------------------------------------------------

//INTERFACES
// interfaces are used to define the structure of an object
// with interfaces you have to named them with an uppercase letter

interface Author {
    firstName: string,
    lastName: string,
    age: number,
    isFictional: boolean
}

const authorOne: Author = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 30,
    isFictional: true
}

interface Post{
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author
}

const newPost: Post = {
    title: 'My first post',
    body: 'This is my first post',
    tags: ['first', 'post'],
    create_at: new Date(),
    author: authorOne
}


function createPost(post: Post):void {
    console.log(`created post ${post.title} by ${post.author.firstName} ${post.author.lastName}`)
}

createPost(newPost)

let posts: Post[] = []

posts.push(newPost)



//REAUSABLE INTERFACES

interface hasQuantity{
    quantity: number
}

const something: hasQuantity = { quantity: 10 }

function printQuantity(item: hasQuantity):void {
    console.log(item.quantity)
}

const book = {
    title: 'Harry Potter',
    quantity: 20
}

printQuantity(book) // this will work

const person = {
    name: 'Mario',
    age: 30
}

printQuantity(person) // this will give you an error because person doesn't have a quantity property

printQuantity({quantity: 15}) // this will work
printQuantity({quantity: 15, name: 'Pep') // this won't work, be careful!




// Extending interfaces

interface hasformatter{
    format(): string
}

interface bill extends hasformatter{
    id: string|number,
    amount: number,
    server: string,
}

const user = {

    id: 1,
    format(): string {
        return `user ${this.id}`
    
    }
}

const bill = {
    id: 1,
    amount: 200,
    server: 'Mario',
    format(): string {
        return `Bill ${this.id} is ${this.amount} and was served by ${this.server}`
    }
}

function printFormatted(item: hasformatter): void {
    console.log(item.format())
}

printFormatted(user)
printFormatted(bill)






// -----------------------------------------------------------------------------------------------------------------

//TYPE ALIAS
// type alias are used to create a new name for a type

type Rgb = [number, number, number]

function getRandColor(): Rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r, g, b]
}

const colorOne = getRandColor()
const colorTwo = getRandColor()
console.log(colorOne, colorTwo)

type User = {
    name: string,
    score: number,
    age: number,
}

const userOne: User = {
    name: 'Mario',
    score: 75,
    age: 45,
}

function formatUser(user: User): void {
    console.log(`${user.name} has a score of ${user.score} and is ${user.age} years old`)
}

formatUser(userOne)
formatUser({name: 'Luigi', score: 80, age: 40})



// EXTENDING TYPE ALIASES

type Person = {
    id: string | number,
    name: string,
}

type User = Person & {
    email: string,
}

const personOne = {
    id: 1,
    name: 'Mario',
}

const personTwo :User = {
    id: '2',
    name: 'Luigi',
    email: 'lui@gmail.com'
}

const personThree = {
    email: 'ttt@gmail.com'
}

function printUser (user: User){
    console.log(user.id, user.name, user.email)
}

printUser(personOne) // this will give you an error because personOne doesn't have an email property
printUser(personTwo) // this will work
printUser(personThree) // this will give you an error because personThree doesn't have an id and name property


// -----------------------------------------------------------------------------------------------------------------

//UNIONS TYPES

let someid: number | string // this will be a number or a string

someid = 10
someid = '10'

let email: string | null    // this will be a string or null

email = null
email = 'example.gmail.com'

type Id = number | string

let anotherId : Id

anotherId = 105532
anotherId = '10fajkgjl'


function swapIdType1(id: Id) :Id {
   
    // can only use props and methods common to both number strings types
    // parseInd(id) -> not allowed


}

// TYPE GUARDS
// type guards are used to check the type of a variable

function swapIdType(id: Id) :Id {
    if(typeof id === 'string') {
        return parseInt(id)
    } else {
        return id.toString()
    }
}

const idOne = swapIdType(1099)
const idTwo = swapIdType('1055')

console.log(idOne, idTwo)



// -----------------------------------------------------------------------------------------------------------------

// CLASSES

type Base = 'classic' | 'thick' | 'thin' | 'garlic'

 

class Pizza {
    constructor(title: string, price: number) {
        this.title = title
        this.price = price
    }

    title: string
    price: number
    base: Base = 'classic'
    toppings: string[] = []

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }
    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((t) => t !== topping)
    }
    selectBase(b: Base): void {
        this.base = b
    }
}


class Pizza {
    constructor(private title: string, private price: number) {}
    // a constrctur is a function that runs when you create a new instance of a class

    // title: string
    // price: number
    private base: Base = 'classic'
    private toppings: string[] = []
    // this will be private and you won't be able to access it from outside the class
    // but you can change it with the function below

    // public , instead is the default access modifier

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }
    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((t) => t !== topping)
    }
    selectBase(b: Base): void {
        this.base = b
    }
}


// INHERITANCE

interface hasFormatter {
    format(): string
}

class MenuItem implements hasFormatter {
    constructor(private title: string, private price: number) {}

    get details(): string {
        return `${this.title} - £${this.price}`
    }

    format() {
        return `This menu item is called ${this.title} and is £${this.price}`
    }
}

class Pizza extends MenuItem {
    constructor(title: string, price: number) {
        super(title, price)
    } // by using extends you can inherit the properties and methods of another class

    private base: Base = 'classic'
    private toppings: string[] = []

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }
    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((t) => t !== topping)
    }
    selectBase(b: Base): void {
        this.base = b
    }
}


const pizza = new Pizza('mario special', 15)

pizza.selectBase('garlic')
pizza.addTopping('mushrooms')
pizza.addTopping('olives')

console.log(pizza)

function printFormatted(val: hasFormatter): void {
    console.log(val.format())
}

printFormatted(pizza)

// Abstract classes

// is a class that can have properties and methods and can be herited from other classes, that can never be used
// to make a new instance of that class itself

// CSV Writer project -> take objects and turn them into a downloadable csv file


// -----------------------------------------------------------------------------------------------------------------

// GENERICS

//generics are used to create reusable components wheater it is a function or a class.
// they allow us to create components that can work over a variety of types rather than a single one

function logAndReturnString(val: string): string {
    console.log(val)
    return val
}
function logAndReturnNumber(val: number): number {
    console.log(val)
    return val
}
function logAndReturnBoolean(val: boolean): boolean {
    console.log(val)
    return val
}

function logAndReturnValue<T>(val: T): T {
    console.log(val)
    return val
} // this is a generic function
// T stands for type, it represents the type of the value that we pass in
// you can call it whatever you want, but T is the convention

const resultOne = logAndReturnValue<string>('mario')
const resultTwo = logAndReturnValue<number>(25)

// example 2

function getRandomArrayValue<T>(values: T[]): T {
    const i = Math.floor(Math.random() * values.length)

    return values[i]
}

interface User {
    name: string
    score: number
}

const users: User[] = [
    { name: 'mario', score: 100 },
    { name: 'peach', score: 150 },
    { name: 'wario', score: 75 },
    { name: 'yoshi', score: 90 },
]

const randomUser = getRandomArrayValue<User>(users)
console.log(randomUser.name)



// -----------------------------------------------------------------------------------------------------------------

//-------------------
// Intersection Type
//-------------------

type Person = {
    firstName: string
    id: number
}

type User = Person & {
    email: string
}

// example with generic function

function addIdToValue<T>(val: T): T & HasID { // this is an intersection type
    const id = Math.random()

    return { ...val, id }
}

interface Post {
    title: string
    thumbsUp: number
}

interface HasID {
    id: number
}

const post = addIdToValue<Post>({ title: 'Marmite Rules', thumbsUp: 250 })
console.log(post.id, post.title, post.thumbsUp)

*/
