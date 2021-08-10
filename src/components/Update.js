import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFech from './useFech';

const Update = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('faculty');

    const { id } = useParams();
    const { data: blog, error, isPending } = useFech(`http://localhost:8000/blogs/` + id);
    const history = useHistory();

    const handleUpdate = (e) => {
        e.preventDefault();



        fetch(`http://localhost:8000/blogs/` + id, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ title, body, author })
        }).then(() => {
            history.push('/');
        })
    }




    return (
        <div className='update'>

            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <form
                    onSubmit={handleUpdate}
                >
                    <label>Blog title:</label>
                    <input key={blog.title}
                        defaultValue={blog.title}
                        onChange={(e) => { setTitle(e.target.value) }} />

                    <label>Blog body:</label>
                    <textarea rows="4" cols="50"
                        type="text"
                        defaultValue={blog.body}
                        onChange={(e) => { setBody(e.target.value) }} >
                    </textarea>

                    <label>Blog author:</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value='faculty'>faculty</option>
                        <option value='student'>student</option>
                    </select>
                    <button>Save</button>
                </form>
            )}


        </div>
    );
}

export default Update;