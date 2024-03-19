import { UseQueryResult } from "@tanstack/react-query";

export function RenderQuery(props: { response: UseQueryResult, children: React.ReactNode, renderError?: React.FunctionComponent }) {
  const { response, children } = props;
  if (response.isLoading) {
    return <div>Loading</div>
  }
  if (response.isError) {
    if (props.renderError) {
      return props.renderError(response)
    }
    return <div>Error</div>
  }
  return children;
}
