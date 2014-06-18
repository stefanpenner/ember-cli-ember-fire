export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase('https://' + (window.ENV.firebase_instance || 'sweltering-fire-8953') + '.firebaseio.com')
});
