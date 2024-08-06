
console.log("Your index.js file is loaded correctly!");
$("h6#a").css("display","none");
$("#a").css("display","none");
$("h3#x").css("display","none")


$("#child1button").on("click", function(){
    $(document).ready(function(){
          $("h6#a:contains(I empathize with the user’s problem and write a solution that fits the user’s needs and goals.)").toggle();
        });
    $(document).ready(function(){
            $("h3#x:contains(User-Centered Writing)").toggle();
          });
});

$("#child2button").on("click", function(){
    $(document).ready(function(){
          $("h6:contains(I craft surveys that collect accurate data and help my team develop a full understanding of the typical user population.)").toggle();
        });
    $(document).ready(function(){
            $("h3:contains(UX Research)").toggle();
          });
});

$("#child3button").on("click", function(){
    $(document).ready(function(){
          $("h6:contains(I write questions that get to the heart of the problem. I listen to the user and take notes so that I can ask better follow-up questions.)").toggle();
        });
    $(document).ready(function(){
            $("h3:contains(Qualitative Interviews)").toggle();
          });
});

$("#child1buttonT").on("click", function(){
    $(document).ready(function(){
          $("h6:contains(My most favorite and basic tool. By using paper and pencil, I visualize my ideas and leave room for error.)").toggle();
        });
    $(document).ready(function(){
            $("h3:contains(Paper & Pencil)").toggle();
          });
});

$("#child2buttonT").on("click", function(){
    $(document).ready(function(){
          $("h6:contains(The second-best tool available to a UX designer. Figma allows me to bring my sketches to life.)").toggle();
        });
    $(document).ready(function(){
            $("h3:contains(Figma)").toggle();
          });
});

$("#child3buttonT").on("click", function(){
    $(document).ready(function(){
          $("h6:contains(I live to stay organized and Google Drive is simply one of the best tools to do just that.)").toggle();
        });
    $(document).ready(function(){
            $("h3:contains(Google Drive)").toggle();
          });
});
