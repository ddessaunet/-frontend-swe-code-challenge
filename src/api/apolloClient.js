import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://countries-274616.ew.r.appspot.com",
});

export default client;
