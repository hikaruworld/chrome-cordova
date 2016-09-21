/****************************************************************
 * File
 */

window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

window.resolveLocalFileSystemURL = window.resolveLocalFileSystemURL || window.webkitResolveLocalFileSystemURL;

window.cordova.file = {
  applicationDirectory: "file:///android_asset/",
  applicationStorageDirectory: "file:///data/data/localhost.dummy/",
  cacheDirectory: "file:///data/data/localhost.dummy/cache/",
  dataDirectory: "file:///data/data/localhost.dummy/files/",
  documentsDirectory: null,
  externalApplicationStorageDirectory: "file:///storage/emulated/0/Android/data/localhost.dummy/",
  externalCacheDirectory: "file:///storage/emulated/0/Android/data/localhost.dummy/cache/",
  externalDataDirectory: "file:///storage/emulated/0/Android/data/localhost.dummy/files/",
  externalRootDirectory: "file:///storage/emulated/0/",
  sharedDirectory: null,
  syncedDataDirectory: null,
  tempDirectory: null
}
