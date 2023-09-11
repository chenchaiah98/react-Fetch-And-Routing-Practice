// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount = () => {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const blogData = data.map(each => ({
      id: each.id,
      title: each.title,
      author: each.author,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
      topic: each.topic,
    }))

    this.setState({blogList: blogData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <ul className="list">
            {blogList.map(e => (
              <li key={e.id}>
                <BlogItem eachBlog={e} />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
