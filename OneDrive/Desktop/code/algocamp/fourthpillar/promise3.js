function createPromise(){
    return new Promise (function execute(resolve,reject){
        let x=setTimeout(function giveValue(){
            return 2;

        },3000);
        if(x%2==0){
            resolve("successfull");
        }
        else{
            reject("rejected");
        }
    })
}