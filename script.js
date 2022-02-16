

function getRelativeCoordinates(mouse, element){
    let rect = element.getBoundingClientRect();
    return {
      x: mouse.clientX - rect.left,
      y: mouse.clientY - rect.top
    };
  }

  var black = document.getElementsByClassName('black');
  black[0].addEventListener('mouseenter', function(){
      console.log("black!");
  })

  var white = document.getElementsByClassName('white');
  white[0].addEventListener('mouseenter', function(){
      console.log("white!");
  })

  var dotB = document.getElementById('dotB');
  var enterB = false;
  dotB.addEventListener('mouseenter', function(){
    enterB = true;
    console.log(enterB);
    dotB.style.width = "50px";
    dotB.style.height = "50px";
    if (window.scrollY<= 210){
        document.getElementById("churchill").style.opacity = "1";
        document.getElementById("linkB").setAttribute('href', 'https://en.wikipedia.org/wiki/Winston_Churchill')
    }
    else if (window.scrollY<= 360){
        document.getElementById("martin").style.opacity = "1";
        document.getElementById("linkB").setAttribute('href', 'https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.')
    }
    
    else if (window.scrollY <= 620){
        document.getElementById("obama").style.opacity = "1";
        document.getElementById("linkB").setAttribute('href', 'https://en.wikipedia.org/wiki/Barack_Obama')
    }

  })

  dotB.addEventListener('mouseleave', function(){
    console.log("exit");
    dotB.style.width = "25px";
    dotB.style.height = "25px";
    document.getElementById("churchill").style.opacity = "0.5";
    document.getElementById("martin").style.opacity = "0.5";
    document.getElementById("obama").style.opacity = "0.5";
})

var dotW = document.getElementById('dotW');
dotW.addEventListener('mouseenter', function(){
    console.log("here");
    dotW.style.width = "50px";
    dotW.style.height = "50px";
    if (window.scrollY<= 210){
        document.getElementById("kimk").style.opacity = "1";
        document.getElementById("linkW").setAttribute('href', 'https://en.wikipedia.org/wiki/Kim_Kardashian')
    }
    else if (window.scrollY<= 360){
        document.getElementById("tekashi").style.opacity = "1";
        document.getElementById("linkW").setAttribute('href', 'https://en.wikipedia.org/wiki/6ix9ine')
    }
    
    else if (window.scrollY <= 620){
        document.getElementById("logan").style.opacity = "1";
        document.getElementById("linkW").setAttribute('href', 'https://en.wikipedia.org/wiki/Logan_Paul')
    }
})

dotW.addEventListener('mouseleave', function(){
  console.log("exit");
  dotW.style.width = "25px";
  dotW.style.height = "25px";
  document.getElementById("kimk").style.opacity = "0.5";
  document.getElementById("tekashi").style.opacity = "0.5";
  document.getElementById("logan").style.opacity = "0.5";
})

function getScrollPercent()
{
  let scrollRange = document.body.offsetHeight - window.innerHeight;
  return window.scrollY / scrollRange;
}

window.addEventListener('scroll', function(e){
  console.log(window.scrollY, getScrollPercent());
  let percent = getScrollPercent();
});