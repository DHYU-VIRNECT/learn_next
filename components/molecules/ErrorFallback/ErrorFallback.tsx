import { ErrorProps } from "../../wrappers/HOC/WithErrorBoundary";
import { useCallback } from "react";

interface ErrorMessages {
  [key: string | number]: string;
}

interface Props extends ErrorProps {
  errorMessages: ErrorMessages;
}

const defaultErrorMessages: ErrorMessages = {
  default: "오류가 발생했습니다",
};

const ErrorFallback = ({ errorMessages, errorCode }: Props) => {
  const getErrorMessage = useCallback(() => {
    if (!errorCode) return;
    if (errorMessages[errorCode]) {
      return errorMessages[errorCode];
    } else if (errorMessages["default"]) {
      return errorMessages["default"];
    } else if (defaultErrorMessages[errorCode]) {
      return defaultErrorMessages[errorCode];
    } else {
      return defaultErrorMessages["default"];
    }
  }, []);
  return (
    <div className="error-fallback">
      <p>{getErrorMessage()}</p>
    </div>
  );
};

export default ErrorFallback;
