# Ember Peak Spinner

A simple, flexible and customizable spinner UI component for incrementing and
decrementing numeric values that can debounce change events.

## Compatibility

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

## Installation

```
ember install @summit-electric-supply/ember-peak-spinner
```

## Usage

Peak Spinner is single component which yields three contextual components; a decrement button,
numeric input field and increment button.

Example:

```
<PeakSpinner @debounce="250" @onChange={{fn this.changeHandler}} as |DecrementButton Input IncrementButton|>
  <DecrementButton class="dec-class">-</DecrementButton>
  <Input step="5" min="0" max="100" value="10" />
  <IncrementButton class="inc-class">+</IncrementButton>
</PeakSpinner>
```

### `<PeakSpinner>`

* (optional) `@debounce` *integer* - allows you to set an arbitrary debounce window that allows the
  component to accept multiple changes without firing the `@onChange` function repeatedly.
* `@onChange` *(integer) => never | Promise<never>* - callback that takes an integer which is the
  value of the spinner's input.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
