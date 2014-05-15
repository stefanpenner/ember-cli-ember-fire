export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase('https://' + window.ENV.firebase_instance + '.firebaseio.com')
});
