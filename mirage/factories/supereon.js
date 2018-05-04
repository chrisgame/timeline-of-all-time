import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.random.word();
  },

  dateMethod: 'Geologic Time Scale',
  dateUnits: 'Ma'
});
