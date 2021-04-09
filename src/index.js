import "./base.less";
import MathQuill from "mathquill-jquery";
import myUtils from "./utils/index";
import { ZYKeyboard } from "./component/keyboard";
import { Shade } from "./component/shade";
import keyboardConfig from "./config/keyboard.json";
import ZYMath from "./zymath.min";
import math from "mathjs";

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
    if (MQCurrentFieldEl == null) {
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
        if ($(e.target).parents(".save_span_tag").length == 0) {
          var MQCurrentField = MQCurrentFieldEl.MQField();
          if (MQCurrentField) {
            MQCurrentField.blur();
          }
        }
      });
    }
  });

  $(document).on("focusout", ".mq-textarea textarea", function (e) {
    if (!MQCurrentFieldEl.data("shade")) {
      MQCurrentFieldEl = null;
      currentKeyboard.hidden();
    }
  });

  currentKeyboard = new ZYKeyboard(undefined, keyboardConfig, {
    clickKey: function (data) {
      if (MQCurrentFieldEl) {
        var MQCurrentField = MQCurrentFieldEl.MQField();
        var count = patch(data, "{}");
        var embedTagCount = patch(data, "embed");

        if (embedTagCount) {
          ///自定义的符号
          // MQCurrentField.write(data);

          var fracsEl =
            '<div class="shade_fracs">' +
            '<div class="left"><p class="left-c" contenteditable="true"></p></div>' +
            '<div class="right">' +
            '<p class="right-top-c" contenteditable="true"></p>' +
            '<div class="line"></div>' +
            '<p class="right-bottom-c" contenteditable="true"></p>' +
            "</div>" +
            "</div>";

          var showShadeConfig = {
            el: fracsEl,
            writeFun: function (sel) {
              var p1Str = $(sel).find(".left-c").text();
              var p2Str = $(sel).find(".right-top-c").text();
              var p3Str = $(sel).find(".right-bottom-c").text();
              if (
                !myUtils.isNull(p1Str) &&
                !myUtils.isNull(p2Str) &&
                !myUtils.isNull(p3Str)
              ) {
                var fracs = p1Str + "-" + p2Str + "-" + p3Str;
                return "\\embed{fracs}[" + fracs + "]";
              }
              return false;
            },
          };

          showShade(showShadeConfig);
          return;
        }

        if (count == 0) {
          MQCurrentField.cmd(data);
          return;
        }

        MQCurrentField.write(data);

        if (count) {
          for (var i = 0; i < count; i++) {
            MQCurrentField.keystroke("Left");
          }
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

function latexToAsciiMath(latex) {
  return ZYMath.debug.latexToAsciiMath(latex);
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
            '<span class="custom-embed-fracs">' +
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
      laterx = laterx.replace(/\\embed\{fracs\}\[(.+?)\]/g, function (str) {
        str.match(/\[(.+?)\]/g);
        var values = RegExp.$1.split("-");

        var numerator =
          parseInt(values[0]) * parseInt(values[2]) + parseInt(values[1]);
        var denominator = parseInt(values[2]);
        return "\\frac{" + numerator + "}{" + denominator + "}";
      });
      return laterx;
    },
  };
  latexAnalysises.push(fracs);

  for (var i = 0; i < latexAnalysises.length; i++) {
    const latexAnalys = latexAnalysises[i];
    latexAnalys.registerEmbed(MQ);
  }
}

///获取latex
function latex(mqField) {
  var laterx = mqField.latex();

  for (var i = 0; i < latexAnalysises.length; i++) {
    const latexAnalys = latexAnalysises[i];
    laterx = latexAnalys.latex(laterx);
  }

  return laterx;
}

function showShade(showShadeConfig) {
  var el = showShadeConfig.el;
  var writeFun = showShadeConfig.writeFun;
  var shade = new Shade(el, function () {
    MQCurrentFieldEl.data("shade", null);
    var MQCurrentField = MQCurrentFieldEl.MQField();
    MQCurrentField.focus();

    if (writeFun) {
      var value = writeFun(shade.sel);
      if (value === false) {
        return;
      }
      MQCurrentField.write(value);
    }
  });

  MQCurrentFieldEl.data("shade", shade);
  shade.show();
}

///$扩展
///可以计算latex
$.fn.latex = function () {
  var latex = latex($(this).MQField());
  return latex;
};

///包含自定义的Latex
$.fn.orginLatex = function () {
  var laterx = $(this).MQField().latex();
  return laterx;
};

$.fn.MQField = function () {
  return this.data("save_span");
};

///计算结果
$.fn.calculate = function (config = {}) {
  var config1 = {
    number: "BigNumber",
    precision: 14,
  };
  config1 = $.extend(config1, config);
  math.config(config1);

  try {
    var asciiMaths = latexToAsciiMath(this.latex());
    asciiMaths = asciiMaths.replace(/÷/g, "/");
    if (myUtils.isNull(asciiMaths)) {
      throw new Error("asciiMaths is null!");
    }
    return math.format(math.evaluate(asciiMaths));
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export default { init, initEl, latexToAsciiMath, ZYKeyboard, ZYMath };
