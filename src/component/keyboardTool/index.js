import keyboardToolsTmpl from "./view/keboardToolsTmpl.art";
import $ from "jquery";
import "jquery.nicescroll";

var keyboardTools = {
  actionEl: function () {
    return $(".ZY__keyboard .keyboard-toolbar .left .action");
  },
  actionSelEl: function () {
    return $(".ZY__keyboard .keyboard-toolbar .left .action.selected");
  },
  init: function (insert) {
    $("body").append(keyboardToolsTmpl);
    var data = { left: [{ text: "abc" }, { text: "123" }] };

    var el = template("zy-keyboard-tools-tpl", data);
    var tag = ".ZY__keyboard .keyboard-toolbar";
    insert(el, ".ZY__keyboard .keyboard-toolbar");

    var actionEl = this.actionEl();
    actionEl.on("click", function (e) {
      var index = actionEl.index(this);
      $(tag).trigger("selected", { index: index });
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
};

export default keyboardTools;
