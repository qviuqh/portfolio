import { useEffect, useRef, useState } from 'react'
import Layout from '../components/Layout.jsx'
import portrait from '../../assets/Qvinh-01-01.svg'
import campusMap from '../../assets/NEU_campus-01.svg'

const CEREMONY = {
  school: 'National Economics University',
  city: 'Hanoi, Vietnam',
  date: 'Coming soon',
  time: 'To be announced',
}

const DEFAULT_MAP_LOCATION = {
  type: 'Campus map',
  title: 'Khám phá khuôn viên NEU',
  description: 'Di chuột vào từng khu vực hoặc dùng phím Tab để xem vị trí được đánh dấu trên bản đồ.',
  id: '10 điểm tương tác',
}

const MAP_LOCATIONS = {
  'parking-lot-1': { type: 'Bãi đỗ xe', title: 'Bãi đỗ xe 01', description: 'Khu vực đỗ xe được đánh dấu trên sơ đồ khuôn viên.' },
  'parking-lot-2': { type: 'Bãi đỗ xe', title: 'Bãi đỗ xe 02', description: 'Khu vực đỗ xe được đánh dấu trên sơ đồ khuôn viên.' },
  'parking-lot-3': { type: 'Bãi đỗ xe', title: 'Bãi đỗ xe 03', description: 'Khu vực đỗ xe được đánh dấu trên sơ đồ khuôn viên.' },
  ...Object.fromEntries(
    Array.from({ length: 7 }, (_, index) => [
      `campus-object-${index + 1}`,
      {
        type: 'Tòa nhà',
        title: `Khối công trình ${String(index + 1).padStart(2, '0')}`,
        description: 'Khối công trình được đánh dấu trên sơ đồ khuôn viên NEU.',
      },
    ]),
  ),
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
        <section id="invitation" className="graduation-invitation">
          <div data-reveal className="graduation-ticket-wrap">
            <article className="graduation-ticket">
              <div className="graduation-ticket-inner">
                <div className="graduation-ticket-copy">

                  <h2>
                    <span className="graduation-name">Quang Vinh&apos;s</span>
                    <em>Graduation Ceremony</em>
                  </h2>
                  <p className="graduation-message">
                    Sau bốn năm của những bài học, thử thách và kỷ niệm, mình rất mong
                    được gặp bạn để cùng đánh dấu cột mốc thật đặc biệt này.
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
                      <dt>Venue</dt>
                      <dd>
                        {CEREMONY.school}<br />{CEREMONY.city}
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
              Find your way<br /><em>around NEU.</em>
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
                <code>{activeLocation.id}</code>
              </div>

              <div className="graduation-campus-legend" aria-label="Chú thích bản đồ">
                <span><i aria-hidden="true" /> Tòa nhà</span>
                <span><i className="is-parking" aria-hidden="true" /> Bãi đỗ xe</span>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </Layout>
  )
}
