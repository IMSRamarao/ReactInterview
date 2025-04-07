import React, {useState, useEffect, useMemo} from "react";

const PostSearch = () => {
const [posts, setPosts] = useState([]);
const [searchTerm, setSearchTerm] = useState('')
const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
}, [])

useEffect(() => {
    const handler = setTimeout(() => {
        setDebouncedSearchTerm(searchTerm)
    }, 300)
    return () => clearTimeout(handler)
}, [searchTerm])

const filteredPosts = useMemo(() => {
    return posts.filter(post => 
        post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
}, [debouncedSearchTerm, posts])

return (
    <div>
        <h2>This is search functionality</h2>
        <input 
            type='text'
            value={searchTerm}
            placeholder= 'Search Posts by title.....'
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
            {filteredPosts.map(post => (
                <li key={post.id}><strong>{post.title}</strong>: {post.body}</li>
            ))}
        </ul>
    </div>
)

}

export default PostSearch