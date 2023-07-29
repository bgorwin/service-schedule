// `app` directory
 
export async function getServerSideProps() {
    const res = await fetch(`https://...`)
    const projects = await res.json()
   
    return { props: { projects } }
  }
   
  export default function Dashboard({ projects }) {
    return (
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    )
  }