import NavBar from './Components/Pages/NavBar/NavBar';
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/About';
import Service from './Components/Pages/Services/AllService/Service';
import ContactUsPage from './Components/Pages/Contact/ContactUsPage';
import Blog from './Components/Pages/Blog/Blog';
import Footer from './Components/Pages/Footer/Footer';
import PageNotFound from './Components/Pages/PageNotFound/PageNotFound';
import Login from './Components/Pages/Login/Login';
import Registration from './Components/Pages/Registration/Registration';
import { Route, Switch } from 'react-router-dom';
import PackageDetails from './Components/Pages/PackageDetails.js/PackageDetails';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div>
    <AuthProvider>
      <NavBar></NavBar>
      <Switch> 
        <Route exact path='/'>
          <Home> </Home>
         </Route>
        <Route exact path='/home'>
          <Home> </Home>
         </Route>
        <Route exact path='/about'>
           <About></About>
         </Route>
        <Route exact path='/service'>
          <Service></Service>
         </Route>
        <PrivateRoute exact path='/booking/:id'>
          <PackageDetails> </PackageDetails>
         </PrivateRoute>
        <PrivateRoute exact path='/blogs'>
          <Blog> </Blog>
         </PrivateRoute>
        <Route exact path='/contact'>
            <ContactUsPage> </ContactUsPage>
         </Route>
        <Route exact path='/login'>
           <Login> </Login>
         </Route>
        <Route exact path='/registration'>
           <Registration> </Registration>
         </Route>
        <Route path='/*'>
            <PageNotFound> </PageNotFound>
         </Route>   
      </Switch>
      <Footer> </Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
