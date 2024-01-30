import ReactDOM from 'react-dom';
import App from './app';
import {GlobalStyles} from './globalStyles';
import 'normalize.css';
import { firebase } from './lib/firebase.prod';
import {FirebaseContext} from './context/firebase';

//JSx fragment is used

ReactDOM.render(
<>
<FirebaseContext.Provider value={{firebase}}>
<GlobalStyles/>
<App/>
</FirebaseContext.Provider>
</>,
    document.getElementById('root')
);

