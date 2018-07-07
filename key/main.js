var board={
    1:{1:'q',2:'w',3:'e',4:'r',5:'t',6:'y',7:'u',8:'i',9:'o',10:'p','length':10},
    2:{1:'a',2:'s',3:'d',4:'f',5:'g',6:'h',7:'j',8:'k',9:'l','length':9},
    3:{1:'z',2:'x',3:'c',4:'v',5:'b',6:'n',7:'m','length':7},
    'length':3
}

var urls={
    q:'qq.com',
    w:'w3cschool',
    e:'ele.com',
    t:'taobao.com',
    u:'youtube.com',
    i:'iqiyi.com',
    a:'alibaba.com',
    d:'dangdang.com',
    g:'gaode.com'
}
// 先取得存下的改变的那个哈希
var hasInlocalstorege = JSON.parse(localStorage.getItem('toms')||'null')
if(hasInlocalstorege){
    hsah = hasInlocalstorege
}
document.onkeypress=function(hjshdj){
    console.log(hjshdj.key)
    var urlkey = hjshdj['key']
    location.href='http://'+urls[urlkey]
    }

    
for(var i=1;i<= board['length'];i++){
    var mainDiv = document.createElement('div');
    var row = board[i]
    for(var l=1;l<=row['length'];l++){
        span = document.createElement('span');
        span.textContent = row[l]
        mainDiv.appendChild(span)
        span.className = 'spantext'
        edit = document.createElement('span');
        edit.textContent = '编辑'
        edit.id = row[l]
        edit.className = 'edit'
        img=document.createElement('img')
        if(urls[row[l]]){
            img.src = 'http://'+ urls[row[l]] +'/favicon.ico'
        }else{
            img.src = 'http://www.qq.com/favicon.ico'
        }
        img.onerror =function(ccccc){
            img.src = 'http://www.qq.com/favicon.ico'
        }
       
        span.appendChild(edit)
        span.appendChild(img)
        edit.onclick=function(hdjhdjh){
            // 获得当前的点击的id
            x=hdjhdjh.target.id 
            urls[x]= prompt('改变网址')
             console.log(urls[x])
            //  存下整祖的哈希，等会替换整租的
           localStorage.setItem('toms',JSON.stringify(urls))
     
    }
    }
    main.appendChild(mainDiv)

}

