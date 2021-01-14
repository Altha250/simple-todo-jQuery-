$(document).ready(function () {

    function createToDo() {
        let name = $('input').val(),
            text = $('textarea').val();

        if (name.length !== 0 && text.length !== 0) {
            $('.todos-list').remove();

            $('.todos').append('<div class="todo"><div class="subtitle-text"><i><img class="delete" src="img/deleteTodo.png"></i><i><img class="arrow" src="img/arrow.png"</i>' + name + '</div><div class="inner"></div><div class="desc-text">' + text + '</div></div>');
        };
        $('input').val('');
        $('textarea').val('');
    };
    $('.changeButton').on('click', createToDo);

    $('body').on('click', '.delete', function () {
        let item = $(this).parents('.todo');
        item.remove();
    });
});

$('body').on('click', '.arrow', function () {
    $(this).parents('.subtitle-text').siblings('.desc-text').slideToggle();
});