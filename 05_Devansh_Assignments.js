/*05 Devansh Buddhbhatti */

//----------------1 - Watrmup-----------------
///sleepIn

function sleepIn(weekday, vacation){
  return weekday == true && vacation == false ? false:true;
   
}

//monkeyTrouble

function monkeyTrouble(aSmile, bSmile){
  return aSmile == true && bSmile == false || aSmile == false && bSmile == true? false:true;
  
  /*
  if (aSmile == true && bSmile == false || aSmile == false && bSmile == true)
    return false; //here check that are both smiling or not! if one of them is not smiling then it gives false. 
  else 
    return true; // here check that either are both smiling or niether nor!
  */
}

//diff21

function diff21(n){
 if(n<21)
   return 21-n;
 else
   s = n-21;
  return s*2;
}  

//parrotTrouble

function parrotTrouble(talking, hour){
  if(talking == true && hour<7 || talking == true && hour>20)
    return true;
  else
    return false;
  
}


//makes10

function makes10(a, b){
  sum = a + b;i=1;
  st1 = a.toString();
  st2 = b.toString()
  if (st1.includes(i) || st2.includes(i))
    return true;
  else if (sum == 10)
    return true;
  else 
    return false;
  
 }

 //nearHundred  

 function nearHundred(n){
  if(90<=n && n<=110)
    return true;
  else if(190<=n && n<=210)
    return true;
  else 
    return false;
}

//posNeg

function posNeg(a, b, negative){
  if(a<0 || b<0)
    return true;
  else if (a>0 && b>0 || a<0 && b<0)
    return negative;  
}

//notString

function notString(str){
  a = "not ";
  return a+str;
}

//icyHot

function icyHot(temp1, temp2){
   return temp1<0 && temp2>100 || temp1>100 && temp2<0 ? true:false;
  
}

//notString
function notString(str){
  a = "not ";
  if(str.includes("not")!= true || str.includes(" not") == true)
  return a+str;
  if(str.indexOf("not",1)))
    return str;
}

//---------------String------------------

//helloName
function helloName(name){
  return "Hello " + name + "!";
  
}

//makeAbba
function makeAbba(a, b){
  return a + b + b + a;
  
}

//makeTags
function makeTags(tag, word){
  return "<" +tag+ ">" + word + "</" +tag+ ">";
  
}

//makeOutWord

function makeOutWord(out, word){
  return out.substring(0,2) + word + out.substring(2,4);

}

//extraEnd

function extraEnd(str){
  var len=str.length();
  if (len < 2)
    return str;
  else
    return str.substring(0,2); 
  
}

//firstTwo

function firstTwo(str){
  if(str.length() <= 1){
    return str;
  }
  return str.substring(0,2); 
}

//firstHalf
function firstHalf(str){
  return str.substring(0, str.length()/2);
}

//withoutEnd
function withoutEnd(str){
  return str.substring(1, str.length()-1);
}

//comboString
function comboString(a, b){
  if(a.length() > b.length()){
    return b + a + b;
  }
  return a + b + a;
}