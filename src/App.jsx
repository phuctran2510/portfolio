import Nav          from './components/Nav'
import Hero         from './components/Hero'
import Stats        from './components/Stats'
import Courses      from './components/Courses'
import Research     from './components/Research'
import Publications from './components/Publications'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      {/* Background effects */}
      <div className="grid-bg" aria-hidden="true"/>

      {/* App */}
      <Nav/>
      <main>
        <Hero/>
        <Stats/>
        <Courses/>
        <Research/>
        <Publications/>
      </main>
      <Footer/>
    </>
  )
}
