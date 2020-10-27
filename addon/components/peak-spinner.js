import { action } from '@ember/object';
import Component from '@glimmer/component';
import { task, timeout } from 'ember-concurrency';

export default class PeakSpinnerComponent extends Component {
  ref = null;
  value = null;

  @action setRef(ref) {
    this.ref = ref;
  }

  @action async onIncrement() {
    const lastValue = this.value;

    this.ref?.stepUp();

    const value = this.ref?.value;

    if (lastValue !== value) {
      try {
        return await this.onChange.perform({ target: this.ref });
      } catch (_) {
        // no-op
      }
    }
  }

  @action async onDecrement() {
    const lastValue = this.value;

    this.ref?.stepDown();

    const value = this.ref?.value;

    if (lastValue !== value) {
      try {
        return await this.onChange.perform({ target: this.ref });
      } catch (_) {
        // no-op
      }
    }
  }

  @(task(function * (event) {
    this.value = event?.target?.value;

    yield timeout(this.args.debounce || 0);

    if (this.args.onChange) {
      if (typeof this.args.onChange === 'object' && typeof this.args.onChange.linked === 'function') {
        yield this.args.onChange.linked().perform(this.value);
      } else {
        yield this.args.onChange(this.value);
      }
    }
  }).restartable()) onChange;
}
