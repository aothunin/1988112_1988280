$(document).ready(() => {
    $('.add-to-cart').on('click', addToCart);
});

function addToCart() {
    var id = $(this).data('id');
    var quantity = $('#sst') ? $('#sst').val() : 1;
    $.ajax({ //gọi lên server
        url: '/cart',
        type: 'POST', //phương thức
        data: { id, quantity }, 
        success: function(result) {
            $('#cart-badge').html(result.totalQuantity);
        }
    });
}

function updateCart(id, quantity) { 
    if(quantity == 0) {
        removeCartItem(id);
    } else {
        updateCartItem(id, quantity);
    }
}

function removeCartItem(id) {
    $.ajax({ //gọi lên server
        url: '/cart',
        type: 'DELETE', //phương thức
        data: { id }, 
        success: function(result) {
            $('#cart-badge').html(result.totalQuantity);
            $('#totalPrice').html('$' + result.totalPrice);
    // hàm delete trả về totalQuantity và totalPrice
            if (result.totalQuantity > 0) {
                $(`#item${id}`).remove();
            } else {
              
                $('#cart-body').html('<div class="alert alert-info text-center">Giỏ hàng của bạn chưa có sản phẩm nào!</div>');
            }
        }
    });
}

function updateCartItem(id, quantity) {
    $.ajax({ //gọi lên server
        url: '/cart',
        type: 'PUT', //phương thức
        data: { id, quantity }, 
        success: function(result) {
            $('#cart-badge').html(result.totalQuantity);
            $('#totalPrice').html('$' + result.totalPrice);
            $(`#price${id}`).html('$' + result.item.price);
        }
    });
}

function clearCart() {
    if(confirm('Do you really want to remove all items?')){
        $.ajax({ //gọi lên server
            url: '/cart/all',
            type: 'DELETE', //phương thức
            success: function() {
                $('#cart-badge').html('0');
                $('#cart-body').html('<div class="alert alert-info text-center">Giỏ hàng của bạn chưa có sản phẩm nào!</div>')
            }
        });
    }
}
