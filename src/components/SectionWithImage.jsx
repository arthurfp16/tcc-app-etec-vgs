import Image from "next/image"
import img1 from '../img/img1.png'

export const SectionWithImage = ({ children }) => {
    return (
        <>
            <Image src={img1} alt='Imagem com uma arvore nativa do cerrado em um ambiente aberto com sol e poucas nuvems' />
            <p>{children}</p>
        </>
    )
}