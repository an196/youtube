export interface Video {
    infoOwner?: InfoOwner;
    infoVideo?: InfoVideo;
    __v?: number;
    _id?: String;
    _idVideo: String;
}

export interface InfoOwner {
    channelName: string
    imgProfile: string
    channelLink: string
}

export interface InfoVideo {
    title: string
    thumbnail: string
    embedlink: string
    briefDes: string
    timePost: string
    viewCount: string
    time: string
    duration: string
    gif: string
}