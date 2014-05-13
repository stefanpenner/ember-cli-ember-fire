/* global Firebase */
export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://<yourfirebaseinstance>.firebaseio.com')
});
