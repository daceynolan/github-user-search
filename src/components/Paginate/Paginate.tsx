import React from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";

type Props = Omit<
  ReactPaginateProps,
  | "activeClassName"
  | "breakLabel"
  | "containerClassName"
  | "marginPagesDisplayed"
  | "nextClassName"
  | "nextLabel"
  | "nextLinkClassName"
  | "pageClassName"
  | "pageLinkClassName"
  | "pageRangeDisplayed"
  | "previousClassName"
  | "previousLabel"
  | "previousLinkClassName"
>;

const Paginate: React.FunctionComponent<Props> = ({
  onPageChange,
  ...props
}) => {
  return (
    <ReactPaginate
      activeClassName="hover:text-white text-white bg-teal-500"
      breakLabel="..."
      containerClassName="flex items-center shadow-md p-3 text-gray-700 rounded-lg bg-white"
      marginPagesDisplayed={2}
      nextClassName="rounded-lg"
      nextLabel={<i className="fas fa-angle-right" />}
      nextLinkClassName="block rounded-lg py-1 w-8 text-center hover:text-teal-500 text-sm focus:outline-none focus:shadow-outline"
      onPageChange={onPageChange}
      pageClassName="rounded-lg hover:text-teal-400"
      pageLinkClassName="block rounded-lg py-1 w-8 text-center text-sm focus:outline-none focus:shadow-outline "
      pageRangeDisplayed={3}
      previousClassName="rounded-lg"
      previousLabel={<i className="fas fa-angle-left" />}
      previousLinkClassName="block rounded-lg py-1 w-8 text-center hover:text-teal-500 text-sm focus:outline-none focus:shadow-outline"
      {...props}
    />
  );
};

export default Paginate;
