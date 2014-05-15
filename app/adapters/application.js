export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://' + window.ENV.firebase_instance + '.firebaseio.com')
});
