import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    currentDay: {
      woeid: "",
      cityName: "",
      currentDate: "",
      currentTemp: 0,
      weatherState: "",
      humidity: "",
      windspeed: "",
      visibility: "",
      airpressure: ""
    },
    searchModal: false,
    api: {
      apiURL: "https://www.metaweather.com/api/location",
      corsURL: "https://cors-anywhere.herokuapp.com"
    },
    coords: {
      latitude: "",
      longitude: ""
    },
    locations: {},
    forecast: {}
  },
  mutations: {
    SAVE_CITY(state, city) {
      state.currentDay.cityName = city;
    },
    SAVE_DATE(state, date) {
      state.currentDay.currentDate = date;
    },
    SAVE_TEMPS(state, temp) {
      state.currentDay.currentTemp = temp;
    },
    SAVE_WEATHERSTATE(state, weatherState) {
      state.currentDay.weatherState = weatherState;
    },
    SAVE_WOEID(state, woeid) {
      state.currentDay.woeid = woeid;
    },
    SEARCH_MODAL(state, boolean) {
      state.searchModal = boolean
    },
    SAVE_COORDS(state, coords) {
      state.coords = coords
    },
    SAVE_LOCATIONS(state, locations) {
      state.locations = locations
    },
    SAVE_FORECAST(state, infos) {
      state.forecast = infos
    },
    SAVE_HUMIDITY(state, humidity) {
      state.currentDay.humidity = humidity
    },
    SAVE_WINDSPEED(state, windspeed) {
      state.currentDay.windspeed = windspeed
    },
    SAVE_VISIBILITY(state, visibility) {
      state.currentDay.visibility = visibility
    },
    SAVE_AIRPRESSURE(state, airpressure) {
      state.currentDay.airpressure = airpressure
    }
  },
  actions: {
    async getUserLocations({ commit, dispatch }) {
      await navigator.geolocation.getCurrentPosition(
        (position) => {
          let coords = {
            Latitude: position.coords.latitude,
            Longitude: position.coords.longitude
          } 
          commit("SAVE_COORDS", coords);
          dispatch("searchLocationByCoords");
        }
      )
    },
    async searchLocationByCoords({ commit, dispatch, state }) {
      await axios.get(`${state.api.corsURL}/${state.api.apiURL}/search/?lattlong=${state.coords.Latitude},${state.coords.Longitude}`)
      .then(result => {
        commit("SAVE_LOCATIONS", result.data[0].woeid);
        dispatch("getInfos");
      })
      .catch(error => {
        console.log(error);
      })
    },
    async getInfos({ commit, state }) {
      await axios.get(`${state.api.corsURL}/${state.api.apiURL}/${state.locations}`)
      .then(result => {
        commit("SAVE_CITY", result.data.title);
        commit("SAVE_TEMPS", Math.round(result.data.consolidated_weather[0].the_temp));
        commit("SAVE_WEATHERSTATE", result.data.consolidated_weather[0].weather_state_name);
        commit("SAVE_DATE", result.data.consolidated_weather[0].applicable_date);
        commit("SAVE_FORECAST", result.data.consolidated_weather.splice(1));
        commit("SAVE_HUMIDITY", Math.round(result.data.consolidated_weather[0].humidity));
        commit("SAVE_WINDSPEED", Math.round(result.data.consolidated_weather[0].wind_speed));
        commit("SAVE_VISIBILITY", Math.round(result.data.consolidated_weather[0].visibility));
        commit("SAVE_AIRPRESSURE", Math.round(result.data.consolidated_weather[0].air_pressure));
      
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  modules: {
  }
})

