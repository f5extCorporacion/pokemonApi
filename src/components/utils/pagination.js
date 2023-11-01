const pagination =(items , currentPage)=>{
    // CANTIDAD DE ITEMS PAGINA
    const ITEMS_PER_PAGE=20;

    //LOS ITEMS DE LA PAGINA ACTUAL
    const sliceEnd = currentPage * ITEMS_PER_PAGE
    const sliceStart = sliceEnd - ITEMS_PER_PAGE
    const itemInCurrentPage = items.slice(sliceStart ,  sliceEnd);

    //ultima pagina
    const lastpage = Math.ceil(items.length / ITEMS_PER_PAGE)
  
    //Bloque actual
    const PAGES_PER_BLOCK = 5
    const actualBlock = Math.ceil( currentPage / PAGES_PER_BLOCK)

    // PAGINAS QUE SE MOSTRARAN EL  BLOQUE ACTUAL

    const pageinCurrentBlock =[]
    const maxPage = actualBlock * PAGES_PER_BLOCK
    const minPage = (maxPage - PAGES_PER_BLOCK)+ 1

    for(let i = minPage; i <= maxPage; i++){
        if( i <= lastpage){
            pageinCurrentBlock.push(i)
        }
    }

  return{ itemInCurrentPage, pageinCurrentBlock, lastpage};
};

export{
    pagination
}