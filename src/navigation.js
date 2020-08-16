const Navigation = (id, position, displacement, element) => {
    let replacePosition
    const track = document.getElementById(id)
    const items = track.children
    const itemsWidthMap = []
    let sumWidth = 0

    Array.from(items).forEach((item) => {
        itemsWidthMap.push(item.offsetWidth)
        sumWidth += item.offsetWidth
    })

    if (element === 'btnPrev') {
        position === 0 ? position = itemsWidthMap.length - 1 : position--
        displacement += itemsWidthMap[position]
    } else {
        position === itemsWidthMap.length - 1 ? position = 0 : position++
        displacement -= itemsWidthMap[position]
    }

    track.style.transform = `translateX(${displacement}px)`

    track.addEventListener('transitionstart', () => {
        if(element === 'btnPrev') {
            if(position === 0) {
                replacePosition = itemsWidthMap.length - 1
            } else {
                replacePosition = position + 1
            }
        } else {
            if(position === itemsWidthMap.length - 1) {
                replacePosition = 0
            } else {
                replacePosition = position - 1
            }
        }
        items.item(position).style.left = `${-(sumWidth * Math.ceil(displacement / sumWidth))}px`
    })
    return {position: position, displacement: displacement}
}

export default Navigation