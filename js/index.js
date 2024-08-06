
console.log("Your index.js file is loaded correctly!");
$("#a").css("display","none");
$("h3").css("display","none");


$("#child1button").on("click", function(){
    $(document).ready(function(){
          $("#a:contains(I empathize with the user’s problem and write a solution that fits the user’s needs and goals.)").toggle();
        });
    $(document).ready(function(){
            $("h3:contains(User-Centered Writing)").toggle();
          });
});

$("#child2button").on("click", function(){
    $(document).ready(function(){
          $("#a:contains(I craft surveys that collect accurate data and help my team develop a full understanding of the typical user population.)").toggle();
        });
    $(document).ready(function(){
            $("h3:contains(UX Research)").toggle();
          });
});

$("#child3button").on("click", function(){
    $(document).ready(function(){
          $("#a:contains(I write questions that get to the heart of the problem. I listen to the user and take notes so that I can ask better follow-up questions.)").toggle();
        });
    $(document).ready(function(){
            $("h3:contains(Qualitative Interviews)").toggle();
          });
});


