const clsxConcat = (...className:(string | undefined | false | null)[])=>{
    return className.filter(cls => cls).join(" ");
}

export default clsxConcat;
