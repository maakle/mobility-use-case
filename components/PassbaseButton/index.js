import Router from "next/router";
import VerifyButton from "@passbase/button/react";

const PassbaseButton = (props) => {
  return (
    <VerifyButton
      apiKey={
        "2b4598cdbb809d8b7a34ba534d76447634ed9a8d58bb498421f72cd8187df048"
      }
      onFinish={(identityAccessKey) => {}}
      onError={(errorCode) => {}}
      onStart={() => {}}
    />
  );
};

export default PassbaseButton;
