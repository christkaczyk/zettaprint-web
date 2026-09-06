import {
  FiRefreshCw,
  FiShield,
  FiPenTool,
  FiTruck,
} from 'react-icons/fi'

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="feature-card">
      <div className="feature-icon">
        <Icon size={26} />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default FeatureCard