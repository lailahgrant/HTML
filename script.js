//  1st thing. we need to ctch the user interaction event, 
//     there are many events to choose but here we are going to use "keyup" - this means you can trigger  a set of code to run everytime the user presses & releases a key within the searchInput textbox.
    
//1st we are wrapping all code in $(function () )}; & this tells the browser to execute any code within when the page loads.

$(function () {

    // we attach the keyup event to the search input using  $('#searchInput').keyup();
    $('#searchInput').keyup(function() {

        // we've attached the event to the input, then now add code
        if($(this).val() == '') //First, we check to see if the input currently has any text entered
        {//$(this), bse it's wrapped within an event method is referring to the element that theevent is attached which is '#searchInput'
            
            // check to see if there's any text entered
            // if there's no text within the input then disable the button
            // Depending on the outcome of the if statement, if the input is equal to nothing then we need to ensure the button is disabled,
            $('.enableOnInput').prop('disabled', true);
            alert('enter anything to earch');
                
        }else{
            // if there's textin the input, then enable the button
            // When we check to see if there is any text added to the searchInput element and we find some, we then can set the disabled attribute to false therefore enabling the button, with the following code:
            $('.enableOnInput').prop('disabled', false);
            //This will literally remove the attribute making the button input look like the following:
            {/* <input type='submit' name='submit' id='submitBtn' class='enableOnInput' /> */}
        }
    });

});