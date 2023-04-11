document.addEventListener('DOMContentLoaded', () => {
    $('.contact-form__button').click(function(e){
        let count = 0;
        $(".contact-form input").each(function(){
            if($(".contact-form input").val() == ''){
                count++;
            }
            console.log(count);
        });
        if (count >= 1){
            alert('Поля не заполнены!');
        } else {
            document.querySelector('.contact-form').reset();
            $('.modal-success').fadeIn();
        }
    });
    $('.modal-success__button').click(function(){
        $('.modal-success').fadeOut();
    });
});