// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});
$(document).ready(
// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
  function(){
    const stopHREF = function(e){
      e.preventDefault();
      alert('More Info')
    }
    $('#more-info').click(stopHREF)
    
    
// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
    
    const meow = document.getElementById('cat')
    const stopCat = function(e){
      e.stopPropagation();
      alert('Bow Wow!')
    }
    $('button').click(stopCat)
  }
)
