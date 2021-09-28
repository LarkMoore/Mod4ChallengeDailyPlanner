// declare variable(s)
var todaysDate = moment().format('dddd, MMM Do h:mm A');

//Show today's date
    $("#todaysDate").html(todayDate);
// Click save button listener 
    $(".saveBtn").on("click", function () {
// Get values of the time (hour) and description in JQuery
        var hours = $(this).parent().attr("id");
        var scheduledTasks = $(this).siblings(".description").val();
// Save items in local storage
        localStorage.setItem(hours, scheduledTasks);
    })

    function setTimeColors() {
//Show current time.
        var localTime= moment().hour();

        // Timeblock loop
        $(".time-block").each(function () {
            var setTimeBlock=parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (setTimeBlock < localTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (setTimeBlock === localTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Retrieve local storage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    setTimeColors();
})