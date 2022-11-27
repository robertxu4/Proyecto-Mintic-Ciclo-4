const Componente = require("../models/componentes.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let componente = new Componente({
        componente_id: req.body.componente_id,
        tipo: req.body.tipo,
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        marca: req.body.marca,
    })

    componente.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el componente"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El componente se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Componente.find(function(err, componentes){
        res.json(componentes)
    })
}

exports.findOne = function(req,res){
    Componente.findOne({_id: req.params.id},function(err, componente){
        res.json(componente)
    })
}

exports.update = function(req,res){
    let componente = {
        componente_id: req.body.componente_id,
        tipo: req.body.tipo,
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        marca: req.body.marca,
    }

    Componete.findByIdAndUpdate(req.params.id, {$set: componente}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el componente"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El componente modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Componente.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el componente"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El componente eliminado correctamente"
        res.json(response)
    })
}