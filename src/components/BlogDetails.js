import { Link, useHistory, useParams } from "react-router-dom";
import useFech from './useFech';

const BlogDetils = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFech('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }


    return (
        <div className='blog-details'>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            <button onClick={handleDelete}>Delete</button>

            <Link to={`/update/${id}`}
                style={{ marginLeft: '8px' }}
            >Update</Link>
        </div>

    );
}

export default BlogDetils;