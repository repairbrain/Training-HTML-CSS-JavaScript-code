$(document).ready(function ()  {  

var regvName = /[A-Za-z�-��-�]{3,}/;
var regvEmail = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;

$('#add').click(function() {
    var pobazh = $('textarea[name=pobazhannya]');
    $('input[name=name]').css({'border':'1px solid grey'});
    $('input[name=email]').css({'border':'1px solid grey'});
    pobazh.css({'border':'1px solid grey'});
    var nameText = $('input[name=name]').val();
    var emailText = $('input[name=email]').val();
    if (nameText.search(regvName) != 0) {
        alert("����i�� i�'� (�i�i��� 3 �������, �i���� �i����)");
        $('input[name=name]').css({'border':'1px solid red'});
        return false;
    }
    else if (emailText.search(regvEmail) != 0) {
        alert("����i�� ��������� e-mail");
        $('input[name=email]').css({'border':'1px solid red'});
        return false;
    }
    else if (pobazh.val() == "") {
        alert("����i�� ���i ���������");
        pobazh.css({'border':'1px solid red'});
        return false;
    }
    else {
        $('form').after('<div class="block"><p>'+pobazh.val()+'</p></div>');
        
       $('.block').hide();
       $('.block').fadeIn(1000);
    }
});

});  //����� ready