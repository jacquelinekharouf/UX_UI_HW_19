
console.log("Your index.js file is loaded correctly!");

$(".mySkillsBox").on("click", function(){
    $(document).ready(function(){
        
          $("#images/uc-writing-skills.png").toggle();
        });
      });
    


$(".mySkillsBox").on("click", function(){
$(document).ready(function(){
    $("h6").click(function(){
      $(this).show();
    });
});
});

$(".myToolsBox").on("click", function(){
    console.log("You clicked on .myToolsBox");
});

$(document).ready(function(){
    $(".child1").click(function(){
      $(".child1").slideDown("slow");
    });
  });

  $(document).ready(function(){
    $("child1").click(function(){
      $("h3").toggle();
    });
  });