import TabCount from './ui/TabCount';
import TabMain from './ui/TabMain';
import TabText from './ui/TabText';

const Tab = Object.assign(TabMain, {
  Text: TabText,
  Count: TabCount,
});

export default Tab;
