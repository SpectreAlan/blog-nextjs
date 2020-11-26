import axios from 'axios'
const baseUrl = typeof self === 'object' ? '/web/' : 'http://127.0.0.1:7001/web/'
const urls = {
  article: 'list',
  info: 'info',
  detail: 'detail',
  keywordsSearch: 'keywordsSearch',
  comments: 'comments',
  comment: 'comment',
  timeLine: 'timeLine',
  gallery: 'gallery',
  statistics: 'statistics'
}

export function fetch (url, param) {
  return new Promise((resolve) => {
    axios[param ? 'post' : 'get'](baseUrl + urls[url], param || {}).then(
      (response) => {
        if (response.data.code === 302) {
          window.location.href = '/'
        }
        resolve(response.data.data)
      }
    )
  })
}

