import keyboardToolsTmpl from "./view/keboardToolsTmpl.art";
import $ from "jquery";
import "jquery.nicescroll";

export class KeyboardTool {
    // id:null,
    constructor(id,insert) {
        this.id = id
        var data = { left: [{ text: "abc" }, { text: "123" },{text:"符号"}] };
    
        var el = template("zy-keyboard-tools-tpl", data);
        var tag = '#'+this.id+" .keyboard-toolbar";
        insert(el, '#'+this.id+" .keyboard-toolbar");
    
        var actionEl = this.actionEl();
        actionEl.on("click", function (e) {
          var index = actionEl.index(this);
          $(tag).trigger("selected", { index: index });
        });
    }

    actionEl(){
      return $('#'+this.id+" .keyboard-toolbar .left .action");
    }

    actionRightEl(){
        return $('#'+this.id+" .keyboard-toolbar .right .action");
    }

      actionSelEl() {
        return $('#'+this.id+" .keyboard-toolbar .left .action.selected");
    }

    currentIndex() {
        var actionSelEl = this.actionSelEl().get(0);
       return this.actionEl().index(actionSelEl); 
    }

    selectByIndex(index) {
        var actionEl = this.actionEl();
        actionEl.removeClass("selected");
        $(actionEl.get(index)).addClass("selected");
    }

   static loadTmpl() {
        if ($("#zy-keyboard-tools-tpl").length == 0) {
            $("body").append(keyboardToolsTmpl);
          } 
    }
}