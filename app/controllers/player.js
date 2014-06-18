import Ember from 'ember';

export default Ember.ObjectController.extend({
  selected: Ember.computed('parentController.selectedPlayer', function(){
    return this.get('parentController.selectedPlayer') === this.get('model');
  }).readOnly()
});
