import http from '~/utils/httpUtils'
import type { RequestOptions } from '~/utils/httpUtils/types'

export function test(options?: RequestOptions) {
  return http.request({
    url: '/test',
    method: 'get',
  }, options)
}
