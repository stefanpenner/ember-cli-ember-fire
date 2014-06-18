import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase('https://' + window.EmberCliEmberFireENV.APP.firebase_instance + '.firebaseio.com')
});
