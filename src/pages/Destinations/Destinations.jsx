import React, { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { DestinationItem } from "./DestinationItem";
import { listDestinations } from "./dataDestinations";
import "./Destinations.scss";
import { Select } from "antd";

import { BiCategory } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const categoryDestinations = (listDestinations, nameList) => {
  const listCate = listDestinations.map((item) => item[nameList]);

  const uniqueCate = [...new Set(listCate)];

  return uniqueCate.map((cate) => ({
    value: cate,
    label: cate,
  }));
};

console.log();

function Destinations({ currentItems, onPageChange, pageCount }) {
  const categories = categoryDestinations(listDestinations, "category");
  const locations = categoryDestinations(listDestinations, "location");
  const listRatings = [
    { value: "< 4.0", label: "< 4.0" },
    { value: "4.0 - 4.5", label: "4.0 - 4.5" },
    { value: "> 4.5", label: "> 4.5" },
  ];

  const [filters, setFilters] = useState({
    category: '',
    location: '',
    rating: ''
  });

  const [filteredDestinations, setFilteredDestinations] = useState(listDestinations);

  const handleFilterChange = (value, filterType) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  const handleSearch = () => {
    const {category, location, rating} = filters;
    const filtered = listDestinations.filter(destination => {
      const matchsCatgory = category ? destination.category.toLowerCase().includes(category.toLowerCase()) : true;
      const matchsLocation = location ? destination.location.toLowerCase().includes(location.toLowerCase()) : true;
      const matchsRating = rating ? {
        "< 4.0": destination.rating < 4.0,
        "4.0 - 4.5": destination.rating >= 4.0 && destination.rating <= 4.5,
        "> 4.5": destination.rating > 4.5
      }[rating] : true;

      return matchsCatgory && matchsLocation && matchsRating;

      setFilteredDestinations(filtered);
    })
  }

  return (
    <div className="destinations">
      <div className="container">
        <div className="filter-container">
          <Select
            showSearch
            placeholder="Category"
            optionFilterProp="label"
            className="category select"
            onChange={(value) => handleFilterChange(value, 'category')}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={categories}
          ></Select>
          <Select
            showSearch
            placeholder="Rating"
            optionFilterProp="label"
            className="rating select"
            onChange={(value) => handleFilterChange(value, 'rating')}
            options={listRatings}
          ></Select>
          <Select
            showSearch
            placeholder="Location"
            optionFilterProp="label"
            className="location select"
            onChange={(value) => handleFilterChange(value, 'location')}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={locations}
          ></Select>
          <button type="submit" onClick={handleSearch}>
            <IoSearch />
            Search
          </button>
        </div>
        {/* <ul className="list-location grid">
          {filteredDestinations.map((item) => (
            <DestinationItem
              key={item.id}
              img={item.thumbnail}
              name={item.name}
              location={item.location}
              rating={item.rating}
            />
          ))}
        </ul> */}
        <ul className="list-location grid">
          {currentItems.map((item) => (
            <DestinationItem
              key={item.id}
              id={item.id}
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
