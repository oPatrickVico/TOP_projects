function configStyle(domObj, styleObj) {
  for (const property in styleObj) {
    domObj.style.setProperty(property, styleObj[property]);
  }
}

function p(str) {
  console.log(str);
}

export { configStyle, p };
