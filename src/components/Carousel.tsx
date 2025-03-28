'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './CarouselDots'
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrows'
import useEmblaCarousel from 'embla-carousel-react'
import '@/css/carousel.css'
import Banner from './Banner'
import Autoplay from 'embla-carousel-autoplay'

type PropType = {
        options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
        const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })])

        const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

        const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

        return (
                <div className='embla'>
                        <div className='embla__viewport' ref={emblaRef}>
                                <div className='embla__container'>
                                        <Banner />
                                        <Banner />
                                </div>
                        </div>

                        <div className='embla__controls'>
                                <div className='embla__buttons'>
                                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                                </div>

                                <div className='embla__dots'>
                                        {scrollSnaps.map((_, index) => (
                                                <DotButton
                                                        key={index}
                                                        onClick={() => onDotButtonClick(index)}
                                                        className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
                                                />
                                        ))}
                                </div>
                        </div>
                </div>
        )
}

export default Carousel
