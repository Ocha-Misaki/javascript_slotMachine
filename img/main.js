'use strict'
{

  const createElement = (imgID,stopID) => {
    const divElement = document.createElement('div')
    divElement.classList.add('slot-panel')

    const img = document.createElement('img')
    img.src = 'seven.png'
    img.setAttribute('id',imgID)
    
    const stop = document.createElement('button')
    stop.setAttribute('id',stopID)
    stop.textContent = 'STOP'
    
    divElement.appendChild(img)
    divElement.appendChild(stop)
    
    const slotBodyElement = document.querySelector('div')
    slotBodyElement.appendChild(divElement)
  }

  createElement('img1','stop1')
  createElement('img2','stop2')
  createElement('img3','stop3')


  //画像を切り替える
  const switchImage = () => {
    const imgArray = [
      'cherry.png',
      'bell.png',
      'seven.png'
    ]
    return imgArray[Math.floor(Math.random() * imgArray.length)]
  }


  const img1 = document.getElementById('img1')
  const img2 = document.getElementById('img2')
  const img3 = document.getElementById('img3')
  
  let timeoutID1;
  let timeoutID2;
  let timeoutID3;
  
  const spinningSlot = (timeoutID,img) => {
    timeoutID = setInterval(() => {
      img.src = switchImage()
    },10)
  }



const spin = document.getElementById('spin')
spin.addEventListener('click', () => {
  spinningSlot(timeoutID1,img1)
  spinningSlot(timeoutID2,img2)
  spinningSlot(timeoutID3,img3)
})

const stoppingSlot = (element,timeoutID) => {
  element.addEventListener('click',() => {
  clearInterval(timeoutID)
  })
}
const stop1 = document.getElementById('stop1')
const stop2 = document.getElementById('stop2')
const stop3 = document.getElementById('stop3')
stoppingSlot(stop1,timeoutID1)
stoppingSlot(stop2,timeoutID2)
stoppingSlot(stop3,timeoutID3)

}

