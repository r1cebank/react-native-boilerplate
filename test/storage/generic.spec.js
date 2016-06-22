/* global it */
/* global describe */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import MockStore from '../helpers/mockStore';
import MockStorage from '../helpers/mockStorage';
import MockFetch from '../helpers/mockFetch';

// File to test
import { Storage } from '../../src/global/globalIncludes';

const fetchConfig = {
    storageKey: 'navigation',
    fetched: 'dataFetched',
    update: 'updateData'
};

describe('Generic', () => {
    it('should fetch if content does not exist', (done) => {
        const getState = {}; // initial state of the store

        const store = { appStore: MockStore(getState) };

        const storage = MockStorage({
            storage: {
            }
        });

        const fetch = MockFetch({
            jsonContent: {
                success: true
            }
        });

        // Get spies for mocked storage
        const get = sinon.spy(storage, 'get');
        const save = sinon.spy(storage, 'save');
        const fetchSpy = sinon.spy(fetch);

        store.appStore.subscribe(() => {
            const actions = store.appStore.getActions();
            try {
                expect(actions).to.have.deep.property('[0].type', 'DATA_FETCHED');
                expect(actions).to.have.deep.property('[0].data.success', true);
                expect(get).to.have.been.calledWith(fetchConfig.storageKey);
                expect(fetchSpy).to.have.been.calledOnce;
                expect(save).to.have.been.callCount(0);
                done();
            } catch (e) {
                done(e);
            }
        });

        Storage.Generic(store, storage, fetchSpy).fetch(fetchConfig);
    });
    it('if data exists, should fetch and trigger update', (done) => {
        const getState = {}; // initial state of the store

        const store = { appStore: MockStore(getState) };

        const storage = MockStorage({
            storage: {
                navigation: {
                    success: true
                }
            }
        });

        const fetch = MockFetch({
            jsonContent: {
                success: true
            }
        });

        // Get spies for mocked storage
        const get = sinon.spy(storage, 'get');
        const save = sinon.spy(storage, 'save');
        const fetchSpy = sinon.spy(fetch);

        store.appStore.subscribe(() => {
            const actions = store.appStore.getActions();
            if (actions.length > 1) {
                try {
                    expect(actions).to.have.deep.property('[0].type', 'DATA_FETCHED');
                    expect(actions).to.have.deep.property('[1].type', 'UPDATE_DATA');
                    expect(get).to.have.been.calledWith(fetchConfig.storageKey);
                    expect(fetchSpy).to.have.been.callCount(0);
                    expect(save).to.have.been.callCount(0);
                    done();
                } catch (e) {
                    done(e);
                }
            }
        });

        Storage.Generic(store, storage, fetchSpy).fetch(fetchConfig);
    });
    it('if patch exists, should correctly patch data', (done) => {
        const getState = {}; // initial state of the store

        const store = { appStore: MockStore(getState) };

        const storage = MockStorage({
            storage: {
                navigation: {
                    success: true
                }
            }
        });

        const fetch = MockFetch({
            jsonContent: [
                {
                    success: [
                        true,
                        0,
                        0
                    ],
                    data: [
                        true
                    ]
                }
            ]
        });

        // Get spies for mocked storage
        const get = sinon.spy(storage, 'get');
        const save = sinon.spy(storage, 'save');
        const fetchSpy = sinon.spy(fetch);

        store.appStore.subscribe(() => {
            const actions = store.appStore.getActions();
            try {
                expect(actions).to.have.deep.property('[0].type', 'DATA_FETCHED');
                expect(actions).to.have.deep.property('[0].data.data', true);
                expect(get).to.have.been.calledWith(fetchConfig.storageKey);
                expect(fetchSpy).to.have.been.calledOnce;
                expect(save).to.have.been.callCount(0);
                done();
            } catch (e) {
                done(e);
            }
        });

        Storage.Generic(store, storage, fetchSpy).update(fetchConfig);
    });
});
