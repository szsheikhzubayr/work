function findAgar(arr)
{
  var i;
  var agar = "agar"
  var result = new Array();
  var j;


for(j=0; j<agar.length; j++)
{
 
    for(i =0; i<arr.length; i++)
    {
     
      if(agar.charAt(j).toLowerCase() == arr.charAt(i).toLowerCase() && !result.includes(i))
      {
  
        result.push(i);
        break;
        
      }
    }
} 
 
 return result.toString();
}
var locations = "";
locations = findAgar("ragnarok");
console.log(locations);
