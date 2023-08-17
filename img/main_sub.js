let num = 0

const test = () => {
  const stringArray = ['あ', 'い', 'う']
  console.log(stringArray[num])
  num++
  if(num >= stringArray.length){
    num = 0
  }
}

timeoutID = setInterval(() => {
  test()
},1000)


// //一つ目のスロット
  const divElement1 = document.createElement('div')
  divElement1.classList.add('slot-panel')
  const img1 = document.createElement('img')
  img1.src = 'cherry.png'
  const stop1 = document.createElement('button')
  stop1.setAttribute('id','stop1')
  stop1.textContent = 'STOP'
  divElement1.appendChild(img1)
  divElement1.appendChild(stop1)
  const slotBodyElement = document.querySelector('div')
  slotBodyElement.appendChild(divElement1)

  // //二つ目
  const divElement2 = document.createElement('div')
  divElement2.classList.add('slot-panel')
  const img2 = document.createElement('img')
  img2.src = 'cherry.png'
  const stop2 = document.createElement('button')
  stop2.setAttribute('id','stop2')
  stop2.textContent = 'STOP'
  divElement2.appendChild(img2)
  divElement2.appendChild(stop2)
  slotBodyElement.appendChild(divElement2)
  
  // //三つ目
  const divElement3 = document.createElement('div')
  divElement3.classList.add('slot-panel')
  const img3 = document.createElement('img')
  img3.src = 'cherry.png'
  const stop3 = document.createElement('button')
  stop3.setAttribute('id','stop3')
  stop3.textContent = 'STOP'
  divElement3.appendChild(img3)
  divElement3.appendChild(stop3)
  slotBodyElement.appendChild(divElement3)


  