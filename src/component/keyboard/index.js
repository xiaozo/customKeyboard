import keyboardTmpl from "./view/keyboardTmpl.art";
import keyboardTool from "../keyboardTool";
import keyboardBody from "../keyboardBody";

var content = {
  init: function () {
    $("body").append(keyboardTmpl);
    $("body").append(template("zy-keyboard-tpl", {}));

    var that = this;

    keyboardTool.init(function (el, tag) {
      $(".ZY__keyboard").append(el);
      $(tag).on("selected", function (e, data) {
        var index = data.index;
        that.selectByIndex(index);
      });
    });

    keyboardBody.init(function (el) {
      $(".ZY__keyboard").append(el);
    });

    that.selectByIndex(0);

    $(".ZY__keyboard").mousedown(function (e) {
      e.preventDefault();
    });
  },
  selectByIndex: function (index) {
    keyboardTool.selectByIndex(index);
    keyboardBody.selectByIndex(index);
  },
};

export default content;
