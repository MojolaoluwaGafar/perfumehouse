import React from 'react'
import Header from '../components/Header';
import AllPerfumes from '../components/AllPerfumes';
import Cart from '../components/Cart';



const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-8">
            <AllPerfumes />
          </div>
          <div className="col-lg-3">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage