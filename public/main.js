'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;
(function ($) {
  function setCache(data, id) {
    data.id = id;
    console.log(data.id);
    var cacheObj = localStorage.getItem('phoneCache') ? localStorage.getItem('phoneCache') : {};
    if (!cacheObj.length) {
      cacheObj[data.id] = data;
      cacheObj = JSON.stringify(cacheObj);
      localStorage.setItem('phoneCache', cacheObj);
    } else {
      var parsedCache = JSON.parse(cacheObj);
      if (parsedCache[data.id]) {
        return false;
      } else {
        parsedCache[data.id] = data;
        localStorage.setItem('phoneCache', JSON.stringify(parsedCache));
        return true;
      }
    }
  }
  function getCache(id) {
    var cacheObj = localStorage.getItem('phoneCache') ? JSON.parse(localStorage.getItem('phoneCache'))[id] : false;
    return cacheObj;
  }

  function detectPhoneType(loadedPhone) {
    var phone = void 0;
    if (loadedPhone.smartphone) {
      phone = new SmartPhone(loadedPhone);
    } else {
      phone = new CellPhone(loadedPhone);
    }
    return phone;
  }

  var SideBarBrandGroup = function () {
    function SideBarBrandGroup(brandItem) {
      _classCallCheck(this, SideBarBrandGroup);

      this.title = brandItem.title;
      this.template = '<div class="brand-item">\n      <h2 class="brand-item__title">' + this.title + '</h2>\n      <ul class="brand-item__list">\n        ' + this.makePhoneList(brandItem.phones).innerHTML + '\n      </ul>\n\n    </div>';
    }

    _createClass(SideBarBrandGroup, [{
      key: 'makePhoneList',
      value: function makePhoneList(phonesList) {
        var $list = document.createElement('ul');

        phonesList.forEach(function (phone) {
          var $listItem = document.createElement('li');
          $listItem.setAttribute('class', 'brand-item__list-item');
          $listItem.setAttribute('data-link', phone.link);
          $listItem.setAttribute('data-id', phone.id);
          $listItem.innerHTML = phone.title;
          $list.appendChild($listItem);
        });
        return $list;
      }
    }, {
      key: 'makeMarkUp',
      value: function makeMarkUp() {
        $('.sidebar').append(this.template);
      }
    }]);

    return SideBarBrandGroup;
  }();

  var CellPhone = function () {
    function CellPhone(phone) {
      _classCallCheck(this, CellPhone);

      this.screenType = phone.screenType;
      this.screenRes = phone.screenRes;
      this.netWorkType = phone.netWorkType;
      this.image = phone.image;
      this.simFormat = phone.simFormat;
      this.camera = phone.camera;
      this.memoryCard = phone.memoryCard;
      this.internet = phone.internet;
      this.battery = phone.battery;
      this.title = phone.title;
      this.additionalContent = this.makeAditionalMarkup();
    }

    _createClass(CellPhone, [{
      key: 'makeDefaultMarkup',
      value: function makeDefaultMarkup() {
        return '<div class="phone-description">\n    <div class="phone-description__img-container">\n      <img src=\'/assets/' + this.image + '\' alt=\'' + this.title + '\' class=\'phone-description__img\'>\n    </div>\n    <div class=\'phone-description__content\'>\n      <h3 class="phone-description__title">\n        ' + this.title + '\n      </h3>\n      <p class="phone-property">\n        <strong class="phone-property__key">\u0422\u0438\u043F \u042D\u043A\u0440\u0430\u043D\u0430: </strong> <span class="phone-property__value">' + this.screenType + '</span>\n      </p>\n      <p class="phone-property">\n        <strong class="phone-property__key">\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u042D\u043A\u0440\u0430\u043D\u0430: </strong> <span class="phone-property__value">' + this.screenRes + '</span>\n      </p>\n      <p class="phone-property">\n        <strong class="phone-property__key">\u0422\u0438\u043F \u0421\u0438\u043C-\u043A\u0430\u0440\u0442\u044B: </strong> <span class="phone-property__value">' + this.simFormat + '</span>\n      </p>\n      <p class="phone-property">\n        <strong class="phone-property__key">\u0422\u0438\u043F \u0410\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430: </strong> <span class="phone-property__value">' + this.battery.type + '</span>\n      </p>\n      <p class="phone-property">\n        <strong class="phone-property__key">\u0415\u043C\u043A\u043E\u0441\u0442\u044C \u0410\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430: </strong> <span class="phone-property__value">' + this.battery.space + 'mAh</span>\n      </p>\n      <p class="phone-property">\n        <strong class="phone-property__key">\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442 \u0441\u0435\u0442\u0438: </strong> <span class="phone-property__value">' + this.netWorkType + '</span>\n      </p>\n      ' + this.additionalContent + '\n    </div>\n    </div>';
      }
    }, {
      key: 'makeAditionalMarkup',
      value: function makeAditionalMarkup() {
        var additionalContent = '';
        if (this.camera.status) {
          additionalContent += '\n      <p class="phone-property">\n        <strong class="phone-property__key">\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043A\u0430\u043C\u0435\u0440\u044B: </strong> <span class="phone-property__value">' + this.camera.resolution + 'mpx</span>\n      </p>';
        }
        if (this.memoryCard.status) {
          additionalContent += '\n      <p class="phone-property">\n        <strong class="phone-property__key">\u0422\u0438\u043F \u043A\u0430\u0440\u0442\u044B \u043F\u0430\u043C\u044F\u0442\u0438: </strong> <span class="phone-property__value">' + this.memoryCard.format + '</span>\n      </p>\n      <p class="phone-property">\n        <strong class="phone-property__key">\u041E\u0431\u044A\u0435\u043C \u043A\u0430\u0440\u0442\u044B \u043F\u0430\u043C\u044F\u0442\u0438: </strong> <span class="phone-property__value">' + this.memoryCard.memorySpace + 'gb</span>\n      </p>';
        }
        if (this.internet.status) {
          additionalContent += '\n      <p class="phone-property">\n        <strong class="phone-property__key">\u0422\u0438\u043F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443: </strong> <span class="phone-property__value">' + this.internet.type + '</span>\n      </p>';
        }
        return additionalContent;
      }
    }]);

    return CellPhone;
  }();

  var SmartPhone = function (_CellPhone) {
    _inherits(SmartPhone, _CellPhone);

    function SmartPhone(phone) {
      _classCallCheck(this, SmartPhone);

      var _this = _possibleConstructorReturn(this, (SmartPhone.__proto__ || Object.getPrototypeOf(SmartPhone)).call(this, phone));

      _this.os = phone.os;
      return _this;
    }

    _createClass(SmartPhone, [{
      key: 'smartPhoneContent',
      value: function smartPhoneContent() {
        var $markup = $(this.makeDefaultMarkup());
        var additionalContent = '\n    <p class="phone-property">\n      <strong class="phone-property__key">\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430: </strong> <span class="phone-property__value">' + this.os.name + ' ' + this.os.version + '</span>\n    </p>\n    ';
        $markup.find('.phone-property').last().after(additionalContent);
        return $markup;
      }
    }]);

    return SmartPhone;
  }(CellPhone);

  $(function () {
    //document.ready
    $.get('/mock/common.json', function (response) {
      var data = response;
      var $sidebar = $('.sidebar');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data.brands[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var brand = _step.value;

          var brandItem = new SideBarBrandGroup(brand);
          brandItem.makeMarkUp();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });

    /* toggle between brands */
    $(document).on('click', '.brand-item .brand-item__title', function () {
      var $self = $(this).closest('.brand-item');
      $self.find('.brand-item__list').slideDown();
      $self.siblings().find('.brand-item__list').slideUp();
    });
    /* toggle between brands */

    /*  load data of current model */
    $(document).on('click', '.brand-item__list-item', function () {
      var $linkEl = $(this);
      var linkAdress = '/mock/' + $linkEl.data('link') + '.json';
      var id = $linkEl.data('id');
      var cached = getCache(id);
      if (cached) {
        $('.content').find('.phone-description').remove();
        $('.content').addClass('content_loading');
        var phone = detectPhoneType(cached);
        var phoneMarkup = void 0;
        try {
          phoneMarkup = phone.smartPhoneContent();
        } catch (e) {
          phoneMarkup = phone.makeDefaultMarkup();
        }
        $('.content').html(phoneMarkup);
        $('.content').removeClass('content_loading');
      } else {
        $('.content').addClass('content_loading');
        $.get(linkAdress, function (response) {
          var phone = detectPhoneType(response);
          var phoneMarkup = void 0;
          try {
            phoneMarkup = phone.smartPhoneContent();
          } catch (e) {
            phoneMarkup = phone.makeDefaultMarkup();
          }
          $('.content').html(phoneMarkup);
          $('.content').removeClass('content_loading');
          setCache(response, id);
        }).fail(function () {
          alert('error');
        });
      }
    });
    /*  load data of current model */
  });
})(jQuery);