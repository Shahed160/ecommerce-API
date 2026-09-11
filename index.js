const express = require('express');
const mongose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const userRouters = require('./routers/userRouters');
const productRouters = require('./routers/productRouter');
const authUserRouters = require('./routers/authUserRouters');
const cartRouter=require('./routers/cartRouter');
const cors=require('cors');


const app = express();
app.use(cors({
    origin:'http://127.0.0.1:5501',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type','Auth']
}));

app.use(bodyParser.json());
app.use('/api', userRouters);
app.use('/api', productRouters);
app.use('/auth', authUserRouters);
app.use('/api', cartRouter);
//  conect mongose
mongose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Database connected');
}).catch((error)=>{
    console.log(error);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})