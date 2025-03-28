'use client'
import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

type UsePrevNextButtonsType = {
        prevBtnDisabled: boolean
        nextBtnDisabled: boolean
        onPrevButtonClick: () => void
        onNextButtonClick: () => void
}

export const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined): UsePrevNextButtonsType => {
        const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
        const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

        const onPrevButtonClick = useCallback(() => {
                if (!emblaApi) return
                emblaApi.scrollPrev()
        }, [emblaApi])

        const onNextButtonClick = useCallback(() => {
                if (!emblaApi) return
                emblaApi.scrollNext()
        }, [emblaApi])

        const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
                setPrevBtnDisabled(!emblaApi.canScrollPrev())
                setNextBtnDisabled(!emblaApi.canScrollNext())
        }, [])

        useEffect(() => {
                if (!emblaApi) return

                onSelect(emblaApi)
                emblaApi.on('reInit', onSelect).on('select', onSelect)
        }, [emblaApi, onSelect])

        return {
                prevBtnDisabled,
                nextBtnDisabled,
                onPrevButtonClick,
                onNextButtonClick,
        }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = (props) => {
        const { children, ...restProps } = props

        return (
                <button className='embla__button embla__button--prev' type='button' {...restProps}>
                        <svg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <circle cx='17' cy='17' r='17' fill='white' fillOpacity='0.35' />
                                <path
                                        d='M11.6464 16.6464C11.4512 16.8417 11.4512 17.1583 11.6464 17.3536L14.8284 20.5355C15.0237 20.7308 15.3403 20.7308 15.5355 20.5355C15.7308 20.3403 15.7308 20.0237 15.5355 19.8284L12.7071 17L15.5355 14.1716C15.7308 13.9763 15.7308 13.6597 15.5355 13.4645C15.3403 13.2692 15.0237 13.2692 14.8284 13.4645L11.6464 16.6464ZM24 16.5H12V17.5H24V16.5Z'
                                        fill='#0E0E0E'
                                />
                        </svg>
                        {children}
                </button>
        )
}

export const NextButton: React.FC<PropType> = (props) => {
        const { children, ...restProps } = props

        return (
                <button className='embla__button embla__button--next' type='button' {...restProps}>
                        <svg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <circle cx='17' cy='17' r='17' transform='rotate(180 17 17)' fill='white' fillOpacity='0.35' />
                                <path
                                        d='M22.3536 17.3536C22.5488 17.1583 22.5488 16.8417 22.3536 16.6464L19.1716 13.4645C18.9763 13.2692 18.6597 13.2692 18.4645 13.4645C18.2692 13.6597 18.2692 13.9763 18.4645 14.1716L21.2929 17L18.4645 19.8284C18.2692 20.0237 18.2692 20.3403 18.4645 20.5355C18.6597 20.7308 18.9763 20.7308 19.1716 20.5355L22.3536 17.3536ZM10 17.5L22 17.5L22 16.5L10 16.5L10 17.5Z'
                                        fill='#0E0E0E'
                                />
                        </svg>
                        {children}
                </button>
        )
}
