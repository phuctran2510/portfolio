import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { publications } from '../data/site'

function PubItem({ p, delay }) {
  const ref = useReveal()
  const isJournal = p.type === 'journal'
  return (
    <div ref={ref} className="reveal" style={{...S.item, transitionDelay:`${delay}s`}}
      onMouseEnter={e=>{e.currentTarget.style.borderColor='#2a3a58';e.currentTarget.style.background='#131824'}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.background='var(--faint)'}}>
      <div style={S.year}>{p.year}</div>
      <div style={{minWidth:0}}>
        <div style={S.title}>{p.title}</div>
        <div style={S.authors}>{p.authors}</div>
        <div style={S.meta}>
          <span style={{...S.badge, ...(isJournal ? S.badgeJournal : S.badgeConf)}}>
            {isJournal ? 'Journal' : 'Conference'}
          </span>
          <span style={S.venue}>{p.venue}</span>
          <span style={S.detail}>· {p.detail}</span>
        </div>
      </div>
    </div>
  )
}

export default function Publications() {
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? publications : publications.filter(p => p.type === filter)

  return (
    <section id="publications" style={S.section}>
      <div style={S.inner}>
        <div className="section-label">Công bố khoa học</div>
        <h2 className="section-title">Bài báo đã công bố</h2>
        <p className="section-desc" style={{marginBottom:'1.5rem'}}>
          Các công trình nghiên cứu .
        </p>

        {/* Filter */}
        <div style={S.filters}>
          {[['all','Tất cả'],['journal','Journal'],['conference','Conference']].map(([v,l]) => (
            <button key={v} onClick={()=>setFilter(v)}
              style={{...S.filterBtn, ...(filter===v ? S.filterActive : {})}}>
              {l}
            </button>
          ))}
        </div>

        <div style={S.list}>
          {list.map((p, i) => <PubItem key={i} p={p} delay={i * 0.06}/>)}
        </div>
      </div>
    </section>
  )
}

const S = {
  section:{ borderTop:'1px solid var(--border)',background:'#080b10' },
  inner:{ maxWidth:1200,margin:'0 auto' },
  filters:{ display:'flex',gap:'.5rem',marginBottom:'2rem',flexWrap:'wrap' },
  filterBtn:{
    padding:'.38rem .9rem',borderRadius:'999px',
    background:'var(--faint)',border:'1px solid var(--border)',
    color:'var(--dim)',fontSize:'.8rem',fontWeight:500,
    transition:'all .16s',
  },
  filterActive:{
    background:'rgba(201,168,76,.12)',borderColor:'rgba(201,168,76,.35)',
    color:'var(--gold)',
  },
  list:{ display:'flex',flexDirection:'column',gap:'.9rem' },
  item:{
    background:'var(--faint)',border:'1px solid var(--border)',
    borderRadius:'var(--r)',padding:'1.4rem 1.7rem',
    display:'grid',gridTemplateColumns:'44px 1fr',
    gap:'1.3rem',alignItems:'start',
    transition:'background .18s, border-color .18s, opacity .55s, transform .55s',
    cursor:'default',
  },
  year:{
    fontFamily:'var(--mono)',fontSize:'.77rem',
    color:'var(--gold)',fontWeight:500,
    paddingTop:'.18rem',whiteSpace:'nowrap',
  },
  title:{
    fontSize:'.9rem',fontWeight:600,color:'var(--paper)',
    marginBottom:'.3rem',lineHeight:1.45,
  },
  authors:{ fontSize:'.78rem',color:'var(--dim)',marginBottom:'.55rem' },
  meta:{ display:'flex',alignItems:'center',gap:'.45rem',flexWrap:'wrap' },
  badge:{
    padding:'.16rem .5rem',borderRadius:4,
    fontSize:'.68rem',fontWeight:600,fontFamily:'var(--mono)',
  },
  badgeJournal:{
    background:'rgba(45,212,191,.07)',color:'var(--teal)',
    border:'1px solid rgba(45,212,191,.2)',
  },
  badgeConf:{
    background:'rgba(129,140,248,.07)',color:'#818cf8',
    border:'1px solid rgba(129,140,248,.2)',
  },
  venue:{ fontSize:'.78rem',fontWeight:500,color:'var(--paper)' },
  detail:{ fontSize:'.75rem',color:'var(--dim)' },
}
