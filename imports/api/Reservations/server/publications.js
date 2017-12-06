import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Reservations from '../reservations';

Meteor.publish('Reservations.list', () => Reservations.find());

/*Meteor.publish('Events.view', (_id) => {
  check(_id, String);
  return Documents.find(_id);
});*/
