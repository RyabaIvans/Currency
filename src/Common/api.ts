import axios from "axios";

export const instance = axios.create({
    baseURL:
        "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",

});