
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const nodemailer = require("nodemailer");



// middleware 
app.use(express.json());
app.use(cors());








const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r486pno.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});


async function run() {
  try {
    const usersCollection = client.db("portfolioDB").collection('uses');
    const projectCollection = client.db("portfolioDB").collection('projects');

    

app.get('/', (req, res) => {
    res.send('portfolio!')
  })



  try {
    app.post('/api/v1/sendEmail',async(req,res)=>{

        
      const  {email,subject,message} = req.body;

      console.log(email)
      

      
       const mailOption = {

         from: process.env.SMTP_MAIL,
         to:process.env.TO_EMAIL,
         subject:subject,
         text: `from: ${email}`,
         html: ` <bold>From:</bold>${email}<br></br> <bold>subject:</bold> ${subject} <br></br> <bold>Message:${message}</bold>`
       }



       transporter.sendMail(mailOption,(err,info)=>{

         if(err){
          console.log('error',err)
         }
         console.log('success',info)

         res.send(info)
       })

   })

  } catch (error) {
    
    console.log('error',error)
  }


// create account 


 app.post('/api/v1/users',async(req,res)=>{

   const users = req.body;

   console.log('users',users)

    const isExist = usersCollection.findOne(users.email)

     if(isExist){

       return  res.send({message:'already exist'})

     }

   const result = await usersCollection.insertOne(users)

    console.log(result)

    res.send(result)

 })



//  get users  role 

app.post('/api/v1/user',async(req,res)=>{

  
  const email = req.body;

  

   const result  = await usersCollection.findOne(email);


    
    res.send(result)


})





//  projects


app.post('/api/v1/createProject',async(req,res)=>{

   const  projects = req.body;

   const result = await projectCollection.insertOne(projects);

   console.log(result)

   res.send(result)
})


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
 
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})