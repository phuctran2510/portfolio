import { useReveal } from '../hooks/useReveal'
import { courses } from '../data/site'

function CourseCard({ c }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal card" style={S.card(c.color)}>
      <div style={S.topBar(c.color)}/>
      <div style={S.num}>{c.num} / {c.cat}</div>
      <div style={S.icon(c.color)}>{c.icon}</div>
      <h3 style={S.title}>{c.title}</h3>
      <p style={S.desc}>{c.desc}</p>
      <div style={S.tags}>
        {c.tags.map(t => (
          <span key={t} style={S.ctag(c.color)}>{t}</span>
        ))}
      </div>
      <div style={S.links}>
        {c.links.map((l, i) => (
          <a key={i} href={l.url} target="_blank" rel="noopener" style={S.link}
            onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,.06)';e.currentTarget.style.borderColor='rgba(255,255,255,.12)';e.currentTarget.style.transform='translateX(4px)'}}
            onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.02)';e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='none'}}>
            <span style={S.linkLabel}>{l.label}</span>
            <div style={{display:'flex',alignItems:'center',gap:'.5rem'}}>
              <span style={S.linkSlug}>{l.slug}</span>
              <span style={{color:'var(--dim)',fontSize:'.8rem',transition:'transform .18s'}}>→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Courses() {
  return (
    <section id="courses" style={S.section}>
      <div style={S.inner}>
        <div className="section-label">Môn học</div>
        <h2 className="section-title">Giáo trình trực tuyến</h2>
        <p className="section-desc">
          Hệ thống giáo trình tương tác với lab thực hành, lý thuyết, trắc nghiệm và đề tài nghiên cứu.
        </p>
        <div style={S.grid}>
          {courses.map(c => <CourseCard key={c.id} c={c}/>)}
        </div>
      </div>
    </section>
  )
}

const S = {
  section:{ background:'linear-gradient(180deg,var(--ink) 0%,#0c0f16 100%)' },
  inner:{ maxWidth:1200,margin:'0 auto' },
  grid:{
    display:'grid',
    gridTemplateColumns:'repeat(auto-fill,minmax(min(340px,100%),1fr))',
    gap:'1.4rem',
  },
  card: c => ({
    position:'relative',overflow:'hidden',
    padding:'2rem',cursor:'default',
    background:'var(--faint)',border:'1px solid var(--border)',borderRadius:16,
    transition:'all .28s cubic-bezier(.34,1.56,.64,1)',
  }),
  topBar: c => ({ position:'absolute',top:0,left:0,right:0,height:3,background:c }),
  num:{ fontFamily:'var(--mono)',fontSize:'.68rem',color:'var(--dim)',letterSpacing:'.06em',marginBottom:'.9rem' },
  icon: c => ({
    width:48,height:48,borderRadius:12,
    display:'flex',alignItems:'center',justifyContent:'center',
    fontFamily:'var(--serif)',fontSize:'1.3rem',fontWeight:700,color:c,
    background:`${c}14`,border:`1px solid ${c}25`,
    marginBottom:'1.1rem',
  }),
  title:{ fontFamily:'var(--serif)',fontSize:'1.25rem',fontWeight:600,marginBottom:'.5rem',color:'var(--paper)',lineHeight:1.25 },
  desc:{ fontSize:'.83rem',color:'var(--dim)',lineHeight:1.65,marginBottom:'1.3rem' },
  tags:{ display:'flex',flexWrap:'wrap',gap:'.35rem',marginBottom:'1.4rem' },
  ctag: c => ({
    padding:'.2rem .58rem',borderRadius:'999px',
    fontSize:'.71rem',fontWeight:500,
    background:`${c}0d`,color:c,border:`1px solid ${c}22`,
  }),
  links:{ display:'flex',flexDirection:'column',gap:'.5rem' },
  link:{
    display:'flex',alignItems:'center',justifyContent:'space-between',
    padding:'.5rem .82rem',borderRadius:9,
    fontSize:'.79rem',fontWeight:500,
    transition:'all .18s',
    border:'1px solid var(--border)',background:'rgba(255,255,255,.02)',
    textDecoration:'none',color:'var(--paper)',
  },
  linkLabel:{ color:'var(--dim)',fontSize:'.79rem' },
  linkSlug:{ fontFamily:'var(--mono)',fontSize:'.69rem',color:'var(--dim)' },
}
