import { useEffect, useRef, useState } from "react";
import { Plus, ChevronDown, ChevronRight, Edit2, X, Bold, Italic, Underline, List, ListOrdered, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function GrainOverlay({ className = "" }) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 mix-blend-soft-light ${className}`}
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence baseFrequency=\'0.7\' seed=\'2\' type=\'fractalNoise\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.18\'/%3E%3C/svg%3E")',
        opacity: 1,
        zIndex: 30,
      }}
    />
  );
}

function AnimatedCircles() {
  const colors = ["#885053", "#8C1B74", "#DD99BB", "#280444", "#AC946E"];
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {Array.from({ length: 25 }).map((_, i) => {
        const size = 60 + Math.random() * 280;
        const duration = 8 + Math.random() * 10;
        const delay = Math.random() * 10;
        const top = Math.random() * 80 + "%";
        const left = Math.random() * 90 + "%";
        const color = colors[i % colors.length];
        return (
          <div
            key={i}
            className="absolute rounded-full opacity-40 blur-2xl animate-float"
            style={{
              width: size,
              height: size,
              top,
              left,
              background: color,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

function GlassNav() {
  return (
    <nav
      className="relative z-20 flex items-center justify-between py-4 rounded-2xl mt-6 w-full"
      style={{
        border: "1px solid rgba(255,255,255,0.18)",
        background: "rgba(35,39,47,0.6)",
        backdropFilter: "blur(7px)",
        WebkitBackdropFilter: "blur(7px)",
        boxShadow: "0 2px 24px 0 rgba(20,20,30,0.18)",
        maxWidth: '100%',
        position: 'relative',
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{
        boxShadow: "0 0 24px 4px rgba(255,255,255,0.05) inset",
        zIndex: 1
      }} />
      <div className="flex items-center gap-3 relative z-10 flex-wrap min-w-0 px-2 sm:px-4">
        <span className="font-bold text-lg text-white whitespace-normal break-words">Moodern Notes</span>
        <span className="text-xs text-white font-medium ml-0 sm:ml-2 block whitespace-normal break-words truncate" style={{maxWidth: '100%'}}>This is just a Demo Page. A modern notes page utilizing Glass like effects.</span>
      </div>
    </nav>
  );
}

let nextId = 1000;

function NoteModal({ open, onClose, note, onSave, folders }) {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");
  const [folder, setFolder] = useState(note?.folder || (folders[0]?.id || ""));
  const contentRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTitle(note?.title || "");
      setContent(note?.content || "");
      setFolder(note?.folder || (folders[0]?.id || ""));
    }
  }, [open, note, folders]);

  const handleFormat = (cmd) => {
    document.execCommand(cmd, false, null);
    setContent(contentRef.current.innerHTML);
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{background: 'rgba(0,0,0,0.4)'}}>
      <div
        className="rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-xs sm:max-w-lg relative border"
        style={{
          background: "rgba(35,39,47,0.9)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 0 24px 4px rgba(255,255,255,0.08) inset, 0 2px 24px 0 rgba(20,20,30,0.18)",
        }}
      >
        <button className="absolute top-4 right-4 p-2 hover:text-primary" onClick={onClose}><X size={20} /></button>
        <h2 className="text-xl font-bold mb-4">Edit Note</h2>
        <input
          className="w-full mb-3 p-2 rounded bg-white/10 border border-white/10 text-lg"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <select
          className="w-full mb-3 p-2 rounded bg-white/10 border border-white/10"
          value={folder}
          onChange={e => setFolder(e.target.value)}
        >
          {folders.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
        </select>
        <div
          ref={contentRef}
          className="w-full mb-3 p-2 rounded bg-white/10 border border-white/10 min-h-[120px] focus:outline-none"
          contentEditable
          suppressContentEditableWarning
          onInput={e => setContent(e.currentTarget.innerHTML)}
          style={{whiteSpace: 'pre-wrap', direction: 'ltr', textAlign: 'left', transform: 'none', unicodeBidi: 'normal'}}
          dangerouslySetInnerHTML={{__html: content}}
        />
        <div className="flex gap-2 mb-4">
          {[['bold', <Bold size={16} />], ['italic', <Italic size={16} />], ['underline', <Underline size={16} />], ['insertUnorderedList', <List size={16} />], ['insertOrderedList', <ListOrdered size={16} />]].map(([cmd, icon]) => (
            <button key={cmd} className="custom-glass-btn p-2" type="button" onClick={() => handleFormat(cmd)}>{icon}</button>
          ))}
        </div>
        <button
          className="custom-glass-btn w-full"
          onClick={() => onSave({ ...note, title, content, folder })}
        >Save</button>
      </div>
    </div>
  );
}

export default function GlassMorphismNotes() {
  const mainBoxRef = useRef(null);
  const [folders, setFolders] = useState([
    { id: "all", name: "All Notes", expanded: true },
    { id: "personal", name: "Personal", expanded: false },
    { id: "work", name: "Work", expanded: false },
    { id: "ideas", name: "Ideas", expanded: false },
  ]);
  const [renamingFolder, setRenamingFolder] = useState(null);
  const [newFolderName, setNewFolderName] = useState("");
  const [notes, setNotes] = useState([
    { id: 1, title: "Welcome to Glass Morphism Notes!", content: "Start by creating a new note using the button above.", folder: "all" },
    { id: 2, title: "Sample Note", content: "This is a sample note. You can add, edit, or delete notes here.", folder: "all" },
  ]);
  const [activeFolder, setActiveFolder] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const handleAddFolder = () => {
    const id = `folder-${nextId++}`;
    setFolders([...folders, { id, name: "New Folder", expanded: false }]);
    setRenamingFolder(id);
    setNewFolderName("");
  };
  const handleRenameFolder = (id, name) => {
    setFolders(folders.map(f => f.id === id ? { ...f, name } : f));
    setRenamingFolder(null);
    setNewFolderName("");
  };
  const handleExpandFolder = id => {
    setFolders(folders.map(f => f.id === id ? { ...f, expanded: !f.expanded } : f));
  };

  const handleAddNote = () => {
    setEditingNote({ id: nextId++, title: "", content: "", folder: activeFolder });
    setModalOpen(true);
  };
  const handleEditNote = note => {
    setEditingNote(note);
    setModalOpen(true);
  };
  const handleSaveNote = note => {
    setNotes(prev => {
      const exists = prev.find(n => n.id === note.id);
      return exists ? prev.map(n => n.id === note.id ? note : n) : [...prev, note];
    });
    setModalOpen(false);
    setEditingNote(null);
  };

  const visibleNotes = activeFolder === "all" ? notes : notes.filter(n => n.folder === activeFolder);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-100">
      <div className="fixed top-4 left-4 z-50">
        <Link to="/more-projects" className="custom-glass-btn flex items-center gap-2 p-2">
          <ArrowLeft size={18} />
          <span>Back to More Projects</span>
        </Link>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: '#23272f' }} />
        <AnimatedCircles />
        <div className="absolute inset-0 backdrop-blur-md" style={{ zIndex: 2, backdropFilter: "blur(8px)" }} />
        <GrainOverlay className="z-10" />
      </div>
      <div
        ref={mainBoxRef}
        className="relative z-20 w-full max-w-4xl mx-auto my-8 sm:my-16 rounded-3xl border px-0"
        style={{
          background: "rgba(35,39,47,0.2)",
          border: "2px solid rgba(255,255,255,0.18)",
          boxShadow: "0 8px 40px 0 rgba(255,255,255,0.18)",
          padding: "1.25rem 0.5rem",
          backdropFilter: "blur(7px)",
          WebkitBackdropFilter: "blur(7px)",
          boxSizing: "border-box",
          minHeight: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "stretch",
          boxShadow: "0 0 0 4px rgba(60,60,80,0.10) inset, 0 8px 40px 0 rgba(255,255,255,0.18)",
        }}
      >
        <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
          boxShadow: "0 0 32px 8px rgba(255,255,255,0.08) inset"
        }} />
        <div className="px-4 sm:px-8 w-full">
          <GlassNav />
          <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6 sm:mt-10" style={{ minHeight: 320 }}>
            <aside className="w-full sm:w-1/5 min-w-[0] sm:min-w-[120px] flex flex-col gap-4 mb-4 sm:mb-0">
              <div className="relative rounded-2xl" style={{
                background: 'rgba(35,39,47,0.5)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
              }}>
                <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{
                  boxShadow: '0 0 24px 4px rgba(255,255,255,0.08) inset',
                  zIndex: 1
                }} />
                <div className="flex items-center justify-between font-bold text-white mb-2 p-4 relative z-10">
                  <span>Folders</span>
                  <button className="custom-glass-btn p-1" title="Add Folder" onClick={handleAddFolder}><Plus size={18} /></button>
                </div>
                <ul className="text-sm text-white font-bold space-y-1 p-4 pt-0 relative z-10">
                  {folders.map(folder => (
                    <li key={folder.id} className="flex items-center group">
                      <button className="mr-2 p-1 custom-glass-btn" onClick={() => handleExpandFolder(folder.id)}>
                        {folder.expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </button>
                      {renamingFolder === folder.id ? (
                        <input
                          className="bg-transparent border-b border-primary text-white font-bold w-24 mr-2"
                          value={newFolderName}
                          autoFocus
                          onChange={e => setNewFolderName(e.target.value)}
                          onBlur={() => handleRenameFolder(folder.id, newFolderName || folder.name)}
                          onKeyDown={e => {
                            if (e.key === 'Enter') handleRenameFolder(folder.id, newFolderName || folder.name);
                          }}
                        />
                      ) : (
                        <span
                          className="cursor-pointer hover:text-primary flex-1 whitespace-normal break-words"
                          onClick={() => setActiveFolder(folder.id)}
                          onDoubleClick={() => { setRenamingFolder(folder.id); setNewFolderName(folder.name); }}
                        >{folder.name}</span>
                      )}
                      <button className="ml-1 p-1 opacity-0 group-hover:opacity-100 custom-glass-btn" title="Rename Folder" onClick={() => { setRenamingFolder(folder.id); setNewFolderName(folder.name); }}><Edit2 size={14} /></button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            <main className="flex-1 min-w-0">
              <div className="relative rounded-2xl" style={{
                  background: 'rgba(35,39,47,0.5)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)',
                  padding: '1rem',
                }}>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{
                    boxShadow: '0 0 24px 4px rgba(255,255,255,0.08) inset',
                    zIndex: 1
                  }} />
                  <div className="flex items-center justify-between font-bold text-white mb-4 relative z-10">
                    <span>Your Notes</span>
                    <button className="custom-glass-btn p-1" title="Add Note" onClick={handleAddNote}><Plus size={18} /></button>
                  </div>
                  <ul className="space-y-3 relative z-10">
                    {visibleNotes.map(note => (
                      <li key={note.id} className="bg-white/10 rounded-xl p-4 shadow-sm border border-white/10 text-white font-bold cursor-pointer hover:bg-primary/10 transition" onClick={() => handleEditNote(note)}>
                        <div className="font-bold whitespace-normal break-words">{note.title}</div>
                        <div className="text-xs text-white font-bold mt-1 line-clamp-2 whitespace-normal break-words">{note.content}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </main>
          </div>
        </div>
        <NoteModal open={modalOpen} onClose={() => setModalOpen(false)} note={editingNote} onSave={handleSaveNote} folders={folders} />
      </div>
    </div>
  );
} 