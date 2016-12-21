function fadeoutall() {
    $(".AddDep").fadeOut("fast", function() {});
    $(".AddEmp").fadeOut("fast", function() {});
    $(".SeeDep").fadeOut("fast", function() {});
    $(".SeeEmp").fadeOut("fast", function() {});
   
}
fadeoutall()


$("#btnListDepartment").click(function() {
    fadeoutall();
    $(".SeeDep").fadeIn("fast", function() {});
});
$("#btnAddDepartment").click(function() {
    fadeoutall()
    $(".AddDep").fadeIn("fast", function() {});
});
$("#btnAddEmp").click(function() {
    fadeoutall();
    $(".AddEmp").fadeIn("fast", function() {});
});
$("#btnListEmp").click(function() {
    fadeoutall();
    $(".SeeEmp").fadeIn("fast", function() {});
});

