export default function Activities() {
  const activities = [
    {
      title: 'Latihan Upacara',
      date: '29 Juli 2026',
      image: 'https://images.unsplash.com/photo-1576669947938-164b4c735d64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600w=600&q=80q=100'
    },
    {
      title: 'Sosialisasi kenakalan remaja',
      date: '29 Juli 2026',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600w=600&q=80q=100'
    },
    {
      title: 'Latihan Upacara',
      date: '29 Juli 2026',
      image: 'https://images.unsplash.com/photo-1576669947938-164b4c735d64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600w=600&q=80q=100'
    },
    {
      title: 'Rapat perdana',
      date: '20 Juli 2026',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600w=600&q=80q=100'
    },
    {
      title: 'Pembentukan pengurus',
      date: '15 Juli 2026',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600w=600&q=80q=100'
    },
    {
      title: 'Kegiatan Sosial',
      date: '10 Juli 2026',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600w=600&q=80q=100'
    }
  ];

  return (
    <div className="bg-[#fcfbf9] min-h-screen py-[24px]">
      <div className="max-w-7xl mx-auto px-4">
         <div className="text-center mb-16">
            <div className="inline-block relative">
               <h1 className="font-display text-4xl md:text-5xl text-[#053b93]">Kegiatan</h1>
               <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-red-500 rounded-full"></div>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 w-full p-4 pb-0">
                  <img src={activity.image} alt={activity.title} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{activity.title}</h3>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
