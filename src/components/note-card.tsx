export function NoteCard() {
  return (
    <button className='text-left rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
      <span className='text-small font-medium text-slate-300'>
        há 5 dias
      </span>
      <p className='text-sm leading-6 text-slate-400'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusamus molestiae ad aliquid libero ipsum? Non repudiandae perferendis provident praesentium numquam, at quas quis eum quam cupiditate voluptatum laboriosam ratione!
        Necessitatibus ipsa veritatis repudiandae minus, neque pariatur laudantium reiciendis beatae rerum qui sapiente veniam nemo at amet consectetur incidunt ducimus quas magni quasi vitae quidem quo consequatur ea quaerat! Accusantium.
        Odit accusamus, est unde officiis, minima rerum dolorum pariatur ab nobis sint fuga natus et asperiores necessitatibus aliquid perspiciatis libero saepe porro explicabo. Nemo aspernatur a iusto ea, quos eos!
      </p>

      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
    </button>
  )
}