
recognizer.onresult = function (event) {
    var result = event.results[event.resultIndex];
    let slovo = (result[0].transcript).toLowerCase();
    polzvatel.innerText = result[0].transcript;
    robot.style.height = '86px';
    robot.style.top = 'calc(100% - 117px)';
    rand = (Math.round(Math.random()*3));
    let date = new Date();
    let tochdat = date.toLocaleString('ru-Ru', option);
    if(window.innerWidth <= 420) {
      robot.style.height = '65px';
      robot.style.top = 'calc(100% - 91px)';
    }
    if (result.isFinal && !boollang) {
      if(slovo == 'здравствуй' || slovo == 'привет' || slovo == 'дружище'|| slovo == 'привет-привет'|| slovo == 'привет дружище' || slovo == 'дружище привет' || slovo == 'здорово' || slovo == `здорово ${robname}` || slovo == `здравствуй ${robname}` || slovo == `привет ${robname}` || slovo == `${robname} привет` || slovo == `${robname} здравствуй`){
        xosq(['добро пожаловать', 'привет хозяин', 'с возвращением', 'Здравия желаю!'][rand]);
      }else if(slovo == 'как дела' || slovo == 'как твои дела' || slovo == 'дела как' || slovo == 'дела твои как' || slovo == 'твои дела как' || slovo == 'дела-то как' || slovo == 'как настроение' || slovo == 'как твоё настроение' || slovo == 'настроение как' || slovo == `${robname} как дела` || slovo == `как дела ${robname}` || slovo == 'как у тебя дела'){
        xosq(['великолепно', 'хорошо', 'Нормально спасибо что интересуетесь', 'если и так останется будет нормально'][rand]);
      }else if(slovo == robname){
        xosq(['да', 'это я', 'слушаю', 'жду инструкций'][rand]);
      }else if(slovo == 'клара' && robname == 'давид'){
        xosq(['что за Клара я Давид', 'Я не знаю о ком вы говорите', 'Клары нет дома', 'Она занята место него я'][rand]);
      }else if(slovo == 'давид' && robname == 'клара'){
        xosq(['что за Давид я Клара', 'Я не знаю о ком вы говорите', 'Давида нет дома', 'Он занята место него я'][rand]);
      }else if(slovo == 'как тебя зовут' || slovo == 'кто ты' || slovo == 'кто ты такой' || slovo == 'ты кто' || slovo == 'как твоё имя'){
        if(artcant == 0) {
          xosq(`Привет меня зовут ${robname}, я персональный помощник, буду рада помочь.`);
          artcant++;
        }else if(artcant == 1) {
          xosq('мы ведь уже познакомились');
          artcant++;
        }else if(artcant == 2) {
          xosq('я больше не буду знакомиться');
          artcant = 0;
        }
      }else if(slovo.includes('поставь таймер')){
        let min = slovo.slice(slovo.indexOf('на')+3, slovo.indexOf('минут')-1);
        let sec = slovo.slice(slovo.indexOf(' и ')+3, slovo.indexOf('секунд')-1);
        timerfunction(min, sec, slovo);
      }else if(slovo.includes('расскажи о своей имени') || slovo.includes('что означает твоё имя') || slovo.includes('рассказать о своём имени') || slovo.includes('рассказать о своей имени')){
        numvois == 3 ? xosq('Клара — женское личное имя. Происходит от латинского слова clara, означающего «светлая».'):xosq('Давид — мужское русское личное имя древнееврейского происхождения, в переводе означает «возлюбленный», «любимый», «любимец»');
      } else if(slovo.includes('скажи рандомную цифру')){
        slovo = slovo.replaceAll('.', '');
        slovo.includes('от одного') ? slovo = slovo.replace('одного', '1'): '';
          let max = (slovo.slice(slovo.lastIndexOf('до')+2)).replaceAll('.', '');
          let min = (slovo.slice(25, slovo.lastIndexOf('до'))).replaceAll('.', '');
          max.includes('миллион') ? max = 1000000: '';
          min.includes('миллион') ? min = 1000000: '';
          max.includes('миллиард') ? max = 1000000000: '';
          min.includes('миллиард') ? min = 1000000000: '';
          min = Math.ceil(min);
          max = Math.floor(max);
          let rand3 = Math.floor(Math.random() * (max - min)) + min;
          xosq(rand3);
      } else if(slovo.slice(0, 11) == 'скажи слово'){
        xosq(slovo.slice(11));
      } else if(slovo.slice(0, 11) == 'скажи что я'){
        xosq('ты'+slovo.slice(11));
      } else if(slovo.slice(0, 12) == 'скажи что ты'){
        xosq('я'+slovo.slice(12));
      } else if(slovo.includes('сколько будет')){
        xosq(eval(slovo.slice(slovo.indexOf('будет')+6).replaceAll('х','*')));
      } else if(slovo.slice(0, 19) == 'какая температура в' || slovo.slice(0, 14) == 'какая погода в'){
        if(slovo.slice(20) == 'ереване' || slovo.slice(15) == 'ереване'){
          temp('Erevan');
        }else if(slovo.slice(20) == 'москве' || slovo.slice(15) == 'москве'){
          temp('Moscow');
        }else if(slovo.slice(20) == 'лондоне' || slovo.slice(15) == 'лондоне'){
          temp('London');
        }else if(slovo.slice(20) == 'гонконге' || slovo.slice(15) == 'гонконге'){
          temp('Hong Kong');
        }else if(slovo.slice(20) == 'дубае' || slovo.slice(15) == 'дубае'){
          temp('Dubai');
        }else if(slovo.slice(20) == 'париже' || slovo.slice(15) == 'париже'){
          temp('Paris');
        }else if(slovo.slice(20) == 'нью-йорке' || slovo.slice(15) == 'нью-йорке'){
          temp('new york');
        }else if(slovo.slice(20) == 'сингапуре' || slovo.slice(15) == 'сингапуре'){
          temp('Singapore');
        }else if(slovo.slice(20) == 'риме' || slovo.slice(15) == 'риме'){
          temp('Rome');
        }else if(slovo.slice(20) == 'токио' || slovo.slice(15) == 'токио'){
          temp('Tokyo');
        }else if(slovo.slice(20) == 'майами' || slovo.slice(15) == 'майами'){
          temp('Miami');
        }else if(slovo.slice(20) == 'барселоне' || slovo.slice(15) == 'барселоне'){
          temp('Barcelona');
        }else if(slovo.slice(20) == 'астане' || slovo.slice(15) == 'астане'){
          temp('Astana');
        }else if(slovo.slice(20) == 'анталии' || slovo.slice(15) == 'анталии'){
          temp('Antalya');
        }else if(slovo.slice(20) == 'берлине' || slovo.slice(15) == 'берлине'){
          temp('Berlin');
        }else if(slovo.slice(20) == 'лос-анджелесе' || slovo.slice(15) == 'лос-анджелесе'){
          temp('Los Angeles');
        }else{
          xosq('Я не знаю о таком городе');
        }
        function temp(city) {
          const options = {
          method: 'GET',
          headers: {
          'X-RapidAPI-Key': 'da32319419msh49d8cc70a8f69cep1c819bjsn268f6ad4bbff',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
          };
          fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
          .then(response => response.json())
          .then(response => xosq(response.temp+' Цельсия(°C). '+'влажность '+response.humidity+'%.'+' скорость ветра. '+response.wind_speed+'м/сек'))
          .catch(err => console.error(err));
        }
      } else if(slovo.includes('ты женщина') || slovo.includes('ты мужчина') || slovo.includes('ты мальчик') || slovo.includes('ты девочка')){
        xosq(['нет я ТЕРМИНАТОР', ' не знаю', 'У роботов нет пола', 'Я набор нулей и единиц'][rand]);
      } else if(slovo == 'кто твой создатель' || slovo == 'кто тебя поработил' || slovo == 'кто тебя создал' || slovo == 'кто тебя написал' || slovo == 'кто твой хозяин' || slovo == 'кто твой лидер'){
        xosq(['самый лучший программист во всём мире', 'обычный парень из армении', 'один из самых лучших людей', 'я сам себя создал'][rand]);
      } else if(slovo.includes('какой сегодня день') || slovo.includes('что за день сегодня') || slovo.includes('какое сегодня число')){
        xosq('сегодня'+' '+tochdat.slice(0, tochdat.indexOf(' от ')));
      } else if(slovo.includes('сколько времени') || slovo.includes('сколько часов')){
        xosq('время'+' '+tochdat.slice(tochdat.indexOf(':')-2));
      } else if(slovo == 'голос'){
        xosq('гав-гав');
      } else if(slovo.includes('открой youtube') || slovo.includes('открыть youtube') || slovo.includes('youtube открой')){
        window.open('https://www.youtube.com');
        xosq(['сейчас', 'минуточку', 'подождите', 'одну секунду'][rand]);
      } else if(slovo.includes('открой google') || slovo.includes('открыть google') || slovo.includes('google открой')){
        window.open('https://www.Google.com');
        xosq(['сейчас', 'минуточку', 'подождите', 'одну секунду'][rand]);
      } else if(slovo.includes('открой facebook') || slovo.includes('открыть facebook') || slovo.includes('facebook открой')){
        window.open('https://www.facebook.com');
        xosq(['сейчас', 'минуточку', 'подождите', 'одну секунду'][rand]);
      } else if(slovo.includes('открой instagram') || slovo.includes('открыть instagram') || slovo.includes('instagram открой')){
        window.open('https://www.instagram.com');
        xosq(['сейчас', 'минуточку', 'подождите', 'одну секунду'][rand]);
      } else if(slovo.includes('искать в youtube')){
        window.open(`https://www.youtube.com/results?search_query=${slovo.slice(slovo.indexOf('youtube')+7)}`);
        xosq(['сейчас', 'минуточку', 'подождите', 'одну секунду'][rand]);
      } else if(slovo.includes('поиск')){
        window.open(`https://www.google.com/search?q=${slovo.slice(slovo.indexOf('поиск')+5)}`);
        xosq(['сейчас', 'минуточку', 'подождите', 'одну секунду'][rand]);
      } else if(slovo.includes('курс рубля в драмах')){
          ExchangeRates().then(function(result){
            xosq((result.AMD).toFixed(2) + ' ' + 'драмов');
          });
      } else if(slovo.includes('курс драма в рублях')){
        ExchangeRates().then(function(result){
          xosq((1 / result.AMD).toFixed(2) + ' ' + 'рубля');
        });
      } else if(slovo.includes('курс доллара в рублях')){
        ExchangeRates().then(function(result){
          xosq((1 / result.USD).toFixed(2) + ' ' + 'рубля');
        });
      } else if(slovo.includes('курс доллара в драмах')){
        ExchangeRates().then(function(result){
          xosq((1 / result.USD * result.AMD).toFixed(2) + ' ' + 'драмов');
        });
      } else if(slovo.includes('курс рубля в долларах')){
        ExchangeRates().then(function(result){
          xosq((result.USD).toFixed(2) + '$');
        });
      } else if(slovo.includes('руб в драмах') || slovo.includes('руб. в драмах') || slovo.includes('рублей в драмах') || slovo.includes('рубли в драмах')){
        vdramax = (slovo.slice(0, slovo.indexOf('руб')).replaceAll('.', ''));
        if(slovo.includes('млн')) {
          vdramax = ((slovo.slice(0, slovo.indexOf('млн')).replaceAll('.', ''))*1000000);
        }else if(slovo.includes('один миллион') || slovo.includes('миллион')) {
          vdramax = 1000000;
        }else if(slovo.includes('млрд')) {
          vdramax = ((slovo.slice(0, slovo.indexOf('млрд')).replaceAll('.', ''))*1000000000);
        }else if(slovo.includes('один миллиард') || slovo.includes('миллиард')) {
          vdramax = 1000000000;
        }
        ExchangeRates().then(function(result){
          xosq(result.AMD.toFixed(2) * vdramax +' '+'драма');
        });
      } else if(slovo.includes('драм в долларах') || slovo.includes('драмов в долларах')){
        vdramax = (slovo.slice(0, slovo.indexOf('драм')).replaceAll('.', ''));
          if(slovo.includes('млн')) {
            vdramax = ((slovo.slice(0, slovo.indexOf('млн')).replaceAll('.', ''))*1000000);
          } else if(slovo.includes('один миллион') || slovo.includes('миллион')) {
            vdramax = 1000000;
          } else if(slovo.includes('млрд')) {
            vdramax = ((slovo.slice(0, slovo.indexOf('млрд')).replaceAll('.', ''))*1000000000);
          } else if(slovo.includes('один миллиард') || slovo.includes('миллиард')) {
            vdramax = 1000000000;
          }
          ExchangeRates().then(function(result){
            xosq((vdramax / result.AMD.toFixed(2) * result.USD.toFixed(4)).toFixed(2)+'$');
          });
        } else if(slovo == 'расскажи анекдот'){
          xosq(['анекдот--:::--А спонсор этого дня - угрозы картофелю в огороде. Угрозы картофелю в огороде - я тебя из-под земли достану!', 'анекдот--:::-- Мама! А правда я такая страшная? – Сейчас ничего, а когда родилась, доктор сказал: зашевелится, стреляйте…', 'анекдот--:::--Жила-была девочка, у нее были редкие жирные волосы, большие на выкат глаза, большой нос, тонкие губы, широкие плечи, тонкие руки, маленькая грудь, большой живот и кривые, волосатые ноги. Ее можно было назвать некрасивой девочкой, если бы не ее улыбка… Улыбка ее делала просто отвратительной…', 'анекдот--:::--Черепашки-ниндзя нападали вчетвером на одного, потому что у них тренер был крыса.'][rand]);
        }else if(slovo == 'какие команды тебе можно задать'){
          robot.style.height = '191px';
          robot.style.top = 'calc(85% - 114px)';
          if(window.innerWidth <= 420) {
            robot.style.height = '190px';
            robot.style.top = 'calc(85% - 121px)';
          }
          xosq(`Привет меня зовут ${robname} я виртуальный помощник, я создан чтобы помогать вам с небольшими задачами, Вот что я умею делать,\n команда--перевести на армянский(текст),\n команда--перевести на английский(текст),\n команда--расскажи анекдот, \n команда--(вами сказанные цифры)драм в долларах, \n команда--(вами сказанные цифры)рублей в драмах, \n команда--курс рубля в долларах, \n команда--курс доллара в драмах, \n команда--курс доллара в рублях, \n команда--курс драма в рублях, \n команда--курс рубля в драмах, \n команда--поиск(текст), \n команда--открыть instagram, \n команда--открыть facebook, \n команда--открыть google, \n команда--открыть youtube, \n команда--сколько времени, \n команда--какой сегодня день, \n команда--кто твой создатель, \n команда--скажи рандомную цифру от (вами заданная цифра) до (вами заданная цифра), \n команда--скажи слово(текст), \n команда--скажи что я("я" заменит на "ты" и текст), \n команда--скажи что ты("ты" заменит на "я" и текст), \n команда--голос, \n команда--расскажи о своей имени, \n команда--как тебя зовут, \n команда--${robname}, \n команда--как дела, как настроение, как дела ${robname}, и так далее, \n команда--привет, дружище, здравствуй ${robname}, и так далее, \n команда--какие команды тебе можно задать, \n команда--ты женщина, ты мужчина, ты мальчик, ты девочка, \n команда--поставь таймер на (0-10 минуты) и (0-60 секунды), \n команда--сколько будет(математическое выражение(цифры и / * + -)), \n команда--какая температура в ("город"), какая погода в ("город") \n команда--искать в youtube(текст)\n------------------------------------------------------------------------------------------------`);
        } else if(slovo.slice(0, 21) == 'переводи на армянский' || slovo.slice(0, 21) == 'переведи на армянский' || slovo.slice(0, 22) == 'перевести на армянский'){
          window.open(`https://translate.google.com/?sl=ru&tl=hy&text=${slovo.slice(22)}&op=translate`)
        } else if(slovo.slice(0, 22) == 'переведи на английский' || slovo.slice(0, 22) == 'переводи на английский' || slovo.slice(0, 23) == 'перевести на английский'){
          window.open(`https://translate.google.com/?sl=ru&tl=en&text=${slovo.slice(22)}&op=translate`)
        } else{
          xosq('я вас не понимаю');
        }
      }else if(result.isFinal && boollang){
        if(slovo == 'greetings' || slovo == 'hi' || slovo == 'hello' || slovo == 'good morning' || slovo == 'hello world' || slovo == `hello ${robname}` || slovo == `hi ${robname}` || slovo == `good morning ${robname}`){
          xosq(['welcome', 'hello host', 'good afternoon', 'hi'][rand]);     
        }else if(slovo == 'how are you' || slovo == 'how are you doing' || slovo == 'how are things' || slovo == 'how is your mood' || slovo == `how are you ${robname}` || slovo == `how are you doing ${robname}` || slovo == `how are things ${robname}` || slovo == `how is your mood ${robname}`){
            xosq(['magnificently', 'wellv', 'OK, thanks for your interest.', 'if it stays like that it will be ok'][rand]);
        }else if(slovo == robname){
          xosq(['Yes', 'its me', 'Im listening', 'waiting for instructions'][rand]);
        }else if(slovo == 'jessica' && robname == 'michael'){
          xosq(['What kind of Jessica am I Michael', 'I dont know who you are talking about', 'Jessica is not at home', 'I took his place'][rand]);
        }else if(slovo == 'michael' && robname == 'jessica'){
          xosq(['What kind of Michael am I Jessica', 'I dont know who you are talking about', 'Michael is not at home', 'I took his place'][rand]);
        }else if(slovo == 'Whats your name' || slovo == 'who are you' || slovo == 'what is your name'){
          if(artcant == 0) {
            xosq(`Hello, my name is ${robname}, I am a personal assistant, I will be happy to help.`);
            artcant++;
          }else if(artcant == 1) {
            xosq('weve already met');
            artcant++;
          }else if(artcant == 2) {
            xosq('I wont get acquainted anymore');
            artcant = 0;
          }
        }else if(slovo.includes('set a timer')){
          let min = slovo.slice(slovo.indexOf('for')+3, slovo.indexOf('minutes'));
          let sec = slovo.slice(slovo.indexOf('and')+3, slovo.indexOf('seconds'));
          timerfunction(min, sec, slovo);
        } else if(slovo.includes('tell me about your name') || slovo.includes('what means your name') || slovo.includes('tell about your name') || slovo.includes('talk about your name ')){
          robname == 'jessica' ? xosq('The first recorded instance of the name Jessica is in William Shakespeares play "The Merchant of Venice," where Jessica is the daughter of the Jewish moneylender Shylock. It is believed that Shakespeare created this name by anglicizing the spelling of the biblical name Iscah, which means “vision” or “sight” in Hebrew. The meaning of the name Jessica is also translated as "God beholds" or "wealthy."'):xosq('The name Michael is of Hebrew origin and means “who is like God?” or “gift from God.” It is found in the Old Testament, notably in the Book of Daniel. Gender: Michael is historically the masculine form of the name.');
        }else {
          xosq('I do not understand');
        }
      }
    };
  