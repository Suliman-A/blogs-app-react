import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blogIndex) => (
                <div className='blog-preview' key={blogIndex.id}>
                    <Link to={`/blogs/${blogIndex.id}`}>
                        <h2>{blogIndex.title}</h2>
                        <p>Written by {blogIndex.author}</p>
                    </Link>

                </div>
            ))}
        </div>
    );
}

export default BlogList;

