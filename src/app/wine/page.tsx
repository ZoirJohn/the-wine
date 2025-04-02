import Carousel from '@/components/Carousel'
import Poster from '@/components/Poster'

const Wine = () => {
        return (
                <>
                        <section>
                                <div className='_container p-0'>
                                        <Carousel>
                                                <Poster />
                                        </Carousel>
                                </div>
                        </section>
                </>
        )
}

export default Wine
