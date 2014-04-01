var sum = Ember.computed.sum;
var mapBy = Ember.computed.mapBy;

export default Ember.ArrayController.extend({
  scores: mapBy('@this', 'score'),
  total: sum('scores'),
  actions: {
    givePoints: function(model, points) {
      model.incrementProperty('score', points)
      model.save();
    },
    takePoints: function(model, points) {
      model.incrementProperty('score', (-1)*points)
      model.save();
    },
 
    destroyUser: function(model) {
      model.destroyRecord();
    }
  }
});
