import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Save, Download, RotateCcw, Clock, Zap, Code, FileText, CheckCircle2, Book } from 'lucide-react';


const COLORS = {
  darkPrimary: '#212A31',
  darkSecondary: '#2E3944',
  primary: '#124E66',
  secondary: '#748D92',
  light: '#D3D9D4',
};


import { PROBLEMS_DATA } from '../Data/ProblesData'; 

import { IndexedDBUtils } from '../Utils/dbUtils';

const dbUtils = new IndexedDBUtils();

const ComplexityInput = ({ value, onChange, placeholder, icon: Icon, label }) => (
  <div>
    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
      <Icon size={14} className="text-gray-500" />
      <span>{label}</span>
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-800"
    />
  </div>
);

const TabButton = ({ id, active, onClick, icon: Icon, label }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors ${
      active
        ? `bg-[${COLORS.primary}] text-white`
        : `text-gray-600 hover:bg-[${COLORS.light}]`
    }`}
    style={{
      backgroundColor: active ? COLORS.primary : 'transparent',
      color: active ? 'white' : COLORS.darkSecondary,
    }}
  >
    <Icon size={14} />
    <span>{label}</span>
  </button>
);

const ProblemCard = ({ problem, problemData, onUpdateProblem }) => {
  const [activeTab, setActiveTab] = useState('notes');
  const [saveStatus, setSaveStatus] = useState('');
  
  const data = problemData || {
    completed: false,
    notes: '',
    codeSnippet: '',
    timeComplexity: '',
    spaceComplexity: ''
  };

  const handleUpdate = async (field, value) => {
    const updatedData = { ...data, [field]: value };
    await onUpdateProblem(problem, updatedData);
    
    // Show save status
    setSaveStatus('Saved!');
    setTimeout(() => setSaveStatus(''), 2000);
  };

  const toggleCompleted = async () => {
    await handleUpdate('completed', !data.completed);
  };

  const tabs = [
    { id: 'notes', icon: FileText, label: 'Notes' },
    { id: 'code', icon: Code, label: 'Code' },
    { id: 'complexity', icon: Zap, label: 'Complexity' }
  ];

  return (
    <div className={`border rounded-lg p-4 mb-4 transition-all duration-200 shadow-sm ${
      data.completed 
        ? `border-green-400 bg-green-50` 
        : `border-gray-200 bg-white hover:border-[${COLORS.primary}]`
    }`}
    style={{
      borderColor: data.completed ? '#10B981' : COLORS.light,
      backgroundColor: data.completed ? '#ECFDF5' : 'white',
    }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleCompleted}
            className={`p-1 rounded-full transition-colors ${
              data.completed 
                ? 'text-green-600 hover:text-green-700' 
                : 'text-gray-400 hover:text-green-500'
            }`}
          >
            <CheckCircle2 size={20} />
          </button>
          <span className={`font-medium ${data.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
            {problem}
          </span>
        </div>
        {saveStatus && (
          <span className="text-xs text-green-600 font-medium">{saveStatus}</span>
        )}
      </div>

      <div className="border-t pt-3">
        <div className="flex space-x-1 mb-3">
          {tabs.map(tab => (
            <TabButton
              key={tab.id}
              id={tab.id}
              active={activeTab === tab.id}
              onClick={setActiveTab}
              icon={tab.icon}
              label={tab.label}
            />
          ))}
        </div>

        <div className="space-y-3">
          {activeTab === 'notes' && (
            <textarea
              value={data.notes}
              onChange={(e) => handleUpdate('notes', e.target.value)}
              placeholder="Add your notes, approach, key insights..."
              className="w-full h-24 p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-800"
            />
          )}

          {activeTab === 'code' && (
            <textarea
              value={data.codeSnippet}
              onChange={(e) => handleUpdate('codeSnippet', e.target.value)}
              placeholder="Paste your solution or key code snippets..."
              className="w-full h-32 p-3 border border-gray-300 rounded-md font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-800"
            />
          )}

          {activeTab === 'complexity' && (
            <div className="space-y-3">
              <ComplexityInput
                value={data.timeComplexity}
                onChange={(value) => handleUpdate('timeComplexity', value)}
                placeholder="e.g., O(n log n)"
                icon={Clock}
                label="Time Complexity"
              />
              <ComplexityInput
                value={data.spaceComplexity}
                onChange={(value) => handleUpdate('spaceComplexity', value)}
                placeholder="e.g., O(1)"
                icon={Zap}
                label="Space Complexity"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ completed, total, className = "" }) => {
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div 
          className="h-2 rounded-full transition-all duration-500"
          style={{ 
            width: `${percentage}%`,
            background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})`
          }}
        />
      </div>
      <span className="text-sm font-medium text-gray-700 min-w-[60px]">
        {completed}/{total}
      </span>
    </div>
  );
};

const PatternSection = ({ patternKey, pattern, isExpanded, onToggle, problemsData, onUpdateProblem }) => {
  const completedCount = pattern.problems.filter(problem => problemsData[problem]?.completed).length;
  
  return (
    <div className="mb-4">
      <button
        onClick={() => onToggle(patternKey)}
        className="flex items-center justify-between w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        style={{ backgroundColor: COLORS.light }}
      >
        <div className="flex items-center space-x-2">
          {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          <h3 className="font-semibold" style={{ color: COLORS.darkPrimary }}>{pattern.name}</h3>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-sm" style={{ color: COLORS.darkSecondary }}>
            {completedCount}/{pattern.problems.length}
          </span>
          <div className="w-16 bg-gray-200 rounded-full h-1.5">
            <div 
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ 
                width: `${pattern.problems.length > 0 ? (completedCount / pattern.problems.length) * 100 : 0}%`,
                backgroundColor: COLORS.primary
              }}
            />
          </div>
        </div>
      </button>
      
      {isExpanded && (
        <div className="mt-3 ml-4">
          {pattern.problems.map((problem) => (
            <ProblemCard
              key={problem}
              problem={problem}
              problemData={problemsData[problem]}
              onUpdateProblem={onUpdateProblem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const CategorySection = ({ categoryKey, categoryData, isExpanded, expandedPatterns, onToggleCategory, onTogglePattern, problemsData, onUpdateProblem }) => {
  const totalProblems = Object.values(categoryData.patterns).reduce((acc, pattern) => acc + pattern.problems.length, 0);
  const completedProblems = Object.values(categoryData.patterns).reduce((acc, pattern) => {
    return acc + pattern.problems.filter(problem => problemsData[problem]?.completed).length;
  }, 0);

  return (
    <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <button
        onClick={() => onToggleCategory(categoryKey)}
        className="flex items-center justify-between w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg"
      >
        <div className="flex items-center space-x-3">
          {isExpanded ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
          <h2 className="text-xl font-bold" style={{ color: COLORS.darkPrimary }}>{categoryData.category}</h2>
        </div>
        <ProgressBar completed={completedProblems} total={totalProblems} />
      </button>
      
      {isExpanded && (
        <div className="px-4 pb-4">
          {Object.entries(categoryData.patterns).map(([patternKey, pattern]) => (
            <PatternSection
              key={patternKey}
              patternKey={patternKey}
              pattern={pattern}
              isExpanded={expandedPatterns[patternKey]}
              onToggle={onTogglePattern}
              problemsData={problemsData}
              onUpdateProblem={onUpdateProblem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ControlButton = ({ onClick, icon: Icon, label, className = "", variant = "primary" }) => {
  const baseClasses = "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors font-medium";
  const variants = {
    primary: `bg-[${COLORS.primary}] text-white hover:bg-[${COLORS.darkPrimary}]`,
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={{
        backgroundColor: variant === 'primary' ? COLORS.primary : 
                        variant === 'success' ? '#10B981' : 
                        variant === 'danger' ? '#EF4444' : COLORS.primary,
        ':hover': {
          backgroundColor: variant === 'primary' ? COLORS.darkPrimary : 
                          variant === 'success' ? '#059669' : 
                          variant === 'danger' ? '#DC2626' : COLORS.darkPrimary
        }
      }}
    >
      <Icon size={16} />
      <span>{label}</span>
    </button>
  );
};

const OverallProgress = ({ completedProblems, totalProblems }) => {
  const percentage = totalProblems > 0 ? (completedProblems / totalProblems) * 100 : 0;
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h2 className="text-xl font-semibold mb-2 md:mb-0" style={{ color: COLORS.darkPrimary }}>Overall Progress</h2>
        <span className="text-lg font-medium" style={{ color: COLORS.darkSecondary }}>
          {completedProblems}/{totalProblems} problems completed
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div 
          className="h-4 rounded-full transition-all duration-500"
          style={{ 
            width: `${percentage}%`,
            background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})`
          }}
        />
      </div>
      <div className="text-center mt-2 text-sm" style={{ color: COLORS.darkSecondary }}>
        {Math.round(percentage)}% Complete
      </div>
    </div>
  );
};



const SDESheetTracker = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedPatterns, setExpandedPatterns] = useState({});
  const [problemsData, setProblemsData] = useState({});
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeData = async () => {
      try {
        const [loadedProblems, loadedUIState] = await Promise.all([
          dbUtils.getAllProblems(),
          dbUtils.getUIState()
        ]);

        setProblemsData(loadedProblems || {});
        
        if (loadedUIState) {
          setExpandedCategories(loadedUIState.expandedCategories || {});
          setExpandedPatterns(loadedUIState.expandedPatterns || {});
        } else {
          setExpandedCategories({
            twoPointer: true,
            slidingWindow: true
          });
        }

        setIsInitialized(true);
      } catch (error) {
        console.error('Error initializing data:', error);
      }
    };

    initializeData();
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const saveUIState = async () => {
      try {
        await dbUtils.updateUIState({
          expandedCategories,
          expandedPatterns
        });
      } catch (error) {
        console.error('Error saving UI state:', error);
      }
    };

    saveUIState();
  }, [expandedCategories, expandedPatterns, isInitialized]);

  const toggleCategory = (categoryKey) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  const togglePattern = (patternKey) => {
    setExpandedPatterns(prev => ({
      ...prev,
      [patternKey]: !prev[patternKey]
    }));
  };

  const updateProblem = async (problemName, data) => {
    try {
      await dbUtils.updateProblem(problemName, data);
      setProblemsData(prev => ({
        ...prev,
        [problemName]: data
      }));
    } catch (error) {
      console.error('Error updating problem:', error);
    }
  };

  const getTotalStats = () => {
    let totalProblems = 0;
    let completedProblems = 0;

    Object.values(PROBLEMS_DATA).forEach(category => {
      Object.values(category.patterns).forEach(pattern => {
        totalProblems += pattern.problems.length;
        pattern.problems.forEach(problem => {
          if (problemsData[problem]?.completed) {
            completedProblems++;
          }
        });
      });
    });

    return { totalProblems, completedProblems };
  };




  const resetData = async () => {
    if (window.confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
      try {
        await dbUtils.clearAllData();
        
        setProblemsData({});
        setExpandedCategories({
          twoPointer: true,
          slidingWindow: true
        });
        setExpandedPatterns({});

        alert('All data has been reset successfully.');
      } catch (error) {
        console.error('Error resetting data:', error);
        alert('Failed to reset data. Please try again.');
      }
    }
  };

  const { totalProblems, completedProblems } = getTotalStats();

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center rounded-2xl" style={{ backgroundColor: COLORS.light }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 mx-auto mb-4" 
               style={{ borderColor: COLORS.primary }}></div>
          <p style={{ color: COLORS.darkSecondary }}>Loading your progress...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen rounded-2xl" style={{ backgroundColor: COLORS.light }}>
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: COLORS.darkPrimary }}>BYTS-SDE Sheet Tracker</h1>
          <p style={{ color: COLORS.darkSecondary }}>Track your coding interview preparation progress</p>
        </div>

        <OverallProgress completedProblems={completedProblems} totalProblems={totalProblems} />

        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
    
   
          <ControlButton
            onClick={resetData}
            icon={RotateCcw}
            label="Reset All"
            variant="danger"
            className="sm:w-auto w-full"
          />
        </div>

        <div className="space-y-4">
          {Object.entries(PROBLEMS_DATA).map(([categoryKey, categoryData]) => (
            <CategorySection
              key={categoryKey}
              categoryKey={categoryKey}
              categoryData={categoryData}
              isExpanded={expandedCategories[categoryKey]}
              expandedPatterns={expandedPatterns}
              onToggleCategory={toggleCategory}
              onTogglePattern={togglePattern}
              problemsData={problemsData}
              onUpdateProblem={updateProblem}
            />
          ))}
        </div>
      </div>


    </div>
  );
};

export default SDESheetTracker;