export const requiredField = (value)=>{
    if(value)return undefined;
    
    return 'this field is required';
}

export const maxLengthCreator = (maxLength) => (value)=>{
    if(value.length > maxLength) return `maxLenght > ${maxLength}`;

    return undefined;
}
