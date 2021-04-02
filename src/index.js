import "./base.less";
import MathQuill from "mathquill-jquery";
import myUtils from "./utils/index";
import { ZYKeyboard } from "./component/keyboard";
import keyboardConfig from "./config/keyboard.json";
// https://blog.csdn.net/qq_40323256/article/details/89282801
window.MQ = null;
window.MQCurrentFieldEl = null;
var KboardShowMarign = 5;
var currentKeyboard = null;
var latexAnalysises = new Array();

function patch(s, re) {
  // re = eval("/" + re + "/ig")
  // return s.match(re) ? s.match(re).length : 0;
  var n = s.split(re).length - 1;
  return n;
}

function init() {
  MQ = MathQuill.getInterface(2);

  registerEmbed(MQ);

  $(document).on("focusin", ".mq-textarea textarea", function (e) {
    MQCurrentFieldEl = $(e.target).parents(".save_span_tag");
    var KboardShowMarignLeft =
      MQCurrentFieldEl.offset().left + MQCurrentFieldEl.width();
    var KboardShowMarignTop =
      MQCurrentFieldEl.offset().top +
      MQCurrentFieldEl.height() +
      KboardShowMarign;
    currentKeyboard.show(KboardShowMarignLeft, KboardShowMarignTop);

    ///点击空白区隐藏键盘
    $(document).one("touchstart", function (e) {
      console.log($(e.target).parents(".save_span_tag"));
      if ($(e.target).parents(".save_span_tag").length == 0) {
        var MQCurrentField = MQCurrentFieldEl.MQField();
        if (MQCurrentField) {
          MQCurrentField.blur();
        }
      }
    });
  });

  $(document).on("focusout", ".mq-textarea textarea", function (e) {
    MQCurrentFieldEl = null;
    currentKeyboard.hidden();
  });

  currentKeyboard = new ZYKeyboard(undefined, keyboardConfig, {
    clickKey: function (data) {
      if (MQCurrentFieldEl) {
        var MQCurrentField = MQCurrentFieldEl.MQField();
        var count = patch(data, "{}");
        if (count == 0) {
          MQCurrentField.cmd(data);

          return;
        }
        MQCurrentField.write(data);
        for (var i = 0; i < count; i++) {
          MQCurrentField.keystroke("Left");
        }
      }
    },
    clickDel: function () {
      clickDelAction();
    },
    cursorLeftMove: function () {
      var MQCurrentField = MQCurrentFieldEl.MQField();
      MQCurrentField.keystroke("Left");
    },
    cursorRightMove: function () {
      var MQCurrentField = MQCurrentFieldEl.MQField();
      MQCurrentField.keystroke("Right");
    },
  });
}

function initEl(elstr, config) {
  var value = $(elstr);
  value.addClass("save_span_tag");

  ///点击空白区会隐藏键盘，需要但是点击输入框不隐藏，所以阻止点击输入框隐藏键盘，增加阻止冒泡
  value.on("touchstart", function (e) {
    e.stopPropagation();
  });
  var answerMathField = MQ.MathField($(elstr).get(0), config);
  value.data("save_span", answerMathField);

  //TOTO:判断平板还是有问题
  // if (myUtils.isPC() == false) {
  //   $(elstr + " textarea").attr("readonly", "readonly");
  // }

  $(elstr + " textarea").attr("readonly", "readonly");
  return answerMathField;
}

///private
function clickDelAction() {
  if (MQCurrentFieldEl) {
    var MQCurrentField = MQCurrentFieldEl.MQField();
    MQCurrentField.keystroke("Backspace");
  }
}

function registerEmbed(MQ) {
  ///几又分之几
  var fracs = {
    registerEmbed: function (MQ) {
      MQ.registerEmbed("fracs", function (value) {
        var values = value.split("-");
        return {
          htmlString:
            '<span class="custom-embed-fracs mq-fraction">' +
            '<span class="left-p">' +
            values[0] +
            "</span>" +
            '<span class="left">' +
            values[0] +
            "</span>" +
            '<span class="right">' +
            '<span class="top">' +
            values[1] +
            "</span>" +
            '<span class="bottom">' +
            values[2] +
            "</span>" +
            "</span>" +
            "</span>",
          text: function () {
            return "fracs";
          },
          latex: function () {
            return "\\embed{fracs}[" + value + "]";
          },
        };
      });
    },
    latex: function (laterx) {
      ///几又分之几
      laterx = laterx.replace(/\\embed\{fracs\}\[(.+?)\]/g, function (str) {
        str.match(/\[(.+?)\]/g);
        var values = RegExp.$1.split("-");
        var numerator = values[0] * values[2] + values[1];
        var denominator = values[2];
        return "\\frac{" + numerator + "}{" + denominator + "}";
      });
      return laterx;
    }
  };
  latexAnalysises.push(fracs)

  for (var i = 0; i < latexAnalysises.length;i++) {
    const latexAnalys = latexAnalysises[i]
    latexAnalys.registerEmbed(MQ)
  }

}

///获取latex
function latex(mqField) {
  var laterx = mqField.latex();

  for (var i = 0; i < latexAnalysises.length;i++) {
    const latexAnalys = latexAnalysises[i]
    laterx = latexAnalys.latex(laterx)
  }

  return laterx;
}

///$扩展
$.fn.latex = function () {
  return latex($(this).MQField());
};

$.fn.MQField = function () {
  return this.data("save_span");
};

export default { init, initEl };
