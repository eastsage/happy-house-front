import { apiInstance, houseInstance } from "./index.js";

const api = apiInstance();
const house = houseInstance();

function sidoList(success, fail) {
    api.get(`/map/sido`).then(success).catch(fail);
}

function gugunList(params, success, fail) {
    api.get(`/map/gugun`, { params: params }).then(success).catch(fail);
}

function dongList(params, success, fail) {
    api.get(`/map/dong`, { params: params }).then(success).catch(fail);
}

function houseList(params, success, fail) {
    console.log(params);
    house.get(`/map/house-list`, { params: params }).then(success).catch(fail);
}

async function getHouseDeal(aptCode, success, fail) {
    await house.get(`/map/detailApt/${aptCode}`).then(success).catch(fail);
}

async function getHouseGraph(aptCode, success, fail) {
    console.log(aptCode);
    await house.get(`/map/detailApt/graph/${aptCode}`).then(success).catch(fail);
}


export { sidoList, gugunList, dongList, houseList , getHouseDeal, getHouseGraph};
