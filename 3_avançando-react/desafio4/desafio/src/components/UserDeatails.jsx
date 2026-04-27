const userDeatails = ({nome, idade, profissao}) => {
  return (
    <div className="user-details">
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Idade:</strong> {idade}</p>
      <p><strong>Profissão:</strong> {profissao}</p>
      {idade >= 18 ? (<p><strong>Você pode dirigir.</strong></p>) : (<p><strong> Você não pode dirigir.</strong></p>)}
    </div>  
  )
}

export default userDeatails