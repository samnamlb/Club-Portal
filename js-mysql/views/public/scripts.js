
$(document).ready(function () {
    // Set the max-height of the container to the window height
    $(".side-bar-listings").css("max-height", $(window).height() - 200);

    // Update the max-height on window resize
    $(window).resize(function () {
        $(".side-bar-listings").css("max-height", $(window).height() - 200);
    });

    $(".club-name-list li a").click(function (event) {
        console.log("Clicking")
        // Define organizations array with EJS data

        // test
        document.getElementById("clubDetailsList").style.color = "red";

        event.preventDefault(); // Prevent the default behavior of the anchor tag

        // Get the organization data associated with the clicked club name
        var clubId = $(this).data("club-id");
        // Update club details in the clubDetailsList
        let organization = JSON.parse(organizations);
        $(".club-details-item .advisor").text("Club Advisor: " + organization.club_advisor);


    });
});
