interface IPropsSingleRoom {
    match ?: any;
    getRoom ?: (slug: string) => any;
}

interface IStateSingleRoom {
    slug: string;
    defaultbcg: string;
}