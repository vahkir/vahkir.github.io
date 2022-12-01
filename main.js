const spe = new SpeechSynthesisUtterance('');
const recognizer = new webkitSpeechRecognition();
recognizer.interimResults = true;
recognizer.lang = 'ru-Ru';
spe.rate = 1.3;
spe.pitch = 1.8;
spe.lang = 'ru-RU';
let zvuk = new Audio('zvuk.mp3'), vdramax, artcant =  0, apli = '', rand = 0, booltime = true, vois = [], robname = 'клара', boollang = false;
const zvukoff = new Audio('zvukoff4.mp3');
const budzilnik = new Audio('budz.mp3');
const piviro = document.querySelector('.piviro');
const setting = document.querySelector('.setting');
const ptextdiv = document.querySelector('.ptextdiv');
const timer = document.querySelector('.timer');
const timerP = document.querySelector('.timer p');
const timerDelet = document.querySelector('.timer .delet');
const speedslid = document.querySelector('.comcenter .speedslid');
const pitchslid = document.querySelector('.comcenter .pitchslid');
const speedtextvalue = document.querySelector('.ptextdiv .comcenter .speedtextvalue');
const pitchtextvalue = document.querySelector('.ptextdiv .comcenter .pitchtextvalue');
const speedtextvaluep = document.querySelector('.ptextdiv .comcenter .speedtextvalue p');
const pitchtextvaluep = document.querySelector('.ptextdiv .comcenter .pitchtextvalue p');
const standart = document.querySelector('.ptextdiv .comcenter .standart');
const ptextdivH2 = document.querySelector('.ptextdiv h2');
const speedvoice = document.querySelector('.ptextdiv .comcenter .speedvoice');
const pitchvoice = document.querySelector('.ptextdiv .comcenter .pitchvoice');
const labKlar = document.querySelector('.comcenter .block .labKlar');
const labDav = document.querySelector('.comcenter .block .labDav');
const allComand = document.querySelector('.ptextdiv .allComand');
const pivi = document.querySelector('.pivi');
const allCommandtext = document.querySelector('.ptextdiv .allcommand');
budzilnik.loop = true;
ang.onclick = () => {
  ang.style.width = '180%';
  ang.style.height = '180%';
  ang.style.bottom = '-20%';
  ang.style.left = '-20%';
  ang.style.opacity = '0';
  ang.style.visibility = 'hidden';
  ang.style.background = 'red';
  setTimeout(() => {
    ang.style.transition = '0s';
    ang.style.width = '0px';
    ang.style.height = '0px';
    ang.style.bottom = '23%';
    ang.style.left = '12%';
    ang.style.opacity = '1';
    ang.style.visibility = 'visible';
    ang.style.background = 'url(anglia.png) no-repeat center / cover';
    setTimeout(() =>{
      ang.style.transition = '.5s';
      ang.style.width = '25px';
      ang.style.height = '25px';
    }, 100);
  }, 350);
  rus.style.animationPlayState = 'paused';
  ang.style.animationPlayState = 'running';
  langtexteng();
  boollang = true;
  if(radio1.checked){
    titleName('Jessica');
    piviro.innerText = 'Robot Jessica';
    robname = 'jessica';
  }else if(radio2.checked){
    titleName('John');
    piviro.innerText = 'Robot John';
    robname = 'john';
  }
};

rus.onclick = () => {
  rus.style.width = '180%';
  rus.style.height = '180%';
  rus.style.bottom = '-23%';
  rus.style.right = '-32%';
  rus.style.opacity = '0';
  rus.style.visibility = 'hidden'; 
  rus.style.background = 'blue';
  setTimeout(() => {
    rus.style.transition = '0s';
    rus.style.width = '0px';
    rus.style.height = '0px';
    rus.style.bottom = '23%';
    rus.style.right = '42%';
    rus.style.opacity = '1';
    rus.style.visibility = 'visible';
    rus.style.background = 'url(russian.webp) no-repeat center / cover';
    setTimeout(() =>{
      rus.style.transition = '.5s';
      rus.style.width = '25px';
      rus.style.height = '25px';
    }, 100);
  }, 350);
  rus.style.animationPlayState = 'running';
  ang.style.animationPlayState = 'paused';
  langtextrus();
  boollang = false;
  if(radio1.checked){
    titleName('Клара');
    piviro.innerText = 'Робот Клара';
    robname = 'клара';
  }else if(radio2.checked){
    titleName('Давид');
    piviro.innerText = 'Робот Давид';
    robname = 'давид';
  }

};
let option = {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}
speedslid.oninput = () => {
  speedtextvaluep.innerText = speedslid.value/10;
  spe.rate = speedslid.value/10;
  speedtextvalue.classList.add('anim1');
};
pitchslid.oninput = () => {
  pitchtextvaluep.innerText = pitchslid.value/10;
  spe.pitch = pitchslid.value/10;
  pitchtextvalue.classList.add('anim2');
};
speedslid.onblur = () => speedtextvalue.classList.remove('anim1');
pitchslid.onblur = () => pitchtextvalue.classList.remove('anim2');

standart.onclick = () => {
  spe.rate = 1.3;
  spe.pitch = 1.8;
  speedtextvaluep.innerText = 1.3;
  pitchtextvaluep.innerText = 1.8;
  speedslid.value = 13;
  pitchslid.value = 18;
  standart.style.transform = 'scale(0.9)';
  setTimeout(() => standart.style.transform = 'scale(1.0)', 150);
  radio1.style.background = 'rgb(138, 43, 226)';
  radio2.style.background = 'rgb(200, 214, 255)';
  radio1.style.borderRadius = '50%';
  radio2.style.borderRadius = '28%';
  radio1.checked;
  gener(3);
  robname = 'клара';
  titleName('Клара');
  piviro.innerText = 'Робот Клара';
  if(boollang){
    titleName('Jessica');
    piviro.innerText = 'Robot Jessica';
    gener(2);
    robname = 'jessica';
  }
  
};


setting.addEventListener('click', () => {
  if(ptextdiv.style.opacity == 0){
    ptextdiv.style.top = '5%';
    ptextdiv.style.visibility = 'visible';
    ptextdiv.style.opacity = '1';
  }else{
    ptextdiv.style.top = '-5%';
    ptextdiv.style.visibility = 'hidden';
    ptextdiv.style.opacity = '0';
  }
  setting.style.transform = 'scale(0.7) rotate(90deg)';
  setTimeout(()=>{setting.style.transform = 'scale(1) rotate(90deg)'}, 150);
});

setting.onmouseover = () => setting.style.transform = 'rotate(90deg)';
setting.onmouseleave = () => setting.style.transform = 'rotate(0deg)';
recognizer.addEventListener('end', () => massovka.style.visibility = 'hidden');

container.onclick = () => {
  speechSynthesis.cancel();
  recognizer.start();
  zvuk.volume = 0.3;
  zvuk.currentTime = 0;
  zvuk.play();
  massovka.style.visibility = 'visible';
};

massovka.onclick = () => {
  recognizer.stop();
  zvukoff.play();
  zvukoff.currentTime = 0;
  zvukoff.volume = 0.4;
  massovka.style.visibility = 'hidden';
};

speechSynthesis.addEventListener('voiceschanged', gener(3));

function gener(numvois) {
  vois = speechSynthesis.getVoices();
  spe.voice = vois[numvois];
}


let titleName = name => document.title = name; 

radio1.onclick = () => {
  radio1.style.background = 'rgb(138, 43, 226)';
  radio2.style.background = 'rgb(200, 214, 255)';
  radio1.style.borderRadius = '50%';
  radio2.style.borderRadius = '28%';
  radio1.checked;
  radio1.style.transform = 'scale(0.6)';
  setTimeout(() => radio1.style.transform = 'scale(1.2)', 200);
  setTimeout(() => radio1.style.transform = 'scale(1)', 400);
  gener(3);
  robname = 'клара';
  titleName('Клара');
  piviro.innerText = 'Робот Клара';
  if(boollang){
    titleName('Jessica');
    piviro.innerText = 'Robot Jessica';
    gener(2);
    robname = 'jessica';
  }
};

radio2.onclick = () => {
  radio2.style.background = 'rgb(138, 43, 226)';
  radio1.style.background = 'rgb(200, 214, 255)';
  radio2.style.borderRadius = '50%';
  radio1.style.borderRadius = '28%';
  radio2.checked;
  radio2.style.transform = 'scale(0.6)';
  setTimeout(() => radio2.style.transform = 'scale(1.2)', 200);
  setTimeout(() => radio2.style.transform = 'scale(1)', 400);
  gener(4);
  robname = 'давид';
  titleName('Давид');
  piviro.innerText = 'Робот Давид';
  if(boollang){
    titleName('Michael');
    piviro.innerText = 'Robot Michael';
    gener(1);
    robname = 'michael';
  }
};

recognizer.onerror = function(event) {
  alert(`Произошла ошибка при распознавании: ${event.error};`);
  massovka.style.visibility = 'hidden';
};

function langtexteng() {
    radio1.checked ? gener(2): gener(1);
    recognizer.lang = 'en-US';
    document.title = 'Jessica';
    ptextdivH2.textContent = 'Voice control';
    speedvoice.textContent = 'voice speed';
    pitchvoice.textContent = 'voice pitch';
    labKlar.textContent = 'Jessica';
    labDav.textContent = 'Michael';
    standart.textContent = 'Default settings';
    allComand.textContent = 'All Commands';
    pivi.textContent = 'You';
    piviro.textContent = 'Robot Jessica';
    allCommandtext.innerHTML = 'command --translate into Armenian(text),<br> command--translate to English(text),<br>command -- tell a joke, <br>command -- (the numbers you said) dram in dollars, <br>command -- (the numbers you said) rubles in drams, <br>command - ruble exchange rate in dollars,<br> command -- dollar exchange rate in drams, <br> command -- dollar exchange rate in rubles, <br> command-drama exchange rate in rubles, <br> command - ruble exchange rate in drams, <br>command--search(text), <br>command--open instagram, <br> command--open facebook, <br> command--open google, <br> command--open youtube, <br>command--how much time <br> command--what day is it today?, <br>command - who is your creator?, <br>command--say a random number from (your given number) to (you given number), <br>command--say the word(text), <br>command--voice, <br>command--tell me about your name, <br>command--whats your name, <br>command--Jessica/Michael, <br>command--how are you, what is your mood, how are you Jessica/Michael, and so on, <br>command -- hello buddy, hello Jessica/Michael, and so on,<br>command--what commands can you execute,<br>command--are you a woman?, are you a man?, are you a boy?, are you a girl?,<br> command--set timer for (0-10 minutes) and (0-60 seconds),<br>command--how much will be(mathematical expression(numbers and / * + -)), <br>command--what is the temperature in ("city"), what is the weather in ("city"),<br>command--search in youtube(text)';
}

function langtextrus() { console.log(allComand, allCommandtext)
  radio1.checked ? gener(3): gener(4);
  recognizer.lang = 'ru-RU';
  document.title = 'Клара';
  ptextdivH2.textContent = 'Управление голосом';
  speedvoice.textContent = 'скорость голоса';
  pitchvoice.textContent = 'высота тона';
  labKlar.textContent = 'Клара';
  labDav.textContent = 'Давид';
  standart.textContent = 'настройки по умолчанию';
  allComand.textContent = 'Все команды';
  pivi.textContent = 'Вы';
  piviro.textContent = 'Робот Клара';
  allCommandtext.innerHTML = 'команда--перевести на армянский(текст),<br> команда--перевести на английский(текст),<br> команда--расскажи анекдот, <br> команда--(вами сказанные цифры)драм в долларах, <br> команда--(вами сказанные цифры)рублей в драмах, <br> команда--курс рубля в долларах, <br> команда--курс доллара в драмах, <br> команда--курс доллара в рублях, <br>команда--курс драма в рублях, <br> команда--курс рубля в драмах, <br> команда--искать(текст), <br> команда--открыть instagram, <br> команда--открыть facebook, <br> команда--открыть google, <br> команда--открыть youtube, <br> команда--сколько времени, <br> команда--какой сегодня день?, <br> команда--кто твой создатель?, <br> команда--скажи рандомную цифру от (вами заданная цифра) до (вами заданная цифра), <br> команда--скажи слово(текст), <br> команда--скажи что я("я" заменит на "ты" и текст), <br> команда--скажи что ты("ты" заменит на "я" и текст), <br> команда--голос, <br> команда--расскажи о своей имени, <br> команда--как тебя зовут, <br> команда--клара/давид, <br> команда--как дела, как настроение, как дела клара/давид, и так далее, <br> команда--привет, дружище, здравствуй клара/давид, и так далее, <br> команда--какие команды тебе можно задать?, <br> команда--ты женщина?, ты мужчина?, ты мальчик?, ты девочка?, <br> команда--поставь таймер на (0-10 минуты) и (0-60 секунды), <br> команда--сколько будет(математическое выражение(цифры и / * + -)), <br> команда--какая температура в ("город"), какая погода в ("город")<br>команда--искать в youtube(текст)';
}

function xosq(callapli){
  spe.text = callapli;
  recognizer.stop();
  speechSynthesis.speak(spe);
  robot.innerText = spe.text;
}

function ExchangeRates() {
  return fetch('https://www.cbr-xml-daily.ru/latest.js').then(function (result) {
    return result.json()
  }).then(function (data) {
    return data.rates;
  });
}

function timerfunction(min, sec, slovo) {
  if(booltime == false){
    boollang == false ? xosq('у вас уже есть таймер'): xosq('you already have a timer');
  }else if(booltime) {
    booltime = false;
    sec.includes('мину') ? sec = 0:'';  
    if(min.slice(3) == 'секу') {
      sec = +min.slice(0,2);
      min = 0;
    }
    if(min.slice(3) == 'second' && sec.slice(0, 9) == 'timer for'){
      min = 0;
      sec = +sec.slice(10);
      console.log(sec);
    }
    slovo == 'поставь таймер на минуту' ? min = 1:'';
    slovo == 'set a timer for a minute' ? min = 1:'';
    min == 'ставь тайм' && sec == 0 ? min = 1:'';
    min == 'одну' ? min = 1:'';
    sec == 'одну' ? sec = 1:'';
    +min > 10 ? min = 10:''; 
    +min == 10 ? sec = 0:'';
    +sec > 60 ? sec = 60:'';
    min = +min;
    sec = +sec;
    if(isNaN(min) != true && isNaN(sec) != true){
      timer.style.visibility = 'visible';
      timer.style.opacity = '1';
      timerP.innerHTML = min+':'+sec;
      +sec < 10 ? timerP.innerHTML = min+':'+'0'+sec:'';
      let setint = setInterval(() => {
      if(sec == 0){
        +min--;
        sec = 60;
      }
      +sec;
      sec--;
      sec < 10 ? timerP.innerHTML = min+':'+'0'+sec:timerP.innerHTML = min+':'+sec;
      if(sec == 0 && min == 0) {
        budzilnik.play();
        timerP.innerHTML = '0:00';
        clearInterval(setint);
        }
      }, 1000);

      timerDelet.onclick = () => {
        timer.style.visibility = 'hidden';
        timer.style.opacity = '0';
        budzilnik.pause();
        clearInterval(setint);
        booltime = true;
      };

    }else {
      booltime = true;
      boollang == false ? xosq('возможно Вы допустили какую-то ошибку в команде'): xosq('maybe you made some mistake in the command') ;
    }
  }
}