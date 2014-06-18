import Ember from 'ember';

export default Ember.Controller.extend({
  name: null,
  score: null,
  actions: {
    createUser: function() {
      this.store.createRecord('player', {
        name: this.get('name'),
        score: parseInt(this.get('score'), 10)
      }).save();

      this.setProperties({
        name: null,
        score: null
      });
    }
  }
});
