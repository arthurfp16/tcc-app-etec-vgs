import Image from "next/image"
import { PostCardContent, PostCardText, PostCardTime, PostCardTitle, PostCardAuthor, CardFooter } from '../styles/components/postCardStyle'
import Link from 'next/link'

export const PostCard = ({ linkHref = './', imgSrc, imgAlt, title, time, author, children, highlighted = null }) => {
    return (
        <Link href={linkHref}>
            <PostCardContent highlighted={highlighted}>
                <Image src={imgSrc} alt={imgAlt} quality='100' height='136' />
                <div>
                    <PostCardTitle>{title}</PostCardTitle>
                    <PostCardText>{children}</PostCardText>
                    <CardFooter>
                        <PostCardTime dateTime={time.replaceAll('/', '-')} >{time}</PostCardTime>
                        <PostCardAuthor>{author}</PostCardAuthor>
                    </CardFooter>
                </div>
            </PostCardContent>
        </Link>
    )
}