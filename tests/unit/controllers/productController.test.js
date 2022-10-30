const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const productController = require('../../../src/controllers/productController');
const productService = require('../../../src/services/productService');

describe('Controllers - Testando lista dos produtos', () => {
  describe('/products - findAll', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('o array está vazio', async function () {
        const req = {};
        const res = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        const resultExecute = [];
        sinon.stub(productService, 'findAll').resolves(resultExecute);

        await productController.findAll(req, res);

        expect(res.status.calledWith(200)).to.be.equal(true);
        expect(res.json.calledWith([])).to.be.equal(true);
      });
      it('retorna o array com item', async function () {
        const req = {};
        const res = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        const resultExecute = [{ id: 1, name: 'testando' }];
        sinon.stub(productService, 'findAll').resolves(resultExecute);

        await productController.findAll(req, res);

        expect(res.status.calledWith(200)).to.be.equal(true);
        expect(res.json.calledWith([{ id: 1, name: 'testando' }])).to.be.equal(true);
      });
    });
  });

  describe('Testa a rota /products/:id - findById', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna null', async function () {
        const req = {};
        const res = {};

        req.params = {
          id: 1,
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        const resultExecute = null;
        sinon.stub(productService, 'findById').resolves(resultExecute);

        await productController.findById(req, res);

        expect(res.status.calledWith(404)).to.be.equal(true);
        expect(res.json.calledWith({ message: 'Product not found' })).to.be.equal(true);
      });
      it('retorna o array com item', async function () {
        const req = {};
        const res = {};

        req.params = {
          id: 1,
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        const resultExecute = { id: 1, name: 'testando' };
        sinon.stub(productService, 'findById').resolves(resultExecute);

        await productController.findById(req, res);

        expect(res.status.calledWith(200)).to.be.equal(true);
        expect(res.json.calledWith({ id: 1, name: 'testando' })).to.be.equal(true);
      });
    });
  });
});
