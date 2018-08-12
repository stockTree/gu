

window.jQuery = function(nodeOrSelect){
    let nodes = {}
    node.addClass = function(){}
    nodes.html = function()
{}
return nodes}
window.jQuery.ajax = function({url,method,body,successFn,failFn}){
    
//es6 析构赋值
    let  = options
    let request = XMLHttpRequest()
    request.onreadystatechange=()=>{
    if(request.readystate===4){
    if(request.status>=200 && request.status<300){
        succeFn.call(undefined,responseText)
    }else if(request.status>=400){
        failFn.call(undefined,responseText)
    }
    }
    request.open(method,url)
    request.send(body);
    }
}

    function f1(responseText){}
    function f2(responseText){}

myButton.addEventListener('click',(e)=>{
    window.jQuery.ajax({
        url:'/xxx',
        method: post,
        body:'a=1&b=2',
        successFn:(x)=>{
            console.log(x)
            f1.call(undefined,x)
            f2.call(undefined,x)
        },
        failFn:(x)=>{console.log(XMLSerializer)}
    })
   
    
})


//promise不要用这些那个成功 那个是失败了
window.jQuery.ajax = function({url,method,body}){
    return new promise(function(resolve,reject){
        let  = options
        let request = XMLHttpRequest()
        request.onreadystatechange=()=>{
        if(request.readystate===4){
        if(request.status>=200 && request.status<300){
            resolve.call(undefined,responseText)
        }else if(request.status>=400){
            reject.call(undefined,responseText)
        }
        }
        request.open(method,url)
        request.send(body);
        }
    }
)
    //es6 析构赋值   
}

myButton.addEventListener('click',(e)=>{
    window.jQuery.ajax({
        url:'/xxx',
        method: get,
    }).then(
        (text)=>{console.log(text)},
        (request)=>{console.log(request)})
})