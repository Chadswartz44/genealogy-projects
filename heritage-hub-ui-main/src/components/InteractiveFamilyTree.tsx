import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, User, Camera, Heart, Calendar, MapPin, Edit3, Trash2, Users, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FamilyMember {
  id: string;
  name: string;
  birthYear: string;
  deathYear?: string;
  gender: "male" | "female";
  photo?: string;
  location?: string;
  bio?: string;
  relationship?: string;
}

interface TreeNode {
  member: FamilyMember;
  level: number;
  position: "left" | "center" | "right";
  children?: TreeNode[];
}

const initialMembers: FamilyMember[] = [
  { id: "1", name: "You", birthYear: "1990", gender: "male", location: "New York, NY", bio: "Family historian and genealogy enthusiast.", relationship: "Self" },
  { id: "2", name: "Margaret Smith", birthYear: "1965", gender: "female", location: "Boston, MA", bio: "Retired teacher who loves gardening.", relationship: "Mother" },
  { id: "3", name: "James Smith", birthYear: "1963", gender: "male", location: "Boston, MA", bio: "Former engineer with a passion for woodworking.", relationship: "Father" },
  { id: "4", name: "Eleanor Williams", birthYear: "1940", deathYear: "2020", gender: "female", location: "Philadelphia, PA", bio: "Beloved grandmother who immigrated from Ireland.", relationship: "Grandmother" },
  { id: "5", name: "Robert Williams", birthYear: "1938", deathYear: "2018", gender: "male", location: "Philadelphia, PA", bio: "WWII veteran and family patriarch.", relationship: "Grandfather" },
  { id: "6", name: "Patricia Jones", birthYear: "1942", gender: "female", location: "Chicago, IL", bio: "Former nurse with 40 years of service.", relationship: "Grandmother" },
  { id: "7", name: "William Jones", birthYear: "1940", deathYear: "2015", gender: "male", location: "Chicago, IL", bio: "Factory worker who built the family home.", relationship: "Grandfather" },
];

export const InteractiveFamilyTree = () => {
  const [members] = useState<FamilyMember[]>(initialMembers);
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Partial<FamilyMember>>({});

  const openProfile = (member: FamilyMember) => {
    setSelectedMember(member);
    setEditForm(member);
    setIsEditing(false);
  };

  const closeProfile = () => {
    setSelectedMember(null);
    setIsEditing(false);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const saveChanges = () => {
    setIsEditing(false);
    // In a real app, this would update the member data
  };

  return (
    <>
      {/* Tree Container */}
      <div className="bg-muted/30 rounded-2xl p-8 overflow-x-auto">
        <div className="min-w-[700px] flex flex-col items-center gap-6">
          {/* Grandparents Level */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-24"
          >
            <div className="flex gap-4">
              <TreeMemberCard member={members[3]} onClick={() => openProfile(members[3])} delay={0} />
              <TreeMemberCard member={members[4]} onClick={() => openProfile(members[4])} delay={0.1} />
            </div>
            <div className="flex gap-4">
              <TreeMemberCard member={members[5]} onClick={() => openProfile(members[5])} delay={0.2} />
              <TreeMemberCard member={members[6]} onClick={() => openProfile(members[6])} delay={0.3} />
            </div>
          </motion.div>

          {/* Connecting Lines */}
          <svg className="w-full h-12" viewBox="0 0 700 48">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              d="M175 0 V24 H350 V48 M525 0 V24 H350 V48"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Parents Level */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-24"
          >
            <TreeMemberCard member={members[1]} onClick={() => openProfile(members[1])} delay={0.5} />
            <TreeMemberCard member={members[2]} onClick={() => openProfile(members[2])} delay={0.6} />
          </motion.div>

          {/* Connecting Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.7 }}
            className="w-0.5 h-10 bg-border origin-top"
          />

          {/* Self */}
          <TreeMemberCard member={members[0]} onClick={() => openProfile(members[0])} isMain delay={0.8} />

          {/* Add Actions */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-3 mt-4"
          >
            <Button variant="outline" size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              Add Spouse
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              Add Sibling
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              Add Child
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Member Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-heritage-dark/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeProfile}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-card rounded-2xl max-w-lg w-full shadow-elevated overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`relative h-32 ${selectedMember.gender === "female" ? "bg-gradient-to-r from-pink-400 to-pink-500" : "bg-gradient-to-r from-blue-400 to-blue-500"}`}>
                <button
                  onClick={closeProfile}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="absolute -bottom-12 left-6">
                  <div className={`w-24 h-24 rounded-full border-4 border-card flex items-center justify-center ${selectedMember.gender === "female" ? "bg-pink-100" : "bg-blue-100"}`}>
                    {selectedMember.photo ? (
                      <img src={selectedMember.photo} alt={selectedMember.name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <User className={`w-12 h-12 ${selectedMember.gender === "female" ? "text-pink-500" : "text-blue-500"}`} />
                    )}
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="pt-16 px-6 pb-6">
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
                      <input
                        type="text"
                        value={editForm.name || ""}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        className="w-full h-10 px-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">Birth Year</label>
                        <input
                          type="text"
                          value={editForm.birthYear || ""}
                          onChange={(e) => setEditForm({ ...editForm, birthYear: e.target.value })}
                          className="w-full h-10 px-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">Death Year</label>
                        <input
                          type="text"
                          value={editForm.deathYear || ""}
                          onChange={(e) => setEditForm({ ...editForm, deathYear: e.target.value })}
                          placeholder="Living"
                          className="w-full h-10 px-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Location</label>
                      <input
                        type="text"
                        value={editForm.location || ""}
                        onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                        className="w-full h-10 px-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Biography</label>
                      <textarea
                        value={editForm.bio || ""}
                        onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                        rows={3}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button onClick={saveChanges} className="flex-1">Save Changes</Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)} className="flex-1">Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-foreground">{selectedMember.name}</h3>
                        <p className="text-primary font-medium">{selectedMember.relationship}</p>
                      </div>
                      <Button variant="outline" size="sm" onClick={startEditing}>
                        <Edit3 className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="w-5 h-5" />
                        <span>
                          {selectedMember.birthYear}
                          {selectedMember.deathYear ? ` - ${selectedMember.deathYear}` : " - Present"}
                        </span>
                      </div>
                      {selectedMember.location && (
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <MapPin className="w-5 h-5" />
                          <span>{selectedMember.location}</span>
                        </div>
                      )}
                    </div>

                    {selectedMember.bio && (
                      <p className="text-foreground/80 mb-6 leading-relaxed">{selectedMember.bio}</p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      <Button variant="outline" size="sm">
                        <Users className="w-4 h-4 mr-2" />
                        View Relatives
                      </Button>
                      <Button variant="outline" size="sm">
                        <Link2 className="w-4 h-4 mr-2" />
                        Add Relationship
                      </Button>
                      <Button variant="outline" size="sm">
                        <Heart className="w-4 h-4 mr-2" />
                        Add to Favorites
                      </Button>
                    </div>

                    <div className="pt-4 border-t border-border flex justify-between">
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                      <Button size="sm">View Full Profile</Button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface TreeMemberCardProps {
  member: FamilyMember;
  onClick: () => void;
  isMain?: boolean;
  delay?: number;
}

const TreeMemberCard = ({ member, onClick, isMain, delay = 0 }: TreeMemberCardProps) => {
  const bgColor = isMain 
    ? "bg-primary" 
    : member.gender === "female" 
      ? "bg-pink-100" 
      : "bg-blue-100";
  const iconColor = isMain 
    ? "text-primary-foreground" 
    : member.gender === "female" 
      ? "text-pink-600" 
      : "text-blue-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${isMain ? "bg-primary text-primary-foreground" : "bg-card"} rounded-xl p-4 shadow-soft hover:shadow-card transition-all cursor-pointer min-w-[130px]`}
    >
      <div className={`w-14 h-14 rounded-full ${isMain ? "bg-primary-foreground/20" : bgColor} flex items-center justify-center mx-auto mb-3`}>
        <User className={`w-7 h-7 ${iconColor}`} />
      </div>
      <p className={`font-semibold text-center text-sm ${isMain ? "" : "text-foreground"}`}>{member.name}</p>
      <p className={`text-xs text-center ${isMain ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        b. {member.birthYear}
        {member.deathYear && ` • d. ${member.deathYear}`}
      </p>
      {member.relationship && (
        <p className={`text-xs text-center mt-1 ${isMain ? "text-primary-foreground/50" : "text-primary"}`}>
          {member.relationship}
        </p>
      )}
    </motion.div>
  );
};
