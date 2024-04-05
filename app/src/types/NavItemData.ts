export type NavItemData = {
    id: string,
    name: string,
    query: string[],
    children: NavItemData[]
}

export default NavItemData;