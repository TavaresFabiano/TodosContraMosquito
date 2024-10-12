const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#username')
const sCpf = document.querySelector('#usercpf')
const sEndereco = document.querySelector('#userendereco')
const sBairro = document.querySelector('#userbairro')
const sCep = document.querySelector('#usercep')
const sQues1 = document.querySelector("#userques1")
const sQues2 = document.querySelector('#userques2')
const sQues3 = document.querySelector('#userques3')
const sQues4 = document.querySelector('#userques4')
const sQues5 = document.querySelector('#userques5')
const sQues6 = document.querySelector('#userques6')
const sQues7a = document.querySelector('#userques7a')
const sQues7b = document.querySelector('#userques7b')
const sQues7c = document.querySelector('#userques7c')
const sQues7d = document.querySelector('#userques7d')
const sQues7e = document.querySelector('#userques7e')
const sQues7f = document.querySelector('#userques7f')
const sQues7g = document.querySelector('#userques7g')
const sQues7h = document.querySelector('#userques7h')
const sQues7i = document.querySelector('#userques7i')
const sQues7j = document.querySelector('#userques7j')
const sQues7k = document.querySelector('#userques7k')
const sQues8 = document.querySelector('#userques8')
const sQues9 = document.querySelector('#userques9')
const sQues10 = document.querySelector('#userques10')
const sQues11 = document.querySelector('#userques11')
const sQues12 = document.querySelector('#userques12')


const btnSalvar = document.querySelector('#createButton')
const btnClassificar = document.querySelector('#classificar')
var User = Parse.Object.extend("User");

function somar () {
  const sSoma = 
      Number(sQues1.value) + 
      Number(sQues2.value) + 
      Number(sQues3.value) + 
      Number(sQues4.value) + 
      Number(sQues5.value) + 
      Number(sQues6.value) + 
      Number(sQues7a.value) + 
      Number(sQues7b.value) +
      Number(sQues7c.value) +
      Number(sQues7d.value) +
      Number(sQues7e.value) +
      Number(sQues7f.value) +
      Number(sQues7g.value) +
      Number(sQues7h.value) +
      Number(sQues7i.value) +
      Number(sQues7j.value) +
      Number(sQues7k.value) +
      Number(sQues8.value) + 
      Number(sQues9.value) + 
      Number(sQues10.value) +
      Number(sQues11.value) +
      Number(sQues12.value)
  return sSoma
}

function classificar () {
  const sSoma = somar ()
  let p = document.getElementById("teste")
  if (sSoma==0){
    p.innerHTML = ""
  }
  else if (sSoma<16) {
    p.innerHTML = "Total "+ sSoma + " pontos - Parabéns! Sua residência apresenta risco BAIXO";
    p.style.color = "blue";}
  else if (sSoma<32) {
    p.innerHTML = "Total "+ sSoma + " pontos - Atenção! Sua residência apresenta risco MODERADO";
    p.style.color = "green";}
  else if (sSoma<48) {
    p.innerHTML = "Total "+ sSoma + " pontos - Atenção! Sua residência apresenta risco ELEVADO";
    p.style.color = "brown";}
  else {
    p.innerHTML = "Total "+ sSoma + " pontos - Atenção! Sua residência apresenta risco MUITO ALTO";
    p.style.color = "red";}
}








let itens
let id




// INSERIR NA LISTA SITE

function insertItem(item, index) {
  let tr = document.createElement('tr')
  
  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.cpf}</td>
    <td>${item.endereco}</td>
    <td>${item.bairro}</td>
    <td>${item.cep}</td>
    <td>${item.soma}</td>
    <td>${item.resultado}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}




//MODAL

function openModal(edit = false, index = 0) {

  modal.classList.add('active')

  const sSoma = somar ()

  const sResultado = classificar ()


  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')

    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    sCpf.value = itens[index].cpf
    sEndereco.value = itens[index].endereco
    sBairro.value = itens[index].bairro
    sCep.value = itens[index].cep
    sSoma = itens[index].soma
    sResultado = itens[index].resultado
    sQues1.value = itens[index].ques1
    sQues2.value = itens[index].ques2
    sQues3.value = itens[index].ques3
    sQues4.value = itens[index].ques4
    sQues5.value = itens[index].ques5
    sQues6.value = itens[index].ques6
    sQues7a.value = itens[index].ques7a
    sQues7b.value = itens[index].ques7b
    sQues7c.value = itens[index].ques7c
    sQues7d.value = itens[index].ques7d
    sQues7e.value = itens[index].ques7e
    sQues7f.value = itens[index].ques7f
    sQues7g.value = itens[index].ques7g
    sQues7h.value = itens[index].ques7h
    sQues7i.value = itens[index].ques7i
    sQues7j.value = itens[index].ques7j
    sQues7k.value = itens[index].ques7k
    sQues8.value = itens[index].ques8
    sQues9.value = itens[index].ques9
    sQues10.value = itens[index].ques10
    sQues11.value = itens[index].ques11
    sQues12.value = itens[index].ques12
    id = index


  } else {
    sNome.value = ''
    sCpf.value = ''
    sEndereco.value = ''
    sBairro.value = ''
    sCep.value = ''
    sSoma = ''
    sResultado = ''
    sQues1.value = ''
    sQues2.value = ''
    sQues3.value = ''
    sQues4.value = ''
    sQues5.value = ''
    sQues6.value = ''
    sQues7a.value = ''
    sQues7b.value = ''
    sQues7c.value = ''
    sQues7d.value = ''
    sQues7e.value = ''
    sQues7f.value = ''
    sQues7g.value = ''
    sQues7h.value = ''
    sQues7i.value = ''
    sQues7j.value = ''
    sQues7k.value = ''
    sQues8.value = ''
    sQues9.value = ''
    sQues10.value = ''
    sQues11.value = ''
    sQues12.value = ''

  }

}


// EDITAR NA LISTA SITE

function editItem(index) {
  openModal(true, index)
}



// DELETAR NA LISTA SITE

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  deletePlayer()
  loadItens()

}

async function deletePlayer() {
  //Retrieve your Parse Object
  const user = new Parse.Object("User");
  //set its objectId
  user.set('CPF', itens[index].cpf);
  alert(user.set);
  try {
    //destroy the object
    let result = await user.destroy();
    alert('Usuário deletado!' + result.id);
  } catch (error) {
    alert('Falha ao deletar o usuário - Cód: ' + error.message);
  }
}

// BOTÃO

btnSalvar.onclick = e => {

  const sSoma = somar ()
  const sResultado = classificar ()


  if (sNome.value == '' ||
    sCpf.value == '' ||
    sEndereco.value == '' ||
    sBairro.value == '' ||
    sCep.value == '' ||
    sSoma == ''||
    sResultado == ''||
    sQues1.value == '' ||
    sQues2.value == '' ||
    sQues3.value == '' ||
    sQues4.value == '' ||
    sQues5.value == '' ||
    sQues6.value == '' ||
    sQues7a.value == '' ||
    sQues7b.value == '' ||
    sQues7c.value == '' ||
    sQues7d.value == '' ||
    sQues7e.value == '' ||
    sQues7f.value == '' ||
    sQues7g.value == '' ||
    sQues7h.value == '' ||
    sQues7i.value == '' ||
    sQues7j.value == '' ||
    sQues7k.value == '' ||
    sQues8.value == '' ||
    sQues9.value == '' ||
    sQues10.value == '' ||
    sQues11.value == '' ||
    sQues12.value == ''
  ) {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].cpf = sCpf.value
    itens[id].endereco = sEndereco.value
    itens[id].bairro = sBairro.value
    itens[id].cep = sCep.value
    itens[id].soma = sSoma
    itens[id].resultado = sResultado
    itens[id].ques1 = sQues1.value
    itens[id].ques2 = sQues2.value
    itens[id].ques3 = sQues3.value
    itens[id].ques4 = sQues4.value
    itens[id].ques5 = sQues5.value
    itens[id].ques6 = sQues6.value
    itens[id].ques7a = sQues7a.value
    itens[id].ques7b = sQues7b.value
    itens[id].ques7c = sQues7c.value
    itens[id].ques7d = sQues7d.value
    itens[id].ques7e = sQues7e.value
    itens[id].ques7f = sQues7f.value
    itens[id].ques7g = sQues7g.value
    itens[id].ques7h = sQues7h.value
    itens[id].ques7i = sQues7i.value
    itens[id].ques7j = sQues7j.value
    itens[id].ques7k = sQues7k.value
    itens[id].ques8 = sQues8.value
    itens[id].ques9 = sQues9.value
    itens[id].ques10 = sQues10.value
    itens[id].ques11 = sQues11.value
    itens[id].ques12 = sQues12.value
  } else {
    itens.push({ 
      'nome': sNome.value, 
      'cpf': sCpf.value, 
      'endereco': sEndereco.value, 
      'bairro': sBairro.value, 
      'cep': sCep.value, 
      'soma': sSoma, 
      'resultado': sResultado, 
      'ques1': sQues1.value, 
      'ques2': sQues2.value, 
      'ques3': sQues3.value, 
      'ques4': sQues4.value, 
      'ques5': sQues5.value, 
      'ques6': sQues6.value, 
      'ques7a': sQues7a.value, 
      'ques7b': sQues7b.value, 
      'ques7c': sQues7c.value, 
      'ques7d': sQues7d.value, 
      'ques7e': sQues7e.value, 
      'ques7f': sQues7f.value, 
      'ques7g': sQues7g.value, 
      'ques7h': sQues7h.value, 
      'ques7i': sQues7i.value, 
      'ques7j': sQues7j.value, 
      'ques7k': sQues7k.value, 
      'ques8': sQues8.value, 
      'ques9': sQues9.value, 
      'ques10': sQues10.value, 
      'ques11': sQues11.value, 
      'ques12': sQues12.value })
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
  alert (sQues1)
}

// CARREGAR LISTA NO SITE

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
