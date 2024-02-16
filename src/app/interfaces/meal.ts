export interface Meal {
    _id: string
    title: string
    description: string
    secondaryImages: any[]
    ingredients: string
    nutrition: Nutrition[]
    how_to_prepare: string
    servingsPerContainer: string
    servingSize: string
    filters: Filter[]
  }
  
  export interface Nutrition {
    name: string
    value: number
    unit: string
    _id: string
  }
  
  export interface Filter {
    _id: string
    name: string
    type: string
  }
  