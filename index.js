//페이지 스크롤 애니메이션
window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

let mHtml = $("html");
let page = 1;

mHtml.animate({scrollTop : -20},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 3) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    let posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})

//