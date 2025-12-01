function removeDuplicates(nums: number[]): number {
  
    let counter  = 0
    for(let i = 0 ; i < nums.length ; i++){
       if(nums[counter] !== nums[i]){
         nums[counter+1] = nums[i];
         counter++; 
       }
    }

    return counter+1

    
};


const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))