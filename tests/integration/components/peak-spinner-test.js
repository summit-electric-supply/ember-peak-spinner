import { click, fillIn, render, waitUntil } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | peak-spinner', function(hooks) {
  setupRenderingTest(hooks);

  test('@debounce', async function(assert) {
    this.onChange = null;

    await render(hbs`
      <PeakSpinner @debounce=100 @onChange={{action (mut onChange)}} as |DecrementButton Input IncrementButton|>
        <DecrementButton id="decrement-button">-</DecrementButton>
        <Input id="input" min="0" max="10" step="5" value="5" />
        <IncrementButton id="increment-button">+</IncrementButton>
      </PeakSpinner>
    `);

    fillIn('input', '10');

    assert.equal(this.onChange, null);

    await waitUntil(() => this.onChange !== null);

    assert.equal(this.onChange, '10');
  });

  test('@onChange', async function(assert) {
    this.onChange = null;

    await render(hbs`
      <PeakSpinner @onChange={{action (mut onChange)}} as |DecrementButton Input IncrementButton|>
        <DecrementButton id="decrement-button">-</DecrementButton>
        <Input id="input" min="0" max="10" step="5" value="5" />
        <IncrementButton id="increment-button">+</IncrementButton>
      </PeakSpinner>
    `);

    await fillIn('input', '10');

    assert.equal(this.onChange, '10');

    await click('#decrement-button');

    assert.equal(this.onChange, '5');

    await click('#increment-button');

    assert.equal(this.onChange, '10');
  });
});
