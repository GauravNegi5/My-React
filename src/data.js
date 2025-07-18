export const API_KEY = 'AIzaSyA4YhlUVBSjxnRXEw5BO91QZ5Hv3AhIGk8';

export const value_converter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K"
    }
    else{
        return value
    }
    }