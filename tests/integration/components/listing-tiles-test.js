import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('listing-tiles', 'Integration | Component | listing tiles', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{listing-tiles}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#listing-tiles}}
      template block text
    {{/listing-tiles}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
