export interface workerTypeModel{
    id ?: number,
    name:string
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

export interface workersTypeModel{
    id ?: number,
    name:string
}