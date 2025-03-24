export const getPost = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch post')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
} 