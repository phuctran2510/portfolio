import { useState, useEffect } from 'react'
import { instructor } from '../data/site'

const links = [
  { href:'#courses',      label:'Môn học'    },
  { href:'#research',     label:'Nghiên cứu' },
  { href:'#publications', label:'Bài báo'    },
  { href:'#contact',      label:'Liên hệ'    },
]

function scroll(href) {
  const el = document.querySelector(href)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior:'smooth' })
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    const h = () => { if(window.innerWidth > 700) setOpen(false) }
    window.addEventListener('resize', h)
    return () => window.removeEventListener('resize', h)
  }, [])

  return (
    <>
      <nav style={{
        position:'fixed',top:0,left:0,right:0,zIndex:100,
        display:'flex',alignItems:'center',justifyContent:'space-between',
        padding:'.85rem 2.5rem',
        background: scrolled?'rgba(10,12,16,.95)':'rgba(10,12,16,.82)',
        backdropFilter:'blur(16px)',
        borderBottom:`1px solid ${scrolled?'rgba(31,42,61,.8)':'var(--border)'}`,
        transition:'all .3s',
      }}>
        {/* Brand */}
        <a href="#home" onClick={e=>{e.preventDefault();scroll('#home')}}
          style={{fontFamily:'var(--serif)',fontSize:'1.05rem',fontWeight:600,color:'var(--paper)',letterSpacing:'-.01em',textDecoration:'none'}}>
          Trần Vĩnh <span style={{color:'var(--gold)'}}>Phúc</span>
        </a>

        {/* Desktop links */}
        <div className="nav-desktop-links" style={{display:'flex',gap:'2rem',alignItems:'center'}}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={e=>{e.preventDefault();scroll(l.href)}}
              style={{fontSize:'.82rem',fontWeight:500,color:'var(--dim)',letterSpacing:'.04em',textTransform:'uppercase',transition:'color .18s',textDecoration:'none'}}
              onMouseEnter={e=>e.target.style.color='var(--paper)'}
              onMouseLeave={e=>e.target.style.color='var(--dim)'}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href={`mailto:${instructor.email}`}
          className="nav-desktop-cta"
          style={{display:'flex',alignItems:'center',background:'var(--gold)',color:'var(--ink)',padding:'.4rem 1rem',borderRadius:'999px',fontSize:'.8rem',fontWeight:600,letterSpacing:'.03em',transition:'all .2s',textDecoration:'none'}}
          onMouseEnter={e=>{e.currentTarget.style.background='#e0bb60';e.currentTarget.style.transform='translateY(-1px)'}}
          onMouseLeave={e=>{e.currentTarget.style.background='var(--gold)';e.currentTarget.style.transform='none'}}>
          Gửi email
        </a>

        {/* Hamburger */}
        <button className="nav-hamburger" onClick={()=>setOpen(o=>!o)} aria-label="Menu">
          <span style={{transform:open?'translateY(7px) rotate(45deg)':'none'}}/>
          <span style={{opacity:open?0:1}}/>
          <span style={{transform:open?'translateY(-7px) rotate(-45deg)':'none'}}/>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position:'fixed',top:60,left:0,right:0,zIndex:99,
          background:'rgba(10,12,16,.97)',backdropFilter:'blur(20px)',
          borderBottom:'1px solid var(--border)',
          padding:'1.2rem 1.5rem',
          display:'flex',flexDirection:'column',gap:'.8rem',
          animation:'slideIn .22s ease',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={e=>{e.preventDefault();scroll(l.href);setOpen(false)}}
              style={{fontSize:'.97rem',color:'var(--dim)',padding:'.5rem 0',borderBottom:'1px solid var(--border)',fontWeight:500,textDecoration:'none',display:'block'}}>
              {l.label}
            </a>
          ))}
          <a href={`mailto:${instructor.email}`}
            style={{fontSize:'.97rem',color:'var(--gold)',padding:'.5rem 0',fontWeight:500,textDecoration:'none',display:'block'}}>
            {instructor.email}
          </a>
        </div>
      )}
    </>
  )
}
