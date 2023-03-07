import React from 'react'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    //initially we keep empty as pageNumber, upon calculation we can add it
    let pageNumber = [];

    //totalPost consist of posts.length that is 100
    //postPerPage consist of 10
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i); // pushing numbers 1 to 10 as a pagination
    }
    return (
        <nav>
            <ul className='pagination' style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    pageNumber && pageNumber.map(number => (
                        <li key={number} className='page-item'>
                            <a onClick={() => paginate(number)} href="!#" className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination