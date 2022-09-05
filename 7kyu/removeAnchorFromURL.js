function removeUrlAnchor(url){
  // TODO: complete
  const i = url.indexOf('#');
  
  return i === -1 ? url.slice(0) : url.slice(0, i);
}