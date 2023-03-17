import logo from "./logo.svg";
import "./App.css";
import { Environments } from "terra.onchainpayments/dist/enums/environments";
import { PaymentsManager } from "terra.onchainpayments";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Make a payment right now with my Test Wallet (Please wait a few
          seconds for a response before trying again)
        </p>
        <button
          title="Make Payment"
          onClick={async () => {
            let businessWallet = "terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp";
            let customerKeys =
              "neither cushion cricket volcano sweet spoon input focus wisdom provide gallery effort loud cruise keen what olive ask weekend onion motion hurdle art demise";

            console.debug("MMAHAHA!");
            var manager = new PaymentsManager({
              env: Environments.Classic,
            })
              .configureBusinessWallet(businessWallet)
              .configureCustomerKeys(
                customerKeys,
                "terra17lmam6zguazs5q5u6z5mmx76uj63gldnse2pdp"
              );

            let tx = await manager.ChargeCustomer(10);
            window.open(tx.txFinderHashUrl, "_blank");
          }}
        >
          Make Payment
        </button>
      </header>
    </div>
  );
}

export default App;
