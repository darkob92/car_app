import { observable, action, computed} from 'mobx';

class CarStore {
  @observable audi = [
    { 
      src: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/2d74d13d202e5b86ab2aa155e1afec26.png',
      name: 'Audi A4',  
    },
    {
      src: 'https://www.cstatic-images.com/car-pictures/xl/usc80auc194a021001.png',
      name: 'Audi A5',
    },
    {
      src: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/2123ef0032ec5488a23b9785b0d2dc0b.png',
      name: 'Audi A6',
    },
    {
      src: 'https://st.motortrend.ca/uploads/sites/10/2015/11/2016-audi-a8-l-42-sedan-angular-front.png',
      name: 'Audi A8',
    }
  ];

  @observable bmw = [
    {
      name: 'Bmw Darko'
    }
  ];

  @computed get carCount() {
    return this.audi.length;
  }
}

const store = new CarStore();
export default store;