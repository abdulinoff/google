function generatorRandomInt(max) {
    generatorrandomint = Math.floor(Math.random() * max)
    return generatorrandomint;
}

clone()
function clone() {
    let i = 2
    for (let n=0; n<12; n++) {
        let parent = document.getElementById('author_main');
        let elem = parent.querySelector('.author_block_1');
        let clone = elem.cloneNode(true);
        clone = parent.appendChild(clone);
        clone = clone.className = 'author_block_' + i
        i++
    }
}

nickname()
function nickname(){
    let author_name_channel_h2 = document.querySelectorAll('.author_name_channel_h2');
    author_name_channel_h2 = author_name_channel_h2.forEach((el, i) => el.textContent = random());
}

views()
function views(){
    let author_views_h2 = document.querySelectorAll('.author_views_h2');
    author_views_h2.forEach((el, i) => el.textContent = generatorRandomInt(999) + ' тыс. просмотров');
}

time()
function time(){
    let author_duration = document.querySelectorAll('.author_duration');
    author_duration.forEach((el, i) => el.textContent = generatorRandomInt(24) + ':' + generatorRandomInt(60));
}

// realease()
// function realease(){
//     let author_realease_h2 = document.querySelectorAll('.author_realease_h2');
//     for(let n = 0; n<5; n++){
//         random = generatorRandomInt(5)
//         if (random == 0){
//             let minuta = ' минута назад'
//             let minutes = ' минуты назад'
//             let minut = ' минут назад'
//             random_minute = generatorRandomInt(60)
//             if (random_minute >= 2 && random_minute <= 4){
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_minute + minutes)
//             }
//             else if (random_minute >= 5 && random_minute < 60){
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_minute + minut)
//             }
//             else if (random_minute == 1){
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_minute + minuta)
//             }
//             else if (random_minute == 0){
//                 random_minute += 1
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_minute + minuta)
//             }
//         }
//         else if (random == 1){
//             let day = ' день назад'
//             let dny = ' дня назад'
//             let dney = ' дней назад'
//             random_day = generatorRandomInt(12)
//             if (random_day >= 2 && random_day <= 4){
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_day + dny)
//             }
//             else if (random_day >= 5 && random_day <= 11){
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_day + dney)
//             }
//             else if (random_day == 1){
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_day + day)
//             }
//             else if (random_day == 0){
//                 random_day += 1
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_day + day)
//             }
//         }
        
//         else if (random == 2){
//             let week = ' недели назад'
//             random_week = generatorRandomInt(4)
//             author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_week + week)
//             if (random_week == 1){
//                 random_week += 1
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_week + week)
//             }
//             else if (random_week == 0){
//                 random_week += 2
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_week + week)
//             }
//         }
//         else if (random == 3){
//             let month = ' месяц назад'
//             let montha = ' месяца назад'
//             let monthev = ' месяцев назад'
//             random_month = generatorRandomInt(12)
//             if (random_month >= 2 && random_month <= 4){
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_month + montha)
//             }
//             else if (random_month >= 5 && random_month <= 12){
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_month + monthev)
//             }
//             else if (random_month == 1){
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_month + month)
//             }
//             else if (random_month == 0){
//                 random_month += 1
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_month + month)
//             }
//         }
//         else if (random == 4){
//             let year = ' год назад'
//             let yeara = ' года назад'
//             let yeart = ' лет назад'
//             random_year = generatorRandomInt(12)
//             if (random_year >= 2 && random_year <= 4){
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_year + yeara)
//             }
//             else if (random_year >= 5 && random_year <= 15){
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_year + yeart)
//             }
//             else if (random_year == 1){
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_year + year)
//             }
//             else if (random_year == 0){
//                 random_year += 1
//                 author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + random_year + year)
//             }
//         }
//     }
// }
realease()
function realease(){
    let author_realease_h2 = document.querySelectorAll('.author_realease_h2');;
    author_realease_h2 = author_realease_h2.forEach((el, i) => el.textContent = ' ᠌ ᠌• ᠌' + generatorRandomInt(12) + ' минуты назад')
}


function random() {
    let random = ""
    for (let i = 0; i < 6; i++){
        let possible = 'abdulinoff'
        random += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return random;
}

let button_next = document.getElementById('menu').onclick = clone;
let button_next2 = document.getElementById('menu2').onclick = replaceClass;



// let i = 2
// function replaceClass() {
//     let elements = document.getElementsByClassName('author_block_' + i);
//     if (elements[i]) {
        
//         elements = elements[i].className = 'author_block_' + i 
//         i++
//         return elements
//     }
// };

