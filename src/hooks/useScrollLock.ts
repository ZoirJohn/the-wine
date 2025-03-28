import { useEffect } from 'react'

export const useScrollLock = (isLocked: boolean) => {
        useEffect(() => {
                const body = document.body

                if (isLocked) {
                        body.style.overflow = 'hidden'
                } else {
                        body.style.overflow = 'auto'
                }

                return () => {
                        body.style.overflow = 'hidden'
                }
        }, [isLocked])
}
