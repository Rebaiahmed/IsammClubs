import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Reservations = new Mongo.Collection('Reservations');
//export default Reservations ;

Reservations.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

/*Reservations.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});*/

Reservations.schema  =new SimpleSchema({
  StartDate: {
    type: Date,
  },
  Time :{
    type : Date,
  },
  description :{
    type : String,
     optional: true,
  },

  ClubId :{
   type: String
  }
});

//Reservations.attachSchema(Reservations.schema);

/*Factory.define('document', Events, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
});*/

export default Reservations;
