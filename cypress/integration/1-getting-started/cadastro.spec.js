import cadastro from '../../pages/CadastroPage'
import dadosCadastrais from '../../dados/DadosCadastrais'
import CadastroPage from '../../pages/CadastroPage'

describe('Cadastro ',() => {

     it('Usuário deve se tornar um entregar', () =>{
        
        var entregador = dadosCadastrais.entregador()
        
        cadastro.go()
        cadastro.fillForm(entregador)
        cadastro.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cadastro.modalContentShouldBe(expectedMessage)
    })

    it('CPF inválido', () =>{
        
        var entregador = dadosCadastrais.entregador()
        entregador.cpf ='123456789xx'
       
        cadastro.go()
        cadastro.fillForm(entregador)
        cadastro.submit()
        cadastro.alertMessageShouldBe('Oops! CPF inválido')   
    })  
    

    
    it('Email inválido', () => {

        var entregador = dadosCadastrais.entregador()
        entregador.email = 'mariaduda@com.br'

        cadastro.go()
        cadastro.fillForm(entregador)
        cadastro.submit()
        cadastro.alertMessageShouldBe('Oops! email inválido')
    })
    

    
    context('Campos obrigatórios', function() {

        const messages = [
            {campo: 'nome', output: 'É necessário informar o nome'},
            {campo: 'cpf', output: 'É necessário informar o CPF'},
            {campo: 'email', output: 'É necessário informar o email'},
            {campo: 'cep', output: 'É necessário informar o CEP'},
            {campo: 'numero', output: 'É necessário informar o número do endereço'},
            {campo: 'metodo_entrega', output: 'Selecione o método de entrega'},
            {campo: 'cnh', output: 'Adicione uma foto da sua CNH'},
        ]
        before(function(){
            cadastro.go()
            cadastro.submit()
        })
        messages.forEach(function(msg){
            it(`${msg.campo} is required`, function(){
                cadastro.alertMessageShouldBe(msg.output)
            })
        })

        it('Whatsapp inválido', () => {
            var entregador = dadosCadastrais.entregador()
            entregador.whatsapp = '12888814'

            cadastro.go()
            cadastro.fillForm(entregador)
            cadastro.submit()
            cadastro.alertMessageShouldBe('Oops! Whatsapp inválido ')  

        })
       
        it('CEP inválido',() =>{
            var entregador = dadosCadastrais.entregador()
            entregador.cep = '000'
           
            cadastro.go()
            cadastro.fillForm(entregador)
            cadastro.submit()
            cadastro.alertMessageShouldBe('Informe um CEP válido')  

        }) 
    })
})