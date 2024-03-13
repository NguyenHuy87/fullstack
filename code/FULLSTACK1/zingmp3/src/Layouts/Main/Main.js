import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RouteCore from "../../Services/Routes/RouteCore";

export default function Main() {
  return <div id='app'>
    <Header />
    <RouteCore />
    <Footer />
  </div>
}
