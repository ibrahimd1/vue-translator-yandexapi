import axios from "axios";

export const CONST = {
  APIBASE: "https://translate.yandex.net/api/v1.5/tr.json",
  APIKEY:
    "trnsl.1.1.20200206T194222Z.62cc025e212a2edc.49d75022133a5fb2b180bf40c882ed19e5775600"
};

export const httpAxios = axios.create({
  baseURL: CONST.APIBASE
});
