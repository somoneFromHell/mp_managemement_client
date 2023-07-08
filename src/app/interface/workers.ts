export interface workerTypeModel{
    id ?: number,
    workerTypeTitle:string
}

export interface workersModel{
    id ?: number,
    firstName:string,
    lastName:string,
    nickName:string,
    salary:number,
    workerTypeId:number,
    workerType?:workerTypeModel,
    available:boolean
}

