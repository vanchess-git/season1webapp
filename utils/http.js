import {fetch} from "react-native/Libraries/Network/fetch";

const doFetch = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      // http status code 4xx or 5xx
      throw new error(data.message)
    }
  } catch (error) {
      throw new error(error.message)
  }
};

export {doFetch};
