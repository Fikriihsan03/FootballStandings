import { Route, BrowserRouter, Switch } from "react-router-dom";
import JadwalPertandingan from "../../containers/JadwalPertandingan/JadwalPertandingan";
import Klasemen from "../../containers/Klasemen/Klasemen";
const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Klasemen} />
        <Route path="/jadwal-pertandingan" component={JadwalPertandingan} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routing;
