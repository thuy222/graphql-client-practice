import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        name
        episode
      }
    }
  }
`;

function useCharacters(id) {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  return { data, error, loading };
}

export default useCharacters;
