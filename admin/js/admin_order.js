$(function(){
    $('.changestatusbtn').click(function(){
        const order_status = $(this).closest('tr').find('.omode').val();
        const id = $(this).closest('tr').find('input[type=hidden]').val();
        $.ajax({
            type: 'PATCH',
            url: '/admin/userlist/' + id,
            data: {order_id : id}
        }).done(function(word){
            alert(word);
            window.location.href = '/admin/order';
        }).fail(function (error){
            alert(JSON.stringify(error));
        })
    })
})