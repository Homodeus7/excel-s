import {DomListener} from '@core/DomListner';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }
  toHTML() {
    return ''
  }
  init() {
    this.initDOMListeners()
  }
  destroy() {
    this.removeDOMListeners()
  }
}
