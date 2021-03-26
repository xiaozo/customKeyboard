import keyboardToolsTmpl from "./view/keboardToolsTmpl.art";
import $ from "jquery";
import "jquery.nicescroll";

var keyboardTools = {
    id:null,
  actionEl: function () {
    return $('#'+this.id+" .keyboard-toolbar .left .action");
  },
  actionRightEl: function () {
    return $('#'+this.id+" .keyboard-toolbar .right .action");
  },
  actionSelEl: function () {
    return $('#'+this.id+" .keyboard-toolbar .left .action.selected");
  },
  init: function (id,insert) {
    this.id = id
    var data = { left: [{ text: "abc" }, { text: "123" }] };

    var el = template("zy-keyboard-tools-tpl", data);
    var tag = '#'+this.id+" .keyboard-toolbar";
    insert(el, '#'+this.id+" .keyboard-toolbar");

    var actionEl = this.actionEl();
    actionEl.on("click", function (e) {
      var index = actionEl.index(this);
      $(tag).trigger("selected", { index: index });
    });

    var actionRightEl = this.actionRightEl();
    actionRightEl.on("click", function (e) {
       console.log(this);
      });
  },
  currentIndex: function () {
    var actionSelEl = this.actionSelEl().get(0);
    return this.actionEl().index(actionSelEl);
  },
  selectByIndex: function (index) {
    var actionEl = this.actionEl();
    actionEl.removeClass("selected");
    $(actionEl.get(index)).addClass("selected");
  },
  loadTmpl:function(){
    $("body").append(keyboardToolsTmpl);
  }
};

export default keyboardTools;
