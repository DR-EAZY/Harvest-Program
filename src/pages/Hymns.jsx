import { useState } from "react";
import EmptyState from "../components/EmptyState";
import SearchBar from "../components/SearchBar";
import HymnCard from "../components/HymnCard";
import PageHeader from "../components/PageHeader";
import PageTransition from "../components/PageTransition";

import { hymns } from "../data/hymns";

export default function Hymns() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(null);

  const filtered = hymns.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.number.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-100 pb-24">
        <PageHeader
          title="Harvest Hymns"
          subtitle="Sing unto the Lord with Joy"
          icon="🎵"
        />

        <div className="p-5">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search hymn..."
          />

          <div className="space-y-4">
            {filtered.length === 0 ? (
              <EmptyState message="No hymn matches your search." />
            ) : (
              filtered.map((item) => (
                <HymnCard
                  key={item.id}
                  hymn={item}
                  open={open}
                  setOpen={setOpen}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}