let typein = document.getElementById('typein');
let btn = document.getElementById('btn');
let copybtn = document.getElementById('copy');


let length = 13;
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let symbols = "@#$%^&*()_-+={[}]<>\/";
let numbers = "0123456789";

let allhere = uppercase + lowercase + symbols + numbers;

function copy(){
    typein.select();
    document.execCommand("copy");
};

function createpassword(){
    let pwd = '';

    pwd += uppercase[Math.floor(Math.random() * uppercase.length )];
    pwd += lowercase[Math.floor(Math.random() * lowercase.length )];
    pwd += symbols[Math.floor(Math.random() * symbols.length )];
    pwd += numbers[Math.floor(Math.random() * numbers.length )];

    while(length > pwd.length){
        pwd += allhere[Math.floor(Math.random() * allhere.length)];
    }
    typein.value = pwd;
};