$(function(){
    $('.view').click(function(){
        $('.question-content').toggleClass('question-closed');
        $('.question-box').toggleClass('question-box-flex');
        if($(this).html() == 'view'){
            $(this).html('close');
        }else{
            $(this).html('view');
        }
    })

    $('.replybtn').click(function(){
        $('.reply-modal').toggleClass('modal-closed');
    })

    $('.reply-modal-closebtn').click(function(){
        $('.reply-modal').addClass('modal-closed');
    })
})