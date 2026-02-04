/**
 * ChildrenProps Component
 * Demonstrates the special 'children' prop for nesting content within components.
 */

function Card({ children, title, color = 'blue' }) {
  const colorCLasses = {
    blue: 'bg-blue-500 border-blue-500',
    green: 'bg-green-500 border-green-500',
    red: 'bg-red-500 border-red-500',
    purple: 'bg-purple-500',
  }

  return (
    <div className={`border-l-4 p-6 rounded-lg shadow-lg bg-gray-800/50 backdrop-blur-sm ${colorCLasses[color]}`}>
      <div className="mb-4">
        {title && (
          <h3 className="text-lg font-bold text-white mb-2">
            {title}
          </h3>
        )}
      </div>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  )
}
function Container({ children, layout = 'vertical' }) {
  const layoutClasses = {
    vertical: 'flex flex-col space-y-4',
    horizontal: 'flex  flex-row flex-wrap gap-4',
    grid: 'grid grid-cols-1 md:grid-cols-2 gap-4',
  }
  return (
    <div className={layoutClasses[layout]}>
      {children}
    </div>
  )
}
export default function ChildrenProps() {
  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
            Children Props
          </h2>
          <p className="text-gray-400">
            Demonstrating how to pass and nest components using the <code>children</code> prop.
          </p>
        </header>

        <div className="">
          <Container layout="grid">
            <Card title="User Profile" color="purple">
              <p className="mb-2">Name: John Doe</p>
              <p className="mb-2">Age: 25</p>
              <p className="mb-2">City: New York</p>
            </Card>
            <Card title="Statistic" color="green">
              <p className="mb-2">Total Users: 100</p>
              <p className="mb-2">Active Users: 75</p>
              <p className="mb-2">Inactive Users: 25</p>
            </Card>
            <Card title="Quick Actions" color="red">
              <button className="border border-white/10 px-4 py-2 rounded-lg bg-blue-400 ml-5 cursor-pointer">Add User</button>
              <button className="border border-white/10 px-4 py-2 rounded-lg bg-blue-400 ml-5 cursor-pointer">Edit User</button>
            </Card>
          </Container>
        </div>
      </div>
    </div>
  )
}

