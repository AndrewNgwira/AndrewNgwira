//document.querySelector("h1");
$("h1");

// selecting all buttons
//document.querySelectorAll("button");
$("button");

/*------------------Manipulating style of elements
.big-title{
  font-size: 10rem;
  color: yellow;
  font-family: cursive;
}

.margin-50{
  margin: 100px;
}
------------------Manipulating texts*/
$("h1").text("Bye");

//$("button").text("Dont Click Me");
$("button").html("<em>Hey</em>");
------------------Manipulating attributes

Source, href, class are attributes in jQuery

$("a").attr("href", "https://www.yahoo.com"); //This gets the href attr and sets a new link
$("a").attr("href", "https://www.yahoo.com");//This just retrieves the link present

------------------Adding Event Listeners

**** pure vanilla JS ******
for(var i = 0; i<5; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    document.querySelector("h1").style.color = "purple";
  });
}


**** jQuery /// doing the same thing as the above code******

$("h1").on("click", function(){
  $("h1").css("color", "purple");
});

****** prepend and append and before and after *****
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

****** website animations with jQuery *****
$("button").on("click", function(){
  $("h1").hide();
});

$("button").on("click", function(){
  $("h1").show();
});

$("button").on("click", function(){
  $("h1").toggle();
});

$("button").on("click", function(){
  $("h1").fadeOut();
});

$("button").on("click", function(){
  $("h1").fadeIn();
});

$("button").on("click", function(){
  $("h1").fadeToggle();
});

$("button").on("click", function(){
  $("h1").slideUp();
});

$("button").on("click", function(){
  $("h1").slideDown();
});

$("button").on("click", function(){
  $("h1").animate({margin: "20%"}); // you can only animate with number values
});
