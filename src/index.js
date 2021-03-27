import "./base.less";
// import MathQuill from "mathquill-jquery";
import $ from "jquery";
import "jquery.nicescroll";
import myUtils from "./utils/index";
import content from "./component/keyboard";
import keyboard from "./config/keyboard.json";
// https://blog.csdn.net/qq_40323256/article/details/89282801
window.MQ = null;
window.MQCurrentFieldEl = null;
var KboardShowMarign = 5

function init() {
  MQ = MathQuill.getInterface(2);

  $(document).on("focusin", ".mq-textarea textarea", function (e) {
   MQCurrentFieldEl = $(e.target).parents(".save_span_tag");
    var KboardShowMarignLeft = MQCurrentFieldEl.offset().left + MQCurrentFieldEl.width()
    var KboardShowMarignTop = MQCurrentFieldEl.offset().top + MQCurrentFieldEl.height() + KboardShowMarign
    content.show(KboardShowMarignLeft,KboardShowMarignTop)

    ///点击空白区隐藏键盘
    $(document).one("touchstart",function(e){
      var MQCurrentField = MQCurrentFieldEl.MQField();
      if (MQCurrentField) {
        MQCurrentField.blur()
      }
    })
   
  });

  $(document).on("focusout", ".mq-textarea textarea", function (e) {
    MQCurrentFieldEl = null;
    content.hidden()
  });

  content.init(undefined,keyboard,{
    clickKey:function (data) {
      if (MQCurrentFieldEl) {
        var MQCurrentField = MQCurrentFieldEl.MQField();
        MQCurrentField.cmd(data)
      }
    
    },
    clickDel:function () {
      clickDelAction()
    },
    cursorLeftMove:function () {
      var MQCurrentField = MQCurrentFieldEl.MQField();
      MQCurrentField.keystroke('Left');
    },
    cursorRightMove:function () {
      var MQCurrentField = MQCurrentFieldEl.MQField();
      MQCurrentField.keystroke('Right');
    },
  })
}

function initEl(elstr, config) {
  var value = $(elstr);
  value.addClass("save_span_tag");
  
  ///点击空白区会隐藏键盘，需要但是点击输入框不隐藏，所以阻止点击输入框隐藏键盘，增加阻止冒泡
  value.on("touchstart",function(e){
    e.stopPropagation()
  })
  var answerMathField = MQ.MathField($(elstr).get(0), config);
  value.data("save_span", answerMathField);
  if (myUtils.isPC() == false) {
    $(elstr + " textarea").attr("readonly", "readonly");
  }
  return answerMathField;
}

///private
function clickDelAction() {
  if (MQCurrentFieldEl) {
    var MQCurrentField = MQCurrentFieldEl.MQField();

      if (MQCurrentFieldEl.find(".mq-selection").length) {
        MQCurrentField.keystroke('Del');
      } else {
        MQCurrentField.keystroke('Left');
        MQCurrentField.keystroke('Del');
      }
  }
}

///$扩展
$.fn.latex = function () {
  
  return $(this).MQField.latex();
};

$.fn.MQField = function() {
  return this.data("save_span");
}

export default { init, initEl };
