import { useEffect, useRef, useState } from 'react'
import Layout from '../components/Layout.jsx'
import portrait from '../../assets/Qvinh-01-01.svg'
import campusMap from '../../assets/NEU_campus-01.svg'

const CEREMONY = {
  school: 'National Economics University, Hanoi.',
  date: '22.08.2026',
  time: '10 AM',
  contact: '0838160636',
}

const DEFAULT_MAP_LOCATION = {
  type: 'Campus map',
  title: 'Khám phá khuôn viên NEU',
  description: 'Di chuột vào từng khu vực hoặc dùng phím Tab để xem vị trí được đánh dấu trên bản đồ.',
  id: '10 điểm tương tác',
}

const MAP_LOCATIONS = {
  'parking-lot-1': { type: 'Bãi đỗ xe', title: 'Bãi đỗ xe 01', description: 'Hãy chuẩn bị trước 3k tiền lẻ cho phí giữ xe nhé.' },
  'parking-lot-2': { type: 'Bãi đỗ xe', title: 'Bãi đỗ xe 02', description: 'Hãy chuẩn bị trước 3k tiền lẻ cho phí giữ xe nhé.' },
  'parking-lot-3': { type: 'Bãi đỗ xe', title: 'Bãi đỗ xe 03', description: 'Hãy chuẩn bị trước 3k tiền lẻ cho phí giữ xe nhé.' },
  'campus-object-1': { type: 'Tòa nhà', title: 'Tòa nhà thế kỷ', description: 'Lễ tốt nghiệp sẽ được tổ chức tại hội trường A2 (Nằm tại toàn nhà này)' },
  'campus-object-2': { type: 'Tòa nhà', title: 'Giảng đường B', description: '' },
  'campus-object-3': { type: 'Tòa nhà', title: 'Nhà 9', description: '' },
  'campus-object-4': { type: 'Tòa nhà', title: 'Hội trường A', description: '' },
  'campus-object-5': { type: 'Tòa nhà', title: 'Giảng đường D2', description: '' },
  'campus-object-6': { type: 'Tòa nhà', title: 'Giảng đường D1', description: '' },
  'campus-object-7': { type: 'Tòa nhà', title: 'Giảng đường C', description: '' },
}

export default function GraduationCeremony() {
  const mapObjectRef = useRef(null)
  const [mapDocument, setMapDocument] = useState(null)
  const [activeLocation, setActiveLocation] = useState(DEFAULT_MAP_LOCATION)

  useEffect(() => {
    const previousTitle = document.title
    document.title = "Quang Vinh's Graduation Ceremony"

    return () => {
      document.title = previousTitle
    }
  }, [])

  useEffect(() => {
    if (!mapDocument) return undefined

    const interactiveObjects = [...mapDocument.querySelectorAll('.interactive-object')]
    const cleanups = []

    interactiveObjects.forEach((object) => {
      const activate = () => {
        setActiveLocation({
          ...(MAP_LOCATIONS[object.id] ?? {
            type: object.dataset.objectType || 'Campus map',
            title: object.dataset.title || 'Khu vực trong khuôn viên',
            description: object.dataset.description || DEFAULT_MAP_LOCATION.description,
          }),
          id: object.id,
        })
      }
      const reset = () => setActiveLocation(DEFAULT_MAP_LOCATION)

      object.addEventListener('pointerenter', activate)
      object.addEventListener('pointerleave', reset)
      object.addEventListener('focus', activate)
      object.addEventListener('blur', reset)
      cleanups.push(() => {
        object.removeEventListener('pointerenter', activate)
        object.removeEventListener('pointerleave', reset)
        object.removeEventListener('focus', activate)
        object.removeEventListener('blur', reset)
      })
    })

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [mapDocument])

  const handleMapLoad = () => {
    setMapDocument(mapObjectRef.current?.contentDocument ?? null)
  }

  return (
    <Layout>
      <main className="graduation-main">
        <section id="invitation" className="graduation-invitation" aria-labelledby="invitation-title">
          <header data-reveal className="graduation-invitation-heading">
            <p>01 / Invitation</p>
            <h1 id="invitation-title">
              You&apos;re invited<br /><em>to celebrate.</em>
            </h1>
          </header>

          <div data-reveal className="graduation-ticket-wrap">
            <article className="graduation-ticket">
              <div className="graduation-ticket-inner">
                <div className="graduation-ticket-copy">

                  <h2>
                    <span className="graduation-name">Quang Vinh&apos;s</span>
                    <em>Graduation Ceremony</em>
                  </h2>
                  <p className="graduation-message">
                    Hành trình thanh xuân của mình sẽ chẳng rực rỡ nếu thiếu vắng những người đồng hành tuyệt vời. 
                    Cảm ơn vì đã ở đây, và sự có mặt của bạn sẽ làm cho mốc quan trọng này của mình trở nên đặc biệt hơn!
                  </p>

                  <dl className="graduation-details">
                    <div>
                      <dt>Date</dt>
                      <dd>{CEREMONY.date}</dd>
                    </div>
                    <div>
                      <dt>Time</dt>
                      <dd>{CEREMONY.time}</dd>
                    </div>
                    <div>
                      <dt>Contact</dt>
                      <dd>{CEREMONY.contact}</dd>
                    </div>
                    <div>
                      <dt>Venue</dt>
                      <dd>
                        {CEREMONY.school}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="graduation-ticket-portrait">
                  <img src={portrait} alt="Illustrated portrait of Quang Vinh" />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="campus-map" className="graduation-campus" aria-labelledby="campus-map-title">
          <header data-reveal className="graduation-campus-heading">
            <p>02 / Campus map</p>
            <h2 id="campus-map-title">
              Find the way<br /><em>around NEU.</em>
            </h2>
          </header>

          <div data-reveal className="graduation-campus-workspace">
            <div className="graduation-campus-canvas">
              <div className="graduation-campus-instruction" aria-hidden="true">
                <span>Explore</span>
                <span>Hover / Tab</span>
              </div>
              <object
                ref={mapObjectRef}
                className="graduation-campus-object"
                data={campusMap}
                type="image/svg+xml"
                aria-label="Bản đồ tương tác khuôn viên Đại học Kinh tế Quốc dân"
                onLoad={handleMapLoad}
              >
                <img src={campusMap} alt="Bản đồ khuôn viên Đại học Kinh tế Quốc dân" />
              </object>
            </div>

            <aside
              className="graduation-campus-info"
              data-active={activeLocation.id !== DEFAULT_MAP_LOCATION.id}
              aria-live="polite"
            >
              <div>
                <span className="graduation-campus-type">{activeLocation.type}</span>
                <h3>{activeLocation.title}</h3>
                <p>{activeLocation.description}</p>
              </div>

            </aside>
          </div>
        </section>
      </main>
    </Layout>
  )
}
