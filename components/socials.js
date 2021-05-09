import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Socials() {
  return (
    <div className="flex justify-center items-center space-x-4">
      <a href="https://twitter.com/TimPaisley" className="text-blue-500 hover:text-blue-800">
        <FontAwesomeIcon icon={faTwitter} className="w-6" />
      </a>
      <a href="https://github.com/TimPaisley" className="text-blue-500 hover:text-blue-800">
        <FontAwesomeIcon icon={faGithub} className="w-6" />
      </a>
      <a href="mailto:tepaisley@gmail.com" className="text-blue-500 hover:text-blue-800">
        <FontAwesomeIcon icon={faEnvelope} className="w-6" />
      </a>
    </div>
  )
}