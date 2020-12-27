import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    current: {
      location: {
        woeid: "",
        query: "",
        position: {}
      },
      weather: {
        air_pressure: 0,
        humidity: 0,
        the_temp: 0,
        visibility: 0,
        wind_speed: 0,
        fahrenheit: 0
      },
    },
    searchModal: false,
    api: {
      apiURL: "https://www.metaweather.com/api/location",
      corsURL: "https://cors-anywhere.herokuapp.com"
    },
    locations: {},
    forecast: {},
    isCelcius: true
  },
  mutations: {
    SAVE_COORDS(state, coords) {
      state.current.location.position = coords
    },
    SAVE_WOEID(state, locations) {
      state.current.location.woeid = locations
    },
    SAVE_CITY(state, city) {
      state.current.location.cityName = city;
    },
    SAVE_CURRENT(state, current) {
      state.current.weather = current
    },
    SAVE_FORECAST(state, infos) {
      state.forecast = infos
    },
    SEARCH_MODAL(state, boolean) {
      state.searchModal = boolean
    },
    SAVE_QUERY(state, query) {
      state.current.location.query = query
    },
    IS_CELCIUS(state, boolean) {
      state.isCelcius = boolean
    },
    SAVE_TEMP_F(state, number) {
      state.current.weather.fahrenheit = number
    }
   },
  actions: {
    getLocationByQuery({ commit, dispatch, state }) {
      axios.get(`${state.api.corsURL}/${state.api.apiURL}/search/?query=${state.current.location.query}`)
      .then(result => {
        commit("SAVE_WOEID", result.data[0].woeid);
        dispatch("getInfos");
      })
      .catch(error => {
        console.log(error)
      })
    },
    getUserLocations({ commit, dispatch }) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let coords = {
            Latitude: Math.round(position.coords.latitude),
            Longitude: Math.round(position.coords.longitude)
          } 
          commit("SAVE_COORDS", coords);
          dispatch("searchLocationByCoords");
        }
      )
    },
    searchLocationByCoords({ commit, dispatch, state }) {
      axios.get(`${state.api.corsURL}/${state.api.apiURL}/search/?lattlong=${state.current.location.position.Latitude},${state.current.location.position.Longitude}`)
      .then(result => {
        commit("SAVE_WOEID", result.data[0].woeid);
        dispatch("getInfos");
      })
      .catch(error => {
        console.log(error);
      })
    },
    getInfos({ commit, dispatch, state}) {
      axios.get(`${state.api.corsURL}/${state.api.apiURL}/${state.current.location.woeid}`)
      .then(result => {
        commit("SAVE_CITY", result.data.title);
        commit("SAVE_CURRENT", result.data.consolidated_weather[0]);
        commit("SAVE_FORECAST", result.data.consolidated_weather.splice(1));
        dispatch("convertToF");
      })
      .catch(error => {
        console.log(error);
      })
    },
    convertToF({ commit, state}) {
      const temp = state.current.weather.the_temp;
      var today = ((temp * 9/5) + 32);
      // const temptmr = state.forecast[0].min_temp
      // var tmr = ((temptmr * 9/5) +32)

      commit("SAVE_TEMP_F", today)
    }
  },
  modules: {}
})

