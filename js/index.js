var headers = ["H1","H2","H3","H4","H5","H6"];
var targetRcd = "";

$(".accordion").click(function(e) {
  var target = e.target,
      name = target.nodeName.toUpperCase();

  if($.inArray(name,headers) > -1) {
    var subItem = $(target).next();

    //slideUp all elements (except target) at current depth or greater
    var depth = $(subItem).parents().length;
    var allAtDepth = $(".accordion p, .accordion div").filter(function() {
      if($(this).parents().length >= depth && this !== subItem.get(0)) {
        return true;
      }
    });
    $(allAtDepth).slideUp("fast");

    
    subItem.slideToggle("fast",function() {

    });


      //Title
      if($(target).hasClass('title')){

        //H1 open >
        if($(target).children().hasClass("open")){
          // Change for -
          $(target).children().removeClass("open");
          //And remove all open classes
          $( "div" ).children( ".open" ).removeClass("open");
        }else{
          // Change for +
          $(target).children().addClass("open");
        }

      }

      //Questions
      if(!$(target).hasClass('title')){


        if($(targetRcd).hasClass('open')){
          if($(target).hasClass('open')){
            //do nothing
          }else{
            $(targetRcd).toggleClass('open');
            $(targetRcd).children().toggleClass('open');
          }



        }

        //Toggle class of current
        $(target).toggleClass('open');
        $(target).children().toggleClass('open');

        //Current become old
        targetRcd = target;


      }


  }
});
