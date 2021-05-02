/**1-write a function called "isEven" that takes a number as a parameter 
**and returns true if the number is even and false otherwise */
function isEven(number=1){
    return (number%2==0);
      
    }
    
    ////////////////////////////////////end////////////////////////////////
    
    
    
    
    /* 2- write a function called "getOdd" that takes an array of numbers as a parameter and returns an array containing the odd numbers only.
     you must use the "isEven" function above.
    
    */
    
    function getOdd(odd=[1,2,3,4,5,6]){
       let result=[];
       for(i=0; i<odd.length;i++){
    
            if(isEven(odd[i]) ) continue;
    
            result.push(odd[i]);
        }
    
        return result ;
    }
    
    
    ///****************************************/end**************************************///
    
    
    
    
    /**  
     3. write a function called "getMax" that takes an array of numbers as a parameter and returns the largest number.
    **/
    function getMax(numbers=[1,2,33,4,5,66]){
    
        let largest=0;
    
        for(i=0;i<numbers.length;i++){
            if(numbers[i]>largest){
              largest=numbers[i];
            }
        }
        return largest ;
    }
    
    
    /* *****************************************end********************************************* */
    
    
    
    
    
    
    /* 4- write a function called "stringContains" that takes two strings as parameters 
    and returns true if the first string contains the second, and false otherwise.*/
    
    function stringContains(str1="bashaar and  marwan", str2="marwan"){
    
    return (str1.indexOf(str2)!=-1);    
    }
    
    
    /**
     * *****************************************end*************************************
    */
    
    
    
    
    ///5- write a function called "capitalizeWords" that takes a string as a parameter and capitalizes each word.
function capitalizeWords(str="my name is marwan"){
  
        str = str.split(" ");    
        for (var i = 0;i < str.length; i++) {
           
                str[i]= str[i][0].toUpperCase()+str[i].substr(1);
            
        }
        return str.join(" ");
}  

    // * *****************************************end***********************************
    
    
    
    
    
    ///6-  write a function called "arrayContains" that takes two arrays as parameters 
    //     and returns true if the first array contains the second, and false otherwise.
    
    function arrayContains(arr1=[1,"m",0,-1,5] , arr2=["m",1,8,7]){
        
        for(i=0;i<arr2.length;i++){
    
            if(!arr1.includes(arr2[i])) {
             return false ;
            }
    
        }
     return true ;
    }
    
    // * *****************************************end**********************************************
    
    
    
    
    
    /**7. write a fnuction called "getSequence" that takes a number as a parameter 
     * and returns an array containing the numbers from 0 to that number.
     *  (e.g. getSequence(5) will return [0, 1, 2, 3, 4, 5], getSequence(0) will return [0], getSequence(-2) will return [0, -1, -2]). */
    
    function getSequence(seq=-5){
        let arraySeq=[];
     if(seq>=0){
    
           for(i=0;i<=seq;i++){
               arraySeq.push(i);
            }
    
        } else{
              for(i=0;i>=seq;i--){
               arraySeq.push(i);
               }
           }
    
        
     return arraySeq ;
    }
    
    // * *****************************************end***********
    
    
    
    
    // 8-write a function called "getSlug" that takes a string as input and generates a slug 
    //(i.e. changes all uppercase letters into lowercase and replaces spaces with a dash "-").
    //example: getSlug("I love JS") will return "i-love-js".
    function getSlug(str="HELLO Bashaar Abdul Qaiyume"){
    str=str.split(" ").join("-").toLowerCase();
    return str ;
    }
    
    //////////////////////////end/////////////////////////
    
    
    
    
    
    