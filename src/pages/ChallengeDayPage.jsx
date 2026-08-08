import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Input from '../components/Input';
import BottomNavigation from '../components/BottomNavigation';
import { MISSION_DAY_12 } from '../data/mockData';
import { Check, Clock, Award, Github, Linkedin, ArrowLeft, Flame, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ChallengeDayPage() {
  const navigate = useNavigate();

  // Checklist state
  const [checklist, setChecklist] = useState(MISSION_DAY_12.checklist);

  // Form states
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [githubAdded, setGithubAdded] = useState(false);
  const [linkedinAdded, setLinkedinAdded] = useState(false);

  // Submission / Success state
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleCheckItem = (id) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleAddGithub = (e) => {
    e.preventDefault();
    if (githubUrl.trim()) {
      setGithubAdded(true);
    }
  };

  const handleAddLinkedin = (e) => {
    e.preventDefault();
    if (linkedinUrl.trim()) {
      setLinkedinAdded(true);
    }
  };

  const handleSubmitMission = () => {
    // Simulated submission state transition
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] flex flex-col items-center selection:bg-[#FF5A36] selection:text-white pb-24">
      {/* 390px Mobile Container */}
      <div className="w-full max-w-[390px] min-h-screen bg-[#F7F7F5] flex flex-col shadow-sm border-x border-[#E6E6E1]/50">
        
        {/* STICKY HEADER */}
        <header className="sticky top-0 z-40 w-full h-[56px] bg-white/95 backdrop-blur-md border-b border-[#E6E6E1] flex items-center justify-between px-5">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-1 font-semibold text-[14px] text-[#111111] hover:text-[#FF5A36]"
          >
            <ArrowLeft size={18} /> Back
          </button>

          <span className="font-extrabold text-[14px] text-[#111111]">
            DAY 12 / 60
          </span>

          <div className="flex items-center gap-1 font-black text-[13px] text-[#FF5A36]">
            <span>🔥</span> 11
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="px-5 space-y-7 pt-5 flex-1">
          
          {/* SUCCESS CELEBRATION STATE */}
          {isSubmitted ? (
            <div className="py-8 space-y-6 text-center animate-fadeIn">
              <div className="w-20 h-20 bg-[#FF5A36]/10 text-[#FF5A36] rounded-full flex items-center justify-center mx-auto text-4xl border-2 border-[#FF5A36]/30 shadow-lg">
                🎉
              </div>

              <div>
                <Badge variant="orange" className="mb-2">MISSION COMPLETED</Badge>
                <h1 className="text-[30px] font-extrabold text-[#111111] leading-tight">
                  Day 12 complete!
                </h1>
                <p className="text-[15px] text-[#6B6B6B] mt-2">
                  You kept your streak alive. Fantastic consistency!
                </p>
              </div>

              {/* Streak Upgrade Card */}
              <Card variant="dark" className="p-6 text-center space-y-3">
                <span className="small-label text-[#FF5A36]">STREAK UPDATED</span>
                <div className="flex items-center justify-center gap-3 text-[32px] font-black text-white">
                  <span>11</span>
                  <span className="text-[#FF5A36]">→</span>
                  <span className="text-[#FF5A36] flex items-center gap-1">
                    12 🔥
                  </span>
                </div>
                <div className="text-[13px] font-semibold text-[#888888]">
                  12 days completed out of 60
                </div>
              </Card>

              <Button
                variant="primary"
                onClick={() => navigate('/dashboard')}
                className="h-[52px] font-bold text-[15px]"
              >
                Back to Dashboard
              </Button>
            </div>
          ) : (
            <>
              {/* DAY INTRO */}
              <section className="space-y-2">
                <Badge variant="orange">TODAY'S MISSION</Badge>
                <h1 className="text-[28px] font-extrabold text-[#111111] leading-tight">
                  {MISSION_DAY_12.title}
                </h1>
                <p className="text-[15px] text-[#6B6B6B] leading-relaxed">
                  {MISSION_DAY_12.fullDesc}
                </p>
              </section>

              {/* METADATA CARDS */}
              <section className="grid grid-cols-2 gap-3">
                <Card className="p-3.5 flex flex-col justify-center">
                  <span className="text-[11px] font-bold uppercase text-[#6B6B6B] flex items-center gap-1">
                    <Clock size={13} /> Estimated time
                  </span>
                  <span className="text-[16px] font-extrabold text-[#111111] mt-1">
                    {MISSION_DAY_12.estimatedTime}
                  </span>
                </Card>

                <Card className="p-3.5 flex flex-col justify-center">
                  <span className="text-[11px] font-bold uppercase text-[#6B6B6B] flex items-center gap-1">
                    <Award size={13} /> Difficulty
                  </span>
                  <span className="text-[16px] font-extrabold text-[#111111] mt-1">
                    {MISSION_DAY_12.difficulty}
                  </span>
                </Card>
              </section>

              {/* SECTION: WHAT YOU'LL BUILD */}
              <section className="space-y-3">
                <h2 className="section-title text-[18px]">What you'll build</h2>
                <Card className="p-0 overflow-hidden divide-y divide-[#E6E6E1]">
                  {checklist.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleCheckItem(item.id)}
                      className="min-h-[48px] px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-[#F7F7F5] transition-colors select-none"
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                          item.completed
                            ? 'bg-[#1F9D68] text-white'
                            : 'border-2 border-[#E6E6E1] bg-white'
                        }`}
                      >
                        {item.completed && <Check size={14} strokeWidth={3} />}
                      </div>
                      <span
                        className={`text-[14px] font-semibold ${
                          item.completed ? 'line-through text-[#6B6B6B]' : 'text-[#111111]'
                        }`}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </Card>
              </section>

              {/* SECTION: MISSION BRIEF */}
              <section className="space-y-3">
                <h2 className="section-title text-[18px]">Mission brief</h2>
                <Card className="p-5 font-mono text-[13px] leading-relaxed text-[#333333] whitespace-pre-line bg-white border-[#E6E6E1]">
                  {MISSION_DAY_12.brief}
                </Card>
              </section>

              {/* SECTION: BEFORE YOU SUBMIT */}
              <section className="space-y-3">
                <h2 className="section-title text-[18px]">Before you submit</h2>
                <div className="bg-white rounded-[18px] border border-[#E6E6E1] divide-y divide-[#E6E6E1]">
                  {MISSION_DAY_12.submissionRequirements.map((req) => (
                    <div key={req.step} className="p-3.5 px-4 flex items-center gap-3">
                      <span className="font-mono font-extrabold text-[14px] text-[#FF5A36]">
                        {req.step}
                      </span>
                      <span className="text-[14px] font-semibold text-[#111111]">
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* PROOF OF WORK SECTION */}
              <section className="space-y-4 pt-2">
                <div>
                  <span className="small-label text-[#FF5A36]">PROOF OF WORK</span>
                  <h2 className="section-title text-[22px] mt-0.5">Submit your proof</h2>
                  <p className="text-[13px] text-[#6B6B6B]">Show the world what you built.</p>
                </div>

                {/* GITHUB CARD */}
                <Card className="p-4 space-y-3 border-[#E6E6E1]">
                  <div className="flex items-center gap-2">
                    <Github size={20} className="text-[#111111]" />
                    <span className="font-bold text-[16px] text-[#111111]">GitHub commit</span>
                  </div>
                  <p className="text-[13px] text-[#6B6B6B]">
                    Paste the URL to your repository or today's commit.
                  </p>
                  
                  <Input
                    placeholder="https://github.com/alex/portfolio-day12"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                  />

                  <Button
                    variant={githubAdded ? 'secondary' : 'dark'}
                    size="sm"
                    onClick={handleAddGithub}
                  >
                    {githubAdded ? '✓ GitHub Proof Added' : 'Add GitHub proof'}
                  </Button>
                </Card>

                {/* LINKEDIN CARD */}
                <Card className="p-4 space-y-3 border-[#E6E6E1]">
                  <div className="flex items-center gap-2">
                    <Linkedin size={20} className="text-[#0A66C2]" />
                    <span className="font-bold text-[16px] text-[#111111]">LinkedIn post</span>
                  </div>
                  <p className="text-[13px] text-[#6B6B6B]">
                    Share your build publicly and paste the post URL here.
                  </p>

                  <Input
                    placeholder="https://linkedin.com/posts/alex-day12-abtalks"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                  />

                  <Button
                    variant={linkedinAdded ? 'secondary' : 'dark'}
                    size="sm"
                    onClick={handleAddLinkedin}
                  >
                    {linkedinAdded ? '✓ LinkedIn Proof Added' : 'Add LinkedIn proof'}
                  </Button>
                </Card>

                {/* FINAL SUBMIT CTA */}
                <div className="pt-3">
                  <Button
                    variant="primary"
                    onClick={handleSubmitMission}
                    className="h-[52px] text-[15px] font-bold shadow-lg shadow-[#FF5A36]/20"
                  >
                    Submit Day 12
                  </Button>
                </div>
              </section>
            </>
          )}
        </main>

        {/* BOTTOM NAVIGATION */}
        <BottomNavigation />
      </div>
    </div>
  );
}
