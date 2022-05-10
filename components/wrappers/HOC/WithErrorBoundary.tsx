import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import OnError from "../../../pages/camera/[id]";

export interface ErrorProps {
  errorCode?: number;
}

function WithErrorBoundary<T extends ErrorProps>(
  WrappedComponent: React.ComponentType<T>,
  OnErrorComponent: React.ComponentType<ErrorProps>
) {
  return function WithErrorBoundaryComponent(props: T & ErrorProps) {
    if (props.errorCode) {
      return <OnErrorComponent errorCode={props.errorCode} />;
    }
    return <WrappedComponent {...props} />;
  };
}

export default WithErrorBoundary;
