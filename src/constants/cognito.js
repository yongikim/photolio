export const cognitoConstants = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID || "",
      userPoolClientId:
        process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID || "",
      identityPoolId: process.env.NEXT_PUBLIC_AWS_IDENTITY_POOL_ID || "",
    },
  },
};
