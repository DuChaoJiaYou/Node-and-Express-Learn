// const express = require('express')

// const app = express()

// app.get('/',(e,req,res,next)=>{
//     res.send('Hello DuChao')
// })

// // app.listen(8000,()=>{
// //     var host = server.address().address;
// //     var port = server.address().port
// //     console.log('http://%s:%s',host,port);
// // })

// var server  = app.listen(8000,()=>{
//     var host = server.address().address
//     var port = server.address().port
//     console.log('http://%s:%s',host,port);
// })
const bodyParser = require('body-parser');
var express = require('express');
const redis = require('redis')

const db = redis.createClient(6379,'127.0.0.1')

// import express from 'express';
var app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/', function (req, res) {
   res.send('主页GET 请求');
})
app.get('/abc',(req,res)=>{
  res.json({a:1})
})

app.get('/user/:id',(req,res)=>{
  console.log(req.params.id);
  
  db.HGETALL(req.params.id,(err,reply)=>{
      console.log(reply)
      res.send(reply)
  })
  // console.log(name);
  // res.send('所请求的name为:'+name)
  
})

app.post('/user',(req,res)=>{
  const {id,name,color} = req.body
  console.log(id,name,color);
  // db.set('name',name)
  // db.set('color',color)
  db.HMSET(id,'name',name,'color',color)
  
})









var server = app.listen(8000, function () {
 
  var host = server.address()
  var port = server.address().port
 
  console.log(host, port)
 
})