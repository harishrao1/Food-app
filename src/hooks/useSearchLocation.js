
import { LOCATION_API } from "../utils/constants";

const useSearchLocation = async (searchQuery, setSearchData) => {
  try {
    if (searchQuery !== "" && searchQuery?.length > 2) {
      const res = await fetch(LOCATION_API + searchQuery);
      if (!res.ok) {
        const error = res.status;
        throw new Error(error);
      } else {
        const json = await res.json();
        setSearchData(json?.data);
      }
    } else if (searchQuery === "") {
      setSearchData([]);
    }
  } catch (error) {
    console.log(error);
  }
};

export default useSearchLocation;
