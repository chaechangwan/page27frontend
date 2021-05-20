let price = 0 

function quantitychange(){ //함수는 가장 밖에서 선언해야 알아먹는다.
    const totalprice = price * $('input[name=quantity]').val();
    $('.price_sum').html(totalprice);
    $('.totalprice').html(totalprice);
}

$(function(){
    $('.select_color').on('change', function(){
        const product_name = $('.product_caption').html();
        const option_val = $(this).val();
        price = $('.price').val();

        if(option_val != '00'){
            $('form table tbody').children().remove();
            $('form table tbody').append('<tr>'+
            '<td>'+product_name+'<p>-'+option_val+'</p></td>'+
            '<td><input type="number" name="quantity" min="1" value="1" onchange="quantitychange()"></td>'+
            '<td class="td_price">₩ <span class="price_sum">'+price+'</span></td>'+
            '</tr>');
            $('.totalprice').html(price);
        }
    })
})