import {fetch} from "react-native/Libraries/Network/fetch";
import {useEffect, useState} from "react";

const apiUrl = 'http://media.mw.metropolia.fi/wbma/';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    try {
      const response = await fetch(apiUrl + 'media?limit=5');
      const json = await response.json();
      console.log(json);
      const allMediaData = json.map(async (mediaItem) => {
        const response = await fetch(apiUrl + 'media/' + mediaItem.file_id);
        return await response.json();

      });
      setMediaArray(await Promise.all(allMediaData));

    } catch (error) {
      console.log('media fetch failed', error);
      // TODO kerrohan käyttäjälle jotain

    }
  }

  useEffect(() => {
    loadMedia();

  }, []);

  return {mediaArray};
};

const useUser = () => {
  //TODO jotain jotain
};

export {useMedia, useUser};
