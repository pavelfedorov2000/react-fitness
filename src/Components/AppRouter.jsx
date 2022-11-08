import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Home, Blog, BlogDetail } from '../Pages';
import { RouterContext } from '../context';

function AppRouter() {
    const routes = React.useMemo(() => [{
        id: 0,
        path: "/",
        component: Home,
        exact: true
    }, {
        id: 1,
        title: "Блог",
        path: "/blog",
        component: Blog,
        exact: true,
        empty: {
            icon: {
                src: ""
            },
            title: {
                text: "Нет актуальных товаров"
            }
        }
    }, {
        id: 2,
        path: "/blog/:id",
        component: BlogDetail,
        exact: true
    }], [Home, Blog, BlogDetail]);

    return (
        <RouterContext.Provider value={{
            routes,
        }}>
            <Switch>
                {routes.map(route => (
                    <Route
                        key={route.id}
                        exact={route.exact === true ? true : false}
                        path={route.path}
                        render={() => <route.component {...route} />}
                    />
                ))}
                <Redirect to="/" />
            </Switch>
        </RouterContext.Provider>
    );
}

export default AppRouter;