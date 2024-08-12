import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import { Link } from 'react-router-dom'
import Devmessage from './components/devmessage';

function ShopPage() {
    return (
      <div>
        <Header />
          <Devmessage />
        <Footer />
      </div>
    );
  }

export default ShopPage;