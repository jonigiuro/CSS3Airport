var t;

function timedCount()
{
  if(current != word) clearTimeout(t);
  $('.single_letter').each(function(index){
    current[index] = $(this).text();
    if(current[index] != word[index]){
      var ind_array = letters.indexOf(current[index]);
      if(ind_array == 77) ind_array = -1;
      $(this).text(letters[ind_array + 1]);
    }
  })
t = setTimeout("timedCount()",50);
}

function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}
  
$(document).ready(function(){
  letters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-=!?.:/;,()&%$'0123456789 ").split('');
  current = [];
  message = getParameterByName('name').toUpperCase();
  //console.log(message);
  if(message){
    word = message.split('');
    while(word.length < 15){
      word.push(' ');
    }
    timedCount();
  }
  $("#go").click(function(){
    word = [];
    word = $('#name').val().split('');
    while(word.length < 15){
      word.push(' ');
    }
    var temp = $('#name').val();
    while(temp.indexOf(' ') != -1){
      temp = temp.replace(' ','+');
    }
    $('#sharelink').text('http://www.thereicome.com/experiments/statics/Airport/index.html?name=' + temp);
    timedCount();
  });
})
