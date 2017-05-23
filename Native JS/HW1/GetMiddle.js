function getMiddle(s)
{
    var middleChar = "";
    if (s.length > 0) {
        if (s.length % 2 == 1) {
            //odd
            middleChar = s.charAt(Math.trunc(s.length / 2));
        } else {
            //even	
            middleChar = s.substr(s.length / 2 - 1, 2);
        }
    } else
    {
        middleChar = "";
    }
    return middleChar;
}
