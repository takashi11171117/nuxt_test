import localforage from 'localforage'

localforage.config({
  name: `nuxt_test-${process.env.NODE_ENV}`,
  driver: localforage.INDEXEDDB
})
