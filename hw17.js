
const words = ['кошка', 'собака', 'попугай'];
const vopros = ['Одно из наиболее популярных домашних животных? ', 'Питомец способный искать и охранять? ', 'Птица тропических стран с ярким и пёстрым оперением? '];
let rand = 0;
let popitka = 5;
let numpopitka = 3;
var currentScore = rand
let word = [];
let secret = [];

////механика поле чудес
$(document).ready(start);

function start() {
  let r = Math.floor(Math.random() * 3);
  word = words[r].split('');
  console.log(word);
  for (let i = 0; i < word.length; i++) {
    secret.push('*');
  }
  console.log(secret);
  $('#vopros').text(vopros[r]);
  $('#slovo').text(secret.join(' '));
}


$('#but').click(quess);

function quess() {
  let bukva = $('input').val();
  let numpopitka1 = false;
  for (let w in word) {
    if (bukva == word[w]) {
      console.log('est');
      secret[w] = bukva;
      numpopitka1 = true;
    }
    $('input').val('')
  }
  $('#slovo').text(secret.join(' '));
  console.log(word);
  console.log(secret);
  if (!numpopitka1) {
    numpopitka--;
    if (numpopitka == 0) {
      $('#but').prop('disabled', true);
    }
  }
  proverka();
}

function proverka() {
  if (secret.indexOf('*') == - 1) {
    console.log('win');
    endgame(true)
    $('#glpriz').show()
  }
  else if (numpopitka == 0) {
    console.log('lose')
    endgame(false)

  }
}

////вращаем барабан

$('#but1').click(f1);

function f1() {
  let random = Math.floor(Math.random() * 9) + 10;
  rand += random;
  $('#bar').text(' У вас ' + random + ' очков, назовите букву ');
  $('#bar1').text(' Сумма очков ' + rand);
  popitka--;
  $('#baraban').animate({ deg: rand * 36 }, {
    duration: 3000,
    step: function (now) {
      $(this).css({ transform: 'rotate(' + now + 'deg)' });
    },
    complete: function () {

    }
  })
  if (popitka == 0) {
    $('#baraban').toggleClass('rotate')
    $('#but1').prop('disabled', true);

  }
}

/////конец игры
function endgame(win) {
  if (win) {
    $('#end').text('Победв, АААААААвтомобиль')
  }
  else {
    $('#end').text('Вы проиграли(')
  }
}

/////Призы за победу
$(document).ready(function () {
  $('#priz1').click(function () {
    $(this).animate({
      height: '+=50px',
      width: '+=50px'
    }, 500, function () {
      alert('Поздравляю')
    });
  });

  $('#priz2').click(function () {
    $(this).animate({
      height: '+=50px',
      width: '+=50px'
    }, 500, function () {
      alert('Поздравляю')
    });
  });

  $('#priz3').click(function () {
    $(this).animate({
      height: '+=50px',
      width: '+=50px'
    }, 500, function () {
      alert('Поздравляю')
    });
  });
});

//спец условие

$(document).ready(function () {

  // Обработчик клика на картинке priz4
  $("#priz4").click(function () {
    var updatedScore = rand - 12;
    $("#bar1").text(updatedScore);
    $("#priz4").hide();
    $("#yakub").css("background-image", "url(yakub1.jpg)");
  });

  // Обработчик клика на картинке priz5
  $("#priz5").click(function () {
    var updatedScore = rand - 20;
    $("#bar1").text(updatedScore);
    $("#priz5").hide();
    $("#yakub").css("background-image", "url(yakub2.jpg)");
  });
  // Обработчик клика на картинке priz6
  $("#priz6").click(function () {
    var updatedScore = rand - 25;
    $("#bar1").text(updatedScore);
    $("#priz6").hide();
    $("#yakub").css("background-image", "url(yakub3.jpg)");
  });
});
