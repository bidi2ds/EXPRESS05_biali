const express = require("express")
const mysql = require("mysql2")

const mysql_config=require('./mysql_config')


//Subir  o servidor
const app=express()
app.listen(3000,()=>{
    console.log ("Servidor WEB em execução")

})

//Criar conexão com o BD
const connection =mysql.createConnection(mysql_config)

//Escrever as rotas
app.get('/',(req,res)=>{
    //criar um obejeto result para todos os endpoinst da api
    let result = {
        status: 'sucesso',
        message: null,
        data: null
    }
})

//executar a conexão
connection.query("SELECT  *  FROM  tasks",(err,results)=>{
    if(err){
        result.status="Erro";
        result.mesage = "Erro na obtenção das tarefas";
        result.data = [];
        res.send(result);
        //res.send(result);
        res.json(results);
    } else{
        result.status="Sucesso";
        result.mesage = "Tarefas obtidas com sucesso";
        result.data =results;
        //res.send(result);
        res.json(results);
    }

})