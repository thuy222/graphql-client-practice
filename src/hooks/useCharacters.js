import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

function useCharacters() {
  const { data, error, loading } = useQuery(GET_CHARACTERS);

  return { data, error, loading };
}

export default useCharacters;
