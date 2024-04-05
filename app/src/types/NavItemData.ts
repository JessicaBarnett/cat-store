export type NavItemData = {
    id: string,
    name: string,
    link: string,
    query: string[],
    children: NavItemData[]
}

export default NavItemData;