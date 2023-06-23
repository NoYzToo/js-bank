let banks = [{
    id: 1234,
    password: 1111,
    balans: 500,
    currency: 'usd',
},
{
    id: 4321,
    password: 1212,
    balans: 6000,
    currency: 'rub',
},
{
    id: 4231,
    password: 2121,
    balans: 10000000,
    currency: 'sum',
},
{
    id: 7777,
    password: 5665,
    balans: 1200,
    currency: 'rub',
},


{
    id: 8800,
    password: 8080,
    balans: 1200,
    currency: 'usd',
},


{
    id: 9876,
    password: 8890,
    balans: 120000,
    currency: 'sum',
}
]
// 1 у вас будет промт спрашивайщий айди если совпало идем дальше совпадений нету спрашиваем
// 2 спрашиваем пороль пороль берем в ключах
// 3 показываем баланс и выдаем услуги с помощью кнопок
//    1) перевести валюту 2) баланс 3) снять наличные
// 4 наличные снимаются отдельно с процентом проценты в зависимости от оплаты
//   1) меньше 50 % => обслуга 10 % 2) больше 50% => 5%
//   3) больше 70% => 2,5% 4) 100% комиссия 0%
// 5) найти самого богатого и присвоить ему ключ rich: true
// 6) перевод валюты мы всегда спрашиваем у человка в какую валюту он хочет перевести
// курс валюты
// 1 usd = 1000 sum
// 1 usd = 100 rub
// 100 rub = 1000 sum
// 7) все должно  быть написано в функции


function bankSistem(arr) {

    let id = +prompt("Введите id:")
    let index;

    if (id != 0 && id != null) {
        while (id != 0 && id != null) {

            findId: for (let i = 0; i < arr.length; i++) {
                if (arr[i].id == +id) {
                    index = i
                    break findId;
                }
                else if (arr[i].id != id) {
                    index = -1
                }
            }

            if (index != -1) {

                let password = prompt("Введите пароль:")
                if (password != null || password == "") {
                    while (password != null && password != 0) {
                        if (+password == arr[index].password) {
                            alert("Вэлком")

                            let ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)

                            if (ask != null) {
                                while (ask != null) {
                                    if (+ask == 1) {
                                        while (+ask == 1) {
                                            if (arr[index].currency == "usd") {
                                                let askCurrs = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nНа что вы хотите поменять деньги, sum или rub?\nКурс доллора:\n1usd = 10000 sum\n1usd = 100 rub\n100 rub = 10000 sum`)
                                                while (askCurrs != null || askCurrs == "") {
                                                    if (askCurrs == "sum") {
                                                        let askConfirm = confirm(`Вы точно хотите поменять денги на sum?\nВаш баланс ${arr[index].balans + arr[index].currency}\nПосле обмена он будет ${arr[index].balans * 10000} sum`)
                                                        if (askConfirm == true) {
                                                            arr[index].balans = arr[index].balans * 10000;
                                                            arr[index].currency = "sum";
                                                            alert(`Перевод прошёл успешно, ваш баланс ${arr[index].balans + arr[index].currency}`)
                                                            askCurrs = null
                                                        }
                                                        else {
                                                            alert("Перевод отменён")
                                                            askCurrs = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nНа что вы хотите поменять деньги, sum или rub?\nКурс доллора:\n1usd = 10000 sum\n1usd = 100 rub\n100 rub = 10000 sum`)
                                                        }
                                                    }
                                                    else if (askCurrs == "rub") {
                                                        let askConfirm = confirm(`Вы точно хотите поменять денги на rub?\nВаш баланс ${arr[index].balans + arr[index].currency}\nПосле обмена он будет ${arr[index].balans * 100} rub`)
                                                        if (askConfirm == true) {
                                                            arr[index].balans = arr[index].balans * 100;
                                                            arr[index].currency = "rub";
                                                            alert(`Перевод прошёл успешно, ваш баланс ${arr[index].balans + arr[index].currency}`)
                                                            askCurrs = null
                                                        }
                                                        else {
                                                            alert("Перевод отменён")
                                                            askCurrs = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nНа что вы хотите поменять деньги, sum или rub?\nКурс доллора:\n1usd = 10000 sum\n1usd = 100 rub\n100 rub = 10000 sum`)
                                                        }
                                                    }
                                                    else {
                                                        askCurrs = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nНа что вы хотите поменять деньги, sum или rub?\nКурс доллора:\n1usd = 10000 sum\n1usd = 100 rub\n100 rub = 10000 sum`)
                                                    }
                                                }
                                                ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)
                                                if (ask == null) {
                                                    password = null
                                                    id = +prompt("Введите id:")
                                                }
                                            }
                                            else if (arr[index].currency == "sum") {
                                                let askCurrs = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nНа что вы хотите поменять деньги, usd или rub?\nКурс доллора:\n1usd = 10000 sum\n1usd = 100 rub\n100 rub = 10000 sum`)
                                                while (askCurrs != null || ask == "") {
                                                    if (askCurrs == "usd") {
                                                        let askConfirm = confirm(`Вы точно хотите поменять денги на usd?\nВаш баланс ${arr[index].balans + arr[index].currency}\nПосле обмена он будет ${arr[index].balans / 10000} usd`)
                                                        if (askConfirm == true) {
                                                            arr[index].balans = arr[index].balans / 10000;
                                                            arr[index].currency = "usd";
                                                            alert(`Перевод прошёл успешно, ваш баланс ${arr[index].balans + arr[index].currency}`)
                                                            askCurrs = null
                                                        }
                                                        else {
                                                            alert("Перевод отменён")
                                                            askCurrs = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nНа что вы хотите поменять деньги, usd или rub?\nКурс доллора:\n1usd = 10000 sum\n1usd = 100 rub\n100 rub = 10000 sum`)
                                                        }
                                                    }
                                                    else if (askCurrs == "rub") {
                                                        let askConfirm = confirm(`Вы точно хотите поменять денги на rub?\nВаш баланс ${arr[index].balans + arr[index].currency}\nПосле обмена он будет ${arr[index].balans / 100} rub`)
                                                        if (askConfirm == true) {
                                                            arr[index].balans = arr[index].balans / 100;
                                                            arr[index].currency = "rub";
                                                            alert(`Перевод прошёл успешно, ваш баланс ${arr[index].balans + arr[index].currency}`)
                                                            askCurrs = null
                                                        }
                                                        else {
                                                            alert("Перевод отменён")
                                                            askCurrs = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nНа что вы хотите поменять деньги, usd или rub?\nКурс доллора:\n1usd = 10000 sum\n1usd = 100 rub\n100 rub = 10000 sum`)
                                                        }
                                                    }
                                                    else {
                                                        askCurrs = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nНа что вы хотите поменять деньги, usd или rub?\nКурс доллора:\n1usd = 10000 sum\n1usd = 100 rub\n100 rub = 10000 sum`)
                                                    }
                                                }
                                                ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)
                                                if (ask == null) {
                                                    password = null
                                                    id = +prompt("Введите id:")
                                                }
                                            }
                                            else if (arr[index].currency == "rub") {
                                                let askCurrs = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nНа что вы хотите поменять деньги, sum или usd?\nКурс доллора:\n1usd = 10000 sum\n1usd = 100 rub\n100 rub = 10000 sum`)
                                                while (askCurrs != null || ask == "") {
                                                    if (askCurrs == "sum") {
                                                        let askConfirm = confirm(`Вы точно хотите поменять денги на sum?\nВаш баланс ${arr[index].balans + arr[index].currency}\nПосле обмена он будет ${arr[index].balans * 100} sum`)
                                                        if (askConfirm == true) {
                                                            arr[index].balans = arr[index].balans * 100;
                                                            arr[index].currency = "sum";
                                                            alert(`Перевод прошёл успешно, ваш баланс ${arr[index].balans + arr[index].currency}`)
                                                            askCurrs = null
                                                        }
                                                        else {
                                                            alert("Перевод отменён")
                                                            askCurrs = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nНа что вы хотите поменять деньги, sum или usd?\nКурс доллора:\n1usd = 10000 sum\n1usd = 100 rub\n100 rub = 10000 sum`)
                                                        }
                                                    }
                                                    else if (askCurrs == "usd") {
                                                        let askConfirm = confirm(`Вы точно хотите поменять денги на usd?\nВаш баланс ${arr[index].balans + arr[index].currency}\nПосле обмена он будет ${arr[index].balans / 100} usd`)
                                                        if (askConfirm == true) {
                                                            arr[index].balans = arr[index].balans / 100;
                                                            arr[index].currency = "usd";
                                                            alert(`Перевод прошёл успешно, ваш баланс ${arr[index].balans + arr[index].currency}`)
                                                            askCurrs = null
                                                        }
                                                        else {
                                                            alert("Перевод отменён")
                                                            askCurrs = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nНа что вы хотите поменять деньги, sum или usd?\nКурс доллора:\n1usd = 10000 sum\n1usd = 100 rub\n100 rub = 10000 sum`)
                                                        }
                                                    }
                                                    else {
                                                        askCurrs = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nНа что вы хотите поменять деньги, sum или rub?\nКурс доллора:\n1usd = 10000 sum\n1usd = 100 rub\n100 rub = 10000 sum`)
                                                    }
                                                }
                                                ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)
                                                if (ask == null) {
                                                    password = null
                                                    id = +prompt("Введите id:")
                                                }
                                            }
                                        }
                                    }
                                    else if (+ask == 2) {
                                        alert(`Ваш баланс ${arr[index].balans + arr[index].currency}`)
                                        ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)
                                        if (ask == null) {
                                            password = null
                                            id = +prompt("Введите id:")
                                        }
                                    }
                                    else if (+ask == 3) {
                                        alert("снять наличные")

                                        let howMuch = +prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСколько вы бы хотели снять?\n0% => 50% = 10%\n50% => 70% = 5%\n70% => 100% = 2.5%\nСнять всё = 0%, чтобы снять всё напишите "${arr[index].balans}"`)
                                        while (+ask == 3) {

                                            if (howMuch < arr[index].balans / 100 * 50 && howMuch > 0) {
                                                let tax = 10
                                                let withTax = howMuch + (howMuch / 100 * tax)
                                                let askConfirm = confirm(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСумма которую вы хотите снять ${howMuch + arr[index].currency}\nС вашего счето сниметься ${withTax + arr[index].currency} с учётом комиссии\nУ вас на счету останеться ${(arr[index].balans - withTax) + arr[index].currency}`)

                                                if (askConfirm == true) {
                                                    arr[index].balans = arr[index].balans - withTax
                                                    alert(`Ваш баланс ${arr[index].balans + arr[index].currency}\nС вашего счёта снялось ${withTax + arr[index].currency}`)
                                                    howMuch = +prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСколько вы бы хотели снять?\n0% => 50% = 10%\n50% => 70% = 5%\n70% => 100% = 2.5%\nСнять всё = 0%, чтобы снять всё напишите "${arr[index].balans}"`)
                                                    if (howMuch == 0) {
                                                        ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)
                                                        if (ask == null) {
                                                            password = null
                                                            id = +prompt("Введите id:")
                                                        }
                                                    }
                                                }
                                                else {
                                                    howMuch = +prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСколько вы бы хотели снять?\n0% => 50% = 10%\n50% => 70% = 5%\n70% => 100% = 2.5%\nСнять всё = 0%, чтобы снять всё напишите "${arr[index].balans}"`)
                                                    if (howMuch == 0) {
                                                        ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)
                                                        if (ask == null) {
                                                            password = null
                                                            id = +prompt("Введите id:")
                                                        }
                                                    }
                                                }

                                            }
                                            else if (howMuch >= arr[index].balans / 100 * 50 && howMuch < arr[index].balans / 100 * 70) {
                                                let tax = 5
                                                let withTax = howMuch + (howMuch / 100 * tax)
                                                let askConfirm = confirm(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСумма которую вы хотите снять ${howMuch + arr[index].currency}\nС вашего счето сниметься ${withTax + arr[index].currency} с учётом комиссии\nУ вас на счету останеться ${(arr[index].balans - withTax) + arr[index].currency}`)

                                                if (askConfirm == true) {
                                                    arr[index].balans = arr[index].balans - withTax
                                                    alert(`Ваш баланс ${arr[index].balans + arr[index].currency}\nС вашего счёта снялось ${withTax + arr[index].currency}`)
                                                    howMuch = +prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСколько вы бы хотели снять?\n0% => 50% = 10%\n50% => 70% = 5%\n70% => 100% = 2.5%\nСнять всё = 0%, чтобы снять всё напишите "${arr[index].balans}"`)
                                                    if (howMuch == 0) {
                                                        ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)
                                                        if (ask == null) {
                                                            password = null
                                                            id = +prompt("Введите id:")
                                                        }
                                                    }
                                                }
                                                else {
                                                    howMuch = +prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСколько вы бы хотели снять?\n0% => 50% = 10%\n50% => 70% = 5%\n70% => 100% = 2.5%\nСнять всё = 0%, чтобы снять всё напишите "${arr[index].balans}"`)
                                                    if (howMuch == 0) {
                                                        ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)
                                                        if (ask == null) {
                                                            password = null
                                                            id = +prompt("Введите id:")
                                                        }
                                                    }
                                                }

                                            }
                                            else if (howMuch >= arr[index].balans / 100 * 70 && howMuch < arr[index].balans) {
                                                let tax = 2.5
                                                let withTax = howMuch + (howMuch / 100 * tax)
                                                if (withTax > arr[index].balans) {
                                                    alert("Недостаточно средств")
                                                    howMuch = +prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСколько вы бы хотели снять?\n0% => 50% = 10%\n50% => 70% = 5%\n70% => 100% = 2.5%\nСнять всё = 0%, чтобы снять всё напишите "${arr[index].balans}"`)
                                                    if (howMuch == 0) {
                                                        ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)
                                                        if (ask == null) {
                                                            password = null
                                                            id = +prompt("Введите id:")
                                                        }
                                                    }
                                                }
                                                else {

                                                    let askConfirm = confirm(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСумма которую вы хотите снять ${howMuch + arr[index].currency}\nС вашего счето сниметься ${withTax + arr[index].currency} с учётом комиссии\nУ вас на счету останеться ${(arr[index].balans - withTax) + arr[index].currency}`)

                                                    if (askConfirm == true) {
                                                        arr[index].balans = arr[index].balans - withTax
                                                        alert(`Ваш баланс ${arr[index].balans + arr[index].currency}\nС вашего счёта снялось ${withTax + arr[index].currency}`)
                                                        howMuch = +prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСколько вы бы хотели снять?\n0% => 50% = 10%\n50% => 70% = 5%\n70% => 100% = 2.5%\nСнять всё = 0%, чтобы снять всё напишите "${arr[index].balans}"`)
                                                        if (howMuch == 0) {
                                                            ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)
                                                            if (ask == null) {
                                                                password = null
                                                                id = +prompt("Введите id:")
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        howMuch = +prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСколько вы бы хотели снять?\n0% => 50% = 10%\n50% => 70% = 5%\n70% => 100% = 2.5%\nСнять всё = 0%, чтобы снять всё напишите "${arr[index].balans}"`)
                                                        if (howMuch == 0) {
                                                            ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)
                                                            if (ask == null) {
                                                                password = null
                                                                id = +prompt("Введите id:")
                                                            }
                                                        }
                                                    }
                                                }

                                            }
                                            else if (howMuch == arr[index].balans) {

                                                let askConfirm = confirm(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСумма которую вы хотите снять ${arr[index].balans + arr[index].currency}\nС вашего счето сниметься ${arr[index].balans + arr[index].currency}\nУ вас на счету останеться ${(arr[index].balans - arr[index].balans) + arr[index].currency}`)

                                                if (askConfirm == true) {
                                                    arr[index].balans = arr[index].balans - arr[index].balans
                                                    alert(`Ваш баланс ${arr[index].balans + arr[index].currency}\nС вашего счёта снялось ${arr[index].balans + arr[index].currency}`)
                                                    howMuch = +prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСколько вы бы хотели снять?\n0% => 50% = 10%\n50% => 70% = 5%\n70% => 100% = 2.5%\nСнять всё = 0%, чтобы снять всё напишите "${arr[index].balans}"`)
                                                    if (howMuch == 0) {
                                                        ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)
                                                        if (ask == null) {
                                                            password = null
                                                            id = +prompt("Введите id:")
                                                        }
                                                    }
                                                }
                                                else {
                                                    howMuch = +prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСколько вы бы хотели снять?\n0% => 50% = 10%\n50% => 70% = 5%\n70% => 100% = 2.5%\nСнять всё = 0%, чтобы снять всё напишите "${arr[index].balans}"`)
                                                    if (howMuch == 0) {
                                                        ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)
                                                        if (ask == null) {
                                                            password = null
                                                            id = +prompt("Введите id:")
                                                        }
                                                    }
                                                }

                                            }
                                            else {
                                                howMuch = +prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nСколько вы бы хотели снять?\n0% => 50% = 10%\n50% => 70% = 5%\n70% => 100% = 2.5%\nСнять всё = 0%, чтобы снять всё напишите "${arr[index].balans}"`)
                                            }
                                        }

                                        break
                                    }
                                    else {
                                        ask = prompt(`Ваш баланс ${arr[index].balans + arr[index].currency}\nЧто бы вы хотели сделать\n1) перевести валюту\n2) баланс\n3) снять наличные`)
                                    }
                                }

                            }
                            else {
                                password = 0
                                id = +prompt("Введите id:")
                            }

                        }
                        else {
                            password = prompt("Неверный пароль:")
                        }

                    }
                }
                else {
                    id = +prompt("Введите id:")
                }
            }
            else {
                id = +prompt("id не найден:")
            }
        }
    }
}


bankSistem(banks)