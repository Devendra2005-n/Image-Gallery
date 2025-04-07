$(document).ready(function() {
    
    $('.filter-button').click(function() {
        var filterValue = $(this).data('filter');

        if (filterValue === 'all') {
            $('.filter').fadeIn(300);
        } else {
            $('.filter').fadeOut(300, function() {
                $('.' + filterValue).fadeIn(300);
            });
        }

        
        $('.filter-button').removeClass('btn-primary').addClass('btn-secondary');
        $(this).removeClass('btn-secondary').addClass('btn-primary');
    });
});