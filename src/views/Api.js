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