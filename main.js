function reverse(str){
  if(!str|| str.length<2 || typeof str != 'string'){
    Console.log("Thats not a right input!")
  } 
  else{
    const backwards = [];//var1
    const length = str.length-1;//var2

    for(i=length; i>=0; i--){
      backwards.push(str[i]);
    }
    return backwards.join('');
  }  
}
reverse('Finally I did something!!');