import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('supereon', { include: 'eons.eras.periods.epoches.ages' });
  }
});
