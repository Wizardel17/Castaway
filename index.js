import episodes from './base.js'

//  Получение

const getViewBtn = document.querySelector('.episodes__info__button')
const getSectionEpisodes = document.querySelector('.episodes')
const getContainerEpisodes = getSectionEpisodes.querySelector('.episodes__allEpisodes')

getViewBtn.addEventListener('click', () => {
    if (getViewBtn.classList.contains('hidden')) {
        getViewBtn.classList.remove('hidden')
        for (let episode of episodes) {
        getContainerEpisodes.insertAdjacentHTML('beforeend', 
            `<div class="episode">
                <img  
                    src="${episode.img1x}" 
                    srcset="${episode.img2x} 2x"
                    alt="Episode image" class="episode__image" width="380px" height="460">
                 <div class="episode__about">
                    <div class="episode__about__info">${episode.info}</div>
                    <div class="episode__about__number">Episode ${episode.number}</div>
                    <div class="episode__about__title">${episode.title}</div>
                    <div class="episode__about__text">${episode.text}</div>
                    <button class="episode__about__btn defaultStylesBtn">View Episode Details</button>
                </div>
            </div>`)
    }
    } else {
        getViewBtn.classList.add('hidden')
        getContainerEpisodes.innerHTML = ''
    }
})