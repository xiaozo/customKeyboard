import shadeTmpl from "./view/shadeTmpl.art";
export class Shade {
  // el:null,
  constructor(subel,handle,left,top) {
      this.sel = ".ZY__shade"
      this.left = left
      this.top = top;
      this.subel = subel
      this.handle = handle
    this.loadTmpl()
    this.el = template("zy-shade-tpl", {});
  }

  show(){
     var that = this
    $('body').append(this.el)
    $(".ZY__shade").css("opacity","0.01").animate({
        opacity:1.0  
    },300)
    $(".ZY__shade").mousedown(function (e) {
        // console.log($(e.target).parents('.ZY__shade_sub'));
        if ($(e.target).parents('.ZY__shade_sub').length == 0) {
            e.preventDefault();  
            that.hidden()
        }
    });
    
    $(".ZY__shade_sub").append(this.subel);
  }
  hidden(){
    var that = this
      $(".ZY__shade").animate({
        opacity:0.01  
    },300,function () {
        if (that.handle) {
            that.handle()
        }
        $(".ZY__shade").remove() 
    })
  }
  loadTmpl() {
    if ($("#zy-shade-tpl").length == 0) {
      $("body").append(shadeTmpl);
    }
  }
}
