export default interface ServiceInterface {
    id: number,
    name: string,
    location: string,
    imageURL: string,
    description: string,
    authorId?: number,
    slug: string
    phrase?: string
}