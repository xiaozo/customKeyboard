import keyboardEnglishTmpl from "./view/keyboardEnglishTmpl.art";
import keyboardNumTmpl from "./view/keyboardNumTmpl.art";
import keyboardSymbolTmpl from "./view/keyboardSymbolTmpl.art";
import myUtils from "../../utils/index";

export class KeyboardBody {
  // id: null,
  // isCapital: false,
  actionEl() {
    return $("#" + this.id + " .keyboard-layer");
  }

  actionSelEl() {
    return $("#" + this.id + " .keyboard-layer.is-visible");
  }
 
  constructor(id, insert) {
    this.id = id;

    var that = this;
    var el = template("zy-keyboard-english-tpl", { id: id });
    insert(el);

    el = template("zy-keyboard-num-tpl", { id: id });
    insert(el);

    el = template("zy-keyboard-symbol-tpl", { id: id });
    insert(el);

    ///增加事件
    $("#" + this.id + " .keycap").on("mouseup", function (e) {
      var data_command = $(this).attr("data-command");
      if (!myUtils.isNull(data_command)) {
        $("#" + that.id).trigger("clickKey", data_command);
      }
    });

    ///增加事件
    $("#" + this.id + " .action").on("mouseup", function (e) {
      var data_action = $(this).attr("data-action");
      if (!myUtils.isNull(data_action)) {
        if (data_action === "shift") {
          that.isCapital = !that.isCapital;
          that.cutCapitalHandel();
        } else if (data_action === "del") {
          $("#" + that.id).trigger("clickDel");
        } else if (data_action === "cursor-left-move") {
          $("#" + that.id).trigger("cursorLeftMove");
        } else if (data_action === "cursor-right-move") {
          $("#" + that.id).trigger("cursorRightMove");
        }
      }
    });

    that.cutCapitalHandel();
  }

  cutCapitalHandel() {
    var items = $(
        "#" + this.id + " .keyboard-layer-engish .keycap[data-letter]"
      );
      for (let item of items) {
        //for of 推荐用在遍历数组
        var letters = $(item).attr("data-letter").split("-");
        var letter = this.isCapital ? letters[1] : letters[0];
        $(item).get(0).innerHTML = letter;
        $(item).attr("data-command", letter);
      }
  }

  selectByIndex(index) {
    var actionEl = this.actionEl();
    actionEl.removeClass("is-visible");
    $(actionEl.get(index)).addClass("is-visible");
  }

  static loadTmpl() {
    if ($("#zy-keyboard-english-tpl").length == 0) {
        $("body").append(keyboardEnglishTmpl);
      }
  
      if ($("#zy-keyboard-num-tpl").length == 0) {
        $("body").append(keyboardNumTmpl);
      }

      if ($("#zy-keyboard-symbol-tpl").length == 0) {
        $("body").append(keyboardSymbolTmpl);
      }
  }
}