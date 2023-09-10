// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, title, avatarUrl, imageUrl, topic, author} = eachBlog

  return (
    <Link to={`/blog/${id}`}>
      <div className="blog-container">
        <div className="blog-image">
          <img src={imageUrl} alt="main-img" />
        </div>
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="blog-author-details">
            <div>
              <img className="author-img" src={avatarUrl} alt="user img" />
            </div>
            <div>
              <p>{author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
