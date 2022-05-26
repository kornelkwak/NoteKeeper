
import './App.css';
import TableOfNotes from './components/Notes/TableOfNotes';

const notesList = [
  {
    title: 'notatka 1',
    content: 'sadfasfsfasfasdfasdfsadf',
    key: 1,
    id: 1,
    
  },
  {
    title: 'notatka 2',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdfsadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdfsadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdfsadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdfsadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdfsadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdfsadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdfsadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdfsadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdfsadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdf',
    key: 2,
    id: 2,
    
  },
  {
    title: 'notatka 3',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdf',
    key: 3,
    id: 3,
    
  },
  {
    title: 'notatka 4',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasd',
    key: 4,
    id: 4,
    
  },
  {
    title: 'notatka 5',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdf',
    key: 5,
    id: 5,
    
  },
]

function App() {
  console.log(notesList)
  return (
   <TableOfNotes notes = {notesList}/> 
  );
}

export default App;
