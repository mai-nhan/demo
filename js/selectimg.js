$(document).ready(function() {
    $('#modelName').click(function(){          
        $(this).val('');
        $(this).css('color','black');
    });
    var checkboxes = document.getElementsByTagName('input');

    for (var i=0; i<checkboxes.length; i++)  {
      if (checkboxes[i].type == 'checkbox')   {
        checkboxes[i].checked = false;
      }
    }

 $("#file").change(function(e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

        var file = e.originalEvent.srcElement.files[i];

        // var img = document.createElement("img");
        var reader = new FileReader();
        reader.onloadend = function() {
             // img.src = reader.result;
             $('.image-show').attr('src', reader.result);
            $('.image-show').removeClass('hide');
            $('.label-class').addClass('hide');
            $('#logo').attr('src', reader.result);
            $('#logo').removeClass('hide');
        }
        reader.readAsDataURL(file);
        // $("input").after(img);
    }
});
});
$(document).ready(function(){
    $("#hide-img").click(function(){
        $('.image-show').addClass('hide');
        $('.label-class').removeClass('hide');
        $('#logo').addClass('hide');

    });
});
$(document).ready(function(){
    $('#on').on('change',function(){
        if(this.checked){
            $("#info").removeClass('hide');
            
        }
        else{
            $('#info').addClass('hide');
        }
    });
    });
$(document).ready(function(){
    var x = document.querySelector("#fname");
    x.addEventListener('blur', function() {
        var value = this.value;
        if(value!=""){
            document.querySelector("#fname").classList.remove("error-alert");
        }else{
            document.querySelector("#fname").classList.add("error-alert");
        }
    })
    var x = document.querySelector("#fname1");
    x.addEventListener('blur', function() {
        var value = this.value;
        if(value!=""){
            document.querySelector("#fname1").classList.remove("error-alert");
        }else{
            document.querySelector("#fname1").classList.add("error-alert");
        }
    })
    var x = document.querySelector("#fname2");
    x.addEventListener('blur', function() {
        var value = this.value;
        if(value!=""){
            document.querySelector("#fname2").classList.remove("error-alert");
        }else{
            document.querySelector("#fname2").classList.add("error-alert");
        }
    })
    
});
function checkEmail(str)
    {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(str)){
            document.querySelector("#amf-input-email_18").classList.add("error-alert");
        }else{
            document.querySelector("#amf-input-email_18").classList.remove("error-alert");
        }
    }