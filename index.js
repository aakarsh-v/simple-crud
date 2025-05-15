import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js';
import productRoute from './routes/product.route.js';
const app = express();

//Middleware
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded request bodies


//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
  res.send('Hello Duniya!');
});

// //read
// app.get('/api/products', async (req, res) => {    
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// //read
// app.get('/api/products/:id', async (req, res) => {       
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: 'Internal server error' });
//     }
// })

//  //create
// app.post('/api/products', async(req, res)=> {        
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(Product);
//     } catch (error) {
//         res.status(500).json({ message: 'Internal server error' });
//     }
// })

// update
// app.put('/api/products/:id', async(req, res)=> {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if(!product){
//       return res.status(404).json({message: 'Product not found'});
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
    
//   }
// })

//delete
// app.delete('/api/products/:id', async(req, res)=> {
//   try {
//     const {id} = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if(!product) {
//       return res.status(404).json({ message: 'Product not found'});
//     }
//     res.status(200).json({message: 'Product deleted successfully'});
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// })

mongoose.connect('mongodb+srv://aakarshverma001:5lQT3zltltezykEu@backenddb.wqutkly.mongodb.net/?retryWrites=true&w=majority&appName=backendDB')
.then(() => {
  console.log('Connected to MongoDB Atlas');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
})
.catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});