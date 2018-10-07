'usestrict';

$(function(){
    
    function resize(){
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#main-ad > .carousel-inner > .item').each(function(i , item){
            var $item = $(item);
            var  isScreen = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
            $item.css('backgroundImage','url("' + isScreen + '")');  
            
            if(isSmallScreen){
                $item.html('<img src = "' + isScreen + '" /> ');  
            }else{
                $item.html(' ');
            }
        })
    }
    $(window).on('resize',resize).trigger('resize');
})

