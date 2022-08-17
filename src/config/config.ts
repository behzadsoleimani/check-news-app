export const navbarBrand = "Behzad News";
export const header = (category: string) => `Top ${category} Headlines`;
export const navs = [
    { nav: "Home", page: "/" },
    { nav: "Politics", page: "/politics" },
    { nav: "Environment", page: "/environment" },
    { nav: "Sports", page: "/sports" },
    { nav: "Science", page: "/science" },
    { nav: "Business", page: "/business" },
    { nav: "Entertainment", page: "/entertainment" },
    { nav: "Technology", page: "/technology" }
]

export const router = [
    { path: "/", key: "top", category: "top",  },
    { path: "/politics", key: "politics", category: "politics",  },
    { path: "/environment", key: "environment", category: "environment",  },
    { path: "/sports", key: "sports", category: "sports",  },
    { path: "/science", key: "science", category: "science",  },
    { path: "/business", key: "business", category: "business",  },
    { path: "/entertainment", key: "entertainment", category: "entertainment",  },
    { path: "/technology", key: "technology", category: "technology",  }
]

export const author = (author : string) => `Author: ${!author ? "Unknown" : author}`;
export const channel = (channel : string) => `Channel: ${channel}`;
export const lastUpdate = (date: any) => `Last updated: ${date}`;
