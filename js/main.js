$(document).ready(function () {
            var active1 = false;
            var active2 = false;
            var active3 = false;
            var active4 = false;

            $('.nav-menu').on('mousedown touchstart', function () {
                    if (!active1) $(this).find('.home-i').css({
                        'background-color': 'gray',
                        'transform': 'translate(125px, 0px)'
                    });
                else $(this).find('.home-i').css({
                        'background-color': 'gray',
                        'transform': 'none'
                    });

                if (!active2) $(this).find('.profile-i').css({
                        'background-color': 'gray',
                        'transform': 'translate(105px, 60px)'
                    });
                else $(this).find('.profile-i').css({
                        'background-color': 'darkGray',
                        'transform': 'none'
                    });

                if (!active3) $(this).find('.portfolio-i').css({
                        'background-color': 'gray',
                        'transform': 'translate(60px, 105px)'
                    });
                else $(this).find('.portfolio-i').css({
                        'background-color': 'gray',
                        'transform': 'none'
                    });

                if (!active4) $(this).find('.contact-i').css({
                        'background-color': 'gray',
                        'transform': 'translate(0px, 125px)'
                    });
                else $(this).find('.contact-i').css({
                        'background-color': 'gray',
                        'transform': 'none'
                    });

                active1 = !active1;
                active2 = !active2;
                active3 = !active3;
                active4 = !active4;

                });
            });
