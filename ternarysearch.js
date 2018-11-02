let a = [1,2,3,4,5,6,7];
 
 let l =0;
 let h = a.length-1;
 let k =800;
search(l,h,a,k);
function search(l,h,a,key){
  
        console.log('arraylength'+ a.length);
       
       if(a.length==1){
         if(a[0] == key ){
           console.log('key found in length condition');
         return;
         }else{
         console.log('key not found found');
         return;
       }
       } 
   else{
     console.log('array is empty. you cant search');
     return ;
   }
  let mid1 = Math.floor(l + (h-l)/3);
        let mid2 = Math.floor(h -  (h-l)/3);
  
       
      console.log(`mid1 ${mid1} mid2 ${mid2}`);
   if(k== a[mid1] || k == a[mid2]){
     console.log('key found from base condition');
     return; 
   }
   if(k < a[mid1]){
     console.log('key < mid1');
     let ar = a.splice(l, mid1);
     console.log(ar);
     console.log();
     search(0,ar.length-1,ar,k);
   } else if(k > a[mid2]){
     console.log('key > mid2');
     let ar = a.splice(mid2+1, h);
     console.log(ar);
     console.log();
     search(0,ar.length-1,ar,k);
   } else{
     console.log(`key is in between mid1 and mid2`);
   }
  
  
  
  
}
