import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_USER = gql`
  {
    user {
      id
      name
    }
  }
`;
const Q: React.ComponentType<{ query: any; ssr?: boolean }> = Query as any;

export default () => {
  return (
    <Q query={GET_USER} ssr={true}>
      {props => {
        if (props.loading) {
          return "Loading...";
        }
        return `Hello, ${props.data.user.name} - ${props.data.user.id}`;
      }}
    </Q>
  );
};
