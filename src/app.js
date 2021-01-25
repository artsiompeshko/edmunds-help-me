import { Wrapper } from './components/wrapper';
import { Steps } from './components/steps';

import style from './app.styles.scss';

const App = () => (
  <section class="app" id="help-me-edmunds">
    <Wrapper>
      <Steps />
    </Wrapper>
  </section>
);

export default App;
