import { OnErrorProps } from "../../wrappers/HOC/WithErrorBoundary";
import { useCallback } from "react";

interface ErrorMessages {
  [key: string | number]: string;
}

interface Props extends OnErrorProps {
  errorMessages?: ErrorMessages;
}

const defaultErrorMessages: ErrorMessages = {
  default: "오류가 발생했습니다",
};

//fallback component for error boundaries
const ErrorFallback = ({ errorMessages = {}, errorCode }: Props) => {
  const getErrorMessage = useCallback(() => {
    if (!errorCode) return defaultErrorMessages["default"];
    if (errorMessages[errorCode]) {
      return errorMessages[errorCode];
    } else if (errorMessages["default"]) {
      return errorMessages["default"];
    } else if (defaultErrorMessages[errorCode]) {
      return defaultErrorMessages[errorCode];
    } else {
      return defaultErrorMessages["default"];
    }
  }, [errorMessages, errorCode]);
  return (
    <div className="error-fallback">
      <p>{getErrorMessage()}</p>
    </div>
  );
};

export default ErrorFallback;
