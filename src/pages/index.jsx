import { PostCard } from "../components/PostCard"
const date = new Date()
const Home = () => {   
    return(
        <PostCard title="Title" time={date.toLocaleDateString()}>Batata</PostCard> 
    )
}

export default Home