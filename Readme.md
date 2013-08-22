# sheet

  A special modal that slides out from the right or left side of the screen.

  ![example of a sheet](http://i.cloudup.com/HNkFjYOyCE.png)

## Installation

    $ component install segmentio/sheet

## Example

```js
var sheet = require('sheet');
sheet(el).show();
```

  To use it, pass in the `el` you want to "sheet-ize".

## API

```html
<div class="overlay sheet-overlay"></div>
<div class="sheet-wrapper">
  <div class="sheet">
    <a class="sheet-close-button"></a>
    { Your element gets injected here. }
  </div>
</div>
```

A [`segmentio/overlay`](https://github.com/segmentio/overlay) element (with an `.overlay` class) is used to create the mask above the screen, so if you've already themed it you've got no more work to do.


### Modal(el)
  Create a new `Modal` instance with the given `el`.

### #show(fn)
  Show the sheet, emitting `show`, optionally calling `fn`.

### #hide(fn)
  Hide the sheet, emitting `hide`, optionally calling `fn`.

### #remove(fn)
  Remove the sheet from the DOM, optionally calling `fn`.

### #closeable()
  Make the sheet closeable.

### #temporary()
  Make the sheet one-time-use, so that it removes itself on hiding.

### #addClass(name)
  Add a class `name` to the `.sheet` and `.sheet-overlay`.

### #removeClass(name)
  Remove a class `name` from the `.sheet` and `.sheet-overlay`.

## License

  MIT