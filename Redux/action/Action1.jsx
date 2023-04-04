export function Increment(nums){
    return {
        type : "INCREMENT",
        data : nums

    }
}
export function Decrement(nums){
    return {
        type : "DECREMENT",
        data : nums
    }
}