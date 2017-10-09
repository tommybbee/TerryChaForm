$(function () {
    $('.answer').click(function () {
        $('[id^="question"].active').removeClass('active').addClass('gone');

        var target = $(this).attr('goto');
        $('#' + target).addClass('active').removeClass('gone');
    });
});