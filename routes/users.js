var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	key: 1,
  	bookName: "Чистый код",
    author: "Роберт Мартин",
    dataBook: "2019",
    data: "12.12.1952",
    deathData: '',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Robert_Cecil_Martin.png/274px-Robert_Cecil_Martin.png'
  }, {
  	key: 2,
  	bookName: "Язык программирования С",
    author: "Брайан Керниган",
    dataBook: "2019",
    data: "01.01.1942",
    deathData: '',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Brian_Kernighan_in_2012_at_Bell_Labs_1.jpg/274px-Brian_Kernighan_in_2012_at_Bell_Labs_1.jpg'
  }, {
    key: 3,
    bookName: "Совершенный код",
    author: "Стив Макконнелл",
    data: "03.09.1962",
    dataBook: "2017",
    deathData: '',
    img: 'https://img.yakaboo.ua/media/entity/author/cache/1/image/228x300/234c7c011ba026e66d29567e1be1d1f7/s/t/steve_mcconnell_01.jpg'
  }, {
    key: 4,
    bookName: "Java. Эффективное программирование",
    author: "Джошуа Блох",
    data: "28.08.1961",
    dataBook: "2018",
    deathData: '',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Joshuabloch.jpg/274px-Joshuabloch.jpg',
  }, {
    key: 5,
    bookName: "Код. Тайный язык информатики",
    author: "Чарльз Петцольд",
    dataBook: "2019",
    data: "02.02.1953",
    deathData: '',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Charles_Petzold_by_Michael_Neel.jpg/274px-Charles_Petzold_by_Michael_Neel.jpg'
  }]);
});

module.exports = router;
