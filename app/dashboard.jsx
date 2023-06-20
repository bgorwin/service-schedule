// `app` directory
 
// This function can be named anything
async function getProjects() {
    const res = await fetch(`https://...`, { cache: 'no-store' })
    const projects = await res.json()
   
    return projects
  }
   
  export default async function Dashboard() {
    const projects = await getProjects()
   
    return (
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    )
  }