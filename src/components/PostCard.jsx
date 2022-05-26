import Image from "next/image"
import { PostCardContent, PostCardText, PostCardTime, PostCardTitle, PostCardAuthor, CardFooter } from '../styles/components/postCardStyle'
import Link from 'next/link'

export const PostCard = ({ href = './', imgSrc, imgAlt, title, time, author, children, highlighted = null }) => {
    const dateTime = new Date(time)
    const dateTimeFormat = dateTime.toLocaleDateString()
    return (
        <Link href={href}>
            <PostCardContent highlighted={highlighted}>
                <Image src={imgSrc} alt={imgAlt} quality='100' height='136' />
                <div>
                    <PostCardTitle>{title}</PostCardTitle>
                    <PostCardText>{children}</PostCardText>
                    <CardFooter>
                        <PostCardTime dateTime={dateTime} imgAlt='simbulo relogio'>{dateTimeFormat}</PostCardTime>
                        <PostCardAuthor imgAlt='simbolo pessoa' >{String(author).toLowerCase()}</PostCardAuthor>
                    </CardFooter>
                </div>
            </PostCardContent>
        </Link>
    )
}