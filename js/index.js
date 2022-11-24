// BURGER
let burger = document.querySelector('.header-wrapper__hamburger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.header-list__item');

burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (elem) {
  elem.addEventListener('click', function () {
    burger.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('stop-scroll');
  });
});

// TABS
let tabsBtn = document.querySelectorAll('.work-list__item');
let tabsItem = document.querySelectorAll('.work-wrapper');

tabsBtn.forEach(function (elem) {
  elem.addEventListener('click', function (e) {
    const step = e.currentTarget.dataset.step;     // сюда записывается индекс атрибута DOM елемента .work-list__item
    // console.log(e.currentTarget.dataset.step)


    tabsBtn.forEach(function (btn) {
      btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

    tabsItem.forEach(function (elem) {
      elem.classList.remove('active');
    });
    document.querySelector(`[data-work="${step}"]`).classList.add('active');
  });
});

// SEARCH
document.querySelector('.header-wrapper__btn-search').addEventListener('click', () => {
  document.querySelector('.header-form').classList.add('active');
});

document.querySelector('.header-form__btn-cancel').addEventListener('click', () => {
  document.querySelector('.header-form').classList.remove('active');
});

// SWIPER
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,             // клакабельная пагинация
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // продолжает autoplay если пользователь повзаимодействовал со слайдером или слайдом
    pauseOnMouseEnter: true,     // если курсор находиться в зоне слайда, то autoplay остановиться. Иначе false
  },
});

// ACCORDION
new Accordion('.questions-list', {
  elementClass: 'questions-list__item',
  triggerClass: 'questions-list__btn',
  panelClass: 'questions-list__text',
  activeClass: 'active'
});













// КОНСОЛЬНЫЕ КРЕСТИКИ НОЛИКИ
let player = 'X'

let area = [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-',
]

let winCombo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

console.log(`Добро пожаловать в консольные крестики нолики! Для хода воспользуйтесь функцией move(pos)
Где pos - это позиция игрового поля.
\n1 2 3\n4 5 6\n7 8 9\n
Первый ход делает игрок X!`)


function move(pos) {
    let data = []
    let countWinsX = 0
    let countWins0 = 0
    if (area[pos - 1] == '-') {
        area[pos - 1] = player

        for (let elem in area) {
            if (area[elem] == player) {
                data.push(+elem + 1)
            }
        }

        if(check(data)){
            console.log(`Поздравляю! Игрок ${player} победил!`)
            console.log(`${area[0]} ${area[1]} ${area[2]}\n${area[3]} ${area[4]} ${area[5]}\n${area[6]} ${area[7]} ${area[8]}`)
            if (player == 'X'){
                countWinsX++
                console.log(`X - ${countWinsX}\n0 - ${countWins0}`)
            } else {
                countWins0++
                console.log(`X - ${countWinsX}\n0 - ${countWins0}`)
            }
            restart()
        } else if(!area.includes('-')) {
            console.log('НИЧЬЯ!')
            restart()
        }

        if (player == 'X') {
            player = 'O'
        } else {
            player = 'X'
        }
    } else {
        console.log(`Игорок ${player} сделал неверный ход! Дана доп. попытка!`)
    }

    console.log(`${area[0]} ${area[1]} ${area[2]}\n${area[3]} ${area[4]} ${area[5]}\n${area[6]} ${area[7]} ${area[8]}\n\nСледующий ход игрока ${player}`)
}


// Проверка победы
function check(data) {
    for (let i in winCombo) {
        let win = true
        for (let j in winCombo[i]) {
            let pos = winCombo[i][j]
            let ind = data.indexOf(pos)
            if (ind == -1) {
                win = false
            }
        }
        if (win) return true
    }
    return false
}


// Перезапуск игры при победе
function restart(){
    for (let i in area){
        area[i] = '-'
    }
}
