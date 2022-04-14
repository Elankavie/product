import React from 'react';
import react from 'react';
import ProductService from '../services/ProductService';
class ProductComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
        ProductService.getProducts().then((response) =>{
            this.setState({users: response.data})
        });
    }


    render(){
        return (
            <div>
                <div className = "name"><h1>my shopping</h1></div>
                <div style={{ backgroundImage: `url(https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-2-5d-notebook-gold-online-store-image_16938.jpg)`,
                           backgroundSize:'cover',
                           height:'10000px'}}>
                <h1>PRODUCTS</h1>
                
            
                
                   
                    
                        {
                            this.state.users.map(
                                user =>
                                <ul key = {user.productId}>
                                    <img className = "left" src= {user.color} style={{width: "300px"}}/>
                                    <li>productid: {user.productId}</li>
                                    
                                    <li>product price {user.price}</li> 
                                    
                                    <li>dimensions {user.dimension}</li>
                                    <li> specifications{user.specification}</li>
                                    <li>manufacturer {user.manufacturer}</li>
                                    <li>quantity {user.quantity}</li>
                                    <li> <button className = "right" onClick="myFunction()">ADD TO CART</button></li>

                            
                                    <hr></hr>
                                    <hr></hr>
                                    
                                    </ul>
                                    

                            )
                            
                            
                        }
                        <hr></hr>
                    
                    



            </div>
            </div>
        )
    }
}
export default ProductComponent