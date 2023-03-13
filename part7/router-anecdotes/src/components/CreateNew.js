import { useField } from '../hooks'

const CreateNew = (props) => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')
  const reset = useField('')
  // const [content, setContent] = useState('')
  // const [author, setAuthor] = useState('')
  // const [info, setInfo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    })
  }

  const handleReset = () => {
    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>

      <form onSubmit={handleSubmit}>
        <div>
          content :
          <input
            type={content.type}
            value={content.value}
            onChange={content.onChange}
            // name='content'
            // value={content}
            // onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          author :
          <input
            type={author.type}
            value={author.value}
            onChange={author.onChange}
            // name='author'
            // value={author}
            // onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          url for more info :
          <input
            type={info.type}
            value={info.value}
            onChange={info.onChange}
            // name='info'
            // value={info}
            // onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <button>Create </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}

export default CreateNew
