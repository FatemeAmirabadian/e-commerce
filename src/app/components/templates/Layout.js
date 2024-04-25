'use client'
import React from "react";
import Header from "../modules/Header";
import Footer from "../modules/Footer";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/slices/searchSlice";
import SmallSizeFooter from "../modules/SmallSizeFooter";

function Layout({ children }) {
  const searchTerm = useSelector((state) => state.search.term);
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearchInputChange={handleSearchInputChange} />
      <div className="min-h-screen">{children}</div>
      <SmallSizeFooter/>
      <Footer />
    </div>
  );
}

export default Layout;