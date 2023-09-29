//status constatnts
export const STATUS_SUCCES=1;
export const STATUS_FAIL=0;
export const STATUS_No_DATA=-1;
// this fields are used in apiResponse modal file to handle response from api

//routes
// this one is used in interceptors to check the request.api needs token if url is not equals to this filed than we add token to header check in intrceptor file 
export const  AUTHENTICATE = 'auth/authenticate'