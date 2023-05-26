

/*function sum(a, b) {
    return a+b;
}

sum(10,20);

//function sum(a, b) {
    //let result=a+b;
    //return result;
//}

function msg(userName) {
    console.log(`привет, ${userName}`);

}
msg('aaaaa');

function mmm(a, b) {
    console.log(`привет, ${a}, вам ${2022-b} лет`);

}
mmm('aaaa',1000);

function mma(a) {
    if (a%2==0) {
        console.log('четное');
    }
    else {
        console.log('нечетное');
    }
}
mma(125);

function mme(a, b) {
    if (a>0) {
        console.log('положительное')
    }
    else if (a<0) {
        console.log('отрицательное')
    }
    if (b>0) {
        console.log('положительное')
    }
    else if (b<0) {
        console.log('отрицательное')
    }
}
mme(20,-20)*/

function aaa(a, b, c, d, f) {
    if (a.toLowerCase()==b) {
        console.log('месяцы: декабрь, январь, февраль');
    }
    else if (a.toLowerCase()==c) { //перевод в нижний регистр
        console.log('месяцы: март, апрель, май');
    }
    else if (a.toLowerCase()==d) {
        console.log('месяцы: июнь, июль, август');
    }
    else if (a.toLowerCase()==f) {
        console.log('месяцы: сентябрь, октябрь, ноябрь');
    }
    else {
        console.log('такого нет');
    }
}
aaa(prompt('введите время года'), 'зима', 'весна', 'лето', 'осень');

function bbb(a) {
    if (a==1) {
        console.log('ок это 1');
    }
    else {
        console.log('ок это не 1');
    }
}
bbb(prompt('введите 1 или не 1'))

//Function Declaration

function hello(a) {
    console.log(`привет ${a}`);
}
hello(prompt('введите name'))

//Function Expression 

let hello2= function (a) {
    console.log(`привет ${a}`);
}
hello2('артем')

