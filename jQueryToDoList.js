$(document).ready(
function(){
  /**
   * Toggles "done" class on <li> element
   */
  const $li = $('li')
  $li.each(function(index, element){
    $(element).on('click',()=>{
      $(element).toggleClass('done')
    } )
  })
  /**
   * Delete element when delete link clicked
   */
  $li.each((index, element)=>{
    let test = $(element).children('a')
    test.click(function(z){$(element).fadeOut("slow")})
  })
  
    /**
   * Adds new list item to <ul>
   */
  const addListItem = function(z) {
    z.preventDefault()
    const text = $('input').val();
    console.log(text)
    // the remaining code... ;)
    let newItem = $('<li>')
    let newSpan = $('<span>').on('click',()=>{newItem.toggleClass('done')})
    let newAtag =$('<a>')
    newAtag.attr('class', 'delete')
    newAtag.click(function(){newItem.fadeOut("slow")})
    newAtag.text('Delete')
    newSpan.text(text)
    newItem.append(newSpan).append(newAtag).appendTo(".today-list")
  };

  // add listener
  $('.add-item').click(addListItem)
}
  ) 
