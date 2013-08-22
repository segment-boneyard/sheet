# modal

  A simple modal UI component.

## Installation

    $ component install segmentio/modal

## Example

```js
var modal = require('modal');
modal(el).show();
```

  To use it, pass in the `el` you want to "modal-ize".

## API

```html
<div class="overlay modal-overlay"></div>
<div class="modal-wrapper">
  <div class="modal">
    <a class="modal-close-button"></a>
    { Your element gets injected here. }
  </div>
</div>
```

A [`segmentio/overlay`](https://github.com/segmentio/overlay) element (with an `.overlay` class) is used to create the mask above the screen, so if you've already themed it you've got no more work to do.


### Modal(el)
  Create a new `Modal` instance with the given `el`.

### #show(fn)
  Show the modal, emitting `show`, optionally calling `fn`.

### #hide(fn)
  Hide the modal, emitting `hide`, optionally calling `fn`.

### #remove(fn)
  Remove the modal from the DOM, optionally calling `fn`.

### #closeable()
  Make the modal closeable.

### #temporary()
  Make the modal one-time-use, so that it removes itself on hiding.

### #addClass(name)
  Add a class `name` to the `.modal` and `.modal-overlay`.

### #removeClass(name)
  Remove a class `name` from the `.modal` and `.modal-overlay`.

## License

  MIT