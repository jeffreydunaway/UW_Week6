// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

$(document).ready(
    $('<a id="cta"></a>').text('Buy Now').insertAfter("p")
    )

// Access (read) the data-color attribute of the <img>,
// log to the console

$(document).ready(
    console.log($('img').attr('data-color'))
)

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

$(document).ready(
    $('ul li').last().addClass("highlight")
)

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

$(document).ready(
    $('p').remove()
)

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"

$(document).ready(
        $('#cta').click(
            function(){
                $('#cta').text("added to cart")
            }
        )

)
