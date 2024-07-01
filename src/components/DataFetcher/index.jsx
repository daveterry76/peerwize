import useSWR from "swr";

import Spinner from "../Spinner";

function DataFetcher({ url, buildUI }) {
  const { data, error, isLoading, mutate } = useSWR(url);

  if (isLoading)
    return (
      <div className="flex center mt-12">
        <Spinner />
      </div>
    );

  if (error)
    return (
      <div className="center-text">
        {error.response?.data?.errorMessage ||
          error.response?.data ||
          "An error occurred. Please try again"}
      </div>
    );

  return buildUI(data, mutate);
}

export default DataFetcher;
