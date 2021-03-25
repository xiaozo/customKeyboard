import "./base.less";
import MathQuill from "mathquill-jquery";
import $ from "jquery";
import "jquery.nicescroll";
import myUtils from "./utils/index";
import content from "./component/keyboard";

// https://blog.csdn.net/qq_40323256/article/details/89282801
window.MQ = null;
window.MQCurrentField = null;

function init() {
  MQ = MathQuill.getInterface(2);

  $(document).on("focusin", ".mq-textarea textarea", function (e) {
    MQCurrentField = $(e.target).parents(".save_span_tag");
  });

  $(document).on("focusout", ".mq-textarea textarea", function (e) {
    MQCurrentField = null;
  });

  content.init();
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
