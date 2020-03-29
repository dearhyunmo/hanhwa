$(document).ready(function(){
    
    var ww=$(window).width();
    var wh=$(window).height();
    
    var i=0;
    $('#menu_mo_btn_wrap').click(function(){
        
        if(i==0){
            /*버튼*/
            $('#menu_mo_btn1').transition({
                translate:'0,10',
                rotate:'45deg'
            });
            $('#menu_mo_btn3').transition({
                translate:'0,-14',
                rotate:'-45deg'
            });
            $('#menu_mo_btn2').css({
                opacity:0
            });
            /**/
            
           $('#note_menu_wrap li').css({
               display:'block'
           });
            $('#note_menu_wrap').animate({
                height:wh,
            });
            i++;
        }else if(i==1){
            /*버튼*/
            $('#menu_mo_btn1').transition({
                translate:'0,0',
                rotate:'0deg'
            });
            $('#menu_mo_btn3').transition({
                translate:'0,0',
                rotate:'0deg'
            });
            $('#menu_mo_btn2').css({
                opacity:1
            });
            /**/
            
            $('#note_menu_wrap').animate({
               height:0
           });
            
            
            i=0;
        }
        
        
    });
    
    /**/
    $('#box1_4').css({
        width:'100%',
        transitionDuration:'0.5s'
    });
    $('#box1_2').css({
        height:'100%',
        transitionDuration:'0.5s',
        transitionDelay:'0.35s'
    });
    $('#box1_1').css({
        width:'100%',
        transitionDuration:'0.5s',
        transitionDelay:'0.74s'
    });
    $('#box1_3').css({
        height:'26%',
        transitionDuration:'0.5s',
        transitionDelay:'1.16s'
    });
        
    $('#banner_text_wrap').css({
        transitionDuration:'1s',
        transitionDelay:'1.8s',
        opacity:1,
    });
    /**/
    
    
    
    /*sec2 & sec3 animate*/
    if(ww>=1200){
   
            
        $(window).scroll(function(){
        
        sct=$(window).scrollTop();
        
            
        if(sct>=800 && sct<2500){
            
            $('#sec2_con2_wrap').animate({
                top:0,
                opacity:1
            },900);
            
        }else if(sct>=2700 && sct<2800){
            
            $('#sec3_top_img').animate({
                marginRight:0,
                opacity:1
            },900,function(){
                
                $('#sec3_top_text_wrap>h4,#sec3_top_text_wrap>h5,#sec3_top_btn').animate({
                    opacity:1
                },900);
                
            });
            
        }else if(sct>=3600 && sct<4000){
            
            $('#sec3_bottom_img').animate({
                marginLeft:0,
                opacity:1
            },900,function(){
                 $('#sec3_bottom_text_wrap>h4,#sec3_bottom_text_wrap>h5,#sec3_bottom_btn').animate({
                    opacity:1
                },900);
                
            });
            
        }
        
        
        
    }); 
        
    }else if(ww<=1200 && ww>=960){
        
        $(window).scroll(function(){
        
        sct=$(window).scrollTop();
        
            
        if(sct>=400 && sct<1500){
            
            $('#sec2_con2_wrap').animate({
                top:0,
                opacity:1
            },900);
            
        }else if(sct>=1800 && sct<2000){
            
            $('#sec3_top_img').animate({
                marginRight:0,
                opacity:1
            },900,function(){
                
                $('#sec3_top_text_wrap>h4,#sec3_top_text_wrap>h5,#sec3_top_btn').animate({
                    opacity:1
                },900);
                
            });
            
        }else if(sct>=2300 && sct<2500){
            
            $('#sec3_bottom_img').animate({
                marginLeft:0,
                opacity:1
            },900,function(){
                 $('#sec3_bottom_text_wrap>h4,#sec3_bottom_text_wrap>h5,#sec3_bottom_btn').animate({
                    opacity:1
                },900);
                
            });
            
        }
        
        
        
    });
        
        
    }else if(ww<=960 && ww>=760){
        
        $(window).scroll(function(){
        
        sct=$(window).scrollTop();
        
        if(sct>=100 && sct<1500){
            
            $('#sec2_con2_wrap').animate({
                top:0,
                opacity:1
            },900);
            
        }else if(sct>=1800 && sct<2000){
            
            $('#sec3_top_img').animate({
                marginRight:70,
                opacity:1
            },900,function(){
                
                $('#sec3_top_text_wrap>h4,#sec3_top_text_wrap>h5,#sec3_top_btn').animate({
                    opacity:1
                },900);
                
            });
            
        }else if(sct>=2200 && sct<4000){
            
            $('#sec3_bottom_img').animate({
                marginLeft:80,
                opacity:1
            },900,function(){
                 $('#sec3_bottom_text_wrap>h4,#sec3_bottom_text_wrap>h5,#sec3_bottom_btn').animate({
                    opacity:1
                },900);
                
            });
            
        }
        
        
        
    });
        
    }else if(ww<=760){
        
        
        $(window).scroll(function(){
        
        sct=$(window).scrollTop();
        
        if(sct>=2400 && sct<2500){
            
            $('#sec3_top_img').animate({
                opacity:1,
                marginLeft:0
            },900,function(){
                
                $('#sec3_top_text_box_wrap').animate({
                    opacity:1
                },900);
                
            });
            
        }else if(sct>=3300 && sct<4000){
            
            $('#sec3_bottom_img').animate({
                opacity:1,
                marginLeft:0
            },900,function(){
                
                $('#sec3_bottom_text_box_wrap').animate({
                    opacity:1
                },900);
                
            });
            
        }
        
        
        
    });
        
    }
        
    
    
    
    
    $(window).resize(function(){
        
         ww=$(window).width();
        
        if(ww>=1200){
   
            
        $(window).scroll(function(){
        
        sct=$(window).scrollTop();
        
            
        if(sct>=800 && sct<2500){
            
            $('#sec2_con2_wrap').animate({
                top:0,
                opacity:1
            },900);
            
        }else if(sct>=2700 && sct<2800){
            
            $('#sec3_top_img').animate({
                marginRight:0,
                opacity:1
            },900,function(){
                
                $('#sec3_top_text_wrap>h4,#sec3_top_text_wrap>h5,#sec3_top_btn').animate({
                    opacity:1
                },900);
                
            });
            
        }else if(sct>=3600 && sct<4000){
            
            $('#sec3_bottom_img').animate({
                marginLeft:0,
                opacity:1
            },900,function(){
                 $('#sec3_bottom_text_wrap>h4,#sec3_bottom_text_wrap>h5,#sec3_bottom_btn').animate({
                    opacity:1
                },900);
                
            });
            
        }
        
        
        
    }); 
        
    }else if(ww<=1200 && ww>=960){
        
        $(window).scroll(function(){
        
        sct=$(window).scrollTop();
        
            
        if(sct>=400 && sct<1500){
            
            $('#sec2_con2_wrap').animate({
                top:0,
                opacity:1
            },900);
            
        }else if(sct>=1800 && sct<2000){
            
            $('#sec3_top_img').animate({
                marginRight:0,
                opacity:1
            },900,function(){
                
                $('#sec3_top_text_wrap>h4,#sec3_top_text_wrap>h5,#sec3_top_btn').animate({
                    opacity:1
                },900);
                
            });
            
        }else if(sct>=2300 && sct<2500){
            
            $('#sec3_bottom_img').animate({
                marginLeft:0,
                opacity:1
            },900,function(){
                 $('#sec3_bottom_text_wrap>h4,#sec3_bottom_text_wrap>h5,#sec3_bottom_btn').animate({
                    opacity:1
                },900);
                
            });
            
        }
        
        
        
    });
        
        
    }else if(ww<=960 && ww>=760){
        
        $(window).scroll(function(){
        
        sct=$(window).scrollTop();
        
        if(sct>=100 && sct<1500){
            
            $('#sec2_con2_wrap').animate({
                top:0,
                opacity:1
            },900);
            
        }else if(sct>=1800 && sct<2000){
            
            $('#sec3_top_img').animate({
                marginRight:70,
                opacity:1
            },900,function(){
                
                $('#sec3_top_text_wrap>h4,#sec3_top_text_wrap>h5,#sec3_top_btn').animate({
                    opacity:1
                },900);
                
            });
            
        }else if(sct>=2200 && sct<4000){
            
            $('#sec3_bottom_img').animate({
                marginLeft:80,
                opacity:1
            },900,function(){
                 $('#sec3_bottom_text_wrap>h4,#sec3_bottom_text_wrap>h5,#sec3_bottom_btn').animate({
                    opacity:1
                },900);
                
            });
            
        }
        
        
        
    });
        
    }else if(ww<=760){
        
        
        $(window).scroll(function(){
        
        sct=$(window).scrollTop();
        
        if(sct>=2400 && sct<2500){
            
            $('#sec3_top_img').animate({
                opacity:1,
                marginLeft:0
            },900,function(){
                
                $('#sec3_top_text_box_wrap').animate({
                    opacity:1
                },900);
                
            });
            
        }else if(sct>=3300 && sct<4000){
            
            $('#sec3_bottom_img').animate({
                opacity:1,
                marginLeft:0
            },900,function(){
                
                $('#sec3_bottom_text_box_wrap').animate({
                    opacity:1
                },900);
                
            });
            
        }
        
        
        
    });
        
    }
        
    });
    
    
    
    
});/*end*/