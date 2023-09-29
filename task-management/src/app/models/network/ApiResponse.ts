import { STATUS_SUCCES,STATUS_FAIL,STATUS_No_DATA, } from "src/app/constant.ts/api-constants";
export class ApiResponse{
    status: number
    data: any
    description: string
    recordCount: number

    constructor({
        status = STATUS_FAIL,
        data = null,
        description = '',
        recordCount = STATUS_No_DATA,
    }){
       this.status=status,
       this.data=data,
       this.description=status !== STATUS_SUCCES && !description ? 'Unhandled api error' : description
       this.recordCount=recordCount 
    }
    
    get isSuccess() {
        return this.status === STATUS_SUCCES
    }

    get showSuccesSnackBar() {
        return (this.isSuccess && this.data && typeof this.data === 'string' ? true : false)
    }

    get showErrorSnackbar() {
        return !this.isSuccess && this.description
    }
}