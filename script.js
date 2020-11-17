$(`.ninja`).click(function() {
    $(this).hide();
    console.log("Click Acknowledged.");
})

$(`#restore`).click(function() {
    $(`.ninja`).show();
})