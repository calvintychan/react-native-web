/* eslint-env jasmine, jest */

import assert from 'assert';
import NetInfo from '..';

suite('apis/NetInfo', () => {
  suite('isConnected', () => {
    const handler = () => {};

    teardown(() => {
      try { NetInfo.isConnected.removeEventListener('change', handler); } catch (e) {}
    });

    suite('addEventListener', () => {
      test('throws if the provided "eventType" is not supported', () => {
        expect(() => NetInfo.isConnected.addEventListener('foo', handler)).toThrow();
        expect(() => NetInfo.isConnected.addEventListener('change', handler)).not.toThrow();
      });
    });

    suite('removeEventListener', () => {
      test('throws if the handler is not registered', () => {
        expect(() => NetInfo.isConnected.removeEventListener('change', handler)).toThrow;
      });

      test('throws if the provided "eventType" is not supported', () => {
        NetInfo.isConnected.addEventListener('change', handler);
        expect(() => NetInfo.isConnected.removeEventListener('foo', handler)).toThrow;
        expect(() => NetInfo.isConnected.removeEventListener('change', handler)).not.toThrow;
      });
    });
  });
});
