import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const ProjectFeatures = [
  {
    title: 'Modular Design',
    description: (
      <>
        Our humanoid features a <strong>modular mechanical and electrical platform </strong> 
        with swappable components including grippers, feet, sensors, and motors. 
        This design enables rapid prototyping and easy customization for different applications.
      </>
    ),
  },
  {
    title: 'Multi-Modal Capability',
    description: (
      <>
        The same leg design works in both <strong>quadrupedal and bipedal</strong> configurations. 
        Our modular knee system allows easy transformation between robot types, 
        requiring only a knee replacement rather than an entirely new leg.
      </>
    ),
  },
  {
    title: 'Open Source Community',
    description: (
      <>
        Built by students from <strong>Caltech, Columbia, Berkeley, and Rutgers</strong>, 
        this project aims to lower barriers to humanoid robotics research and development 
        through open-source collaboration and shared knowledge.
      </>
    ),
  },
];

const HardwareComponents = [
  {
    title: 'Leg Test Stand',
    icon: '🦵',
    href: '/docs/hardware/leg-test-stand'
  },
  {
    title: 'Motors & Actuators',
    icon: '⚡',
    href: '/docs/hardware/motors'
  },
  {
    title: 'Control PCBs',
    icon: '🔌',
    href: '/docs/hardware/control-pcbs'
  },
  {
    title: 'Modular Interfaces',
    icon: '🔗',
    href: '/docs/hardware/modular-interfaces'
  }
];

const SoftwareComponents = [
  {
    title: 'Control System',
    icon: '🎮',
    href: '/docs/software/control-system'
  },
  {
    title: 'Simulation Tools',
    icon: '🖥️',
    href: '/docs/software/simulation'
  },
  {
    title: 'Firmware',
    icon: '💾',
    href: '/docs/software/firmware'
  },
  {
    title: 'Documentation',
    icon: '📚',
    href: '/docs/software/documentation'
  }
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ComponentButton({title, icon, href}) {
  return (
    <div className={clsx('col col--3')} style={{marginBottom: '1rem'}}>
      <a 
        href={href}
        style={{
          display: 'block',
          padding: '1rem',
          textDecoration: 'none',
          color: '#25c2a0',
          textAlign: 'center',
          fontSize: '1.1em',
          fontWeight: 'bold'
        }}
      >
        <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>{icon}</div>
        <div>{title}</div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* Project Overview */}
        <div className="row" style={{marginBottom: '3rem'}}>
          <div className="col col--12 text--center">
            <Heading as="h2">Building the Future of Humanoid Robotics</Heading>
            <p style={{fontSize: '1.2em', maxWidth: '800px', margin: '0 auto'}}>
              We are developing an <strong>open-source humanoid robot</strong> with modular hardware 
              that can transform between quadrupedal and bipedal configurations. Our goal is to create 
              a shared platform that advances education and research in humanoid development.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="row" style={{marginBottom: '3rem'}}>
          <div className="col col--12 text--center">
            <Heading as="h3" style={{marginBottom: '2rem'}}>Key Features</Heading>
          </div>
          {ProjectFeatures.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        {/* Hardware Components */}
        <div className="row" style={{marginBottom: '3rem'}}>
          <div className="col col--12 text--center">
            <Heading as="h3" style={{marginBottom: '2rem'}}>Hardware Components</Heading>
          </div>
          {HardwareComponents.map((props, idx) => (
            <ComponentButton key={idx} {...props} />
          ))}
        </div>

        {/* Software Components */}
        <div className="row">
          <div className="col col--12 text--center">
            <Heading as="h3" style={{marginBottom: '2rem'}}>Software Components</Heading>
          </div>
          {SoftwareComponents.map((props, idx) => (
            <ComponentButton key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
