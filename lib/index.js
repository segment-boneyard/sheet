
var domify = require('domify')
  , inherit = require('inherit')
  , Modal = require('modal')
  , overlay = require('overlay')
  , redraw = require('redraw')
  , template = require('./index.html');


/**
 * Expose `Sheet`.
 */

module.exports = Sheet;


/**
 * Initialize a new `Sheet`.
 *
 * @param {Element} el
 */

function Sheet (el) {
  if (!(this instanceof Sheet)) return new Sheet(el);
  this.view = el;
  this.overlay = overlay().addClass('modal-overlay').addClass('sheet-overlay');
  this.wrapper = domify(template);
  this.modal = this.wrapper.querySelector('div');
  this.close = this.wrapper.querySelector('a');
  this.modal.appendChild(this.view);
  this.align('right'); // default alignment
  this.bind();
  document.body.appendChild(this.wrapper);
  redraw(this.wrapper); // to force an initial show to take
}


/**
 * Inherit from `Modal`.
 */

inherit(Sheet, Modal);


/**
 * Set the sheet's alignment.
 *
 * @param {String} side (left or right)
 * @return {Sheet}
 */

Sheet.prototype.align = function (side) {
  return this
    .removeClass('right-aligned', true)
    .removeClass('left-aligned', true)
    .addClass(side + '-aligned', true);
};