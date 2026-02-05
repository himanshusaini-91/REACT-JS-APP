/**
 * ComplexProps Component
 * Demonstrates passing objects, arrays, and functions as props.
 */

const UserCard = ({ user, theme, buttons }) => {
  return (
    <div className={`relative overflow-hidden p-6 rounded-3xl border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-indigo-500/10 ${theme.bg} backdrop-blur-xl group`}>
      {/* Decorative Gradient Blob */}
      <div className={`absolute -top-12 -right-12 w-40 h-40 blur-3xl rounded-full opacity-30 transition-transform duration-700 group-hover:scale-150 ${theme.blob}`} />

      <div className="relative z-10">
        <div className="flex items-center gap-5 mb-6">
          <div className="relative">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black text-white shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 ${theme.avatar}`}>
              {user.firstName[0]}{user.lastName[0]}
            </div>
            {user.status === 'active' && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#0a0a0c] rounded-full shadow-lg shadow-emerald-500/20"></div>
            )}
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-white tracking-tight truncate">
              {user.firstName} {user.lastName}
            </h3>
            <p className="text-xs text-gray-400 font-medium truncate opacity-80">{user.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white/5 p-3 rounded-2xl border border-white/5 backdrop-blur-sm">
            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">Posts</p>
            <p className="text-lg font-bold text-white leading-none">{user.stats?.post || 0}</p>
          </div>
          <div className="bg-white/5 p-3 rounded-2xl border border-white/5 backdrop-blur-sm">
            <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Followers</p>
            <p className="text-lg font-bold text-white leading-none">{user.stats?.followers || 0}k</p>
          </div>
        </div>

        <div className="flex gap-4">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              onClick={btn.onClick}
              className={`flex-1 px-5 py-3 rounded-2xl text-sm font-bold tracking-tight transition-all duration-300 active:scale-90 shadow-xl ${btn.color === 'primary'
                ? 'bg-white text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 shadow-white/5'
                : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 backdrop-blur-md'
                }`}
            >
              {btn.text}
            </button>
          ))}
        </div>
      </div>

      {/* Subtle Bottom Border Accent */}
      <div className={`absolute bottom-0 left-0 h-1 transition-all duration-500 group-hover:w-full w-0 ${theme.avatar}`}></div>
    </div>
  )
}

export default function ComplexProps({ onAction }) {
  const users = [
    {
      user: {
        firstName: 'Alexander',
        lastName: 'Vance',
        email: 'alex.vance@quantum.io',
        status: "active",
        stats: {
          post: 300,
          followers: 150
        }
      },
      theme: {
        bg: 'bg-zinc-900/40',
        blob: 'bg-indigo-600',
        avatar: 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
      },
      buttons: [
        {
          text: 'View Profile',
          color: 'primary',
          onClick: () => onAction('Viewing Alexander\'s profile')
        },
        {
          text: 'Connect',
          color: 'secondary',
          onClick: () => onAction('Sending connection request to Alexander')
        }
      ]
    },
    {
      user: {
        firstName: 'Elena',
        lastName: 'Rossi',
        email: 'elena.r@nebula.dev',
        status: "active",
        stats: {
          post: 540,
          followers: 240
        }
      },
      theme: {
        bg: 'bg-zinc-900/40',
        blob: 'bg-emerald-600',
        avatar: 'bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500'
      },
      buttons: [
        {
          text: 'Project Files',
          color: 'primary',
          onClick: () => onAction('Accessing Elena\'s projects')
        },
        {
          text: 'Message',
          color: 'secondary',
          onClick: () => onAction('Opening chat with Elena')
        }
      ]
    }
  ]

  return (
    <div className="p-10 bg-[#0a0a0c] border border-white/5 rounded-[2.5rem] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
              <span className="text-indigo-500">Complex Props</span>
            </h2>
            <p className="text-gray-500 font-medium mt-2 max-w-md">
              Encapsulating complex data models with reactive theme injection and functional callbacks.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <span className="px-4 py-1.5 bg-white/5 text-white/70 text-[10px] font-black tracking-[0.2em] rounded-full border border-white/10 uppercase mb-2">
              Advanced Demo
            </span>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {users.map((userData, index) => (
            <UserCard
              key={index}
              {...userData}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
