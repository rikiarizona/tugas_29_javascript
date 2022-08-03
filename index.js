function regex() {
    let data = "Belajar menimba ilmu programming bersama Niomic";
    let str = new RegExp('bersama');
    return str.exec(data);
}
console.log(regex());