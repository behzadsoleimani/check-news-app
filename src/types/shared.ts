export interface INewsItem {
    title: string;
    publishedAt?: string;
    image_url: any;
    author: string;
    description: string;
    url?: string;
    link?: string;
    pubDate: string;
    alt?: string;
    channel?: string;
    
}

export interface ICustomizedSwitches {
    checked: boolean;
    handleToggle: any;
}