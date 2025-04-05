import { whiskeyImages } from '@/api/global'
import Image from 'next/image'

const Product = async ({ params }: { params: Promise<{ id: number }> }) => {
        const { id } = await params
        return <Image src={whiskeyImages[id]} alt='image' width={40} height={180} />
}

export default Product
