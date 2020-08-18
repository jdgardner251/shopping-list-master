// Function to handle new items added to the list.
function newItem() {
    $('#js-shopping-list-form').submit(function(event){
        //opt out of typical action upon submit event
        event.preventDefault();
        //create variable to hold user input
        const userInput = $(this).find('#shopping-list-entry');
        // append the new item in same format to the current
        // ul that already exsist
        $('ul').append(
           `<li>
            <span class="shopping-item">${userInput.val()}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                <span class="button-label">delete</span>
                </button>
            </div>
            </li>`
        ) 
        // empty the text box
        userInput.val("");
    });
}

// function to provide the user the ability to toggle something on or off
function handleChecks() {
    // listen on the shopping item toggle class for a click or press
    $('ul').on('click', '.shopping-item-toggle', function(event){
        // take target and work up the DOM to first li
        // then find the shopping-item class and toggle the checked class
       $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}

// function to remove items from the list
function removeItem() {
    $('ul').on('click', '.shopping-item-delete', function(event){
        $(this).closest('li').remove();
    });
}

$(newItem);
$(handleChecks);
$(removeItem);