// This is the code for trying to validate the high school textbook sale form
/*
$("form#textbookForm").on("submit", function() {
    formValid = false;
    var numofBks = 0;
    $("form#textbookForm input:number").each(function() {
        numofBks += parseInt($(this).val());
        console.log(numofBks);
        if (numofBks > 0) {
            formValid = true;
            window.alert(`You are purchasing ${numofBks} textbooks, is that correct?`);
        }
        if (numofBks === 0) {
            window.alert("Please select at least one textbook to purchase!");
            return false;
        }
    });
});
*/

function movetoOrderForm() {
    var textbookOrders = document.querySelectorAll("input");
    var formValid = false;
    var numofBks = 0;
    for (var i = 0; i < textbookOrders.length; i++) {
        var textBookQty = Number(textbookOrders[i].value);
        numofBks+= textBookQty;
        console.log(numofBks);
        }
        if (numofBks > 0) {
            formValid = true;
            window.alert(`You are purchasing ${numofBks} textbooks, is that correct?`);
        }
        // window.location.replace('OrderingTextbooksForm.html');
        if (numofBks == 0) {
            formValid = false;
            window.alert("Please select at least one textbook to purchase!");
            return false;
        }
}