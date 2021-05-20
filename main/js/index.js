//weeklybest carousel
$(function(){
    let wbc = $('.weeklybest_carousel').get();
    let wbc_length = wbc.length;
    wbc_idx = 0
    let menu = $('.weeklybest_menu span').get();
    menu_idx = 0
    $('.weeklybest_menu span').each(function(){
        $(this).attr('menu_num', menu_idx);
        menu_idx += 1
    }) 

    let timer = setInterval(function(){
        for(let i = 0; i < wbc_length; i++){
            if(i == wbc_idx){
                $(menu[i]).addClass('active');
            }else{
                $(menu[i]).removeClass('active');
            }
        }

        for(let i = 0; i < wbc_length; i++){
            if(i == wbc_idx){
                $(wbc[i]).show();
            }else{
                $(wbc[i]).hide();
            }
        }
        wbc_idx = (wbc_idx + 1) % wbc_length;
        clearTimeout(timer); //계속 돌게 하고싶으면 이 줄 지우면됨.
    }, 1000);


    $('.weeklybest_menu span').on('click', function(){
        wbc_idx = $(this).attr('menu_num');
        for(let i = 0; i < wbc_length; i++){

            if(i == wbc_idx){
                $(this).addClass('active');

            }else{
                $(menu[i]).removeClass('active');
            }
        }

        for(let i = 0; i < wbc_length; i++){
            if(i == wbc_idx){
                $(wbc[i]).show();
            }else{
                $(wbc[i]).hide();
            }
        }
    }) 
})