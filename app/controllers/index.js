var sum = Ember.computed.sum;
var map = Ember.computed.map;

export default Ember.ArrayController.extend({
  scores: map('@this.@each.score', function(people) {
    return people.get('score');
  }),
  total: sum('scores'),
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
