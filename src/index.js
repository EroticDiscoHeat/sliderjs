import Navigation from './navigation'
import styles from './styles.css'
(function () {
    const SliderJs = (id, timer, autoplay, showBtns) => {
        let position = 0, displacement = 0, coordinates, player, playChecker = false
        let wrap = document.createElement('div')
        const track = document.getElementById(id)
        const items = track.children

        if (Array.from(items).length === 0) {
            alert(`В контейнере с id '${id} нет элементов для отображения'`)
        } else {
            track.style.display = 'flex'
            track.style.transition = '.2s'
            wrap.innerHTML = track.outerHTML
            track.parentNode.replaceChild(wrap, track)
            wrap.className = styles.wrapper
            // debugger
            // Array.from(items).forEach((item) => {
            //     item.setAttribute('onselectstart', 'return false')
            //     item.setAttribute('onmousedown', 'return false')
            // })
            // Array.from(items).forEach((item) => {
            //     item.style = 'height: 100%; min-height: 100%'
            // })
            // debugger
            if (autoplay) {
                player = setInterval(() => {
                    if(showBtns) {
                        let playBtn = wrap.getElementsByTagName('button')[2]
                        playChecker = true
                        playBtn.firstChild.setAttribute('src', `../src/svg/pause-button.svg`)
                    }
                    coordinates = Navigation(id, position, displacement, 'btnNext')
                    position = coordinates.position
                    displacement = coordinates.displacement
                }, timer)
            }

            if (showBtns) {
                let btns = document.createElement('div')
                let btnNext = document.createElement('button')
                let btnPrev = document.createElement('button')
                let btnPlay = document.createElement('button')
                let next = document.createElement('img')
                let prev = document.createElement('img')
                let play = document.createElement('img')

                wrap.appendChild(btns)
                btns.className = styles.sliderButtons

                btns.appendChild(btnPrev)
                btns.appendChild(btnNext)
                btns.appendChild(btnPlay)

                btnPrev.appendChild(prev)
                btnNext.appendChild(next)
                btnPlay.appendChild(play)

                prev.setAttribute('src', `../src/svg/left-arrow.svg`)
                next.setAttribute('src', `../src/svg/right-arrow.svg`)
                play.setAttribute('src', `../src/svg/play-button.svg`)

                btnNext.addEventListener("click", () => {
                    coordinates = Navigation(id, position, displacement, 'btnNext')
                    position = coordinates.position
                    displacement = coordinates.displacement
                })
                btnPrev.addEventListener("click", () => {
                    coordinates = Navigation(id, position, displacement, 'btnPrev')
                    position = coordinates.position
                    displacement = coordinates.displacement
                })
                btnPlay.addEventListener('click', () => {
                    if (!playChecker) {
                        playChecker = true
                        play.setAttribute('src', `../src/svg/pause-button.svg`)
                        player = setInterval(() => {
                            coordinates = Navigation(id, position, displacement, 'btnNext')
                            position = coordinates.position
                            displacement = coordinates.displacement
                        }, timer)
                    } else {
                        playChecker = false
                        play.setAttribute('src', `../src/svg/play-button.svg`)
                        clearInterval(player)
                    }
                })
            }
                            
            const mouseDrag = () => {
                let mouseStart, mouseEnd
                wrap.addEventListener('mousedown', (event) => {
                    if(event.target.parentNode.nodeName !== 'BUTTON') {
                        mouseStart = event.clientX
                    } 
                })
                wrap.addEventListener('mouseup', (event) => {
                    if(event.target.parentNode.nodeName !== 'BUTTON') {
                        mouseEnd = event.clientX
                        if(mouseEnd > mouseStart) {
                            coordinates = Navigation(id, position, displacement, 'btnPrev')
                            position = coordinates.position
                            displacement = coordinates.displacement
                        } else {
                            coordinates = Navigation(id, position, displacement, 'btnNext')
                            position = coordinates.position
                            displacement = coordinates.displacement
                        }
                    }
                })
            }
            const touchDrag = () => {
                let touchStart, touchEnd
                wrap.addEventListener('touchstart', (event) => {
                    touchStart = event.changedTouches[0].clientX
                })
                wrap.addEventListener('touchend', (event) => {
                    touchEnd = event.changedTouches[0].clientX
                    if(touchEnd > touchStart) {
                        coordinates = Navigation(id, position, displacement, 'btnPrev')
                        position = coordinates.position
                        displacement = coordinates.displacement
                    } else {
                        coordinates = Navigation(id, position, displacement, 'btnNext')
                        position = coordinates.position
                        displacement = coordinates.displacement
                    }
                })
            }
            mouseDrag()
            touchDrag()
        }
    }
    window.SliderJs = SliderJs
})()
