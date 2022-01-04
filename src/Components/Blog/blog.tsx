import Navbar from "../Navbar/navbar";
import './blog.scss';
import JsonData from './MOCK_DATA.json';
import ReactPaginate from "react-paginate";
import React, { useState } from "react";

function Blog() {
    const [users] = useState(JsonData.slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 4;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map(user => {
        return(
                <div className="blog_post">
                    <h3>{user.id}</h3>
                    <h3>{user.title}</h3>
                    <h3>{user.description}</h3>
                </div>
            );
    })

    const pageCount = Math.ceil(users.length / usersPerPage);
    
    const changePage = ({ selected }:any) => {
        setPageNumber(selected);
    };

    return(
        <div className="blog">
        <Navbar />
        <div className="blog_posts">
        {displayUsers}
        </div>
        <ReactPaginate 
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
        />
        </div>
    );
}

export default Blog;