function RemoveDuplicateData(arr)
{
    return arr.filter((value,index) => arr.indexOf(value) === index);

}
array.sort(function(a,b){return a-b});