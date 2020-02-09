console.log('inject script running...')

if(window.location.href === 'https://www.xuexi.cn/index.html') {
    console.log('正在访问学习强国首页')

    const wait = setInterval(function() {
        const slider = document.querySelector('.slick-slider')
        if(slider === null) {
            return
        }
        const slickSlides = slider.querySelectorAll('.slick-slide:not(.slick-cloned)')
        if(slickSlides !== null) {
            clearInterval(wait)
        }
        console.log(slickSlides)
        slickSlides.forEach(function(e) {
            e.querySelector('img').click()
        })
    }, 1000)
}