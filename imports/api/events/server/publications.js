import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Events from '../Events';

Meteor.publish('Events.list', () => Documents.find());

Meteor.publish('Events.view', (_id) => {
  check(_id, String);
  return Documents.find(_id);
});
