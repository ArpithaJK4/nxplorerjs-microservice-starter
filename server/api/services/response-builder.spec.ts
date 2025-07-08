import { ErrorResponseBuilder } from './response-builder';
import { HttpStatus } from './http-status-codes';
import '../../common/env';

describe('Error Response Builder', () => {
  it('should correctly build an error response object', () => {
    const expectedResponse = {
      title: 'Test Title',
      status: HttpStatus.NOT_FOUND,
      detail: 'Dummy Stack Trace',
      message: 'Error Message',
      source: 'Error Source',
    };

    const builtResponse = new ErrorResponseBuilder()
      .setTitle(expectedResponse.title)
      .setStatus(expectedResponse.status)
      .setDetail(expectedResponse.detail)
      .setMessage(expectedResponse.message)
      .setSource(expectedResponse.source)
      .build();

    expect(builtResponse).toEqual(expectedResponse);
  });
});
