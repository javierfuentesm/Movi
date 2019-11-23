/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "../src/views/Dashboard.jsx";
import Icons from "../src/views/Icons.jsx";
import Map from "../src/views/Map.jsx";
import Notifications from "../src/views/Notifications.jsx";
import Rtl from "../src/views/Rtl.jsx";
import Viajes from "../src/views/Viajes.jsx";
import Metodos from "../src/views/Metodos.jsx";
import Typography from "../src/views/Typography.jsx";
import UserProfile from "../src/views/UserProfile.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Movi",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/viajes",
    name: "Mis viajes",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: Viajes,
    layout: "/admin"
  },
  {
    path: "/metodos",
    name: "Mis métodos de pago",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-credit-card",
    component: Metodos,
    layout: "/admin"
  }

];
export default routes;
