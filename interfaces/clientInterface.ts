export interface ClientInteface {
  id: number,
  name: string,
  description: string,
  imageURL: string,
}

export type ClientFormType = Pick<ClientInteface, 'name' | 'description' | 'imageURL'>
