export default Ember.ArrayController.extend({
  total: Ember.computed.sum('@each.score'),
  actions: {
    givePoints: function(model, points) {
      model.incrementProperty('score', points)
      model.save();
    },
    destroyUser: function(model) {
      model.destroyRecord();
    }
  }
});
