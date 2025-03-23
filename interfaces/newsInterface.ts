export default interface NewsInterface {
  id: number;
  title: string;
  slug?: string;
  content: string;
  imageURL: string;
  published: boolean;
  publishedAt?: Date; // O string
  authorId: number;
}
