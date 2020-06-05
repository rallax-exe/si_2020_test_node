var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Auto = require('../model/auto');


router.get('/',(req,res,next)=>{
  Auto.find( {} ,(err,datos)=>{
    res.status(200).json(datos);
  });
});

router.get('/:autoId', (req,res,next)=>{

Auto.findOne({'_id':req.params.autoId},(err,datos)=>{
if(datos == null){
  res.status(404).json({"mensaje":"No encontrado"});
}else{
    res.status(200).json(datos);
}

});
});

router.post('/',(req,res,next)=>{
var auto = auto({
  marca:req.body.marca,
  submarca:req.body.submarca,
  modelo:req.body.modelo,
  Color:req.body.Color,
  Foto:req.boy.Foto

});
auto.save((err,datos)=>{
  if(err) res.status(404).json({mensaje:"Error al guardar"});
  else res.status(201).json(datos);
});
});

router.post('/:autoId',(req,res,next)=>{
res.status(404).json({mensaje:"operacion no permitida"});

});

router.delete('/',(req,res,next)=>{

res.status(405).json({mensaje:'Accion no permitida'})
});

router.delete('/autoId',(req,res,next)=>{
Auto.findOneAndDelete({_id:(req.params.autoId)},(err,datos)=>{
  if(err) res.status(404).json(err);
  else res.status(200).json(datos);
});
});

module.exports = router;
