import React,{useState} from "react";
import "../Css/AddProduct.css";
import Button from 'react-bootstrap/Button';
import axios from "axios";

const AddProduct = () => {

    const [productid,setProductId] = useState();
    const [title,setTitle] = useState("");
    const [des,setDes] = useState("");
    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);
    const [quantity,setQuantity] = useState(0);
    const [category,setCategory] = useState();
    const [brand,setBrand] = useState();
    const [isize,setSize] = useState();
    const [imageurl,setImageURL] = useState("");


    const handleSubmit = async (e) => {
        // console.log(file);
        // let formData = new FormData();

        // formData.append('image')
        console.log(productid,title,des,price,discount,quantity,imageurl);
        e.preventDefault()
        try {
            await axios.post('http://localhost:4000/api/products', {productid,title,des,price,discount,quantity,imageurl})
            .then(res=>{
                console.log(res.data)
                console.log(res.data.data._id)
                localStorage.setItem("pid",res.data.data._id);
            })     
        } catch (err) {
            alert(err.response)
            console.log("Error")
        }
    }

    return(
        <div className="addproduct">
        <h2>Welcome to the Admin Page :)</h2>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <p>ID:</p><input type="text" required value={productid} onChange={(e)=>setProductId(e.target.value)}/>
            <p>Title:</p><input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <p>Description:</p><input type="text" required value={des} onChange={(e)=>setDes(e.target.value)}/>
            <p>Price:</p><input type="number" required value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <p>Discount(%):</p><input type="number" defaultValue="0" value={discount} onChange={(e)=>setDiscount(e.target.value)}/>
            <p>Quantity:</p><input type="text" required value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
            <p>Category:</p> <select id="category" name="category" required defaultValue="none">
            <option value="None">None</option>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="kids">kids</option>
            <option value="traditional">traditional</option>
            </select>
            <p>Brand:</p> <select id="brand" name="brand" required defaultValue="none">
            <option value="None">None</option>
            <option value="champion">champion</option>
            <option value="levis">levis</option>
            <option value="chanel">chanel</option>
            <option value="allen solly">allen solly</option>
            <option value="blossom">blossom</option>
            <option value="versace">versace</option>
            <option value="gap">gap</option>
            <option value="zara">zara</option>
            </select>
            <p>Size:</p> <select id="size" name="size" required defaultValue="none">
            <option value="None">None</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            </select>
            <p>Image Url:</p><input type="text" value={imageurl} onChange={(e)=>{setImageURL(e.target.value)}}/>
            <p></p>
            <Button variant="dark" type="submit">Add</Button>
        </form>
        </div>
    );
}

export default AddProduct;