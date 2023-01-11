$(document).ready(function() {
    let $carousel = $("#carousel");
    let $items = $carousel.children();

    function update(){
        let first = $carousel.find(':first');
        let last = $carousel.find(':last');
        let width = $carousel.width();
        let first_left = first.position().left;
        let last_right = last.position().left + last.width();
        if (first_left <= 0-width ) {
            first.animate({left:"+="+width+"px"},2000, function() {
                first.appendTo($carousel);
                first.css({left:"0px"});
            });
        }
        if( last_right <= width){
            last.animate({left:"-="+width+"px"},2000, function() {
                last.prependTo($carousel);
                last.css({left:"0px"});
            });
        }
    }
    setInterval(update,27000);
});
