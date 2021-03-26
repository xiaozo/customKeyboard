import "./base.less";
import MathQuill from "mathquill-jquery";
import $ from "jquery";
import "jquery.nicescroll";
import myUtils from "./utils/index";
import content from "./component/keyboard";
import keyboard from "./config/keyboard.json";
// https://blog.csdn.net/qq_40323256/article/details/89282801
window.MQ = null;
window.MQCurrentField = null;
var KboardShowMarign = 5

function init() {
  MQ = MathQuill.getInterface(2);

  $(document).on("focusin", ".mq-textarea textarea", function (e) {
    var MQCurrentFieldEl = $(e.target).parents(".save_span_tag");
    MQCurrentField = MQCurrentFieldEl.data("save_span");
    var KboardShowMarignLeft = MQCurrentFieldEl.offset().left + MQCurrentFieldEl.width()
    var KboardShowMarignTop = MQCurrentFieldEl.offset().top + MQCurrentFieldEl.height() + KboardShowMarign
    content.show(KboardShowMarignLeft,KboardShowMarignTop)

    $(document).one("touchstart",function(e){
      if (MQCurrentField) {
        MQCurrentField.blur()
      }
    })
   
  });

  $(document).on("focusout", ".mq-textarea textarea", function (e) {
    MQCurrentField = null;
    content.hidden()
  });

  content.init(undefined,keyboard,{
    clickKey:function (data) {
     console.log(data);
     MQCurrentField.cmd(data)
    },
    clickDel:function () {
      console.log("del");
    }
  })
}

function initEl(elstr, config) {
  var value = $(elstr);
  value.addClass("save_span_tag");
  var answerMathField = MQ.MathField($(elstr).get(0), config);
  value.data("save_span", answerMathField);
  if (myUtils.isPC() == false) {
    $(elstr + " textarea").attr("readonly", "readonly");
  }
  return answerMathField;
}

$.fn.latex = function () {
  return this.data("save_span").latex();
};

export default { init, initEl };
