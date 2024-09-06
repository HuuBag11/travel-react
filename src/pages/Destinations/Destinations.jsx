import React from "react";
import ReactPaginate from "react-paginate";
import { DestinationItem } from "./DestinationItem";
import "./Destinations.scss"

function Destinations({ currentItems, onPageChange, pageCount }) {
    return (
        <div className="destinations">
            <div className="container">
                <ul className="list-location grid">
                    {currentItems.map((item) => (
                        <DestinationItem
                            key={item.id}
                            img={item.thumbnail}
                            name={item.name}
                            location={item.location}
                            rating={item.rating}
                        />
                    ))}
                </ul>
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={onPageChange}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                />
            </div>
        </div>
    );
}

export default Destinations;
