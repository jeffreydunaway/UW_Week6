// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

$(document).ready(
    $('<a id="cta"></a>').text('Buy Now').insertAfter("p")
    )
const $pTag = $("p")
const $aTag = $('<a>')
$aTag.attr('href', '')
$aTag.attr('id', 'cta')
$aTag.text('Buy Now')
$aTag.insertAfter($pTag)

// Access (read) the data-color attribute of the <img>,
// log to the console

$(document).ready(
    console.log($('img').attr('data-color'))
)

const $img2 = $('img').attr('data-color')

console.log($img2)
// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

$(document).ready(
    $('ul li').last().addClass("highlight")
)

const $li = $('ul li').last().addClass("highlight")
// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

$(document).ready(
    $('p').remove()
)
$pTag.remove()

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
$("#cta")[0].click(function(){
    $('#cta').text('Test')
})
