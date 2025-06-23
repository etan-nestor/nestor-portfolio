import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  doc,
  deleteDoc,
  query, 
  where, 
  orderBy,
  serverTimestamp,
  getDoc
} from "firebase/firestore"
import { db } from "@/lib/cf.firebase"
import { Project } from "@/types/projects"


export const getProjects = async (category?: string): Promise<Project[]> => {
  try {
    const projectsRef = collection(db, "op_projects")
    let q = query(projectsRef, orderBy("created_at", "desc"))

    if (category && category !== "Tous") {
      q = query(q, where("category", "==", category))
    }

    const querySnapshot = await getDocs(q)
    const projects: Project[] = []

    querySnapshot.forEach((doc) => {
      const data = doc.data()
      projects.push({
        id: doc.id,
        title: data.title,
        description: data.description,
        tags: data.tags,
        image: data.image,
        live: data.live,
        client: data.client,
        type: data.type,
        category: data.category,
        status: data.status,
        created_at: data.created_at.toDate(),
        updated_at: data.updated_at.toDate()
      })
    })

    return projects
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export const getProjectById = async (id: string): Promise<Project> => {
  const docRef = doc(db, "op_projects", id)
  const docSnap = await getDoc(docRef)
  
  if (!docSnap.exists()) {
    throw new Error("Projet non trouvé")
  }
  
  return {
    id: docSnap.id,
    ...docSnap.data()
  } as Project
}

export const addProject = async (projectData: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Promise<string> => {
  const docRef = await addDoc(collection(db, "op_projects"), {
    ...projectData,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp()
  })
  return docRef.id
}

export const updateProject = async (id: string, projectData: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>>): Promise<void> => {
  await updateDoc(doc(db, "op_projects", id), {
    ...projectData,
    updated_at: serverTimestamp()
  })
}

export const deleteProject = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, "op_projects", id))
}