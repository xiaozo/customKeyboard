import keyboardTmpl from "./view/keyboardTmpl.art";
import keyboardTool from "../keyboardTool";
import keyboardBody from "../keyboardBody";
import myUtils from "../../utils/index";

var content = {
  flag: false,
  cur: {
    x: 0,
    y: 0,
  },
  nx: 0,
  ny: 0,
  dx: 0,
  dy: 0,
  x: 0,
  y: 0,
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

    if (myUtils.isPC()) {
      ///pc
      $(".ZY__keyboard").mousedown(function (e) {
        that.down(e)
      });
      $(".ZY__keyboard").mousemove(function (e) {
        that.move(e)
      });
      $(".ZY__keyboard").mouseup(function (e) {
        that.up(e)
      });

      document.body.addEventListener("mouseup",function(e){
        that.up(e)
    },false);

    } else {
      $(".ZY__keyboard").on("touchstart", function (e) {
        that.down(e)
      });

      $(".ZY__keyboard").on("touchmove", function (e) {
        that.move(e)
      });

      $(".ZY__keyboard").on("touchend", function (e) {
        that.up(e)
      });
    }

    ///增加拖拽手势
    $(".ZY__keyboard").mousedown(function (e) {
      e.preventDefault();
    });

    ///默认选择第一项
    this.selectByIndex(0);
  },
  selectByIndex: function (index) {
    keyboardTool.selectByIndex(index);
    keyboardBody.selectByIndex(index);
    this.adjuestPostion($(".ZY__keyboard").offset().left,$(".ZY__keyboard").offset().top)
  },

  down: function (e) {
    var div = document.getElementsByClassName("ZY__keyboard")[0]
    this.flag = true;
    var touch ;
    if(e.touches){
        touch = e.touches[0];
    }else {
        touch = e;
    }
    this.cur.x = touch.clientX;
    this.cur.y = touch.clientY;
    this.dx = div.offsetLeft;
    this.dy = div.offsetTop;
  },
  move: function (e) {
    if(this.flag){
        var div = document.getElementsByClassName("ZY__keyboard")[0]
        var touch ;
        if(e.touches){
            touch = e.touches[0];
        }else {
            touch = e;
        }
        this.nx = touch.clientX - this.cur.x;
        this.ny = touch.clientY - this.cur.y;
        this.x = this.dx+this.nx;
        this.y = this.dy+this.ny;
        div.style.left = this.x+"px";
        div.style.top = this.y+"px";
        
    }
  },
  up: function (e) {
    this.flag = false;
    this.adjuestPostion($(".ZY__keyboard").offset().left,$(".ZY__keyboard").offset().top)
  },
  adjuestPostion:function(left,top,isAnimation){
     ///调整位置 能够展示出来
     var keyboardWidth =  $(".ZY__keyboard").get(0).clientWidth
     var keyboardHeight =  $(".ZY__keyboard").get(0).clientHeight
     var clientWidth = $(window).width()
     var clientHeight = $(window).height()


     if (left < 0) {
         left = 0
     } else if (left + keyboardWidth > clientWidth) {
         left = clientWidth - keyboardWidth
     }

     if (top < 0) {
         top = 0
     } else if (top + keyboardHeight > clientHeight) {
        top = clientHeight - keyboardHeight
    }
  
    $(".ZY__keyboard").css("left",left+"px")
    $(".ZY__keyboard").css("top",top+"px")
     
  }
};

export default content;
