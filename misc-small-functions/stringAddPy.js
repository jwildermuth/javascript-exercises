/***
  Write a JavaScript program to:
  create a new string
  adding "Py" in front of a given string.
  If the given string begins with "Py"
  then return the original string.
***/


const addPy = (text) => {
  return text.substring(0, 2) === 'Py' ?
    text :
    'Py' + text
}


console.log(addPy('abcde'))
