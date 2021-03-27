import keyboardTmpl from "./view/keyboardTmpl.art";
import {KeyboardTool} from "../keyboardTool";
import {KeyboardBody} from "../keyboardBody";
import myUtils from "../../utils/index";

var systemTouchFn = function () {
  event.preventDefault();
  event.stopPropagation
};

///clickKey点击按键
///clickDel点击删除
///cursorLeftMove光标左移动
///cursorRightMove光标右移动

export class ZYKeyboard {
  // flag;
  // cur;
  // nx
  // ny
  // dx
  // dy
  // x
  // y
  // downTimestamp
  // id
  // keyboardData
  // handle
  // keyboardTool
  // keyboardBody
  // 构造函数中初始化数据
  constructor(id = "zy-keyboard-"+myUtils.uuid(),keyboardData = {},handle = {}) {
    this.cur = {
      x: 0,
      y: 0,
    }

    this.id = id;
    this.keyboardData = keyboardData;
    this.handle = handle
    this.loadTmpl()
    $("body").append(template("zy-keyboard-tpl", {id:this.id}));
    var that = this;

    this.keyboardTool = new KeyboardTool(id,function (el, tag) {
      that.main().append(el);
      $(tag).on("selected", function (e, data) {
        var index = data.index;
        that.selectByIndex(index);
      });
    })

    this.keyboardBody = new KeyboardBody(id,function (el) {
      that.main().append(el);
    })
    // keyboardBody.init(id,function (el) {
    //   that.main().append(el);
    // });

    ///增加拖拽手势
    if (myUtils.isPC()) {
      ///pc
      this.main().mousedown(function (e) {
        that.down(e);
      });
      this.main().mousemove(function (e) {
        that.move(e);
      });
      this.main().mouseup(function (e) {
        that.up(e);
      });

      $(document).mouseup(function (e) {
        that.up(e);
      });
    } else {
       ///点击空白区会隐藏键盘，所以阻止冒泡
      this.main().on("touchstart", function (e) {
        e.stopPropagation()
        that.down(e);
      });

      this.main().on("touchmove", function (e) {
        that.move(e);
      });

      this.main().on("touchend", function (e) {
        that.up(e);
      });
    }

    this.main().mousedown(function (e) {
      e.preventDefault();
    });


    $("#"+this.id).on("clickKey",function (e, data) {
     if (that.handle["clickKey"] != undefined) {
       data = that.dataConfig()["data"] == undefined ? data : that.dataConfig()["data"]
      that.handle["clickKey"](data)
     }
    })

    $("#"+this.id).on("clickDel",function (e, data) {
      if (that.handle["clickDel"] != undefined) {
       that.handle["clickDel"](data)
      }
     })

     $("#"+this.id).on("cursorRightMove",function (e, data) {
      if (that.handle["cursorRightMove"] != undefined) {
       that.handle["cursorRightMove"](data)
      }
     })

     $("#"+this.id).on("cursorLeftMove",function (e, data) {
      if (that.handle["cursorLeftMove"] != undefined) {
       that.handle["cursorLeftMove"](data)
      }
     })

    ///默认选择第一项
    this.selectByIndex(0);
  }

  dataConfig() {
    return this.keyboardData["data_config"]
  }
  loadTmpl() {
    if ($('#zy-keyboard-tpl').length == 0) {
      $("body").append(keyboardTmpl);
    }
    KeyboardTool.loadTmpl()
    KeyboardBody.loadTmpl()
  }

  show(left = 0,top = 0){
    this.main().removeClass("hidden");
    this.adjuestPostion(left,top)

  }

  hidden(){
    this.main().addClass("hidden");
  }

  main() {
    if (this.id != null) {
      return $('#'+this.id)
    }
    return $(".ZY__keyboard")
  }

  selectByIndex(index) {
    this.keyboardTool.selectByIndex(index);
    this.keyboardBody.selectByIndex(index);
    this.adjuestPostion(
      this.main().offset().left,
      this.main().offset().top
    );
  }

  down(e){
    var div = this.main().get(0);
    this.flag = true;
    this.downTimestamp = Date.now();
    var touch;
    if (e.touches) {
      touch = e.touches[0];
    } else {
      touch = e;
    }
    this.cur.x = touch.clientX;
    this.cur.y = touch.clientY;
    this.dx = div.offsetLeft;
    this.dy = div.offsetTop;
    document.body.addEventListener("touchmove", systemTouchFn, false);
  }

  move(e) {
    if (this.flag && Date.now() - this.downTimestamp >= 80 ) {
      var div = this.main().get(0);
      var touch;
      if (e.touches) {
        touch = e.touches[0];
      } else {
        touch = e;
      }
      this.nx = touch.clientX - this.cur.x;
      this.ny = touch.clientY - this.cur.y;
      this.x = this.dx + this.nx;
      this.y = this.dy + this.ny;
      div.style.left = this.x + "px";
      div.style.top = this.y + "px";
    }  
  }

  up(e) {
    this.flag = false;
    document.body.removeEventListener("touchmove", systemTouchFn);

    this.adjuestPostion(
      this.main().offset().left,
      this.main().offset().top
    );
  }

  adjuestPostion(left, top, isAnimation){
     ///调整位置 能够展示出来
     var keyboardWidth = this.main().get(0).clientWidth;
     var keyboardHeight = this.main().get(0).clientHeight;
     var clientWidth = $(window).width();
     var clientHeight = $(window).height();
 
     if (left < 0) {
       left = 0;
     } else if (left + keyboardWidth > clientWidth) {
       left = clientWidth - keyboardWidth;
     }
 
     if (top < 0) {
       top = 0;
     } else if (top + keyboardHeight > clientHeight) {
       top = clientHeight - keyboardHeight;
     }
 
     this.main().css("left", left + "px");
     this.main().css("top", top + "px");
  }
}

