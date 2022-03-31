
import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      products: data.products,
      size: "",
      sort:"",
    };
  }
    render(){

  return (
    <div className="grid-container">
     <header>
       < a href="/">React Shopping Cart</a>
     </header>
     <main>
       <div className="content">
         <div className="main">
           <Filter count={this.state.products.length}>
             
           </Filter>
        <Products products={this.state.products}>

        </Products>
         </div>
         <div className="siderbar">
        Cart items
      
         </div>
       </div>
     </main>
     <footer>
       All rights reversed
     </footer>
    </div>
  );
  }
}

export default App;
