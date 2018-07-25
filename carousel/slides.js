
let n = 1
setInterval(()=>{
    makeleave($(`.images >img:nth-child(${x(n)})`))
    .one('transitionend',(e)=>{
        makeCurrent($(e.target))
    })
    makeCurrent($(`.images > img:nth-child(${x(n+1)})`))
n+=1
},3000)
function x(n){
    if(n>4){
        n = n%4
        if(n===0){
            n=4
        }
    }
    return n
}
function chushihua(){
    n=1
    $(`.images > img:nth-child($(n))`).addClass('current')
    .siblings().addClass('enter')
}
function makeCurrent($node){
    return $node.removeClass('enter leave').addClass('current')
}
function makeleave($node){
   return $node.removeClass('enter current').addClass('leave')
}
function makeenter($node){
    return $node.removeClass('leave current').addClass('enter')
}