function getMiddle(s)
{
if (s.length > 0) { 
  if (s.length % 2 == 1) {
	//odd
 return s.charAt(Math.trunc(s.length/2));
}
else {
 //even	
   return s.substr(s.length/2 - 1,2);
}
}
else
 { 
   return "";
 }
}
