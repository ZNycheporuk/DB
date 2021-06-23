const mongoose = require('mongoose');

const CityShema = new mongoose.Schema({
  name: {type: String, required: true},
  date: {type: String, required: true},
  AQI: {type: String, required: true},
  PM2_5: {type: String, required: true},
  PM10: {type: String, required: true},
  temperature: {type: String, required: true},
  pressure: {type: String, required: true},
  humidity: {type: String, required: true},
  stations: {type: [], required: true},
});


const CityModel = mongoose.model('mlab_cursach_bd_city', CityShema);

class City {
  constructor(name, date, AQI, PM2_5, PM10, temperature, pressure, humidity, stations) {
    this.name = name;
    this.date = date;
    this.AQI = AQI;
    this.PM2_5 = PM2_5;
    this.PM10 = PM10;
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;
    this.stations = stations;
  }

  static getById(id) {
    return CityModel.findById({_id: id});
  }

  static getByName(name) {
    return CityModel.findOne({name: name});
  }

  static getSomething(query) {
    return CityModel.find({}).select(query);
  }

  static getAllCities() {
    return CityModel.find();
  }

  static insert(city) {
    return new CityModel(city).save();
  }

  static findByDate(date) {
    return CityModel.find({date: date});
  }

  static findByAQI(aqi) {
    return CityModel.find({AQI: {$gt: aqi}});
  }

  static clearCities() {
    return CityModel.deleteMany({});
  }
}

module.exports = City;