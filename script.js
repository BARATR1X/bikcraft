const produto = [
    {id:1, nome:'Detergente', preço:2.00, categoria:'Limpeza', score:30 },
    {id:2, nome:'Agua sanitaria', preço:6.00, categoria:'Limpeza', score:35 },
    {id:3, nome:'Refrigerante', preço:3.00, categoria:'Bebidas', score:85 },
    {id:4, nome:'Cerveja', preço:3.50, categoria:'Bebidas', score:90 },
    {id:5, nome:'Pão de Forma', preço:8.00, categoria:'Padaria', score:80 },
    {id:6, nome:'Carne', preço:2.00, categoria:'Açougue', score:55 },
    {id:7, nome:'Linguiça', preço:2.00, categoria:'Açougue', score:50 },
    {id:8, nome:'Mortadela', preço:2.00, categoria:'Frios', score:45 },
    {id:9, nome:'Presunto', preço:1.99, categoria:'Frios', score:60 },
    {id:10, nome:'Queijo', preço:4.00, categoria:'Frios', score:40 },
    {id:11, nome:'Leite', preço:3.30, categoria:'Laticinios', score:20 },
]

const categoriaFinal = produto.map((produtos)=>{
    return `Categoria: ${produtos.categoria} Nome: ${produtos.nome}` 
})

console.log(categoriaFinal)

const precoFinal = produto.map((precos) =>{
    return precos.preço >= 3.10 ? true : false
})

console.log(precoFinal)

const categorias = produto.filter((lojas) =>{
    return lojas.categoria === 'Frios'
})

console.log(categorias)




const scoreFinal = produto.reduce((acc, curr) => {
    if (curr.score >= 50){
        acc.pass.push(curr)
    } else {
        acc.fail.push(curr) 
    } 
    return acc
},{
    pass:[],
    fail:[]
}
)

console.log(scoreFinal)