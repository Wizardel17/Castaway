import episodes, { stars, reviews} from './base.js'

//  Получение

const getViewBtn = document.querySelector('.episodes__info__button')
const getSectionEpisodes = document.querySelector('.episodes')
const getContainerEpisodes = getSectionEpisodes.querySelector('.episodes__allEpisodes')
const getSectionReviews = document.querySelector('.reviews')
const getContainerReviews = getSectionReviews.querySelector('.reviews__container')

//  Обработчики событий

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

document.addEventListener('DOMContentLoaded', () => {
    createCard()
})

//  Функции

function createCard() {
    for (let review of reviews) {
        getContainerReviews.insertAdjacentHTML('beforeend', 
                `<div class="reviews__card">
                        <div class="reviews__card__imgStars">
                            <img src="${stars.img1x}" 
                                srcset="${stars.img2x}"
                                alt="Icon star" width="18" height="18">
                            <img src="${stars.img1x}" 
                                srcset="${stars.img2x}"
                                alt="Icon star" width="18" height="18">
                            <img src="${stars.img1x}" 
                                srcset="${stars.img2x}"
                                alt="Icon star" width="18" height="18">
                            <img src="${stars.img1x}" 
                                srcset="${stars.img2x}"
                                alt="Icon star" width="18" height="18">
                            <img src="${stars.img1x}" 
                                srcset="${stars.img2x}"
                                alt="Icon star" width="18" height="18">
                        </div>
                        <div class="reviews__card__text">${review.text}</div>
                        <div class="reviews__card__author">${review.author}</div>
                    </div>`)
    }
}