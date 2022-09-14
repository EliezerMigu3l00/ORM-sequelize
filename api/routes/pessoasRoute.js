const { Router } = require('express');
const { pegaTodasAsPessoas } = require('../controllers/PessoaControllers');
const PessoaController = require('../controllers/PessoaControllers');

const router = Router();

router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.apagaPessoa);
router.get('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.pegaUmaMatricula);
router.post('/pessoas/:estudante_id/matricula', PessoaController.criaMatricula);
router.put('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.atualizaMatricula);
router.delete('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.apagaMatricula)


module.exports = router