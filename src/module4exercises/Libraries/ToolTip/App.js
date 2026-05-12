import Asterisk from './Asterisk';
import * as Tooltip from '@radix-ui/react-tooltip';

function App() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <p>
        This paragraph has some additional context
        <Asterisk>
          I’m the additional context!
        </Asterisk>{' '}
        held in an asterisk
      </p>
    </Tooltip.Provider>
  );
}

export default App;