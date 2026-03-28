import { instructor } from '../data/site'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-inner">
        {/* Left text */}
        <div>
          <div className="fu hero-badge">
            <span className="hero-dot"/>
            Giảng viên · Đại học Đà Lạt
          </div>

          <h1 className="fu d1 hero-title">
            Trần<br/>Vĩnh <span style={{color:'var(--gold)'}}>Phúc</span>
          </h1>

          <p className="fu d2 hero-subtitle">
            {instructor.dept}<br/>
            Mạng máy tính · NGN · VoIP · Bảo mật mạng · AIoT· Edge AI
          </p>

          <div className="fu d3 hero-tags">
            {instructor.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>

          <div className="fu d4 hero-ctas">
            <a href="#courses" className="btn-gold"
              onClick={e=>{e.preventDefault();document.querySelector('#courses')?.scrollIntoView({behavior:'smooth',block:'start'})}}>
              Xem môn học
            </a>
            <a href="#publications" className="btn-ghost"
              onClick={e=>{e.preventDefault();document.querySelector('#publications')?.scrollIntoView({behavior:'smooth',block:'start'})}}>
              Bài báo khoa học
            </a>
          </div>
        </div>

        {/* Right card */}
        <div className="fu d2 hero-card">
          <div className="hero-card-glow"/>
          <div className="hero-avatar">{instructor.avatar}</div>
          <div className="hero-name">{instructor.name}</div>
          <div className="hero-role">
            {instructor.title}<br/>
            {instructor.uni}<br/>
            <span style={{color:'var(--dim)',fontSize:'.78rem'}}>{instructor.city}</span>
          </div>

          <div className="hero-contacts">
            {[
              { icon:'@', sub:'Email',     val:instructor.email, href:`mailto:${instructor.email}` },
              { icon:'#', sub:'Điện thoại',val:instructor.phone, href:`tel:${instructor.phone}` },
              { icon:'U', sub:'Đơn vị',    val:instructor.dept,  href:null },
              { icon:'G', sub:'Scholar',   val:'Xem profile',    href:instructor.scholar },
            ].map((c,i) => (
              <div key={i} className="hero-contact-row">
                <span className="hero-contact-icon">{c.icon}</span>
                <div>
                  <div className="hero-contact-sub">{c.sub}</div>
                  {c.href
                    ? <a href={c.href} target={c.href.startsWith('http')?'_blank':undefined}
                        rel="noopener" className="hero-contact-link">{c.val}</a>
                    : <span style={{color:'var(--paper)',fontSize:'.83rem'}}>{c.val}</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
