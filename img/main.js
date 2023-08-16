'use strict'
{

//htmlを描画する
//関数化したもの
const createElement = (element) => {
  const divElement = document.createElement('div')
  divElement.classList.add('slot-panel')
  const img = document.createElement('img')
  img.src = 'cherry.png'
  const stop = document.createElement('button')
  stop.setAttribute('id',element)
  stop.textContent = 'STOP'
  divElement.appendChild(img)
  divElement.appendChild(stop)
  const slotBodyElement = document.querySelector('div')
  slotBodyElement.appendChild(divElement)
}

createElement('stop1')
createElement('stop2')
createElement('stop3')

  //画像を切り替える
  const switchImage = () => {
    const imgArray = [
      'cherry.png',
      'bell.png',
      'seven.png'
    ]
    return imgArray[Math.floor(Math.random() * imgArray.length)]
  }

  let timeoutID1;
  let timeoutID2;
  let timeoutID3;
  
  const spinningSlot = (timeoutID) => {
    timeoutID = setInterval(() => {
      img.src = switchImage()
    },10)
  }

  const spin = document.getElementById('spin')
  spin.addEventListener('click', () => {
    spinningSlot(timeoutID1)
    spinningSlot(timeoutID2)
    spinningSlot(timeoutID3)
  })

  const stoppingSlot = (element, timeoutID) => {
    element.addEventListener('click',() => {
    clearInterval(timeoutID)
    })
  }
  const stop1 = document.getElementById('stop1')
  stoppingSlot(stop1,timeoutID1)
  const stop2Element = document.getElementById('stop2')
  stoppingSlot(stop2Element,timeoutID2)
  const stop3Element = document.getElementById('stop3')
  stoppingSlot(stop3Element,timeoutID3)

}

