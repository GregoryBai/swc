import { makeAutoObservable } from 'mobx';

class ApiStore {
  loading = false;
  data = [];

  constructor() {
    makeAutoObservable(this);
  }

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }

  setData(data) {
    this.data = data;
  }

  addData(data) {
    this.data = this.data.concat(data);
  }

  // ? 1) remove params?; 2) async/await with allSettled?; 3) errors?

  async fetchData(urls /* url, ...urls */) {
    let promiseArray;

    this.startLoading();
    /* promiseArray = urls.map(async (url) => await fetch(url));

    Promise.allSettled(promiseArray)
      .then((respArr) => {
        console.log(respArr);
        return respArr.map(async (resp) => {
          console.log(resp);
          return await resp.json();
        });
      })
      .then((arr) => arr.forEach(this.addData)); */

    /* promiseArray = urls
      .map(async (url) => await fetch(url))
      .then((resp) => resp.json());

    Promise.allSettled(promiseArray).then((respArr) => {
      console.log(respArr);
      this.addData(respArr);
    }); */

    promiseArray = urls.map(async (url) => {
      const resp = await fetch(url);
      const data = await resp.json();
      return data;
    });

    Promise.allSettled(promiseArray).then((arr) => {
      let formatted = arr.filter((pr) => pr.value).map((pr) => pr.value);
      console.log(formatted);

      this.setData(formatted);
    });
  }
}

export const apiStore = new ApiStore();
