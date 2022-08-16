export interface INewsItem {
    title: string;
    publishedAt?: string;
    image_url: string;
    author: string;
    description: string;
    url?: string;
    link: string;
    pubDate: string;
}

export interface ICustomizedSwitches {
    checked: boolean;
    handleToggle: any
}