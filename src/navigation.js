const Navigation = (position, displacement, element) => {
        let replacePosition
        const track = document.querySelector('.slider-track')
        const items = document.querySelectorAll('div.slider-track > div, div.slider-track > img')
        const itemsWidthMap = new Map()
        let sumWidth = 0
    
        items.forEach((item, index) => {
            itemsWidthMap.set(index, item.offsetWidth)
        })
        itemsWidthMap.forEach((item) => {
            sumWidth += item
        })
        if(element === 'btnPrev') {
            position === 0 ? position = Array.from(itemsWidthMap).pop()[0] : position--
            displacement += itemsWidthMap.get(position)
        } else {
            position === Array.from(itemsWidthMap).pop()[0] ? position = 0 : position++
            displacement -= itemsWidthMap.get(position)
        }
        track.style.transform = `translateX(${displacement}px)`
        track.addEventListener('transitionstart', () => {
            if(element === 'btnPrev') {
                position === 0 ? replacePosition = Array.from(itemsWidthMap).pop()[0] : replacePosition = position + 1
            } else {
                position === Array.from(itemsWidthMap).pop()[0] ? replacePosition = 0 : replacePosition = position - 1
            }
            items.item(position).style.position = 'relative'
            items.item(position).style.left = `${-(sumWidth * Math.ceil(displacement/sumWidth))}px`
        })
    return [position, displacement]
}
export default Navigation