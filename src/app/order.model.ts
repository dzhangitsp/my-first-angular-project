export interface Order {
    id: Number;
    cxml: string;
    json: string;
    sif: string;
    payloadId: string;
    processed: boolean;
    customer: string;
    orderType: string;
    orderId: string;
    createBy: string;
    createDate: Date;
    updateBy: string;
    updateDate: string;


}