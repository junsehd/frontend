$(function(){

    var $grid = $('.filter').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('.portfolio-filters button').on( 'click', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    /* common element form */
    var $fields = $('.request-field'),
        $input = $fields.find('input'),
        $select = $fields.find('select'),
        $textarea = $fields.find('textarea');

        //$('input,select,textarea').click....

        $input.add($select).add($textarea).click(function(){
            $fields.removeClass('active');
            $(this).closest('.request-field').addClass('active');
        });
    /* portfolio filter */


    
});