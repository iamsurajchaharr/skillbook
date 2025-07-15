import { sanityClient } from '../utils/sanityClient'

export async function getStaticProps() {
  try {
    const allDocuments = await sanityClient.fetch(`*[_type in ["footer", "navbar", "heroSection"]]`)
    const footerData = await sanityClient.fetch(`*[_type=="footer"][0]`)
    
    return {
      props: {
        allDocuments,
        footerData,
        error: null
      }
    }
  } catch (error) {
    return {
      props: {
        allDocuments: [],
        footerData: null,
        error: error.message
      }
    }
  }
}

export default function TestSanity({ allDocuments, footerData, error }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sanity Connection Test</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Error:</strong> {error}
        </div>
      )}
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">All Documents:</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(allDocuments, null, 2)}
        </pre>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Footer Data:</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(footerData, null, 2)}
        </pre>
      </div>
    </div>
  )
} 