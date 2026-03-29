import { useReveal } from '../hooks/useReveal'
import { research } from '../data/site'

function ResearchCard({ r, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{...S.card, transitionDelay:`${delay}s`}}>
      <div style={S.num(r.color)}>{r.num}</div>
      <h3 style={S.title}>{r.title}</h3>
       <p style={S.desc}>
        {r.authors}
        {r.corresponding && <sup>*</sup>}
      </p>
      <p style={S.desc}>{r.desc}</p>
      <div style={S.kws}>
        {r.kws.map(k => <span key={k} style={S.kw}>{k}</span>)}
      </div>
    </div>
  )
}

export default function Research() {
  return (
    <section id="research" style={S.section}>
      <div style={S.inner}>
        <div className="section-label">Hướng nghiên cứu</div>
        <h2 className="section-title">Lĩnh vực chuyên môn</h2>
        <p className="section-desc">
          Nghiên cứu tập trung vào mạng thế hệ mới, tự động hóa mạng và bảo mật hệ thống , Trí tuệ nhân tạo cho IoT và bảo mật cho Edge AI.
        </p>
        <div style={S.grid}>
          {research.map((r, i) => <ResearchCard key={r.num} r={r} delay={i * 0.07}/>)}
        </div>
      </div>
    </section>
  )
}

const S = {
  section:{ borderTop:'1px solid var(--border)' },
  inner:{ maxWidth:1200,margin:'0 auto' },
  grid:{
    display:'grid',
    gridTemplateColumns:'repeat(auto-fill,minmax(min(300px,100%),1fr))',
    gap:'1.3rem',
  },
  card:{
    background:'var(--faint)',border:'1px solid var(--border)',
    borderRadius:'var(--r)',padding:'1.5rem',
    transition:'border-color .2s, opacity .55s ease, transform .55s ease',
  },
  num: c => ({
    display:'inline-block',
    fontFamily:'var(--mono)',fontSize:'.68rem',fontWeight:600,
    color:c,letterSpacing:'.08em',
    background:`${c}0e`,border:`1px solid ${c}20`,
    padding:'.16rem .5rem',borderRadius:4,
    marginBottom:'.75rem',
  }),
  title:{ fontFamily:'var(--serif)',fontSize:'1.03rem',fontWeight:600,color:'var(--paper)',marginBottom:'.5rem',lineHeight:1.3 },
  desc:{ fontSize:'.82rem',color:'var(--dim)',lineHeight:1.65,marginBottom:'.9rem' },
  kws:{ display:'flex',flexWrap:'wrap',gap:'.3rem' },
  kw:{
    padding:'.18rem .52rem',borderRadius:4,
    background:'rgba(255,255,255,.04)',border:'1px solid var(--border)',
    fontSize:'.69rem',color:'var(--dim)',fontFamily:'var(--mono)',
  },
}
