
import './App.css';
import TableOfNotes from './components/Notes/TableOfNotes';

const notesList = [
  {
    title: 'notatka 1',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdf',
    key: 1,
  },
  {
    title: 'notatka 2',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdf',
    key: 2,
  },
  {
    title: 'notatka 3',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdf',
    key: 3,
  },
  {
    title: 'notatka 4',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasd',
    key: 4,
  },
  {
    title: 'notatka 5',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdf',
    key: 5,
  },
  {
    title: 'notatka 5',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdf',
    key: 6,
  },
  {
    title: 'notatka 5',
    content: 'sadfasfsfasfasdfasdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdf',
    key: 7,
  },
  {
    title: 'notatka 5',
    content: 'sadfasfsfasfasdfasdfwrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsasadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdf',
    key: 8,
  },
  {
    title: 'notatka 5',
    content: 'sadfasfsfasfasdfaawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsawrfgsdfasdfasfadsfadsfasdfasdfadsfadsfadsfasdfasdfdsafasdfsadfsadfasdfadsasdfsdfsadf asfdasfasfasfsfsf asdfasdfsdafdsafad asdfasdfasdfasdf asdfasdfasfasf asdfasdfasdf',
    key: 9,
  },
]

function App() {
  console.log(notesList)
  return (
   <TableOfNotes notes = {notesList}/> 
  );
}

export default App;
