export default interface SocialMediaInterface {
    id: number,
    name: string,
    link: string
}
export type SocialMediaFormType = Pick<SocialMediaInterface, 'name' | 'link'>