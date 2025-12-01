function removeDuplicates(nums) {
    var counter = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[counter] !== nums[i]) {
            nums[counter + 1] = nums[i];
            counter++;
        }
    }
    return counter + 1;
}
;
var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
