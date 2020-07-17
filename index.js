function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var uppercase = "STRING"
  var lowercase = "string"
  var mixedCase = "String"
  if (uppercase.toUpperCase() === uppercase) {
    return "I can't hear you!"
  } else if (lowercase.toLowerCase === lowercase) {
    return "YES INDEED"
  } else if (mixedCase.toLowerCase() === mixedCase && mixedCase.toUpperCase() === mixedCase) {
    return "I love you, too."
  }

}
