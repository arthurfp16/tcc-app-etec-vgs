import { PostCardContent, PostCardTitle, PostCardText, PostCardTime, PostCardImage  } from '../styles/PostCardStyle'
import image from "../img/img1.png"

export const PostCard = ({ img, title, time, author, children } ) => {
    return (
        <PostCardContent>
        <PostCardImage src={image} />
        <PostCardTitle>{title}</PostCardTitle>
        <PostCardText>{children}</PostCardText>
        <PostCardTime dateTime={time.replaceAll('/', '-')} >{time}</PostCardTime>
        </PostCardContent>
    )
}