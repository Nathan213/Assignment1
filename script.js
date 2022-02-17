
// mouse tracking settings to setup clicking on the timeline ball
function getRelativeCoordinates(mouse, element){
    let rect = element.getBoundingClientRect();
    return {
      x: mouse.clientX - rect.left,
      y: mouse.clientY - rect.top
    };
  }

// timeline mouse interactions
// clarifies which side of the timeline the mouse is at
  var black = document.getElementsByClassName('black');
  black[0].addEventListener('mouseenter', function(){
      console.log("black!");
  })
  var white = document.getElementsByClassName('white');
  white[0].addEventListener('mouseenter', function(){
      console.log("white!");
  })

//   mouse-timeline interactions
  var dotB = document.getElementById('dotB');
  var enterB = false;
  dotB.addEventListener('mouseenter', function(){
    enterB = true;
    console.log(enterB);
    dotB.style.width = "50px";
    dotB.style.height = "50px";
    if (percent >= -0.38){
        document.getElementById("churchill").style.opacity = "1";
        document.getElementById("linkB").setAttribute('href', 'https://en.wikipedia.org/wiki/Winston_Churchill')
    }
    else if (percent >= -0.71){
        document.getElementById("martin").style.opacity = "1";
        document.getElementById("linkB").setAttribute('href', 'https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.')
    }
    
    else if (percent >= -1.10){
        document.getElementById("obama").style.opacity = "1";
        document.getElementById("linkB").setAttribute('href', 'https://en.wikipedia.org/wiki/Barack_Obama')
    }
  })

//   mouse exit interaction
  dotB.addEventListener('mouseleave', function(){
    console.log("exit");
    dotB.style.width = "25px";
    dotB.style.height = "25px";
    document.getElementById("churchill").style.opacity = "0.5";
    document.getElementById("martin").style.opacity = "0.5";
    document.getElementById("obama").style.opacity = "0.5";
})

// same interactions for white side
var dotW = document.getElementById('dotW');
dotW.addEventListener('mouseenter', function(){
    console.log("here");
    dotW.style.width = "50px";
    dotW.style.height = "50px";
    if (percent >= -0.38){
        document.getElementById("kimk").style.opacity = "1";
        document.getElementById("linkW").setAttribute('href', 'https://en.wikipedia.org/wiki/Kim_Kardashian')
    }
    else if (percent >= -0.71){
        document.getElementById("tekashi").style.opacity = "1";
        document.getElementById("linkW").setAttribute('href', 'https://en.wikipedia.org/wiki/6ix9ine')
    }
    
    else if (percent >= -1.10){
        document.getElementById("logan").style.opacity = "1";
        document.getElementById("linkW").setAttribute('href', 'https://en.wikipedia.org/wiki/Logan_Paul')
    }
})

// same interaction for white side
dotW.addEventListener('mouseleave', function(){
  console.log("exit");
  dotW.style.width = "25px";
  dotW.style.height = "25px";
  document.getElementById("kimk").style.opacity = "0.5";
  document.getElementById("tekashi").style.opacity = "0.5";
  document.getElementById("logan").style.opacity = "0.5";
})

// some attempts to incorporate scrolling
function getScrollPercent()
{
  let scrollRange = document.body.offsetHeight - window.innerHeight;
  return window.scrollY / scrollRange;
}

var percent = getScrollPercent();
window.addEventListener('scroll', function(e){
  // console.log(window.scrollY, getScrollPercent());
  percent = getScrollPercent();
  console.log(percent)
});