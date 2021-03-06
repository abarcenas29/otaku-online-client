// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors'

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err) // eslint-disable-line no-console
}

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default)
}

export default function createRoutes (store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store) // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent (nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([component]) => {
          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    },
    {
      path: '/login',
      name: 'login',
      getComponent (nextState, cb) {
        const importModules = Promise.all([
          import('containers/Login')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([component]) => {
          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    }, {
      path: '/login/verify',
      name: 'loginVerify',
      getComponent (nextState, cb) {
        const importModules = Promise.all([
          import('containers/LoginVerify/reducer'),
          import('containers/LoginVerify/sagas'),
          import('containers/LoginVerify')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('loginVerify', reducer.default)
          injectSagas(sagas.default)
          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    }, {
      path: '/dashboard',
      name: 'dashBoard',
      getComponent (nextState, cb) {
        const importModules = Promise.all([
          import('containers/DashBoard/reducer'),
          import('containers/DashBoard/sagas'),
          import('containers/DashBoard')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('dashBoard', reducer.default)
          injectSagas(sagas.default)
          renderRoute(component)
        })

        importModules.catch(errorLoading)
      },
      childRoutes: [
        {
          path: '/browse',
          name: 'browse',
          getComponent (nextState, cb) {
            const importModules = Promise.all([
              import('containers/Browse/reducer'),
              import('containers/Browse/sagas'),
              import('containers/Browse')
            ])

            const renderRoute = loadModule(cb)

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('browse', reducer.default)
              injectSagas(sagas.default)
              renderRoute(component)
            })

            importModules.catch(errorLoading)
          }
        }, {
          path: '/item/:slug',
          name: 'item',
          getComponent (nextState, cb) {
            const importModules = Promise.all([
              import('containers/Item/reducer'),
              import('containers/Item/sagas'),
              import('containers/Item')
            ])

            const renderRoute = loadModule(cb)

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('item', reducer.default)
              injectSagas(sagas.default)
              renderRoute(component)
            })

            importModules.catch(errorLoading)
          }
        }, {
          path: '/manage',
          name: 'manage',
          getComponent (nextState, cb) {
            const importModules = Promise.all([
              import('containers/Manage/reducer'),
              import('containers/Manage/sagas'),
              import('containers/Manage')
            ])

            const renderRoute = loadModule(cb)

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('manage', reducer.default)
              injectSagas(sagas.default)
              renderRoute(component)
            })

            importModules.catch(errorLoading)
          },
          childRoutes: [
            {
              path: '/manage/items',
              name: 'Manage Item',
              getComponent (nextState, cb) {
                const importModules = Promise.all([
                  import('containers/ManageItems/reducer'),
                  import('containers/ManageItems/sagas'),
                  import('containers/ManageItems')
                ])

                const renderRoute = loadModule(cb)

                importModules.then(([reducer, sagas, component]) => {
                  injectReducer('ManageItems', reducer.default)
                  injectSagas(sagas.default)
                  renderRoute(component)
                })

                importModules.catch(errorLoading)
              }
            }, {
              path: '/manage/item/add',
              name: 'Add Item',
              getComponent (nextState, cb) {
                const importModules = Promise.all([
                  import('containers/ManageItemSell/reducer'),
                  import('containers/ManageItemSell/sagas'),
                  import('containers/ManageItemSell')
                ])

                const renderRoute = loadModule(cb)

                importModules.then(([reducer, sagas, component]) => {
                  injectReducer('manageItemSell', reducer.default)
                  injectSagas(sagas.default)
                  renderRoute(component)
                })

                importModules.catch(errorLoading)
              }
            }, {
              path: '/manage/item/edit/:id',
              name: 'Edit Item',
              getComponent (nextState, cb) {
                const importModules = Promise.all([
                  import('containers/ManageItemSell/reducer'),
                  import('containers/ManageItemSell/sagas'),
                  import('containers/ManageItemSell')
                ])

                const renderRoute = loadModule(cb)

                importModules.then(([reducer, sagas, component]) => {
                  injectReducer('manageItemSell', reducer.default)
                  injectSagas(sagas.default)
                  renderRoute(component)
                })

                importModules.catch(errorLoading)
              }
            }
          ]
        }
      ] // end of dashboard
    }, {
      path: '*',
      name: 'notfound',
      getComponent (nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    }
  ] // end of routes
}
