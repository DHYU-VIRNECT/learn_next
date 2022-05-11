import React from "react";
import ErrorBoundary from "../ErrorBoundary";

export interface OnErrorProps {
  errorCode?: number;
}

function WithErrorBoundary<T extends OnErrorProps>(
  WrappedComponent: React.ComponentType<T>,
  OnErrorComponent: React.ComponentType<OnErrorProps>
) {
  return function WithErrorBoundaryComponent(props: T & OnErrorProps) {
    if (props.errorCode) {
      return <OnErrorComponent errorCode={props.errorCode} />;
    }
    return (
      <ErrorBoundary fallback={<OnErrorComponent />}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
}

export default WithErrorBoundary;
