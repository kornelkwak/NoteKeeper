
import './App.css';
import TableOfNotes from './components/Notes/TableOfNotes';

const notesList = [
  {
    title: 'notatka 1',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsasfasfsfsf asdfasdfsdafsafad asdfasdfasdfasdf asdfasdfasfasf as',
    key: 1,
    i: 1, x: 1, y: 1, w: 1, h: 6
  },
  {
    title: 'notatka 2',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdf',
    key: 2,
    i: 2, x: 6, y: 1, w: 1, h: 6
  },
  {
    title: 'notatka 3',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdf',
    key: 3,
    i: 3, x: 0, y: 0, w: 1, h: 6
  },
  {
    title: 'notatka 4',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasd',
    key: 4,
    i: 4, x: 2, y: 1, w: 1, h: 6
  },
  {
    title: 'notatka 5',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdf',
    key: 5,
    i: 5, x: 0, y: 1, w: 1, h: 6
  },
]

function App() {
  console.log(notesList)
  return (
   <TableOfNotes notes = {notesList}/> 
  );
}

export default App;
