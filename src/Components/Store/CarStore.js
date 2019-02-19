import { observable } from 'mobx';

class CarStore {
  @observable audi = [
    { 
      src: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/2d74d13d202e5b86ab2aa155e1afec26.png',
      name: 'Audi A4',
      link: 'https://www.audi.com/en/experience-audi/models-and-technology/serial-models/a4.html'  
    },
    {
      src: 'https://www.cstatic-images.com/car-pictures/xl/usc80auc194a021001.png',
      name: 'Audi A5',
      link: 'https://www.audi.com/en/experience-audi/models-and-technology/serial-models/a5.html'
    },
    {
      src: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/2123ef0032ec5488a23b9785b0d2dc0b.png',
      name: 'Audi A6',
      link: 'https://www.audi.com/en/experience-audi/models-and-technology/serial-models/a6.html'
    },
    {
      src: 'https://st.motortrend.ca/uploads/sites/10/2015/11/2016-audi-a8-l-42-sedan-angular-front.png',
      name: 'Audi A8',
      link: 'https://www.audi.com/en/experience-audi/models-and-technology/serial-models/a8.html'
    }
  ];

  @observable bmw = [
    {
      src: 'https://www.bmw.com.mx/content/dam/bmw/common/all-models/m-series/m2-coupe/2018/navigation/bmw-m-series-m2-modelcard.png',
      name: 'BMW M2',
      link: 'https://www.bmw.com/en/bmw-models/2-series-coupe.html'
    }, 
    {
      src: 'https://www.bmw.com.ph/content/dam/bmw/common/all-models/4-series/gran-coupe/2017/navigation/BMW-4-Series-Gran-Coupe-ModelCard.png',
      name: 'BMW M4',
      link: 'https://www.bmw.com/en/bmw-models/4-series-gran-coupe.html'
    },
    {
      src: 'https://www.bmw.hr/content/dam/bmw/common/all-models/6-series/gran-coupe/2014/model-card/BMW-6-Series-Gran-Coupe_ModelCard.png',
      name: 'BMW M6',
      link: 'https://www.bmw.com/en/bmw-models/6-series-gran-turismo.html'
    },
    {
      src: 'https://www.cstatic-images.com/car-pictures/xl/cac50bms211a021001_2.png',
      name: 'BMW X6',
      link: 'https://www.bmw.com/en/bmw-models/x6.html'
    }
  ];

  @observable mercedes = [
    {
      src: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/66cdc4161953123dcba33d70e651c6fe.png',
      name: 'Mercedes C-Class',
      link: 'https://www.mercedes-benz.com/en/mercedes-benz/vehicles/passenger-cars/c-class/'
    },
    {
      src: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/4252c87d46e34fd451f7952499f1ea8d.png',
      name: 'Mercedes GLA',
      link: 'https://www.mercedes-benz.com/en/mercedes-benz/vehicles/passenger-cars/gla-class/'
    },
    {
      src: 'https://st.motortrend.com/uploads/sites/10/2017/12/2018-mercedes-benz-g-class-amg-63-suv-angular-front.png',
      name: 'Mercedes G-Class',
      link: 'https://www.mercedes-benz.com/en/mercedes-benz/vehicles/passenger-cars/g-class/'
    },
    {
      src: 'https://st.motortrend.ca/uploads/sites/10/2015/11/2016-mercedes-benz-slkclass-slk350-roadster-angular-front.png',
      name: 'Mercedes SLC',
      link: 'https://www.mercedes-benz.com/en/mercedes-benz/vehicles/passenger-cars/slc/'
    }
  ];

  @observable volkswagen = [
    {
      src: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/146cd1ebb16b20dd416b9e53a3158e2a.png',
      name: 'VW Beetle',
      link: 'https://www.vw.com/models/beetle/section/overview/'
    },
    {
      src: 'https://www.amsrentacar.ro/admin/upload/1/flota_auto/Golf7/car-rental-bucharest-otopeni-vw-golf-7.png',
      name: 'VW Golf VII',
      link: 'https://www.vw.com/models/golf/section/overview/'
    },
    {
      src: 'https://st.motortrend.com/uploads/sites/10/2018/06/2019-volkswagen-jetta-s-sedan-angular-front.png',
      name: 'VW Jetta',
      link: 'https://www.vw.com/models/jetta/'
    },
    {
      src: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/9b0b34ba88066aadf8fccd2cccbe9083.png',
      name: 'VW Passat',
      link: 'https://www.vw.com/models/passat/'
    }
  ];
}

const store = new CarStore();
export default store;