import Image from "next/image"
import { PostCardContent, PostCardText, PostCardTime, PostCardTitle, PostCardAuthor, CardFooter } from '../styles/PostCardStyle'

export const PostCard = ({ imgSrc, imgAlt, title, time, author, children } ) => {
    return (
        <PostCardContent>
            {/* <Image src={imgSrc} alt={imgAlt} layout='responsive' objectFit="contain" quality={100} sizes='10' width='100' /> */}
            <PostCardTitle>{title}</PostCardTitle>
            <PostCardText>{children}</PostCardText>
            <CardFooter>
                <PostCardTime dateTime={time.replaceAll('/', '-')} >{time}</PostCardTime>
                <PostCardAuthor>Batato bot</PostCardAuthor>
            </CardFooter>
        </PostCardContent>
    )
}