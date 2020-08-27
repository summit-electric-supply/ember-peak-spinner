import { fillIn, find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | peak-spinner-input', function(hooks) {
  setupRenderingTest(hooks);

  test('@change', async function(assert) {
    this.change = null;
    this.ref = null;

    await render(hbs`<PeakSpinnerInput id="foo" @change={{action (mut change)}} @ref={{action (mut ref)}} />`);

    await fillIn('input', '10');

    assert.equal(this.change.target.value, '10');
  });

  test('@ref', async function(assert) {
    this.change = null;
    this.ref = null;

    await render(hbs`<PeakSpinnerInput id="foo" @change={{action (mut change)}} @ref={{action (mut ref)}} />`);

    assert.equal(this.ref.id, 'foo');
  });

  test('attributes', async function(assert) {
    this.change = null;
    this.ref = null;

    await render(hbs`<PeakSpinnerInput class="s-foo s-bar s-baz" @change={{action (mut change)}} @ref={{action (mut ref)}} />`);

    assert.equal(find('input').className.trim(), 's-foo s-bar s-baz');
  });

  test('value', async function(assert) {
    await render(hbs`<PeakSpinnerInput value="5" @change={{action (mut change)}} @ref={{action (mut ref)}} />`);

    assert.equal(find('input').value, '5');
  });
});
