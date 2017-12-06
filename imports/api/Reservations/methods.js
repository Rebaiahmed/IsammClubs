import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Reservations from './reservations'

/**
 * Methods are used to run code on the server and optionally, send a response
 * to the client (ex: APIs, do computations, work with the DB, etc).
 * In Meteor, methods are functions defined as values of a simple
 * object that is in turn, passed to the Meteor.methods function
 */
 export const addReservation = new ValidatedMethod({
   name: 'Reservations.insert',
   validate: new SimpleSchema({
     _id: { type: String, optional: true },
     StartDate: { type: Date, optional: true },
   Time: { type: Date, optional: true },
    description: { type: String, optional: true },
    ClubId: { type: String, optional: true },
   }).validator(),
   run(document) {
     return Reservations.insert({  StartDate : document.StartDate,
       Time : document.Time ,
       description : document.description,
       ClubId : document.uid});
   },
 });
