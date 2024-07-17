"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
const DataResource_1 = require("../services/DataResource");
exports.Pizza = new DataResource_1.DataResource('http://localhost:3000/pizzas');
// Pizza.save({
// 	title: 'my new pizza',
// 	description: 'yummy',
// 	toppings: ['mushrooms', 'peppers', 'olives'],
// 	price: 10,
// })
