import React from "react"
import { BrowserRouter, Route } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";


// Pages
import Home from '@/pages/Home'

// routes
import { ROUTES } from './routes';



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App


// <Switch>
//                         {this.renderRoutes(ROUTES)}
//                         {this.renderRoutes(dashboardRoutes, DashboardContainer)}
//                         <Route path='*' component={NotFound}/>
// </Switch>


// export default class extends Component {
//   renderRoutes(routes, wrapper = null) {
//       return routes.map((element, index) => {

//           const wrap = {
//               component: wrapper,
//           };

//           return <Route
//               exact path={LANG_PARAM + element.path}
//               render={(props) => {
//                   if (wrapper != null) {
//                       return (
//                           <wrap.component {...props}>
//                               <element.component {...props} />
//                           </wrap.component>
//                       );
//                   }

//                   return <element.component {...props} />
//               }}
//               key={index}
//           />
//       })

//   }

//   render () {
//       return (
//           <Router basename={env.BASEPATH}>
//               <AppContainer>
//                   <Auth onRef={(ref) => {
//                       globals.auth = ref;
//                   }}/>
//                   <Switch>
//                       {this.renderRoutes(ROUTES)}
//                       {this.renderRoutes(AUTH_ROUTES, AuthContainer)}
//                       {this.renderRoutes(dashboardRoutes, DashboardContainer)}
//                       <Route path='*' component={NotFound}/>
//                   </Switch>
//                   <CookiesPolicy />
//               </AppContainer>
//           </Router>
//       );
//   }

// }