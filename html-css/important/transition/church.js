$(document).ready(function () {
  $("#visible-florence").hover(function (){
    $("#hidden-florence").fadeIn(200);
    $("#florence").fadeIn(200);
    $("#altenberger").fadeOut(200);
    $("#mont-saint-michel").fadeOut(200);
    $("#moscow").fadeOut(200);
    $("#hidden-altenberger").fadeOut(200);
    $("#hidden-saint-michel").fadeOut(200);
    $("#hidden-moscow").fadeOut(200);
  });
  $("#visible-altenberger").hover(function () {
    $("#hidden-altenberger").css("visibility", "visible");
    $("#hidden-altenberger").fadeIn(200);
    $("#altenberger").css("visibility", "visible");
    $("#altenberger").fadeIn(200);
    $("#florence").fadeOut(200);
    $("#mont-saint-michel").fadeOut(200);
    $("#moscow").fadeOut(200);
    $("#hidden-florence").fadeOut(200);
    $("#hidden-saint-michel").fadeOut(200);
    $("#hidden-moscow").fadeOut(200);
  });
  $("#visible-saint-michel").hover(function () {
    $("#hidden-saint-michel").css("visibility" , "visible");
    $("#hidden-saint-michel").fadeIn(200);
    $("#mont-saint-michel").css("visibility", "visible");
    $("#mont-saint-michel").fadeIn(200);
    $("#florence").fadeOut(200);
    $("#altenberger").fadeOut(200);
    $("#moscow").fadeOut(200);
    $("#hidden-florence").fadeOut(200);
    $("#hidden-altenberger").fadeOut(200);
    $("#hidden-moscow").fadeOut(200);
  });
  $("#visible-moscow").hover(function () {
    $("#hidden-moscow").css("visibility", "visible");
    $("#hidden-moscow").fadeIn(200);
    $("#moscow").css("visibility", "visible");
    $("#moscow").fadeIn(200);
    $("#florence").fadeOut(200);
    $("#altenberger").fadeOut(200);
    $("#mont-saint-michel").fadeOut(200);
    $("#hidden-florence").fadeOut(200);
    $("#hidden-altenberger").fadeOut(200);
    $("#hidden-saint-michel").fadeOut(200);
  });
});