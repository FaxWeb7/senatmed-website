const Background = ({title}) => {
  return (
    <section className="top-ctg">
      <div className="bg"></div>
      <div className="container">
        <div className="top-ctg__inner">
          <h1 className="top-ctg__title">{title}</h1>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  )
}

export default Background