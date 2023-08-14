const axios = require('axios')

export function HelloWord(params) {
    return new Promise(function(resolve,reject){
        let source = 'http://127.0.0.1:8000/alert/'
        axios.get(source,{params:params})
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
    })
}

export function AddMessage(params) {
    return new Promise(function(resolve,reject){
        let source = 'http://127.0.0.1:8000/alert/add_message'
        axios.post(source,params)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
    })
}

export function GetMessage(params) {
    return new Promise(function(resolve,reject){
        let source = 'http://127.0.0.1:8000/alert/get_message'
        axios.get(source,{params:params})
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
    })
}