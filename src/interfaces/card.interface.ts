export interface ICard {
    dados: {
      id: number,
      nome: string,  
      data: string,
      titulo: string,
      message: string,
      Topico: {
        id: number,
        name: string
      }[]
    }
  }