
var domify = require('domify');
var modal = require('modal');
var template = require('./index.html');
var delegate = require('delegate');
var classes = require('classes');


/**
 * Expose `Sheet`.
 */

module.exports = Sheet;


/**
 * Initialize a new `Sheet`.
 *
 * @param {Element} content
 */

function Sheet (content) {
  if (!(this instanceof Sheet)) return new Sheet(content);
  this.el = domify(template);
  this.el.appendChild(content);
  this.modal = modal(this.el)
    .overlay()
    .closable();
  this.align('right');
  delegate.bind(this.el, '[on-click="hide"]', 'click', this.hide.bind(this), true);
}


/**
 * Mixins
 */

classes(Sheet.prototype);


/**
 * Set the sheet's alignment.
 *
 * @param {String} side (left or right)
 * @return {Sheet}
 */

Sheet.prototype.align = function (side) {
  this.modal.effect('sheet-' + side);
  return this;
};


/**
 * Show the sheet.
 *
 * @return {Sheet}
 */
Sheet.prototype.show = function(){
  this.modal.show();
  return this;
};


/**
 * Hide the sheet.
 *
 * @return {Sheet}
 */
Sheet.prototype.hide = function(){
  this.modal.hide();
  return this;
};