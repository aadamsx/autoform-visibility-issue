Meteor.publish("Person", function (personId) {
  return People.find({_personId: personId});
});
