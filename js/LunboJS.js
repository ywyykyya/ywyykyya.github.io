let ysn = document.getElementById('ysn');
let yqrh = document.getElementById('yqrh');

// window.addEventListener('DOMMouseScroll',function(e){
//     e = e || window.event;
//     var detail = e.detail;
//     if(detail > 0){
//         yqrh.style.transform = "translateY(-80rem);";
//     }
// });
var sbgl = function(e){
    e = e || window.event;
    if(e.wheelDelta){//判断浏览器IE,谷歌滚轮事件
        if(e.wheelDelta > 0){//当滚轮向上滚动时
            // alert("滚轮向上滚动");
            ysn.style.transform = "translateY(0rem)";
            yqrh.style.transform = "translateY(0rem)";
        }
        if(e.wheelDelta < 0){//当滚轮向下滚动时
            // alert("滚轮向下滚动");
            ysn.style.transform = "translateY(-47.5rem)";
            yqrh.style.transform = "translateY(-47.5rem)";

        }
    }
    else if(e.detail){//Firefox滚轮事件
        if(e.detail > 0){//当滚轮向上滚动时
            // alert("滚轮向上滚动");
            ysn.style.transform = "translateY(0rem)";
            yqrh.style.transform = "translateY(0rem)";
        }
        if(e.detail < 0){//当滚轮向下滚动时
            // alert("滚轮向下滚动");
            ysn.style.transform = "translateY(-47.5rem)";
            yqrh.style.transform = "translateY(-47.5rem)";
        }
    }
}

//给页面绑定滚轮滚动事件
if(document.addEventListener){//firefox
    document.addEventListener('DOMMouseScroll',sbgl,false);
}

//滚动滑轮触发scrollFunc方法   //ie 谷歌
window.onmousewheel = document.onmousewheel = sbgl;
