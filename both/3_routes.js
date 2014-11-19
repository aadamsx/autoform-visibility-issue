Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', {name: 'home.view', controller: 'homeController'});
homeController = RouteController.extend({
    template: 'home',
    waitOn: function () {
      Meteor.subscribe("Person", Meteor.userId());
    }
});
homeController.helpers({
  setFormMode: function () {
    return getFormMode();
  }
});
