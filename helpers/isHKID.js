export default function IsHKID(str) {
  var strValidChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (str !== undefined) {
    if (str.length < 8) {
      return false;
    }
    str = str.toUpperCase();
    var hkidPat = /^([A-Z]{1,2})([0-9]{6})([A0-9])$/;
    var matchArray = str.match(hkidPat);
    if (matchArray == null) {
      return false;
    }
    var charPart = matchArray[1];
    var numPart = matchArray[2];
    var checkDigit = matchArray[3];
    var checkSum = 0;
    if (charPart.length == 2) {
      checkSum += 9 * (10 + strValidChars.indexOf(charPart.charAt(0)));
      checkSum += 8 * (10 + strValidChars.indexOf(charPart.charAt(1)));
    } else {
      checkSum += 9 * 36;
      checkSum += 8 * (10 + strValidChars.indexOf(charPart));
    }

    for (var i = 0, j = 7; i < numPart.length; i++, j--) {
      checkSum += j * numPart.charAt(i);
    }
    var remaining = checkSum % 11;
    var verify = remaining == 0 ? 0 : 11 - remaining;
    return verify == checkDigit || (verify == 10 && checkDigit == "A");
  }
  return true;
}
