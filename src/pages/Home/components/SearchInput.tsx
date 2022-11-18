export function SearchInput() {
  return (
    <form className="flex flex-col w-full mt-16 mb-12">
      <hgroup className="flex justify-between items-center mb-3">
        <h3 className="text-2xl text-[#C4D4E3]">Publicações</h3>
        <span className="text-xs text-[#7B96B2]">10 publicações</span>
      </hgroup>

      <input
        className="transition-all p-3 border border-[#1C2F41] rounded-md outline-0 bg-[#040F1A] text-[#AFC2D4] focus:border-[#3294F8] placeholder:text-[#3A536B]"
        placeholder="Buscar conteúdo"
      />
    </form>
  )
}
