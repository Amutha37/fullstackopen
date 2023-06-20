import '../apps1.css'

const SampleFlex = () => {
  return (
    <>
      <header>
        <h1>Document Heading</h1>
      </header>

      <main>
        <article>
          <h2>This is the heading of the main section</h2>
          <p>This is a paragraph of text.</p>
        </article>
        <aside>Here is the aside</aside>
      </main>

      <nav>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/blog'>Blog</a>
        <a href='/jobs'>Careers</a>
        <a href='/contact'>Contact Us</a>
      </nav>
      <footer>
        <p>
          Copyright &#169; 2020 <a href='https://fullstackopen.com/'>My Site</a>
        </p>
      </footer>
    </>
  )
}

export default SampleFlex
