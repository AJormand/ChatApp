# Lessons learned

# Component splitting and rerendering:

sidebar was split into 3 components as whenever Chats are rerendered we dont want to rerender Navbar and Search as well

<div className="sidebar">
<Navbar />
<Search />
<Chats />
</div>
