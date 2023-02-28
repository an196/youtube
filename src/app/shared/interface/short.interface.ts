export interface Short {
    infoOwner?: InfoOwner;
    infoShort?: InfoShort;
    __v?: number;
    _id?: String;
    _idShort: String;
}

export interface InfoOwner {
    channelName: string
    imgProfile: string
    channelLink: string
}

export interface InfoShort {
    title: string
    thumbnail: string
    video: string,
    briefDes: string
    timePost: string
    viewCount: string
    time: string
    duration: string
}