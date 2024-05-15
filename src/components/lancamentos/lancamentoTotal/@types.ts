export interface GraphicProps {
    cpf_cnpj: string
    ultima_data_base: string
    categories: string[]
    series: Series
  }
  
  export interface Series {
    name: string
    data:  number[]
  }
  