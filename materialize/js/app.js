$(document).ready(function () {
    /* Activating the side navidation */
    $('.button-collapse').sideNav();

    /* Giving the person info select material design shape */
    $('.materialSelect').material_select();

    /* Material select onStateChange listener */
    $('.materialSelect').on('contentChanged', function () {
        $(this).material_select();
    });

    $('#career').trigger('autoresize');

    /* Teleport API country names request */
    $.getJSON("https://api.teleport.org/api/countries/", function (result) {
        var countries = result['_links']['country:items'];
        $.each(countries, function (i, country) {
            //console.log(country.name);
            $('#country_names').append($('<option>', {
                text: country.name
            }));
        });
        // Triggering select on change state
        $("#country_names").trigger('contentChanged');
    });

    /* This function will all hide not selected forms */
    function hide(array) {
        array.forEach(element => {
            $(element).css('display', 'none')
        });
    }

    /* Person informaton event handler function */
    $('#form_person_info').click(function () {
        $('#person_info').fadeIn(600);
        $('.button-collapse').sideNav('hide');
        hide(['#email_address', '#career_info']);
    });

    /* Email informaton event handler function */
    $('#form_email_info').click(function () {
        $('#email_address').fadeIn(600);
        $('.button-collapse').sideNav('hide');
        hide(['#career_info', '#person_info']);
    });

    /* Password informaton event handler function */
    $('#form_career_info').click(function () {
        $('#career_info').fadeIn(600);
        $('.button-collapse').sideNav('hide');
        hide(['#email_address', '#person_info']);
    });
});