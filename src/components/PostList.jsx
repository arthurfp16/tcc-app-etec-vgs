import React from "react"

export function PostList({ posts }) {
    return (
        <ul>
            {posts.map((post) => { return (<h1 key={post.id}>{post.text}</h1>) })}
        </ul>
    )
}
