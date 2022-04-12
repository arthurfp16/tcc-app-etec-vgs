import Link from 'next/link'
import { ChangePageButtonStyle } from '../styles/ChangePageButtonStyle'

export const ChangePageButton = ({ href, text }) => {
    return (
        <Link href={ href || '/' } passHref>
            <ChangePageButtonStyle>{ text || 'Home' }</ChangePageButtonStyle>
        </Link>
    )
}