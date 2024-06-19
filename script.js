//getting the document objects
let musicBody = document.getElementsByClassName('musicPlayer')
let selectFromFile = document.getElementsByClassName('fileList')
let button_N = document.getElementsByClassName('left')
let trackName = document.getElementsByClassName('trackName')
let trackInfo = document.getElementsByClassName('trackInfo')
let controlPrevious = document.getElementsByClassName('controlPrev')
let controlNext = document.getElementsByClassName('controlNext')
let playState = document.getElementsByClassName('controlPause')
let colorMode = document.getElementById('colorButton')

//creating variables for state decision
let brightMode = false,audioPause = true


//change between bright and dark modes
function changecolorMode(){
    if(brightMode == false){
        document.body.style.background = '#29001B';
        Array.from(musicBody).forEach(el => el.style.background = '#FFADE2')
        Array.from(playState).forEach((el) =>{el.style.backgroundColor = '#FF0AA9'; el.style.border ='#3FDE74'})
        Array.from(controlNext).forEach(el=>el.style.backgroundColor = '#FFD6F1')
        Array.from(controlPrevious).forEach(el=>el.style.backgroundColor = '#FFD6F1')
        return brightMode = true
    }
    else{
        document.body.style.background = '#002029'
        Array.from(musicBody).forEach(el => el.style.background = '#EBFBFF')
        Array.from(playState).forEach(el =>el.style.backgroundColor = '#0B4F6C')
        Array.from(controlNext).forEach(el=>el.style.backgroundColor = '#0B4F6C')
        Array.from(controlPrevious).forEach(el=>el.style.backgroundColor = '#0B4F6C')
        return brightMode = false
    }
}




//event listeners
colorMode.addEventListener('click',changecolorMode)
button_N.addEventListener('click',()=>{
    window.resizeTo(800,600)
})