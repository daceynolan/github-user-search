import React from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({ onPageChange, ...props }) => {
  return (
    <ReactPaginate
      activeClassName="hover:text-white text-white bg-primary-500"
      breakLabel="..."
      containerClassName="flex items-center shadow-md p-3 text-gray-700 rounded-lg bg-white"
      marginPagesDisplayed={2}
      nextClassName="rounded-lg"
      nextLabel={<i className="fas fa-angle-right" />}
      nextLinkClassName="block rounded-lg py-1 w-8 text-center hover:text-primary-500 text-sm focus:outline-none focus:shadow-outline"
      onPageChange={onPageChange}
      pageClassName="rounded-lg hover:text-primary-500"
      pageLinkClassName="block rounded-lg py-1 w-8 text-center text-sm focus:outline-none focus:shadow-outline "
      pageRangeDisplayed={5}
      previousClassName="rounded-lg"
      previousLabel={<i className="fas fa-angle-left" />}
      previousLinkClassName="block rounded-lg py-1 w-8 text-center hover:text-primary-500 text-sm focus:outline-none focus:shadow-outline"
      {...props}
    />
  );
};

export default Paginate;
