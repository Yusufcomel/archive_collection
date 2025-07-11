function lqd_img(i){var d=$(i);$(d).each(function(d){var a=$(this).find("img").attr("src");if(!a)return;".lqd"==i?($(this).find("img").hide(),$(this).css("background-image","url("+a+")")):$(this).append('<div class="lqd_img" style="background-image:url('+a+');"></div>')})}
function liquid_img(){lqd_img(".lqd");lqd_img(".lqd_block");}
liquid_img();