const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { MongoClient, ServerApiVersion } = require('mongodb')
const port = process.env.PORT || 8000
const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(cookieParser())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dnxxphb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

async function run() {
    try {
        const productsCollection = client.db("TechFinder").collection("products");


        app.get('/products', async (req, res) => {
            let name = req.query?.name;
            let sortingOrder = parseInt(req.query?.order);
            let sortingDateOrder = parseInt(req.query?.dateOrder);
            let query = {};
            let options = { sort: {} };
            if (name) {
                name = new RegExp(name, 'i');
                query = { ...query, productName: name };
            }
            if (!isNaN(sortingOrder)) {
                options.sort.price = sortingOrder;
            }

            if (!isNaN(sortingDateOrder)) {
                options.sort.creationDate = sortingDateOrder;
            }
            const result = await productsCollection.find(query, options).toArray();
            res.send(result);
        });
        // await client.db('admin').command({ ping: 1 })
        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!'
        )
    } finally {
        // Ensures that the client will close when you finish/error
    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Hello from TechFinder Server..')
})

app.listen(port, () => {
    console.log(`TechFinder is running on port ${port}`)
})
