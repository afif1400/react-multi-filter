import React  from 'react';
import './App.css';
import {Card, CardTitle, CardBody, CardImg, CardImgOverlay, CardText} from 'reactstrap';
import star from './star.png';

function RenderProducts({product}){
    return(
        <Card key={product.id} className="proc">
            <CardImg className="image" src={product.image} alt={product.name} />  
            <CardImgOverlay>
            <CardTitle className="title">{product.name}</CardTitle>
            
            <CardBody>
                <CardText className="textbody">{product.price}</CardText>
                <CardText style={{paddingBottom:"2px"}} className="textbody">{product.rating}<span ><img style={{width:"15%"}} src={star} alt="star"/></span></CardText>
            </CardBody>
            </CardImgOverlay>
        </Card>
    );
}

class MyApp extends React.Component {

  constructor() {
    super();
    this.state = {
      filterName: "",
      filterPrice: "",
      filterCategory:"",
      filterRating: "",
      products: [
        {id: 1, name: "OnePlus 7T", category:"phone", price: "40000", image:'/assets/images/android.png', rating:"4"},
        {id: 2, name: "Note 10-plus", category:"phone", price: "80000", image:'/assets/images/android.png', rating:"5" },
        {id: 3, name: "Sony TV",category:"tv", price: "60000", image:'/assets/images/tv.png',rating:"5"},
        {id: 4, name: "Smart Watch",category:"tv",  price: "42000", image:'/assets/images/smart_watch.png',rating:"5"},
        {id: 5, name: "Razor", category:"laptop", price: "70000", image:'/assets/images/laptop.png',rating:"5"},
        {id: 1, name: "Iphone 11-pro", category:"phone", price: "90000", image:'/assets/images/android.png',rating:"4"},
        {id: 2, name: "Redmi Note-9", category:"phone", price: "15000", image:'/assets/images/android.png', rating:"4"},
        {id: 3, name: "LG smart",category:"tv", price: "65000", image:'/assets/images/tv.png',rating:"5"},
        {id: 4, name: "Smart Watch",category:"tv",  price: "42000", image:'/assets/images/smart_watch.png',rating:"4"},
        {id: 5, name: "HP Pavilion", category:"laptop", price: "52000", image:'/assets/images/laptop.png',rating:"3"},
      ]
    };
  }
  
   
  changeFilterCategory = (e) => {
    this.setState({filterCategory:e.target.value})
  }
  
  changeFilterName = (e) => {
    this.setState({filterName: e.target.value});
  }
  
  changefilterPrice = (e) => {
    this.setState({filterPrice: e.target.value});
  }
  changefilterRating = (e) => {
    this.setState({filterRating: e.target.value});
  }
  
  render() {
    let products = this.state.products.slice();
    if(this.state.filterCategory){
      products = products.filter(item => item.category.toLowerCase().trim() === this.state.filterCategory.toLowerCase());
    }

    if(this.state.filterName) {
      products = products.filter(item => item.name.toLowerCase().trim() === this.state.filterName.toLowerCase());
    }
    if(this.state.filterPrice) {
      products = products.filter(item => item.price.toLowerCase().trim() === this.state.filterPrice.toLowerCase());
    }
    if(this.state.filterRating){
      products = products.filter(item => item.rating <= this.state.filterRating);
    }
    return(
    <div className="container">
      <div className="filters">
        <label for="name">Name:
        <input id="name" onChange={this.changeFilterName} value={this.state.filterName} />
        </label>
        <br/>
        <label for="price">price: 
        <input id="price" onChange={this.changefilterPrice} value={this.state.filterPrice} />
        </label>
        <br/>
        <label for="category">category: 
        <input id="price" onChange={this.changeFilterCategory} value={this.state.filterCategory} />
        </label>
        <br/>
        <label for="rating">Rating: 
        <input id="rating" onChange={this.changefilterRating} value={this.state.filterRating} />
        </label>

        </div>
        
      
        <div className="products">
            {products.map(item => <RenderProducts product={item}/>)}
        </div>
    </div>  
    );
  }
}

export default MyApp;
