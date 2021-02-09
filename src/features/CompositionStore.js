import { makeAutoObservable, toJS } from 'mobx';

class CompositionStore {
  totalData = [];
  servicesArray = [];

  constructor(servicesObj) {
    makeAutoObservable(this);
    // const {
    //   starshipsService,
    //   peopleService,
    //   planetsService,
    //   filmsService,
    //   speciesService,
    //   vehiclesService,
    // } = servicesObj;

    for (let service in servicesObj) {
      this[service] = servicesObj[service];
      this.servicesArray.push(this[service]);
    }
    /* this.starshipsService = starshipsService;
    this.peopleService = peopleService;
    this.planetsService = planetsService;
    this.filmsService = filmsService;
    this.speciesService = speciesService;
    this.vehiclesService = vehiclesService; */
  }

  logServices() {
    console.log(this);
    console.log(toJS(this.servicesArray));
    this.a.arrowLog();
    this.a.regularLog();
  }

  setTotalData() {}
}

export default new CompositionStore({
  a: {
    something: 'yup',
    arrowLog: () => console.log(this),
    regularLog() {
      console.log(this);
    },
  },
});
