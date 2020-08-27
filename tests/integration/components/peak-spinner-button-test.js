import { click, find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | peak-spinner-button', function(hooks) {
  setupRenderingTest(hooks);

  test('@click', async function(assert) {
    this.click = null;

    await render(hbs`
      <PeakSpinnerButton class="style-foo style-bar style-baz" id="foo" @click={{action (mut click)}}>
        foo bar baz
      </PeakSpinnerButton>
    `);

    await click('button');

    assert.equal(this.click.target.id, 'foo');
  });

  test('attributes', async function(assert) {
    this.click = null;

    await render(hbs`
      <PeakSpinnerButton class="style-foo style-bar style-baz" @click={{action (mut click)}}>
        foo bar baz
      </PeakSpinnerButton>
    `);

    assert.equal(find('button').className.trim(), 'style-foo style-bar style-baz');
  });

  test('textContent', async function(assert) {
    this.click = null;

    await render(hbs`
      <PeakSpinnerButton class="style-foo style-bar style-baz" @click={{action (mut click)}}>
        foo bar baz
      </PeakSpinnerButton>
    `);

    assert.equal(find('button').textContent.trim(), 'foo bar baz');
  });
});
