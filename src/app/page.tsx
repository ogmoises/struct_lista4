"use client";
import React, {useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";

const Page: React.FC = () => {

  return (
      <div>
        <Header />
        <MainPage/>
        <Footer/>
      </div>
  );
}

export default Page;
