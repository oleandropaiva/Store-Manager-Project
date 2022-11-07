const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const productService = require('../../../src/services/productService');
const productModel = require('../../../src/models/productModel');

describe('Services - Testando lista dos produtos', () => {
  describe('/products - findAll', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna um array', async function () {
        const resultExecute = [];
        sinon.stub(productModel, 'findAll').resolves(resultExecute);

        const realResult = await productService.findAll();
        expect(realResult).to.be.an('array');
      });
      it('o array está vazio', async function () {
        const resultExecute = [];
        sinon.stub(productModel, 'findAll').resolves(resultExecute);

        const realResult = await productService.findAll();
        expect(realResult).to.be.empty;
      });
      it('retorna o array com item', async function () {
        const resultExecute = [{ id: 1, name: 'testando' }];
        sinon.stub(productModel, 'findAll').resolves(resultExecute);

        const realResult = await productService.findAll();
        expect(realResult).to.be.not.empty;
      });

      it('o array contém "id" e "name"', async function () {
        const resultExecute = { id: 1, name: 'testando' };
        sinon.stub(productModel, 'findAll').resolves(resultExecute);

        const realResult = await productService.findAll();
        expect(realResult).to.all.keys('name', 'id')
      });
    });
  });

  describe('Testa a rota /products/:id - findById', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna objeto', async function () {
        const resultExecute = { id: 1, name: 'testando' };
        sinon.stub(productModel, 'findById').resolves(resultExecute);

        const realResult = await productService.findById(1);
        expect(realResult).to.be.an('object');
      });
      it('o objeto contém "id" e "name"', async function () {
        const resultExecute = { id: 1, name: 'testando' };
        sinon.stub(productModel, 'findById').resolves(resultExecute);

        const realResult = await productService.findById(1);
        expect(realResult).to.all.keys('name', 'id')
      });
    });
    describe('Não contendo Id', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna null', async function () {
        const resultExecute = null;
        sinon.stub(productModel, 'findById').resolves(resultExecute);

        const realResult = await productService.findById(1);
        expect(realResult).to.be.null;
      });
    });
  });
});
