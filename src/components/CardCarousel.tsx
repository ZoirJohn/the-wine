'use client'
import React, { FC, ReactNode } from 'react'
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrows'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { EmblaOptionsType } from 'embla-carousel'

const CardCarousel: FC<{ children: ReactNode; options?: EmblaOptionsType }> = ({ children, options }) => {
        const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })])

        const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

        return (
                <div className='embla min-h-[480px]'>
                        <div className='embla__viewport' ref={emblaRef}>
                                <div className='embla__container grid grid-cols-[repeat(240px,auto-fill)]'>{children}</div>
                        </div>

                        <div className='embla__controls'>
                                <div className='embla__buttons'>
                                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                                </div>
                        </div>
                </div>
        )
}

export default CardCarousel
