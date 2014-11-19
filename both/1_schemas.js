Schemas = {};

UI.registerHelper("Schemas", Schemas);

Schemas.Person = new SimpleSchema({
  _id: {
    type: String,
    optional: true,
    denyUpdate: true
  },
  _personId: {
    type: String,
    optional: true,
    autoValue: function () {
        if (this.isInsert) {
            return Meteor.userId();
        } else {
            this.unset();
        }
    },
    denyUpdate: true
  },
  otherNamesUsed: {
    type: String,
    optional: false,
    allowedValues: ["No", "Yes"]
  },
  otherNamesUsed2: {
    type: String,
    optional: false,
    allowedValues: ["No", "Yes"]
  },
  otherNamesUsed3: {
    type: String,
    optional: false,
    allowedValues: ["No", "Yes"]
  },
});
