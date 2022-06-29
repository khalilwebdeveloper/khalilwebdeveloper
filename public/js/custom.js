$(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
    });


    $('#event_period').datepicker({
        inputs: $('.actual_range')
    });


    $(function() {
        $('input[name="birthdate"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true
        }, 
        function(start, end, label) {
            var years = moment().diff(start, 'years');
            alert("You are " + years + " years old.");
        });
    });