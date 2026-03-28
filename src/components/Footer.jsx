import { instructor } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{position:'relative',zIndex:1,padding:'2.8rem 2.5rem',borderTop:'1px solid var(--border)',background:'var(--ink)'}}>
      <div className="footer-inner" style={{maxWidth:1200,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1.5rem'}}>
        <div>
          <div style={{fontFamily:'var(--serif)',fontSize:'1.05rem',color:'var(--paper)',marginBottom:'.3rem'}}>
            Trần Vĩnh <span style={{color:'var(--gold)'}}>Phúc</span>
          </div>
          <div style={{fontSize:'.76rem',color:'var(--dim)'}}>
            Giảng viên · {instructor.dept} · {instructor.uni}
          </div>
        </div>

        <div className="footer-links" style={{display:'flex',gap:'1.8rem'}}>
          {[['#courses','Môn học'],['#research','Nghiên cứu'],['#publications','Bài báo'],
            [`mailto:${instructor.email}`,'Email']].map(([h,l]) => (
            <a key={h} href={h} style={{fontSize:'.79rem',color:'var(--dim)',transition:'color .15s',letterSpacing:'.02em',textDecoration:'none'}}
              onMouseEnter={e=>e.target.style.color='var(--paper)'}
              onMouseLeave={e=>e.target.style.color='var(--dim)'}>{l}</a>
          ))}
        </div>

        <div style={{fontSize:'.74rem',color:'var(--dim)',fontFamily:'var(--mono)'}}>
          © {year} {instructor.email}
        </div>
      </div>
    </footer>
  )
}
