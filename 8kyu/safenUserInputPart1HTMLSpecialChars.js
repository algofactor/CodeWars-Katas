function htmlspecialchars(formData) {  
    const arr1 = ['<', '>', '"', '&'];
    const arr2 = ['&lt;', '&gt;', '&quot;', '&amp;']
    
    return formData.split('').map((e,i) => arr1.includes(e) ? arr2[arr1.indexOf(e)] : e).join('');
    
}