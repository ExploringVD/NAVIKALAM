// This is the main entry point for the application's JavaScript.

// --- IMPORTS ---
import { startHostSession, joinSession, scanStudentAnswer } from './offlineSync.js';
import { translations, subjects, chapters } from './data.js';
import { initCanvas, setTool, setPenSize, setPenColor, clearCanvas, undoLast, saveDrawing } from './whiteboard.js';

// App module imports
import * as state from './state.js';
import * as ui from './ui.js';
import * as teacher from './teacher.js';
import * as practiceTest from './practiceTest.js';
import * as guide from './guide.js';

// --- TRANSLATION HELPERS ---
export function t(key) {
    if (!translations[key]) return key;
    return translations[key][state.currentLanguage] || translations[key]['english'];
}
        
export function ts(subjectNameObject) {
    return subjectNameObject[state.currentLanguage] || subjectNameObject['english'];
}

// --- CORE NAVIGATION AND SETUP (No Login Required) ---
function selectLanguage(lang) {
    state.setCurrentLanguage(lang);
    ui.updateStaticUIText();
    ui.showScreen('role');
}

function selectRole(role) { 
    // 1. Instantly create a local guest profile based on what was clicked
    const mockUser = {
        id: `guest-${role}-${Date.now()}`,
        name: role === 'student' ? "Guest Student" : "Guest Teacher",
        role: role, // 'student' or 'teacher'
        avatar: "avatar1",
        class: role === 'student' ? "Class 8" : ""
    };

    // 2. Pass this user data straight to your application state
    state.setCurrentUser(mockUser);
    
    const menuUsername = document.getElementById('menu-username');
    if (menuUsername) {
        menuUsername.innerText = state.currentUser.name;
    }

    // 3. Skip any login/signup screens and drop straight into the correct dashboard!
    if (role === 'student') {
        ui.showScreen('main');
        ui.showMainContent('home');
    } else {
        ui.showScreen('teacherDashboard');
        teacher.showTeacherContent('progress');
    }
}

function changeLanguage(lang) {
    state.setCurrentLanguage(lang);
    ui.updateStaticUIText();
    if (ui.screens.main.classList.contains('active')) {
        ui.showMainContent(state.currentMainContent);
    }
    if (ui.screens.teacherDashboard.classList.contains('active')) {
        teacher.showTeacherContent(state.currentTeacherContent);
    }
}

// --- GLOBAL FUNCTION ASSIGNMENTS ---
// Makes functions accessible from the HTML onclick attributes.
window.navigateBackToDashboard = ui.navigateBackToDashboard;
window.selectLanguage = selectLanguage;
window.startHostSession = startHostSession;
window.joinSession = joinSession;
window.scanStudentAnswer = scanStudentAnswer;
window.selectRole = selectRole;
window.changeLanguage = changeLanguage;

// UI Functions
window.showScreen = ui.showScreen;
window.toggleMenu = ui.toggleMenu;
window.toggleTeacherMenu = ui.toggleTeacherMenu;
window.showMainContent = ui.showMainContent;
window.showChapterList = ui.showChapterList;
window.openLesson = ui.openLesson;
window.showLessonTab = ui.showLessonTab;
window.checkAnswer = ui.checkAnswer;
window.toggleTheme = ui.toggleTheme;
window.toggleViewMode = ui.toggleViewMode;
window.toggleQuestionModal = ui.toggleQuestionModal;
window.selectAvatar = ui.selectAvatar;
window.openNotesViewer = ui.openNotesViewer;
window.closeNotesViewer = ui.closeNotesViewer;
window.showInbuiltContent = ui.showInbuiltContent;
window.showInbuiltChapterList = ui.showInbuiltChapterList;
window.displayInbuiltContent = ui.displayInbuiltContent;

// Teacher Functions
window.showTeacherContent = teacher.showTeacherContent;
window.showStudentDetails = teacher.showStudentDetails;
window.toggleAddStudentModal = teacher.toggleAddStudentModal;
window.selectNewStudentAvatar = teacher.selectNewStudentAvatar;
window.addNewStudent = teacher.addNewStudent;
window.markStudent = teacher.markStudent;
window.toggleEditTimetableModal = teacher.toggleEditTimetableModal;
window.saveTimetable = teacher.saveTimetable;
window.toggleStudentActionsDropdown = teacher.toggleStudentActionsDropdown;
window.showTestReportDetails = teacher.showTestReportDetails;
window.closeTestReportModal = teacher.closeTestReportModal;
window.showContentDetails = teacher.showContentDetails;

// Practice Test Functions
window.renderTestSubjectSelection = practiceTest.renderTestSubjectSelection;
window.renderTestChapterSelection = practiceTest.renderTestChapterSelection;
window.startPracticeTest = practiceTest.startPracticeTest;
window.checkTestAnswer = practiceTest.checkTestAnswer;
window.nextTestQuestion = practiceTest.nextTestQuestion;
window.skipTestQuestion = practiceTest.skipTestQuestion;
window.stopTestAndShowResults = practiceTest.stopTestAndShowResults;
window.previousTestQuestion = practiceTest.previousTestQuestion;

// Guide Functions
window.startGuide = guide.startGuide;
window.nextGuideStep = guide.nextGuideStep;
window.endGuide = guide.endGuide;

// Whiteboard Functions
window.initCanvas = initCanvas;
window.setTool = setTool;
window.setPenSize = setPenSize;
window.setPenColor = setPenColor;
window.clearCanvas = clearCanvas;
window.undoLast = undoLast;
window.saveDrawing = saveDrawing;

// --- APP INITIALIZATION ---
window.onload = async () => {
    // Theme and View Mode setup
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        const themeToggle = document.getElementById('theme-toggle-checkbox');
        if (themeToggle) themeToggle.checked = true;
    }
    if (localStorage.getItem('viewMode') === 'website') {
        document.getElementById('app-container').classList.add('view-website');
    }
    ui.createAvatarAssets();

    // 1. Firebase is completely disabled for this local flow
    // await firebase.initFirebase();

    // 2. Let the splash screen play its animation for 1 second, then move forward automatically!
    setTimeout(() => {
        ui.showScreen('language'); 
    }, 1000);

    // Service Worker registration
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('Service Worker registered.'))
            .catch(error => console.error('Service Worker registration failed:', error));
    }
};