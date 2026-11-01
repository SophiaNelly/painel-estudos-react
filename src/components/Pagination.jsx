export default function Pagination({ totalPages, currentPage, onPageChange }) {
  return <nav className="pagination" aria-label="Paginação das aulas">
    <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Anterior</button>
    {Array.from({ length: totalPages }, (_, index) => index + 1).map(page =>
      <button key={page} aria-label={`Página ${page}`} aria-current={page === currentPage ? 'page' : undefined}
        className={page === currentPage ? 'selected' : ''} onClick={() => onPageChange(page)}>{page}</button>)}
    <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>Próxima</button>
  </nav>;
}
