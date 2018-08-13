import * as actions from './actions';

test('gtmStart', () => {
  expect(actions.gtmStart('test'))
    .toEqual({
      type: actions.GTM_START,
      payload: {
        gtmId: 'test',
      },
    });
});

test('gtmFailure', () => {
  expect(actions.gtmFailure('error', 'foo'))
    .toEqual({
      type: actions.GTM_FAILURE,
      error: true,
      payload: 'error',
      meta: {
        request: 'foo',
      },
    });
});
