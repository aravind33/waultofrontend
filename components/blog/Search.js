import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/blog';

const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });

    const { search, results, searched, message } = values;

    const searchSubmit = e => {
        e.preventDefault();
        listSearch({ search }).then(data => {
            if(data.length==0)
            {
            setValues({ ...values, results: data, searched: true, message: `Oops!Try with different keywords` });
            }
            else{
            setValues({ ...values, results: data, searched: true, message: `${data.length} blogs found for your beautiful interest` });
            }
        });
    };

    const handleChange = e => {
        setValues({ ...values, search: e.target.value, searched: false, results: [] });
    };

    const searchedBlogs = (results = []) => {
        return (
            <div className="jumbotron bg-white" id="blog-result-message">
                {message && <p className="pt-4 text-muted font-italic">{message}</p>}

                {results.map((blog, i) => {
                    return (
                        <div key={i}>
                            <Link href={`/blogs/${blog.slug}`}>
                                <a className="text-primary">{blog.title}</a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
          <div className="buscar-caja">
                        <input type="text" name="" className="buscar-txt" placeholder="Search Blogs" onChange={handleChange}/>
                        <button type="submit" className="buscar-btn">
                            <i className="fas fa-search"></i>
                        </button>
            </div>            
        </form>
    );

    return (
        <div className="container-fluid">
            <div className="pt-3 pb-5">{searchForm()}</div>
            {searched && <div style={{ marginTop: '-120px', marginBottom: '-80px' }}>{searchedBlogs(results)}</div>}
        </div>
    );
};

export default Search;