import express from "express"
import mongoose from "mongoose"
const app = express()
const port = 3000
const connectionUrl = "mongodb+srv://togrul:togrul@firstcluster.udpwqcz.mongodb.net/"

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  image: {type:String, required:true},
  title: {type:String, required:true},
  info: {type:String, required:true},
  price: {type:Number, required:true},
  discount: {type:Number, required:true},
});

const Products = mongoose.model("ColoShop",ProductSchema)

app.get('/', async (req, res) => {
  try {
    const allProducts = await Products.find({})
    res.status(200).send(allProducts)
  } catch (error) {
    res.status(500).send('Server Error!')
  }

})

app.get('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const product = await Products.findById(id)
    res.status(200).send(product)
  } catch (error) {
    res.status(500).send('Server Error!')
  }

})

app.post('/', async (req, res) => {
  try {
    const product = new Products(req.body)
    await product.save()
    res.status(200).send("Product Created!")
  } catch (error) {
    res.status(500).send('Server Error!')
  }

})

app.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const product = await Products.findByIdAndDelete(id)
    res.status(200).send("Product Deleted!")
  } catch (error) {
    res.status(500).send('Server Error!')
  }

})

mongoose.connect(connectionUrl)
  .then(() => console.log('Connected!'))
  .catch((error)=>console.log("Cant Connect To The Database!"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})