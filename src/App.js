import Header from "components/Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import AppRoutes from "routes";
import store, { persistor } from "store";
import GlobalStyle from "styles/GlobalStyles";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <GlobalStyle></GlobalStyle>
          <Header></Header>
          <AppRoutes></AppRoutes>
          <ToastContainer
            className="toastify-container"
            autoClose={3000}
          ></ToastContainer>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
