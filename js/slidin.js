

// index
$(document).ready(function(){
	$(".about").click(function(){
		$("#about").slideToggle("slow");
        $("#connect").slideUp();
        $("#resources").slideUp();
	});
});
$(document).ready(function(){
    $(".connect").click(function(){
        $("#connect").slideToggle("slow");
        $("#about").slideUp();
        $("#resources").slideUp();
    });
});
$(document).ready(function(){
    $(".resources").click(function(){
        $("#resources").slideToggle("slow");
        $("#about").slideUp();
        $("#connect").slideUp();
    });
});

// solutions
$(document).ready(function(){
    $(".solution-toggle").click(function(){
        $(".solution").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-2").click(function(){
        $(".solution-2").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-3").click(function(){
        $(".solution-3").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-4").click(function(){
        $(".solution-4").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-5").click(function(){
        $(".solution-5").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-6").click(function(){
        $(".solution-6").slideToggle("slow");
    });
});

// solutions with prompt
$(document).ready(function(){
    $(".solution-toggle-p").click(function(){
        $(".solution-p").slideToggle("slow");
        $(".solution-prompt").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-2-p").click(function(){
        $(".solution-2-p").slideToggle("slow");
        $(".solution-2-prompt").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-3-p").click(function(){
        $(".solution-3-p").slideToggle("slow");
        $(".solution-3-prompt").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-4-p").click(function(){
        $(".solution-4-p").slideToggle("slow");
        $(".solution-4-prompt").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-5-p").click(function(){
        $(".solution-5-p").slideToggle("slow");
        $(".solution-5-prompt").slideToggle("slow");
    });
});
