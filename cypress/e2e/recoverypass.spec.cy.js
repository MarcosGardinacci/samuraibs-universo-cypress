
import fpPage from '../support/pages/forgotpass'
import rpPage from '../support/pages/resetpass'



describe('resgate de senha', function () {

    before(function () {
        cy.fixture('recovery').then(function (recovery) {
            this.data = recovery

        })


    })

    context('quando o usuario esquece a senha', function () {

        before(function () {
            cy.postUser(this.data)

        })


        it('deve resgatar por email', function () {
            fpPage.go()
            fpPage.form(this.data.email)
            fpPage.submit()

            const message = 'Enviamos um e-mail para confirmar a recuperação de senha, cheque sua caixa de entrada.'

            fpPage.toast.shouldHaveText(message)


        })

    })

    context.skip('quando o usuário solicita o resgate ', function () {

        before(function () {
            cy.postUser(this.data)
            cy.recoveryPass(this.data.email)

        })

        it('deve poder cadastrar uma nova senha', function () {


            const token = Cypress.env('recoveryToken')

            rpPage.go(token)
            rpPage.form('abc123', 'abc123')
            rpPage.submit()

            const message = 'Agora você já pode logar com a sua nova senha secreta.'

            rpPage.toast.shouldHaveText(message)


        })


    })


})