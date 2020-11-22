export function capitalize(x:string){
    return x.charAt(0).toLocaleUpperCase() + x.slice(1);
}

export function tee<T>(t:T){
    console.log(t);
    return t;
}