const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productModel = require('../../../src/models/productModel');

describe('Models - Testando lista dos produtos', () => {
  describe('/products - findAll', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna um array', async function () {
        const resultExecute = [];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const realResult = await productModel.findAll();
        expect(realResult).to.be.an('array');
      });

      it('o array está vazio', async function () {
        const resultExecute = [];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const realResult = await productModel.findAll();
        expect(realResult).to.be.empty;
      });

      it('retorna o array com item', async function () {
        const resultExecute = [{ id: 1, name: 'testando' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const realResult = await productModel.findAll();
        expect(realResult).to.be.not.empty;
      });

      // it('o array contém um objeto', async function () {
      //   const resultExecute = [{ id: 1, name: 'testando' }];
      //   sinon.stub(connection, 'execute').resolves([resultExecute]);

      //   const realResult = await productModel.findAll();
      //   expect(realResult).to.be.an('object');
      // });

      it('o array contém "id" e "name"', async function () {
        const resultExecute = [{ id: 1, name: 'testando' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const realResult = await productModel.findAll();
        expect(realResult[0]).to.all.keys('name', 'id')
      });
    });
  });

  describe('Testa a rota /products/:id - findById', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna objeto', async function () {
        const resultExecute = [{ id: 1, name: 'testando' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const realResult = await productModel.findById(1);
        expect(realResult).to.be.an('object');
      });
      it('o objeto contém "id" e "name"', async function () {
        const resultExecute = [{ id: 1, name: 'testando' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const realResult = await productModel.findById(1);
        expect(realResult).to.all.keys('id', 'name')
      });
    });
    // describe('Não contendo Id', () => {
    //     afterEach(() => {
    //       sinon.restore();
    //     })
    //     it('retornar null', async function () {
    //       const resultExecute = [];
    //       sinon.stub(connection, 'execute').resolves([resultExecute]);

    //       const realResult = await productModel.findById(1);
    //       expect(realResult).to.be.null;
    //     });
    //   });
  });

  describe('Testando - /products - create', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna um objeto', async function () {
        const resultExecute = [{ id: 1, name: 'testando' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const realResult = await productModel.create('testando');
        expect(realResult).to.be.an('object');
      });
      it('o objeto contém "id" e "name"', async function () {
        const resultExecute = [{ id: 1, name: 'testando' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const realResult = await productModel.create('testando');
        expect(realResult).to.all.keys('name', 'id')
      });
    });
  });
});
