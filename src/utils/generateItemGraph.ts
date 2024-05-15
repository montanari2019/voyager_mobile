interface Item {
    value: number;
    width: number;
    category: string;
    id:string
}

export function calcularLarguraValores(valores: number[], categorias: string[], larguraMaxima: number): Item[] {
    
    // Encontrar o maior valor no array
    const maiorValor = Math.max(...valores);
    
    // Calcular a largura proporcional de cada valor em relação ao maior valor e à largura máxima
    const items: Item[] = valores.map((valor, index) => ({
        value: valor,
        id: String(Math.random()),
        width: valor === 0 ? 1 : ((valor / maiorValor) * larguraMaxima),
        category: categorias[index]
    }));

    return items;
}
