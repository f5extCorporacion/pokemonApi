const pagination = (items, currentPage) => {
  const ITEMS_PER_PAGE = 20;

  const sliceEnd = currentPage * ITEMS_PER_PAGE;
  const sliceStart = sliceEnd - ITEMS_PER_PAGE;
  const itemInCurrentPage = items.slice(sliceStart, sliceEnd);

  const lastpage = Math.ceil(items.length / ITEMS_PER_PAGE);

  const PAGES_PER_BLOCK = 5;
  const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK);

  const pageinCurrentBlock = [];
  const maxPage = actualBlock * PAGES_PER_BLOCK;
  const minPage = maxPage - PAGES_PER_BLOCK + 1;

  for (let i = minPage; i <= Math.min(maxPage, lastpage); i++) {
    pageinCurrentBlock.push(i);
  }

  return { itemInCurrentPage, pageinCurrentBlock, lastpage };
};

export { pagination };
