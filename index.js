const form = document.getElementById('form')

form.addEventListener ('input-submit-container', (e) => {
  e.preventDefault();

  
  const nome = document.getElementById('nome').value
  const email = document.getElementById('email').value

  const data= {
      nome,
      email
  }

  const jsonData = JSON.stringify(data)

  localStorage.setItem('data', jsonData)

  let formContent = document.getElementById('form')

  formContent.innerHTML = loading

  setTimeout(() => {
    alert('Cadastrado com Sucesso')
    location.reload()
  }, 1000)

  set
})