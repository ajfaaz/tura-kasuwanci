// imports/api/products.js
import { Mongo } from 'meteor/mongo';

export const Products = new Mongo.Collection('products');
