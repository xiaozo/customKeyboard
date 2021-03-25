import keyboardEnglishTmpl from './view/keyboardEnglishTmpl.art';
import keyboardNumTmpl from './view/keyboardNumTmpl.art';
var keyboardBody= {
    actionEl: function() {
        return $('.ZY__keyboard .keyboard-layer')
     },
     actionSelEl: function() {
        return $('.ZY__keyboard .keyboard-layer.is-visible')
     },
    init: function (insert) {
        $('body').append(keyboardEnglishTmpl)
        $('body').append(keyboardNumTmpl)

        var el =  template('zy-keyboard-english-tpl', {})
        insert(el)

        el =  template('zy-keyboard-num-tpl', {})
        insert(el)

    },
    selectByIndex:function(index) {
        var actionEl = this.actionEl();
        actionEl.removeClass('is-visible')
        $(actionEl.get(index)).addClass('is-visible')
    }
  
  }

  export default keyboardBody