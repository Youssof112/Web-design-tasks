let a = +prompt("please enter a number");


function func_1(num){

    if(isNaN(num)){

        console.log("invalid Input")
        return
    }
        

   else if((num%10)==0){

    return true;
   }
   else return false;

//end of function 1 


}
 console.log(func_1(a))



arr=[11,3,53,20,24]

function func_2(arr){   
let result = arr[0]
arr.forEach((element,index) => {
    
if(isNaN(arr[index])){

    console.log("invalid Input")
       return
}


if(arr[index+1]>result)
    result=arr[index+1];


});
return result;
}

console.log(func_2(arr))

//end of function 2 

arr1=['hello',21,'hi',23,true,1]

function func_3(arr){
let arr2=[];
for(let i =(arr.length-1);i>=0;i--){

arr2.push(arr[i]);


}

return arr2

}


console.log(func_3(arr1))

//end of function 3 