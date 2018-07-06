import { Query } from "react-apollo";
import getUser from "../queries/getUser.graphql";
import { getUser as GetUserType } from "../queries/__generated__/getUser";

const Q: React.ComponentType<{ query: any; ssr?: boolean }> = Query as any;

export default () => {
  return (
    <Q query={getUser} ssr={true}>
      {(props: { loading: boolean; data: GetUserType }) => {
        if (props.loading) {
          return "Loading...";
        }
        return `Hello, ${props.data.user.name} - ${props.data.user.id}`;
      }}
    </Q>
  );
};
