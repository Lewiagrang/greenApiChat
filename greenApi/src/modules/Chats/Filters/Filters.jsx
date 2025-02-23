import "./Filters.css"

const Filters = () => {
    return(
        <div className='chats-filters'>
          <div className='chats-filter-switch'>Все</div>
          <div className='chats-filter-switch'>Непрочитанное</div>
          <div className='chats-filter-switch'>Избранное</div>
          <div className='chats-filter-switch'>Группы</div>
        </div>
    )
}

export default Filters