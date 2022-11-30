const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// meddle ware 
app.use(cors());
app.use(express.json());

console.log(process.env.DB_USER)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qloaa9d.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// console.log(uri);

 function verifyJWT(req,res,next){
    // console.log(req.headers.authorization)
    const authHeader = req.headers.authorization;
    if(!authHeader){
        res.status(401).send({message: 'unAuthorized Access'})
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, function(err,decoded){
        if(err){
            res.status(403).send({message: 'unAuthorized Access'})
        }
        req.decoded = decoded;
        next();
    })
 }

async function run(){

    try{
        const serviceCollection = client.db('dreamWedding').collection('services');
        const reviewCollection = client.db('dreamWedding').collection('reviews');

            app.get('/services', async (req,res)=>{
                const query = {}
                const cursor = serviceCollection.find(query)
                const services = await cursor.limit(3).toArray();
                res.send(services)
            })
 
            app.get('/allServices', async (req,res)=>{
                const query = {}
                const cursor = serviceCollection.find(query)
                const services = await cursor.toArray();
                res.send(services)
            })
            app.get('/servicesDetails/:id',async (req,res)=> {
                const id = req.params.id;
                const query = {_id: ObjectId(id)}
                const details = await serviceCollection.findOne(query)
                res.send(details)
            })

        
            app.post('/reviews', async (req,res) =>{
                const review = req.body;
                const result = await reviewCollection.insertOne(review);
                res.send(result)
            })

            app.get('/reviews/', verifyJWT, async(req,res) =>{
                const decoded = req.decoded;
                if(decoded.email !== req.query.email){
                    res.status(403).send({message: 'unAuthorized Access'})
                }
                let  query ={}
                if(req.query.email){
                    query ={
                        email:req.query.email
                    }
                }
                const cursor = reviewCollection.find(query)
                const result = await cursor.toArray();
                res.send(result)
                // console.log(result);

            })
            
            app.get('/serviceIdReviews/',async (req,res)=>{
                let query = {}
                if(req.query.service_id){
                    query = {
                       service_id:req.query.service_id
                    }
                }
                const cursor = reviewCollection.find(query)
                const result = await cursor.toArray();
                res.send(result)

            })


            app.delete('/reviews/:id',async (req,res)=>{
                const id = req.params.id;
                const query = {_id: ObjectId(id)}
                const result = await reviewCollection.deleteOne(query);
                res.send(result)

            })

            app.post('/jwt',(req,res) =>{
                const user = req.body;
                const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn: "1d"})
                res.send({token})
                
            })


    }

    finally{

    }


}
run().catch(err => console.error(err))



app.get('/',(req,res) =>{
    res.send('Dream Wedding server is running')
})
app.listen(port,() =>{
    console.log(`Dream Wedding server running on ${port}`);
})