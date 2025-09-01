import React, { useState } from "react";
import { StoreProvider } from "./context/StoreContext";
import PackSelection from "./components/PackSelection";
import PackOpener from "./components/PackOpener";
import MyCollection from "./components/MyCollection";
import Modal from "./components/Modal";
import UserPanel from "./components/UserPanel";


function App() {
  const [selectedPack, setSelectedPack] = useState(null);
  const [showCollection, setShowCollection] = useState(false);

  return (
    <StoreProvider>
      <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-2">Cricket Pack Opener</h1>
          <UserPanel onShowCollection={() => setShowCollection(true)} />
        </header>

        {!selectedPack && (
          <PackSelection onSelectPack={setSelectedPack} />
        )}

        {selectedPack && (
          <PackOpener
            packName={selectedPack}
            onBack={() => setSelectedPack(null)}
          />
        )}

        <Modal
          open={showCollection}
          onClose={() => setShowCollection(false)}
          title="My Collection"
        >
          <MyCollection />
        </Modal>
      </div>
    </StoreProvider>
  );
}

export default App;
