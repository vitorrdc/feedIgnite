import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from "./components/Post"

import './global.css'
import styles from './App.module.css'


function App() {

  // auhor: { avatar_url: "", name: "", role: ""}
  // publishedAt: Date
  // contend: String

  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/vitorrdc.png',
        name: "Vitor Campos",
        role: "Web Delevoper"
      },
      content:  [
        {type: 'paragraphy', content: "Fala galeraa 👋", },
        {type: 'paragraphy', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
        {type: 'link', content:'jane.design/doctorcare'},

      ],
      publishedAt: new Date('2024-02-28 20:00:00'), 
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/caiohbfurtado.png',
        name: "Caio Barutti",
        role: "Senior Web Developer"
      },
      content:  [
        {type: 'paragraphy', content: "Fala galeraa 👋", },
        {type: 'paragraphy', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
        {type: 'link', content:'jane.design/doctorcare'},

      ],
      publishedAt: new Date('2024-04-13 10:00:00'), 
    }
  ]

  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar /> 
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  post={post}
                  key={post.id}
                />
              )
            }) 
          }
        </main>      
      </div>
    </div>
  )
}

export default App
