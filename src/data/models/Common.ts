export interface ICommon {
    id: string
    createdDate?: Date
    updateDate?: Date
    attachments?: IAttachment[]
}

export interface IAttachment {
    title: string,
    type: AttachmentType
    url: string
}

enum AttachmentType {
    Image = 0,
    Video = 1,
    Document = 2
}
