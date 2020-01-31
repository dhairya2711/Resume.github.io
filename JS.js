window.onload = function(){
                $('header').hide();
                $('#name').css("font-size","3px")
                $('header').slideDown(1000);
                $('#name').animate({fontSize:"30px"},1000);
            };
            $('#text').fadeOut(0).fadeIn(1000);
            $('.img').animate({width:"90%"},1000);
            $('#languagesdiv').fadeOut(0).fadeIn(1000);
            $('#educationdiv').animate({width:"100%",fontSize:"15px"},1000);
            $('#experiencediv').animate({height:"54%"},1000);
