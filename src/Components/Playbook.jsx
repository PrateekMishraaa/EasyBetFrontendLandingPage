// components/Playbook.jsx
import React from 'react';

const Playbook = () => {
  const articles = [
    { date: '03 Apr 2026', title: 'Artega Urges Arsenal Fightback At...', desc: 'Mikel Arteaga has urged Arsenal to m...' },
    { date: '02 Apr 2026', title: 'Gates Of Olympus Super Scatter Is ...', desc: 'Gates of Olympus Super Scatter pr...' },
    { date: '19 Feb 2026', title: 'Must-Play Pragmatic Slots Now O...', desc: 'Pragmatic Play launches 10 new slots...' },
    { date: '03 Apr 2026', title: 'Guardiola Plays Down Foden Form ...', desc: 'Pep Guardiola has played down co...' }
  ];

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">📰 Easybet Playbook</h2>
        <button className="text-[#00E5FF] text-sm">See all →</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {articles.map((article, idx) => (
          <div key={idx} className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
            <div className="text-gray-400 text-xs">{article.date}</div>
            <h3 className="text-white font-semibold mt-1">{article.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{article.desc}</p>
            <button className="mt-2 text-[#00E5FF] text-xs font-medium">TELL ME MORE →</button>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-4 text-sm text-gray-400">
        <span>WIN HIGHLIGHTS!</span>
        <span>TOP NEW GAMES!</span>
      </div>
    </div>
  );
};

export default Playbook;