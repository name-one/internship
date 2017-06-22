;
(($)=>{
  function setCache(data, id ){
    data.id = id;
    console.log(data.id)
    let cacheObj = localStorage.getItem('phoneCache') ? localStorage.getItem('phoneCache') : {};
    if( !cacheObj.length ){
      cacheObj[data.id] = data;
      cacheObj = JSON.stringify(cacheObj);
      localStorage.setItem('phoneCache', cacheObj);
    }else{
      let parsedCache = JSON.parse(cacheObj);
      if(parsedCache[data.id]){
        return false;
      }else{
        parsedCache[data.id] = data;
        localStorage.setItem('phoneCache', JSON.stringify(parsedCache));
        return true;
      }
    }
  }
  function getCache(id){
      let cacheObj = localStorage.getItem('phoneCache')? JSON.parse(localStorage.getItem('phoneCache'))[id]:false;
      return cacheObj
  }

  function detectPhoneType(loadedPhone){
    let phone;
    if(loadedPhone.smartphone){
      phone = new SmartPhone(loadedPhone)
    }else{
      phone = new CellPhone(loadedPhone);
    }
    return phone;
  }

class SideBarBrandGroup{
  constructor(brandItem){
    this.title = brandItem.title;
    this.template = `<div class="brand-item">
      <h2 class="brand-item__title">${this.title}</h2>
      <ul class="brand-item__list">
        ${this.makePhoneList(brandItem.phones).innerHTML}
      </ul>

    </div>`;
  }
  makePhoneList(phonesList){
    let $list = document.createElement('ul');

    phonesList.forEach((phone)=>{
      let $listItem = document.createElement('li');
      $listItem.setAttribute('class', 'brand-item__list-item');
      $listItem.setAttribute('data-link', phone.link);
      $listItem.setAttribute('data-id', phone.id);
      $listItem.innerHTML = phone.title;
      $list.appendChild($listItem);
    });
    return $list;
  }
  makeMarkUp(){
    $('.sidebar').append(this.template);
  }
}
class CellPhone{
  constructor(phone){
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
  makeDefaultMarkup(){
    return `<div class="phone-description">
    <div class="phone-description__img-container">
      <img src='/assets/${this.image}' alt='${this.title}' class='phone-description__img'>
    </div>
    <div class='phone-description__content'>
      <h3 class="phone-description__title">
        ${this.title}
      </h3>
      <p class="phone-property">
        <strong class="phone-property__key">Тип Экрана: </strong> <span class="phone-property__value">${this.screenType}</span>
      </p>
      <p class="phone-property">
        <strong class="phone-property__key">Разрешение Экрана: </strong> <span class="phone-property__value">${this.screenRes}</span>
      </p>
      <p class="phone-property">
        <strong class="phone-property__key">Тип Сим-карты: </strong> <span class="phone-property__value">${this.simFormat}</span>
      </p>
      <p class="phone-property">
        <strong class="phone-property__key">Тип Аккумулятора: </strong> <span class="phone-property__value">${this.battery.type}</span>
      </p>
      <p class="phone-property">
        <strong class="phone-property__key">Емкость Аккумулятора: </strong> <span class="phone-property__value">${this.battery.space}mAh</span>
      </p>
      <p class="phone-property">
        <strong class="phone-property__key">Стандарт сети: </strong> <span class="phone-property__value">${this.netWorkType}</span>
      </p>
      ${this.additionalContent}
    </div>
    </div>`
  }
  makeAditionalMarkup(){
    let additionalContent= '';
    if(this.camera.status){
      additionalContent += `
      <p class="phone-property">
        <strong class="phone-property__key">Разрешение камеры: </strong> <span class="phone-property__value">${this.camera.resolution}mpx</span>
      </p>`
    }
    if(this.memoryCard.status){
      additionalContent += `
      <p class="phone-property">
        <strong class="phone-property__key">Тип карты памяти: </strong> <span class="phone-property__value">${this.memoryCard.format}</span>
      </p>
      <p class="phone-property">
        <strong class="phone-property__key">Объем карты памяти: </strong> <span class="phone-property__value">${this.memoryCard.memorySpace}gb</span>
      </p>`
    }
    if(this.internet.status){
      additionalContent += `
      <p class="phone-property">
        <strong class="phone-property__key">Тип подключения к интернету: </strong> <span class="phone-property__value">${this.internet.type}</span>
      </p>`
    }
    return additionalContent;
  }
}
class SmartPhone extends CellPhone{
  constructor(phone){
    super(phone);
    this.os = phone.os;
  }
  smartPhoneContent(){
    let $markup = $(this.makeDefaultMarkup());
    let additionalContent = `
    <p class="phone-property">
      <strong class="phone-property__key">Операционная система: </strong> <span class="phone-property__value">${this.os.name} ${this.os.version}</span>
    </p>
    `;
    $markup.find('.phone-property').last().after(additionalContent);
    return $markup;
  }
}
 $(()=>{ //document.ready
   $.get('/mock/common.json',function(response){
     let data = response;
     let $sidebar = $('.sidebar');
     for( let brand of data.brands){
       let brandItem = new SideBarBrandGroup(brand);
       brandItem.makeMarkUp();
     }
   })

   /* toggle between brands */
   $(document).on('click', '.brand-item .brand-item__title', function(){
     let $self = $(this).closest('.brand-item');
     $self.find('.brand-item__list').slideDown();
     $self.siblings().find('.brand-item__list').slideUp();
   });
   /* toggle between brands */

  /*  load data of current model */
  $(document).on('click', '.brand-item__list-item', function(){
    let $linkEl = $(this);
    let linkAdress = `/mock/${$linkEl.data('link')}.json`;
    let id = $linkEl.data('id');
    let cached = getCache(id);
    if(cached){
      $('.content').find('.phone-description').remove();
      $('.content').addClass('content_loading')
      let phone = detectPhoneType(cached);
      let phoneMarkup;
      try{
        phoneMarkup = phone.smartPhoneContent();
      }catch(e){
        phoneMarkup = phone.makeDefaultMarkup();
      }
      $('.content').html(phoneMarkup);
      $('.content').removeClass('content_loading');
    }else{
      $('.content').addClass('content_loading')
      $.get(linkAdress, function(response){
        let phone = detectPhoneType(response);
        let phoneMarkup;
        try{
          phoneMarkup = phone.smartPhoneContent();
        }catch(e){
          phoneMarkup = phone.makeDefaultMarkup();
        }
        $('.content').html(phoneMarkup);
        $('.content').removeClass('content_loading');
        setCache(response, id);
      }).fail( ()=>{
        alert('error')
      });
    }
  })
  /*  load data of current model */
 })

})(jQuery)
