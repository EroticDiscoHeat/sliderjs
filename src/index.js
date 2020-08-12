import Navigation from './navigation'

const SliderJs = (timer) => {
    const btnNext = document.querySelector('.btn-next')
    const btnPrev = document.querySelector('.btn-prev')
    const btnPlay = document.querySelector('.btn-play')
    const btnPause = document.querySelector('.btn-pause')
    let position = 0, displacement = 0, temp, player

    btnNext.addEventListener("click", () => {
        temp = Navigation(position, displacement, 'btnNext')
        position = temp[0]
        displacement = temp[1]
    })
    btnPrev.addEventListener("click", () => {
        temp = Navigation(position, displacement, 'btnPrev')
        position = temp[0]
        displacement = temp[1]
    })
    btnPlay.addEventListener('click', () => {
        btnPlay.disabled = true
        player = setInterval(() =>{
            temp = Navigation(position, displacement, 'btnNext')
            position = temp[0]
            displacement = temp[1]
        }, timer)
    })
    btnPause.addEventListener('click', () => {
        btnPlay.disabled = false
        clearInterval(player)
    })
}
export default SliderJs