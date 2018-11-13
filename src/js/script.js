$(document).ready(function() {
    $(function() {
        $('.areaForLoader').find('i').fadeOut().end().delay(400).fadeOut('slow');
    });
    $(function () {
        $("#btn").click(function () {
            $("#myModal").modal('show');
        });
    });

    $('.feedback-form').submit(function () {
        var form = $(this);
        var field = [];
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.required');
            for(var i=0;i<field.length;i++) {
                if( !value ) {
                    line.addClass('row-required');
                    setTimeout(function() {
                        line.removeClass('row-required')
                    }.bind(this),3000);
                    event.preventDefault();
                }
            }
        });
    });
    $('.carousel').carousel({
        interval: 4000
    })
});
