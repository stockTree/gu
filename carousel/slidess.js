let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0


makeFakeSlides();

$slides.css({transform:'translateX(-300px)'})
bingEvents();
function bingEvents(){
    $('#buttonWrapper').on('click','button',function(e){
       let $button = $(e.currentTarget)
       let index = $button.index()
      if(current===$buttons.length-1 && index === 0){
        $slides.css({transform:`translateX(${-($buttons.length + 1)*300}px)`})
        .one('trsnsitionend',function(){
            console.log(2)
            $slides.hide().offset()
            console.log(3)
            $slides.css({transform:`translateX(${-(index+1)*300}px)`}).show()
        })

      }else if(current=== 0 && index ===$buttons.length - 1){
      
        $slides.css({transform:'translateX(0px)'})
        .one('trsnsitionend',function(){
            $slides.hide().offset()
            $slides.css({transform:`translateX(${-(index+1)*300}px)`}).show()
        })
      }else{
       
        $slides.css({transform:`translateX(${-(index+1)*300}px)`})
      }
      
    current = index
    })
}

function makeFakeSlides(){
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length-1).clone(true)
    $slides.append($firstCopy)
$slides.prepend($lastCopy)
}

//     $buttons.eq(0).on('click',function(){
//         if(current ===3){
//             console.log('说明你是从最后一张到第一张')
//             $slides.css({transform:'translateX(-1500px)'})
//             .one('trsnsitionend',function(){
//                 $slides.hide().offset()$slides.css({transform:'translateX(-300px)'}).show()
//             })
//         }else{
//             $slides.css({transform:'translateX(-300px)'})
//         }
//         current = 0
//     })
//     $buttons.eq(1).on('click',function(){
//         console.log(current)
//         $slides.css({transform:'translateX(-600px)'})
//         current = 1
//     })
//     $buttons.eq(2).on('click',function(){
//         console.log(current)
//         $slides.css({transform:'translateX(-900px)'})
//         current = 2
//     })
//     $buttons.eq(3).on('click',function(){
//         if(current ===3){
//             console.log('说明你是从第一张到最后一张')
//             $slides.css({transform:'translateX(0px)'})
//             .one('trsnsitionend',function(){
//                 $slides.hide().offset().$slides.css({transform:'translateX(-1200px)'}).show()
//             })
//         }else{
//             console.log(current)
//         $slides.css({transform:'translateX(-1200px)'})
//         current = 3
//         }
        
//     })

// }


