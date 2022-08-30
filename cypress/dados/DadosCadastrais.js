

export default{
    
    entregador: function(){

        var dados = {
            nome: 'Maria Eduarda',
            cpf: '12345678989',
            email: 'mariaedu@gmail.com',
            whatsapp: '12988881414',
            endereco:{
                cep:'12209002',
                rua: 'Avenida Marechal Castelo Branco',
                numero:'12',
                complemento: 'Ap 44',
                bairro:'Jardim Bela Vista',
                cidade_uf: 'São José dos Campos/SP'
            },
            metodo_entrega: 'Moto', 
            cnh:'cnh-digital.jpg'
        }
        return dados
    }
}