"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider =
/*#__PURE__*/
function () {
  // Конструктор класс для инициализаций своиств
  function Slider(itemImg, itemPage, itemBtn) {
    _classCallCheck(this, Slider);

    this.itemImg = document.querySelectorAll(itemImg);
    this.itemPage = document.querySelectorAll(itemPage);
    this.itemBtn = document.querySelectorAll(itemBtn);
    this.index = 0;
    this.interval = 5000;
    this.activeImg = null;
    this.activePage = null;
    this.img = null;
    this.page = null;
  } // Функция Обертка для изменения класса у обьектов


  _createClass(Slider, [{
    key: "inits",
    value: function inits(obj, style, index) {
      obj[index].className = style;
    } // Функция задания класс активного для картинок

  }, {
    key: "classActiveImg",
    value: function classActiveImg(activeImg) {
      this.activeImg = activeImg;
    } // Функция задания класс активного для кнопок снизу

  }, {
    key: "classActivePage",
    value: function classActivePage(activePage) {
      this.activePage = activePage;
    }
  }, {
    key: "classImg",
    value: function classImg(img) {
      this.img = img;
    }
  }, {
    key: "classPage",
    value: function classPage(page) {
      this.page = page;
    } // Функция проверка кнопок нажатия

  }, {
    key: "nextBtn",
    value: function nextBtn(e, index, size) {
      if (e.dataset.target === "prev") {
        --index;
        if (index < 0) index = size - 1;
      } else if (e.dataset.target === "next") {
        ++index;
        if (index > size - 1) index = 0;
      } else {
        index = parseInt(e.dataset.target);
      }

      return index;
    } // Функция запуска Слайдера

  }, {
    key: "start",
    value: function start() {
      // Переменные нужны для получение по ссылке обьекта Slider == this
      var inits = this.inits;
      var itemImg = this.itemImg;
      var itemBtn = this.itemBtn;
      var index = this.index;
      var itemPage = this.itemPage;
      var nextBtn = this.nextBtn;
      var activeImg = this.activeImg;
      var activePage = this.activePage;
      var img = this.img;
      var page = this.page;
      /* ===== События Click ===== */

      for (var i = 0; i < this.itemPage.length; i++) {
        this.itemPage[i].addEventListener("click", function (e) {
          e.stopPropagation();
          inits(itemImg, img, index);
          inits(itemPage, page, index);
          index = nextBtn(this, index);
          inits(itemImg, img + " " + activeImg, index);
          inits(itemPage, page + " " + activePage, index); // inits(itemText, text + " "  + activeText, index);
        });
      }

      for (var i = 0; i < this.itemBtn.length; i++) {
        this.itemBtn[i].addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          inits(itemImg, img, index);
          inits(itemPage, page, index); // inits(itemText, text, index);

          index = nextBtn(this, index, itemImg.length);
          inits(itemImg, img + " " + activeImg, index);
          inits(itemPage, page + " " + activePage, index); // inits(itemText, text + " "  + activeText, index);
        });
      }
      /* ===== События Click ===== */

    }
  }]);

  return Slider;
}();
/* ===== Конец класса SLider ===== */
// Конструктор принемает 3 параметра классы Картинок, Кнопок снизу и Боковых кнопок


var slider = new Slider(".slider__item", ".sliderDots__item", '.slider__btn'); // по умолчанию в конструкторе 5секунд можна задать другое время
// методы для задания активного класса для картинок и кнопок снизу Обезательнно

slider.classImg("slider__item");
slider.classPage("sliderDots__item");
slider.classActiveImg("opacity");
slider.classActivePage("sliderDots__item_active"); // метод для запуска Обьекта slider

slider.start();