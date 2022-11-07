import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ChartScreen from "./screens/ChartScreen";
import DentistLoginScreen from "./screens/DentistLoginScreen";
import DentistWaitingListScreen from "./screens/DentistWaitingListScreen";
import DentistChart from "./screens/DentistChart";
import DeskLogin from './screens/DeskLogin';
import DeskWaitingList from './screens/DeskWaitingList';
import DeskBillList from './screens/DeskBillList';
import DeskSummary from './screens/DeskSummary';
import DeskSetting from './screens/DeskSetting';
import DeskResult from './screens/DeskResult';
import DeskPrint01 from './screens/DeskPrint01';
import DeskPrint02 from './screens/DeskPrint02';
import Mobile01 from './screens/Mobile01';
import Mobile02 from './screens/Mobile02';
import Mobile03 from './screens/Mobile03';
import Mobile04 from './screens/Mobile04';
import Mobile05 from './screens/Mobile05';
import TabletLogin from './screens/TabletLogin';
import TabletReception from './screens/TabletReception';
import Tablet01 from './screens/Tablet01';
import Tablet02 from './screens/Tablet02';
import Tablet03 from './screens/Tablet03';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {/* 차트 화면 (예시) */}
                <Route path="/" component={HomeScreen} exact />
                <Route path="/chart" component={ChartScreen} exact />
                <Route path="/dentist/login" component={DentistLoginScreen} exact />
                <Route path="/dentist/waiting-list" component={DentistWaitingListScreen} exact />
                <Route path="/dentist/chart" component={DentistChart} exact />

                <Route path="/desk/login" component={DeskLogin} exact />
                <Route path="/desk/waitingList" component={DeskWaitingList} exact />
                <Route path="/desk/bill" component={DeskBillList} exact />
                <Route path="/desk/summary" component={DeskSummary} exact />
                <Route path="/desk/setting" component={DeskSetting} exact />
                <Route path="/desk/result" component={DeskResult} exact />
                <Route path="/desk/print01" component={DeskPrint01} exact />
                <Route path="/desk/print02" component={DeskPrint02} exact />
                <Route path="/desk/print02" component={DeskPrint02} exact />
                <Route path="/desk/tabletLogin" component={TabletLogin} exact />
                <Route path="/desk/tabletReception" component={TabletReception} exact />
                <Route path="/desk/Tablet01" component={Tablet01} exact />
                <Route path="/desk/Tablet02" component={Tablet02} exact />
                <Route path="/desk/Tablet03" component={Tablet03} exact />

                <Route path="/mobile/Mobile01" component={Mobile01} exact />
                <Route path="/mobile/Mobile02" component={Mobile02} exact />
                <Route path="/mobile/Mobile03" component={Mobile03} exact />
                <Route path="/mobile/Mobile04" component={Mobile04} exact />
                <Route path="/mobile/Mobile05" component={Mobile05} exact />

                {/* 위 처럼 카테고리 별로 화면을 나열해주시면 됩니다. 
                    screens 디렉토리에 있는 화면을 모두 적어주시면 됩니다.

                    1. tablet - 의사
                    <Route path="/dentist/login" component={DentistLoginScreen} exact />
                    <Route path="/dentist/waiting-list" component={DentistWaitingListScreen} exact />
                    ...

                    2. pc - 데스크 화면
                    <Route path="/desk/login" component={DeskLoginScreen} exact /> 
                    <Route path="/desk/main" component={DeskMainScreen} exact />
                    ...

                    3. mobile - 환자 문진표

                    4. tablet - 데스크 (환자 문진표)
                    
                    5. tablet - 환자안내
                */}
            </Switch>
        </ BrowserRouter>
    );
}

export default App;