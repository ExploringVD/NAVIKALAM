// This file contains all the static data for the app.

const translations = {
    'syllabus': { english: 'Syllabus', punjabi: 'ਸਿਲੇਬਸ', hindi: 'पाठ्यक्रम' },
    'download_notes': { english: 'Download Notes', punjabi: 'ਨੋਟਸ ਡਾਊਨਲੋਡ ਕਰੋ', hindi: 'नोट्स डाउनलोड करें' },
    'choose_language': { english: 'Choose Your Language', punjabi: 'ਆਪਣੀ ਭਾ-ਸ਼ਾ ਚੁਣੋ', hindi: 'अपनी भाषा चुनें' },
    'teacher_guide_step1': { english: 'Welcome, Teacher! This is your dashboard. You can see all your students\' overall progress at a glance here.', punjabi: 'ਜੀ ਆਇਆਂ ਨੂੰ, ਅਧਿਆਪਕ! ਇਹ ਤੁਹਾਡਾ ਡੈਸ਼ਬੋਰਡ ਹੈ। ਤੁਸੀਂ ਇੱਥੇ ਆਪਣੇ ਸਾਰੇ ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਸਮੁੱਚੀ ਤਰੱਕੀ ਨੂੰ ਇੱਕ ਨਜ਼ਰ ਵਿੱਚ ਦੇਖ ਸਕਦੇ ਹੋ।', hindi: 'आपका स्वागत है, शिक्षक! यह आपका डैशबोर्ड है। आप यहां अपने सभी छात्रों की समग्र प्रगति एक नज़र में देख सकते हैं।' },
    'teacher_guide_step2': { english: 'Use the "Uploads" tab to add new video lessons or create assignments for your class.', punjabi: 'ਨਵੇਂ ਵੀਡੀਓ ਪਾਠ ਸ਼ਾਮਲ ਕਰਨ ਜਾਂ ਆਪਣੀ ਕਲਾਸ ਲਈ ਅਸਾਈਨਮੈਂਟ ਬਣਾਉਣ ਲਈ "ਅੱਪਲੋਡ" ਟੈਬ ਦੀ ਵਰਤੋਂ ਕਰੋ।', hindi: 'नए वीडियो पाठ जोड़ने या अपनी कक्षा के लिए असाइनमेंट बनाने के लिए "अपलोड" टैब का उपयोग करें।' },
    'teacher_guide_step3': { english: 'You can easily add new students to your class by tapping the "Add Student" button.', punjabi: '"ਵਿਦਿਆਰਥੀ ਸ਼ਾਮਲ ਕਰੋ" ਬਟਨ \'ਤੇ ਟੈਪ ਕਰਕੇ ਤੁਸੀਂ ਆਸਾਨੀ ਨਾਲ ਆਪਣੀ ਕਲਾਸ ਵਿੱਚ ਨਵੇਂ ਵਿਦਿਆਰਥੀ ਸ਼ਾਮਲ ਕਰ ਸਕਦੇ ਹੋ।', hindi: '"छात्र जोड़ें" बटन पर टैप करके आप आसानी से अपनी कक्षा में नए छात्र जोड़ सकते हैं।' },
    'teacher_guide_step4': { english: 'The three-dot menu on each student card gives you quick access to more actions, like viewing detailed progress.', punjabi: 'ਹਰੇਕ ਵਿਦਿਆਰਥੀ ਕਾਰਡ \'ਤੇ ਤਿੰਨ-ਬਿੰਦੀਆਂ ਵਾਲਾ ਮੀਨੂ ਤੁਹਾਨੂੰ ਹੋਰ ਕਾਰਵਾਈਆਂ ਤੱਕ ਤੁਰੰਤ ਪਹੁੰਚ ਦਿੰਦਾ ਹੈ, ਜਿਵੇਂ ਕਿ ਵਿਸਤ੍ਰਿਤ ਤਰੱਕੀ ਦੇਖਣਾ।', hindi: 'प्रत्येक छात्र कार्ड पर तीन-डॉट मेनू आपको विस्तृत प्रगति देखने जैसी अधिक कार्रवाइयों तक त्वरित पहुँच प्रदान करता है।' },
    'app_title': { english: 'Navi Kalam', punjabi: 'ਨਵੀਂ ਕਲਮ', hindi: 'नई कलम' },
    'welcome_subtitle': { english: 'Your friendly learning companion', punjabi: 'ਤੁਹਾਡਾ ਦੋਸਤਾਨਾ ਸਿੱਖਣ ਵਾਲਾ ਸਾਥੀ', hindi: 'आपका मित्रवत सीखने वाला साथी' },
    'who_are_you': { english: 'Who are you?', punjabi: 'ਤੁਸੀਂ ਕੌਣ ਹੋ?', hindi: 'आप कौन हैं?' },
    'student': { english: 'Student', punjabi: 'ਵਿਦਿਆਰਥੀ', hindi: 'विद्यार्थी' },
    'student_login': { english: 'Student Login', punjabi: 'ਵਿਦਿਆਰਥੀ ਲਾਗਇਨ', hindi: 'विद्यार्थी लॉगिन' },
    'teacher': { english: 'Teacher', punjabi: 'ਅਧਿਆਪਕ', hindi: 'शिक्षक' },
    'teacher_login': { english: 'Teacher Login', punjabi: 'ਅਧਿਆਪਕ ਲਾਗਇਨ', hindi: 'शिक्षक लॉगिन' },
    'teacher_dashboard': { english: 'Teacher Dashboard', punjabi: 'ਅਧਿਆਪਕ ਡੈਸ਼ਬੋਰਡ', hindi: 'शिक्षक डैशबोर्ड' },
    'teacher_profile': { english: 'My Profile', punjabi: 'ਮੇਰੀ ਪ੍ਰੋਫਾਈਲ', hindi: 'मेरी प्रोफ़ाइल' },
    'teacher_settings': { english: 'App Settings', punjabi: 'ਐਪ ਸੈਟਿੰਗਜ਼', hindi: 'ऐप सेटिंग्स' },
    'teacher_guide': { english: 'Help & Guide', punjabi: 'ਮਦਦ ਅਤੇ ਗਾਈਡ', hindi: 'सहायता और गाइड' },
    'home': { english: 'Home', punjabi: 'ਮੁੱਖ', hindi: 'होम' },
    'learn': { english: 'Learn', punjabi: 'ਸਿੱਖੋ', hindi: 'सीखें' },
    'practice': { english: 'Practice', punjabi: 'अभ्यास', hindi: 'अभ्यास' },
    'rewards': { english: 'Rewards', punjabi: 'ਇਨਾਮ', hindi: 'पुरस्कार' },
    'todays_focus': { english: "Today's Focus", punjabi: "ਅੱਜ ਦਾ ਫੋਕਸ", hindi: "आज का फोकस" },
    'your_subjects': { english: 'Your Subjects', punjabi: 'ਤੁਹਾਡੇ ਵਿਸ਼ੇ', hindi: 'आपके विषय' },
    'settings': { english: 'Settings', punjabi: 'ਸੈਟਿੰਗਜ਼', hindi: 'सेटिंग्स' },
    'language': { english: 'Language', punjabi: 'ਭਾਸ਼ਾ', hindi: 'भाषा' },
    'dark_theme': { english: 'Dark Theme', punjabi: 'ਡਾਰਕ ਥੀਮ', hindi: 'डार्क थीम' },
    'profile': { english: 'Profile', punjabi: 'ਪ੍ਰੋਫਾਈਲ', hindi: 'प्रोफ़ाइल' },
    'offline_manager': { english: 'Offline Manager', punjabi: 'ਔਫਲਾਈਨ ਮੈਨੇਜਰ', hindi: 'ऑफलाइन प्रबंधक' },
    'log_out': { english: 'Log Out', punjabi: 'ਲਾਗ ਆਉਟ', hindi: 'लॉग आउट' },
    'guide': { english: 'Guide', punjabi: 'ਗਾਈਡ', hindi: 'गाइड' },
    'learning_map': { english: 'Learning Map', punjabi: 'ਸਿੱਖਣ ਦਾ ਨਕਸ਼ਾ', hindi: 'सीखने का नक्शा' },
    'practice_zone': { english: 'Practice Zone', punjabi: 'ਅਭਿਆਸ ਜ਼ੋਨ', hindi: 'अभ्यास क्षेत्र' },
    'whiteboard_title': { english: 'Digital Whiteboard', punjabi: 'ਡਿਜੀਟਲ ਵ੍ਹਾਈਟਬੋਰਡ', hindi: 'डिजिटल व्हाइटबोर्ड' },
    'whiteboard_subtitle': { english: 'Draw, write, and practice freely.', punjabi: 'ਡਰਾਅ, ਲਿਖੋ, ਅਤੇ ਅਭਿਆਸ ਕਰੋ।', hindi: 'ड्रा, लिखें और अभ्यास करें।' },
    'object_explorer_title': { english: 'Object Explorer', punjabi: 'ਆਬਜੈਕਟ ਐਕਸਪਲੋਰਰ', hindi: 'ऑब्जेक्ट एक्सप्लोरर' },
    'object_explorer_subtitle': { english: 'Identify objects with your camera.', punjabi: 'ਕੈਮਰੇ ਨਾਲ ਵਸਤੂਆਂ ਦੀ ਪਛਾਣ ਕਰੋ।', hindi: 'कैमरे से वस्तुओं को पहचानें।' },
    'community_showcase': { english: 'Community Showcase', punjabi: 'ਕਮਿਊਨਿਟੀ ਸ਼ੋਅਕੇਸ', hindi: 'कम्युनिटी शोकेस' },
    'work_of_the_week': { english: 'See the work of the week!', punjabi: 'ਹਫ਼ਤੇ ਦਾ ਕੰਮ ਦੇਖੋ!', hindi: 'सप्ताह का काम देखें!' },
    'guide_step1': {
        english: (name) => `Hey <strong>${name}</strong>! I'm Kai, your guide. Let's take a quick tour. This is the main navigation bar where you can find everything.`,
        punjabi: (name) => `ਹੈਲੋ <strong>${name}</strong>! ਮੈਂ ਕਾਈ ਹਾਂ, ਤੁਹਾਡਾ ਗਾਈਡ। ਚਲੋ ਇੱਕ ਛੋਟਾ ਦੌਰਾ ਕਰੀਏ। ਇਹ ਮੁੱਖ ਨੇਵੀਗੇਸ਼ਨ ਬਾਰ ਹੈ ਜਿੱਥੇ ਤੁਸੀਂ ਸਭ ਕੁਝ ਲੱਭ ਸਕਦੇ ਹੋ।`,
        hindi: (name) => `नमस्ते <strong>${name}</strong>! मैं काई हूँ, आपका गाइड। चलिए एक छोटा दौरा करें। यह मुख्य नेविगेशन बार है जहाँ आप सब कुछ पा सकते हैं।`
    },
    'guide_step2': { english: 'Tap "Learn" to see all your subjects and choose a lesson.', punjabi: 'ਆਪਣੇ ਸਾਰੇ ਵਿਸ਼ੇ ਦੇਖਣ ਅਤੇ ਇੱਕ ਪਾਠ ਚੁਣਨ ਲਈ "ਸਿੱਖੋ" \'ਤੇ ਟੈਪ ਕਰੋ।', hindi: 'अपने सभी विषयों को देखने और एक पाठ चुनने के लिए "सीखें" पर टैप करें।' },
    'guide_step3': { english: 'From the home screen, you can also jump directly into a subject right here.', punjabi: 'ਹੋਮ ਸਕ੍ਰੀਨ ਤੋਂ, ਤੁਸੀਂ ਸਿੱਧੇ ਇੱਥੇ ਕਿਸੇ ਵਿਸ਼ੇ \'ਤੇ ਵੀ ਜਾ ਸਕਦੇ ਹੋ।', hindi: 'होम स्क्रीन से, आप सीधे यहीं से किसी विषय पर जा सकते हैं।' },
    'guide_step4': { english: 'The "Practice" section has cool tools like the digital whiteboard for you to experiment with.', punjabi: '"ਅਭਿਆਸ" ਭਾਗ ਵਿੱਚ ਤੁਹਾਡੇ ਲਈ ਪ੍ਰਯੋਗ ਕਰਨ ਲਈ ਡਿਜੀਟਲ ਵ੍ਹਾਈਟਬੋਰਡ ਵਰਗੇ ਵਧੀਆ ਟੂਲ ਹਨ।', hindi: '"अभ्यास" अनुभाग में आपके प्रयोग के लिए डिजिटल व्हाइटबोर्ड जैसे बेहतरीन उपकरण हैं।' },
    'guide_step5': { english: 'And if you ever get stuck, just open the "Doubt Forum" in any chapter to ask a question!', punjabi: 'ਅਤੇ ਜੇਕਰ ਤੁਸੀਂ ਕਦੇ ਫਸ ਜਾਂਦੇ ਹੋ, ਤਾਂ ਸਵਾਲ ਪੁੱਛਣ ਲਈ ਕਿਸੇ ਵੀ ਅਧਿਆਇ ਵਿੱਚ "ਸ਼ੱਕ ਫੋਰਮ" ਖੋਲ੍ਹੋ!', hindi: 'और यदि आप कभी भी फंस जाते हैं, तो प्रश्न पूछने के लिए किसी भी अध्याय में "संदेह मंच" खोलें!' },
    'your_achievements': { english: 'Your Achievements', punjabi: 'ਤੁਹਾਡੀਆਂ ਪ੍ਰਾਪਤੀਆਂ', hindi: 'आपकी उपलब्धियां' },
    'class_rank': { english: 'Class Rank', punjabi: 'ਕਲਾਸ ਰੈਂਕ', hindi: 'कक्षा रैंक' },
    'badge_science_whiz': { english: 'Science Whiz', punjabi: 'ਵਿਗਿਆਨ ਵਿਜ਼', hindi: 'विज्ञान विशेषज्ञ' },
    'badge_perfect_week': { english: 'Perfect Week', punjabi: 'ਸੰਪੂਰਨ ਹਫ਼ਤਾ', hindi: 'उत्तम सप्ताह' },
    'badge_quick_learner': { english: 'Quick Learner', punjabi: 'ਤੇਜ਼ ਸਿੱਖਣ ਵਾਲਾ', hindi: 'शीघ्र सीखने वाला' },
    'quiz_title': { english: 'Check Your Knowledge', punjabi: 'ਆਪਣੇ ਗਿਆਨ ਦੀ ਜਾਂਚ ਕਰੋ', hindi: 'अपने ज्ञान का परीक्षण करें' },
    'quiz_question_1': { english: 'Which of these is a living thing?', punjabi: 'ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਇੱਕ ਜੀਵਿਤ ਚੀਜ਼ ਹੈ?', hindi: 'इनमें से कौन सी एक जीवित वस्तु है?' },
    'quiz_option_1_correct': { english: 'A tree', punjabi: 'ਇੱਕ ਰੁੱਖ', hindi: 'एक पेड़' },
    'quiz_option_1_incorrect': { english: 'A rock', punjabi: 'ਇੱਕ ਪੱਥਰ', hindi: 'एक चट्टान' },
    'quiz_result_correct': { english: 'Correct! +10 Points', punjabi: 'ਸਹੀ! +10 ਪੁਆਇੰਟ', hindi: 'सही! +10 अंक' },
    'quiz_result_incorrect': { english: 'Not quite! Try again.', punjabi: 'ਬਿਲਕੁਲ ਨਹੀਂ! ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।', hindi: 'गलत! फिर से कोशिश करें।' },
    'quiz_challenge_friend': { english: 'Challenge a Friend', punjabi: 'ਇੱਕ ਦੋਸਤ ਨੂੰ ਚੁਣੌਤੀ ਦਿਓ', hindi: 'एक दोस्त को चुनौती दें' },
    'status': { english: 'Status', punjabi: 'ਸਥਿਤੀ', hindi: 'स्थिति' },
    'status_completed': { english: 'Completed', punjabi: 'ਪੂਰਾ ਹੋਇਆ', hindi: 'पूर्ण' },
    'status_in_progress': { english: 'In Progress', punjabi: 'ਚੱਲ ਰਿਹਾ ਹੈ', hindi: 'प्रगति में है' },
    'your_name': { english: 'Email Address', punjabi: 'ਈਮੇਲ ਪਤਾ', hindi: 'ईमेल पता' },
    'select_class': { english: 'Select your class', punjabi: 'ਆਪਣੀ ਕਲਾਸ ਚੁਣੋ', hindi: 'अपनी कक्षा चुनें' },
    'class_5': { english: 'Class 5', punjabi: 'ਕਲਾਸ 5', hindi: 'कक्षा 5' },
    'class_6': { english: 'Class 6', punjabi: 'ਕਲਾਸ 6', hindi: 'कक्षा 6' },
    'class_7': { english: 'Class 7', punjabi: 'ਕਲਾਸ 7', hindi: 'कक्षा 7' },
    'class_8': { english: 'Class 8', punjabi: 'ਕਲਾਸ 8', hindi: 'कक्षा 8' },
    'pin_placeholder': { english: 'Password', punjabi: 'ਪਾਸਵਰਡ', hindi: 'पासवर्ड' },
    'lets_go': { english: "Let's Go!", punjabi: 'ਚਲੋ ਚੱਲੀਏ!', hindi: 'शुरू करें!' },
    'school_id': { english: 'School ID', punjabi: 'ਸਕੂਲ ਆਈਡੀ', hindi: 'स्कूल आईडी' },
    'password': { english: 'Password', punjabi: 'ਪਾਸਵਰਡ', hindi: 'पासवर्ड' },
    'login': { english: 'Login', punjabi: 'ਲਾਗਿਨ', hindi: 'लॉगिन' },
    'synced': { english: 'Synced', punjabi: 'ਸਿੰਕ ਕੀਤਾ', hindi: 'सिंक किया हुआ' },
    'doubt_forum': { english: 'Doubt Forum', punjabi: 'ਸ਼ੱਕ ਫੋਰਮ', hindi: 'संदेह मंच' },
    'lesson': { english: 'Lesson', punjabi: 'ਸਬਕ', hindi: 'पाठ' },
    'summary': { english: 'Summary', punjabi: 'ਸੰਖੇਪ', hindi: 'सारांश' },
    'quiz': { english: 'Quiz', punjabi: 'ਕੁਇਜ਼', hindi: 'प्रश्नोत्तरी' },
    'ask_new_question': { english: 'Ask a New Question', punjabi: 'ਨਵਾਂ ਸਵਾਲ ਪੁੱਛੋ', hindi: 'नया प्रश्न पूछें' },
    'type_question_placeholder': { english: 'Type your question here...', punjabi: 'ਆਪਣਾ ਸਵਾਲ ਇੱਥੇ ਟਾਈਪ ਕਰੋ...', hindi: 'अपना प्रश्न यहाँ टाइप करें...' },
    'cancel': { english: 'Cancel', punjabi: 'ਰੱਦ ਕਰੋ', hindi: 'रद्द करें' },
    'submit': { english: 'Submit', punjabi: 'ਜਮ੍ਹਾਂ ਕਰੋ', hindi: 'जमा करें' },
    'add_student': { english: 'Add Student', punjabi: 'ਵਿਦਿਆਰਥੀ ਸ਼ਾਮਲ ਕਰੋ', hindi: 'विद्यार्थी जोड़ें' },
    'mark_attendance': { english: 'Mark Attendance', punjabi: 'ਹਾਜ਼ਰੀ ਲਗਾਓ', hindi: 'उपस्थिति दर्ज करें' },
    'edit_timetable': { english: 'Edit Timetable', punjabi: 'ਸਮਾਂ-ਸਾਰਣੀ ਸੋਧੋ', hindi: 'समय-सारणी संपादित करें' },
    'upload_marks': { english: 'Upload Marks', punjabi: 'ਅੰਕ ਅੱਪਲੋਡ ਕਰੋ', hindi: 'अंक अपलोड करें' },
    'student_progress': { english: 'Student Progress', punjabi: 'ਵਿਦਿਆਰਥੀ ਦੀ ਤਰੱਕੀ', hindi: 'विद्यार्थी प्रगति' },
    'add_new_student': { english: 'Add New Student', punjabi: 'ਨਵਾਂ ਵਿਦਿਆਰਥੀ ਸ਼ਾਮਲ ਕਰੋ', hindi: 'नया विद्यार्थी जोड़ें' },
    'student_name_placeholder': { english: "Student's Full Name", punjabi: 'ਵਿਦਿਆਰਥੀ ਦਾ ਪੂਰਾ ਨਾਮ', hindi: 'विद्यार्थी का पूरा नाम' },
    'choose_avatar': { english: 'Choose Avatar', punjabi: 'ਅਵਤਾਰ ਚੁਣੋ', hindi: 'अवतार चुनें' },
    'days_present': { english: 'Days Present', punjabi: 'ਮੌਜੂਦ ਦਿਨ', hindi: 'उपस्थित दिन' },
    'days_absent': { english: 'Days Absent', punjabi: 'ਗੈਰਹਾਜ਼ਰ ਦਿਨ', hindi: 'अनुपस्थित दिन' },
    'my_attendance': { english: 'My Attendance', punjabi: 'ਮੇਰੀ ਹਾਜ਼ਰੀ', hindi: 'मेरी उपस्थिति' },
    'class_timetable': { english: 'Class Timetable', punjabi: 'ਕਲਾਸ ਦੀ ਸਮਾਂ-ਸਾਰਣੀ', hindi: 'कक्षा समय-सारणी' },
    'edit': { english: 'Edit', punjabi: 'ਸੋਧੋ', hindi: 'संपादित करें' },
    'save_changes': { english: 'Save Changes', punjabi: 'ਤਬਦੀਲੀਆਂ ਸੁਰੱਖਿਅਤ ਕਰੋ', hindi: 'बदलाव सहेजें' },
    'complete_1_quiz': { english: 'Complete 1 Quiz', punjabi: '1 ਕੁਇਜ਼ ਪੂਰਾ ਕਰੋ', hindi: '1 प्रश्नोत्तरी पूरी करें' },
    '10_points': { english: '10 points', punjabi: '10 ਅੰਕ', hindi: '10 अंक' },
    'learn_15_mins': { english: 'Learn for 15 mins', punjabi: '15 ਮਿੰਟ ਲਈ ਸਿੱਖੋ', hindi: '15 मिनट के लिए सीखें' },
    '20_points': { english: '20 points', punjabi: '20 ਅੰਕ', hindi: '20 अंक' },
    'chapters': { english: 'Chapters', punjabi: 'ਅਧਿਆਏ', hindi: 'अध्याय' },
    'coming_soon': { english: 'Coming Soon', punjabi: 'ਛੇਤੀ ਆ ਰਿਹਾ ਹੈ', hindi: 'जल्द आ रहा है' },
    'chapter': { english: 'Chapter', punjabi: 'ਅਧਿਆਇ', hindi: 'अध्याय' },
    'lesson_title_living_things': { english: 'What are Living Things?', punjabi: 'ਜੀਵਿਤ ਚੀਜ਼ਾਂ ਕੀ ਹਨ?', hindi: 'सजीव वस्तुएं क्या हैं?' },
    'lesson_body_living_things': { english: 'Living things are all around us. They grow, breathe, move, and have babies.', punjabi: 'ਜੀਵਿਤ ਚੀਜ਼ਾਂ ਸਾਡੇ ਆਲੇ-ਦੁਆਲੇ ਹਨ। ਉਹ ਵਧਦੇ ਹਨ, ਸਾਹ ਲੈਂਦੇ ਹਨ, ਹਿਲਦੇ ਹਨ, ਅਤੇ ਬੱਚੇ ਪੈਦਾ ਕਰਦੇ ਹਨ।', hindi: 'सजीव वस्तुएं हमारे चारों ओर हैं। वे बढ़ती हैं, सांस लेती हैं, हिलती-डुलती हैं और बच्चे पैदा करती हैं।' },
    'key_points': { english: 'Key Points', punjabi: 'ਮੁੱਖ ਬਿੰਦੂ', hindi: 'मुख्य बिंदु' },
    'lesson_summary_1': { english: 'Living things grow and change.', punjabi: 'ਜੀਵਿਤ ਚੀਜ਼ਾਂ ਵਧਦੀਆਂ ਅਤੇ ਬਦਲਦੀਆਂ ਹਨ।', hindi: 'सजीव वस्तुएं बढ़ती हैं और बदलती हैं।' },
    'lesson_summary_2': { english: 'They need food, water, and air.', punjabi: 'ਉਹਨਾਂ ਨੂੰ ਭੋਜਨ, ਪਾਣੀ ਅਤੇ ਹਵਾ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।', hindi: 'उन्हें भोजन, पानी और हवा की आवश्यकता होती है।' },
    'total_points': { english: 'Total Points', punjabi: 'ਕੁੱਲ ਅੰਕ', hindi: 'कुल अंक' },
    'choose_avatar_title': { english: 'Choose Avatar', punjabi: 'ਅਵਤਾਰ ਚੁਣੋ', hindi: 'अवतार चुनें' },
    'present': { english: 'Present', punjabi: 'ਮੌਜੂਦ', hindi: 'उपस्थित' },
    'absent': { english: 'Absent', punjabi: 'ਗੈਰਹਾਜ਼ਰ', hindi: 'अनुपस्थित' },
    'student_progress_subtitle': { english: 'Subject Progress', punjabi: 'ਵਿਸ਼ੇ ਦੀ ਤਰੱਕੀ', hindi: 'विषय प्रगति' },
    'work_of_week_title': { english: '🏆 Work of the Week', punjabi: '🏆 ਹਫ਼ਤੇ ਦਾ ਕੰਮ', hindi: '🏆 सप्ताह का सर्वश्रेष्ठ काम' },
    'example_drawing_title': { english: 'Diagram of a Flower', punjabi: 'ਫੁੱਲ ਦਾ ਚਿੱਤਰ', hindi: 'फूल का आरेख' },
    'example_drawing_author': { english: 'by Priya, Class 6', punjabi: 'ਪ੍ਰਿਆ ਦੁਆਰਾ, ਕਲਾਸ 6', hindi: 'प्रिया, कक्षा 6 द्वारा' },
    'timetable': { english: 'Timetable', punjabi: 'ਸਮਾਂ-ਸਾਰਣੀ', hindi: 'समय-सारणी' },
    'attendance': { english: 'Attendance', punjabi: 'ਹਾਜ਼ਰੀ', hindi: 'उपस्थिति' },
    'skip_tour': { english: 'Skip Tour', punjabi: 'ਟੂਰ ਛੱਡੋ', hindi: 'टूर छोड़ें' },
    'next': { english: 'Next', punjabi: 'ਅਗਲਾ', hindi: 'अगला' },
    'finish': { english: 'Finish', punjabi: 'ਖਤਮ ਕਰੋ', hindi: 'समाप्त' },
    'teacher_nav_progress': { english: 'Progress', punjabi: 'ਤਰੱਕੀ', hindi: 'प्रगति' },
    'teacher_nav_add': { english: 'Add Student', punjabi: 'ਵਿਦਿਆਰਥੀ ਸ਼ਾਮਲ', hindi: 'विद्यार्थी जोड़ें' },
    'teacher_nav_attendance': { english: 'Attendance', punjabi: 'ਹਾਜ਼ਰੀ', hindi: 'उपस्थिति' },
    'teacher_nav_timetable': { english: 'Timetable', punjabi: 'ਸਮਾਂ-ਸਾਰਣੀ', hindi: 'समय-सारणी' },
    'close': { english: 'Close', punjabi: 'ਬੰਦ ਕਰੋ', hindi: 'बंद करें' },
    'website_view': { english: 'Website View', punjabi: 'ਵੈੱਬਸਾਈਟ ਦ੍ਰਿਸ਼', hindi: 'वेबसाइट व्यू' },
    'take_a_test_title': { english: 'Take a Test', punjabi: 'ਇੱਕ ਟੈਸਟ ਦਿਓ', hindi: 'परीक्षा दें' },
    'take_a_test_subtitle': { english: 'Challenge yourself with custom quizzes.', punjabi: 'ਕਸਟਮ ਕਵਿਜ਼ਾਂ ਨਾਲ ਆਪਣੇ ਆਪ ਨੂੰ ਚੁਣੌਤੀ ਦਿਓ।', hindi: 'कस्टम क्विज़ के साथ खुद को चुनौती दें।' },
    'back_to_subjects': { english: 'Back to Subjects', punjabi: 'ਵਿਸ਼ਿਆਂ \'ਤੇ ਵਾਪਸ ਜਾਓ', hindi: 'विषयों पर वापस जाएं' },
    'question': { english: 'Question', punjabi: 'ਸਵਾਲ', hindi: 'प्रश्न' },
    'next_question': { english: 'Next Question', punjabi: 'ਅਗਲਾ ਸਵਾਲ', hindi: 'अगला प्रश्न' },
    'test_results': { english: 'Test Results', punjabi: 'ਟੈਸਟ ਦੇ ਨਤੀਜੇ', hindi: 'परीक्षा परिणाम' },
    'you_scored': { english: 'You scored', punjabi: 'ਤੁਹਾਡਾ ਸਕੋਰ', hindi: 'आपका स्कोर' },
    'out_of': { english: 'out of', punjabi: 'ਵਿੱਚੋਂ', hindi: 'में से' },
    'try_again': { english: 'Try Again', punjabi: 'ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ', hindi: 'पुनः प्रयास करें' },
    'back_to_practice': { english: 'Back to Practice Zone', punjabi: 'ਅਭਿਆਸ ਜ਼ੋਨ \'ਤੇ ਵਾਪਸ ਜਾਓ', hindi: 'अभ्यास क्षेत्र में वापस जाएं' },
    'teacher_uploads_tab': { english: 'Uploads', punjabi: 'ਅੱਪਲੋਡ', hindi: 'अपलोड' },
    'upload_video_lesson': { english: 'Upload a Video Lesson', punjabi: 'ਇੱਕ ਵੀਡੀਓ ਪਾਠ ਅੱਪਲੋਡ ਕਰੋ', hindi: 'एक वीडियो पाठ अपलोड करें' },
    'select_video_file': { english: 'Select a video file to upload for your students.', punjabi: 'ਆਪਣੇ ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਅੱਪਲੋਡ ਕਰਨ ਲਈ ਇੱਕ ਵੀਡੀਓ ਫਾਈਲ ਚੁਣੋ।', hindi: 'अपने छात्रों के लिए अपलोड करने के लिए एक वीडियो फ़ाइल चुनें।' },
    'choose_file': { english: 'Choose File', punjabi: 'ਫਾਈਲ ਚੁਣੋ', hindi: 'फ़ाइल चुनें' },
    'upload_assignment': { english: 'Upload an Assignment (PDF)', punjabi: 'ਇੱਕ ਅਸਾਈਨਮੈਂਟ ਅੱਪਲੋਡ ਕਰੋ (PDF)', hindi: 'एक असाइनमेंट अपलोड करें (PDF)' },
    'select_pdf_file': { english: 'Select a PDF assignment file for your students.', punjabi: 'ਆਪਣੇ ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਇੱਕ PDF ਅਸਾਈਨਮੈਂਟ ਫਾਈਲ ਚੁਣੋ।', hindi: 'अपने छात्रों के लिए एक PDF असाइनमेंट फ़ाइल चुनें।' },
    'select_subject': { english: 'Select Subject', punjabi: 'ਵਿਸ਼ਾ ਚੁਣੋ', hindi: 'विषय चुनें' },
    'select_chapter': { english: 'Select Chapter', punjabi: 'ਅਧਿਆਇ ਚੁਣੋ', hindi: 'अध्याय चुनें' },
    'upload': { english: 'Upload', punjabi: 'ਅੱਪਲੋਡ ਕਰੋ', hindi: 'अपलोड करें' },
    'assignment': { english: 'Assignment', punjabi: 'ਅਸਾਈਨਮੈਂਟ', hindi: 'असाइनमेंट' },
    'download_assignment': { english: 'Download Assignment', punjabi: 'ਅਸਾਈਨਮੈਂਟ ਡਾਊਨਲੋਡ ਕਰੋ', hindi: 'असाइनमेंट डाउनलोड करें' },
    'no_assignments': { english: 'No assignments uploaded for this chapter yet.', punjabi: 'ਇਸ ਅਧਿਆਇ ਲਈ ਅਜੇ ਕੋਈ ਅਸਾਈਨਮੈਂਟ ਅੱਪਲੋਡ ਨਹੀਂ ਕੀਤੀ ਗਈ ਹੈ।', hindi: 'इस अध्याय के लिए अभी तक कोई असाइनमेंट अपलोड नहीं की गई है।' },
    'inbuilt_notes': { english: 'Inbuilt Notes', punjabi: 'ਇਨਬਿਲਟ ਨੋਟਸ', hindi: 'इनबिल्ट नोट्स' },
    'inbuilt_assignments': { english: 'Inbuilt Assignments', punjabi: 'ਇਨਬਿਲਟ ਅਸਾਈਨਮੈਂਟਸ', hindi: 'इनबिल्ट असाइनमेंट' },
    'assignment_solutions': { english: 'Assignment Solutions', punjabi: 'ਅਸਾਈਨਮੈਂਟ ਹੱਲ', hindi: 'असाइनमेंट समाधान' },
    'notes_subtitle': { english: 'Pre-packaged for offline access.', punjabi: 'ਔਫਲਾਈਨ ਪਹੁੰਚ ਲਈ ਪਹਿਲਾਂ ਤੋਂ ਪੈਕ।', hindi: 'ऑफ़लाइन पहुंच के लिए प्री-पैकेज्ड।' },
    'assignments_subtitle': { english: 'Practice questions for each topic.', punjabi: 'ਹਰੇਕ ਵਿਸ਼ੇ ਲਈ ਅਭਿਆਸ ਸਵਾਲ।', hindi: 'प्रत्येक विषय के लिए अभ्यास प्रश्न।' },
    'solutions_subtitle': { english: 'Check your assignment answers.', punjabi: 'ਆਪਣੇ ਅਸਾਈਨਮੈਂਟ ਜਵਾਬਾਂ ਦੀ ਜਾਂਚ ਕਰੋ।', hindi: 'अपने असाइनमेंट उत्तरों की जाँच करें।' },
    'back_to_practice_zone': { english: 'Back to Practice Zone', punjabi: 'ਅਭਿਆਸ ਜ਼ੋਨ \'ਤੇ ਵਾਪਸ', hindi: 'अभ्यास क्षेत्र में वापस' },
    'content_overview': { english: 'Content Overview', punjabi: 'ਸਮੱਗਰੀ ਦੀ ਸੰਖੇਪ ਜਾਣਕਾਰੀ', hindi: 'सामग्री अवलोकन' },
    'notes': { english: 'Notes', punjabi: 'ਨੋਟਸ', hindi: 'नोट्स' },
    'assignments': { english: 'Assignments', punjabi: 'ਅਸਾਈਨਮੈਂਟਸ', hindi: 'असाइनमेंट' },
    'content_details_for': { english: 'Content Details for', punjabi: 'ਲਈ ਸਮੱਗਰੀ ਵੇਰਵੇ', hindi: 'के लिए सामग्री विवरण' },
    'videos': { english: 'Videos', punjabi: 'ਵੀਡੀਓਜ਼', hindi: 'वीडियो' },
    'no_videos_uploaded': { english: 'No videos have been uploaded for this chapter yet.', punjabi: 'ਇਸ ਅਧਿਆਇ ਲਈ ਅਜੇ ਤੱਕ ਕੋਈ ਵੀਡੀਓ ਅੱਪਲੋਡ ਨਹੀਂ ਕੀਤਾ ਗਿਆ ਹੈ।', hindi: 'इस अध्याय के लिए अभी तक कोई वीडियो अपलोड नहीं किया गया है।' },
    'offline_sync_title': { english: 'Offline Sync', punjabi: 'ਔਫਲਾਈਨ ਸਿੰਕ', hindi: 'ऑफलाइन सिंक' },
    'offline_sync_subtitle': { english: 'Share content without internet', punjabi: 'ਬਿਨਾਂ ਇੰਟਰਨੈਟ ਦੇ ਸਮੱਗਰੀ ਸਾਂਝੀ ਕਰੋ', hindi: 'बिना इंटरनेट के सामग्री साझा करें' },
};

const subjects = [
    { name: { english: "Science", punjabi: "ਵਿਗਿਆਨ", hindi: "विज्ञान" }, icon: "fa-flask", color: "blue", progress: 45 },
    { name: { english: "Maths", punjabi: "ਗਣਿਤ", hindi: "गणित" }, icon: "fa-calculator", color: "emerald", progress: 75 },
    { name: { english: "English", punjabi: "ਅੰਗਰੇਜ਼ੀ", hindi: "अंग्रेज़ी" }, icon: "fa-book", color: "red", progress: 30 },
    { name: { english: "Social Studies", punjabi: "ਸਮਾਜਿਕ ਸਿੱਖਿਆ", hindi: "सामाजिक अध्ययन" }, icon: "fa-landmark", color: "amber", progress: 15 },
    { name: { english: "History", punjabi: "ਇਤਹਾਸ", hindi: "इतिहास" }, icon: "fa-scroll", color: "teal", progress: 55 }
];

const chapters = {
    "Science": [
        { name: { english: "The Living World", punjabi: "ਸਜੀਵ ਸੰਸਾਰ", hindi: "सजीव जगत" }, progress: 80, notesPdf: "science_ch1_notes.pdf" },
        { name: { english: "Components of Food", punjabi: "ਭੋਜਨ ਦੇ ਹਿੱਸੇ", hindi: "भोजन के घटक" }, progress: 20, notesPdf: "science_ch2_notes.pdf" },
    ],
    "Maths": [
        { name: { english: "Knowing Our Numbers", punjabi: "ਸਾਡੇ ਨੰਬਰਾਂ ਨੂੰ ਜਾਣਨਾ", hindi: "अपनी संख्याओं को जानना" }, progress: 100, notesPdf: "maths_ch1_notes.pdf" },
    ],
    "English": [
        { name: { english: "Nouns and Verbs", punjabi: "ਨਾਮ ਅਤੇ ਕਿਰਿਆਵਾਂ", hindi: "संज्ञा और क्रिया" }, progress: 0 }
    ],
    "Social Studies": [
        { name: { english: "Our Community", punjabi: "ਸਾਡਾ ਭਾਈਚਾਰਾ", hindi: "हमारा समुदाय" }, progress: 0 }
    ],
    "History": [
        { name: { english: "Ancient Civilizations", punjabi: "ਪ੍ਰਾਚੀਨ ਸਭਿਅਤਾਵਾਂ", hindi: "प्राचीन सभ्यताएं" }, progress: 0 }
    ]
};

const syllabusData = {
    "Science": [
        {
            title: { english: "The Living World", punjabi: "ਸਜੀਵ ਸੰਸਾਰ", hindi: "सजीव जगत" },
            details: { english: "Characteristics and classification of living things.", punjabi: "ਜੀਵਿਤ ਚੀਜ਼ਾਂ ਦੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਅਤੇ ਵਰਗੀਕਰਨ।", hindi: "सजीव वस्तुओं की विशेषताएँ और वर्गीकरण।" },
            subtopics: [
                { english: "What are living vs. non-living things?", punjabi: "ਜੀਵਿਤ ਬਨਾਮ ਨਿਰਜੀਵ ਚੀਜ਼ਾਂ ਕੀ ਹਨ?", hindi: "सजीव बनाम निर्जीव वस्तुएं क्या हैं?" },
                { english: "Need for food, water, and air.", punjabi: "ਭੋਜਨ, ਪਾਣੀ ਅਤੇ ਹਵਾ ਦੀ ਲੋੜ।", hindi: "भोजन, जल और वायु की आवश्यकता।" },
                { english: "Growth and movement in plants and animals.", punjabi: "ਪੌਦਿਆਂ ਅਤੇ ਜਾਨਵਰਾਂ ਵਿੱਚ ਵਾਧਾ ਅਤੇ ਗਤੀ।", hindi: "पौधों और जानवरों में वृद्धि और गति।" }
            ]
        }
    ],
    "Maths": [
        {
            title: { english: "Knowing Our Numbers", punjabi: "ਸਾਡੇ ਨੰਬਰਾਂ ਨੂੰ ਜਾਣਨਾ", hindi: "अपनी संख्याओं को जानना" },
            details: { english: "Place value, estimation, and Roman numerals.", punjabi: "ਸਥਾਨਕ ਮੁੱਲ, ਅਨੁਮਾਨ, ਅਤੇ ਰੋਮਨ ਅੰਕ।", hindi: "स्थानीय मान, आकलन और रोमन अंक।" },
            subtopics: [
                { english: "Comparing numbers and place value.", punjabi: "ਸੰਖਿਆਵਾਂ ਅਤੇ ਸਥਾਨਕ ਮੁੱਲ ਦੀ ਤੁਲਨਾ।", hindi: "संख्याओं और स्थानीय मान की तुलना।" }
            ]
        }
    ]
};

const lessonContent = {
    "Science": {
        "The Living World": {
            lesson: { english: "Living things are all around us. They grow, breathe, move, and reproduce.", punjabi: "ਜੀਵਿਤ ਚੀਜ਼ਾਂ ਸਾਡੇ ਆਲੇ-ਦੁਆਲੇ ਹਨ। ਉਹ ਵਧਦੇ ਹਨ, ਸਾਹ ਲੈਂਦੇ ਹਨ, ਹਿਲਦੇ ਹਨ, ਅਤੇ ਪ੍ਰਜਨਨ ਕਰਦੇ ਹਨ।", hindi: "सजीव वस्तुएं हमारे चारों ओर हैं। वे बढ़ती हैं, सांस लेती हैं, हिलती-डुलती हैं और प्रजनन करती हैं।" },
            summary: [
                { english: "Living things grow and change.", punjabi: "ਜੀਵਿਤ ਚੀਜ਼ਾਂ ਵਧਦੀਆਂ ਅਤੇ ਬਦਲਦੀਆਂ ਹਨ।", hindi: "सजीव वस्तुएं बढ़ती हैं और बदलती हैं।" },
                { english: "They need food, water, and air to survive.", punjabi: "ਉਹਨਾਂ ਨੂੰ ਜਿਉਂਦੇ ਰਹਿਣ ਲਈ ਭੋਜਨ, ਪਾਣੀ ਅਤੇ ਹਵਾ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।", hindi: "उन्हें जीवित रहने के लिए भोजन, जल और वायु की आवश्यकता होती है।" }
            ],
            quiz: {
                question: { english: 'Which of these is a characteristic of a living thing?', punjabi: 'ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਇੱਕ ਜੀਵਿਤ ਚੀਜ਼ ਦੀ ਵਿਸ਼ੇਸ਼ਤਾ ਹੈ?', hindi: 'इनमें से कौन सी एक सजीव वस्तु की विशेषता है?' },
                options: [
                    { text: { english: 'It can reproduce.', punjabi: 'ਇਹ ਪ੍ਰਜਨਨ ਕਰ ਸਕਦਾ ਹੈ।', hindi: 'यह प्रजनन कर सकता है।' }, correct: true },
                    { text: { english: 'It is made of stone.', punjabi: 'ਇਹ ਪੱਥਰ ਦਾ ਬਣਿਆ ਹੈ।', hindi: 'यह पत्थर से बना है।' }, correct: false }
                ]
            }
        }
    },
    "Maths": {
        "Knowing Our Numbers": {
            lesson: { english: "Numbers help us count. Place value is the value of each digit in a number.", punjabi: "ਨੰਬਰ ਸਾਨੂੰ ਗਿਣਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ। ਸਥਾਨਕ ਮੁੱਲ ਇੱਕ ਸੰਖਿਆ ਵਿੱਚ ਹਰੇਕ ਅੰਕ ਦਾ ਮੁੱਲ ਹੁੰਦਾ ਹੈ।", hindi: "संख्याएँ हमें गिनने में मदद करती हैं। स्थानीय मान एक संख्या में प्रत्येक अंक का मान होता है।" },
            summary: [
                { english: "The position of a digit in a number determines its value.", punjabi: "ਇੱਕ ਸੰਖਿਆ ਵਿੱਚ ਇੱਕ ਅੰਕ ਦੀ ਸਥਿਤੀ ਉਸਦੇ ਮੁੱਲ ਨੂੰ ਨਿਰਧਾਰਤ ਕਰਦੀ ਹੈ।", hindi: "एक संख्या में एक अंक की स्थिति उसका मान निर्धारित करती है।" }
            ],
            quiz: {
                question: { english: 'In the number 357, what is the place value of the 5?', punjabi: 'ਸੰਖਿਆ 357 ਵਿੱਚ, 5 ਦਾ ਸਥਾਨਕ ਮੁੱਲ ਕੀ ਹੈ?', hindi: 'संख्या 357 में, 5 का स्थानीय मान क्या है?' },
                options: [
                    { text: { english: 'Ones', punjabi: 'ਇਕਾਈਆਂ', hindi: 'इकाई' }, correct: false },
                    { text: { english: 'Tens', punjabi: 'ਦਹਾਈਆਂ', hindi: 'दहाई' }, correct: true },
                    { text: { english: 'Hundreds', punjabi: 'ਸੈਂਕੜੇ', hindi: 'सैकड़ा' }, correct: false }
                ]
            }
        }
    }
};

const questionBank = {
    "Science": {
        "The Living World": [
            { question: { english: "Which is a characteristic of living things?", punjabi: "ਸਜੀਵ ਚੀਜ਼ਾਂ ਦੀ ਵਿਸ਼ੇਸ਼ਤਾ ਕਿਹੜੀ ਹੈ?", hindi: "सजीव वस्तुओं की क्या विशेषता है?" }, options: [{ english: "They do not grow", punjabi: "ਉਹ ਵਧਦੇ ਨਹੀਂ ਹਨ", hindi: "वे बढ़ते नहीं हैं" },{ english: "They breathe", punjabi: "ਉਹ ਸਾਹ ਲੈਂਦੇ ਹਨ", hindi: "वे सांस लेते हैं" },{ english: "They are made of rock", punjabi: "ਉਹ ਚੱਟਾਨ ਦੇ ਬਣੇ ਹੁੰਦੇ ਹਨ", hindi: "वे चट्टान से बने हैं" },{ english: "They do not need food", punjabi: "ਉਹਨਾਂ ਨੂੰ ਭੋਜਨ ਦੀ ਲੋੜ ਨਹੀਂ ਹੁੰਦੀ", hindi: "उन्हें भोजन की आवश्यकता नहीं है" }], correctAnswerIndex: 1 },
            { question: { english: "What is photosynthesis?", punjabi: "ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਕੀ ਹੈ?", hindi: "प्रकाश संश्लेषण क्या है?" }, options: [{ english: "Animals breathing", punjabi: "ਜਾਨਵਰਾਂ ਦਾ ਸਾਹ ਲੈਣਾ", hindi: "जानवरों का सांस लेना" },{ english: "Plants making food", punjabi: "ਪੌਦਿਆਂ ਦਾ ਭੋਜਨ ਬਣਾਉਣਾ", hindi: "पौधों का भोजन बनाना" },{ english: "Water boiling", punjabi: "ਪਾਣੀ ਦਾ ਉਬਲਣਾ", hindi: "पानी का उबलना" },{ english: "Rocks forming", punjabi: "ਚੱਟਾਨਾਂ ਦਾ ਬਣਨਾ", hindi: "चट्टानों का बनना" }], correctAnswerIndex: 1 },
            { question: { english: "Which part of a plant absorbs water?", punjabi: "ਪੌਦੇ ਦਾ ਕਿਹੜਾ ਹਿੱਸਾ ਪਾਣੀ ਸੋਖ ਲੈਂਦਾ ਹੈ?", hindi: "पौधे का कौन सा भाग जल सोखता है?" }, options: [{ english: "Leaf", punjabi: "ਪੱਤਾ", hindi: "पत्ती" },{ english: "Flower", punjabi: "ਫੁੱਲ", hindi: "फूल" },{ english: "Stem", punjabi: "ਤਣਾ", hindi: "तना" },{ english: "Root", punjabi: "ਜੜ੍ਹ", hindi: "जड़" }], correctAnswerIndex: 3 },
            { question: { english: "An example of a herbivore is a:", punjabi: "ਸ਼ਾਕਾਹਾਰੀ ਦੀ ਇੱਕ ਉਦਾਹਰਣ ਹੈ:", hindi: "एक शाकाहारी का उदाहरण है:" }, options: [{ english: "Lion", punjabi: "ਸ਼ੇਰ", hindi: "शेर" },{ english: "Tiger", punjabi: "ਬਾਘ", hindi: "बाघ" },{ english: "Cow", punjabi: "ਗਾਂ", hindi: "गाय" },{ english: "Wolf", punjabi: "ਬਘਿਆੜ", hindi: "भेड़िया" }], correctAnswerIndex: 2 },
            { question: { english: "What gas do humans breathe out?", punjabi: "ਮਨੁੱਖ ਕਿਹੜੀ ਗੈਸ ਬਾਹਰ ਕੱਢਦੇ ਹਨ?", hindi: "मनुष्य कौन सी गैस छोड़ते हैं?" }, options: [{ english: "Oxygen", punjabi: "ਆਕਸੀਜਨ", hindi: "ऑक्सीजन" },{ english: "Nitrogen", punjabi: "ਨਾਈਟ੍ਰੋਜਨ", hindi: "नाइट्रोजन" },{ english: "Carbon Dioxide", punjabi: "ਕਾਰਬਨ ਡਾਈਆਕਸਾਈਡ", hindi: "कार्बन डाइऑक्साइड" },{ english: "Hydrogen", punjabi: "ਹਾਈਡ੍ਰੋਜਨ", hindi: "हाइड्रोजन" }], correctAnswerIndex: 2 },
            { question: { english: "Which of these is NOT a sense organ?", punjabi: "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਇੱਕ ਗਿਆਨ ਇੰਦਰੀ ਨਹੀਂ ਹੈ?", hindi: "इनमें से कौन एक ज्ञानेंद्रिय नहीं है?" }, options: [{english:"Eyes", punjabi: "ਅੱਖਾਂ", hindi: "आंखें"},{english:"Nose", punjabi: "ਨੱਕ", hindi: "नाक"},{english:"Bones", punjabi: "ਹੱਡੀਆਂ", hindi: "हड्डियाँ"},{english:"Tongue", punjabi: "ਜੀਭ", hindi: "जीभ"}], correctAnswerIndex: 2 },
            { question: { english: "The process of a seed growing into a plant is called:", punjabi: "ਇੱਕ ਬੀਜ ਤੋਂ ਪੌਦੇ ਦੇ ਵਧਣ ਦੀ ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ:", hindi: "एक बीज से पौधे के उगने की प्रक्रिया को कहते हैं:" }, options: [{english:"Germination", punjabi: "ਉਗਣਾ", hindi: "अंकुरण"},{english:"Evaporation", punjabi: "ਵਾਸ਼ਪੀਕਰਨ", hindi: "वाष्पीकरण"},{english:"Condensation", punjabi: "ਸੰਘਣਾਪਣ", hindi: "संघनन"},{english:"Pollination", punjabi: "ਪਰਾਗਣ", hindi: "परागण"}], correctAnswerIndex: 0 },
            { question: { english: "What is the main source of energy for life on Earth?", punjabi: "ਧਰਤੀ 'ਤੇ ਜੀਵਨ ਲਈ ਊਰਜਾ ਦਾ ਮੁੱਖ ਸਰੋਤ ਕੀ ਹੈ?", hindi: "पृथ्वी पर जीवन के लिए ऊर्जा का मुख्य स्रोत क्या है?" }, options: [{english:"The Moon", punjabi: "ਚੰਦ", hindi: "चंद्रमा"},{english:"The Sun", punjabi: "ਸੂਰਜ", hindi: "सूर्य"},{english:"The Stars", punjabi: "ਤਾਰੇ", hindi: "तारे"},{english:"The Wind", punjabi: "ਹਵਾ", hindi: "हवा"}], correctAnswerIndex: 1 },
            { question: { english: "Which of these is a non-living thing?", punjabi: "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਇੱਕ ਨਿਰਜੀਵ ਚੀਜ਼ ਹੈ?", hindi: "इनमें से कौन एक निर्जीव वस्तु है?" }, options: [{english:"Tree", punjabi: "ਰੁੱਖ", hindi: "पेड़"},{english:"Bird", punjabi: "ਪੰਛੀ", hindi: "पक्षी"},{english:"Chair", punjabi: "ਕੁਰਸੀ", hindi: "कुर्सी"},{english:"Fish", punjabi: "ਮੱਛੀ", hindi: "मछली"}], correctAnswerIndex: 2 },
            { question: { english: "How do fish breathe?", punjabi: "ਮੱਛੀਆਂ ਕਿਵੇਂ ਸਾਹ ਲੈਂਦੀਆਂ ਹਨ?", hindi: "मछलियाँ कैसे सांस लेती हैं?" }, options: [{english:"Through lungs", punjabi: "ਫੇਫੜਿਆਂ ਰਾਹੀਂ", hindi: "फेफड़ों के माध्यम से"},{english:"Through their skin", punjabi: "ਉਹਨਾਂ ਦੀ ਚਮੜੀ ਰਾਹੀਂ", hindi: "उनकी त्वचा के माध्यम से"},{english:"Through gills", punjabi: "ਗਲਫੜਿਆਂ ਰਾਹੀਂ", hindi: "गलफड़ों के माध्यम से"},{english:"They don't breathe", punjabi: "ਉਹ ਸਾਹ ਨਹੀਂ ਲੈਂਦੀਆਂ", hindi: "वे सांस नहीं लेती हैं"}], correctAnswerIndex: 2 }
        ]
    },
    "Maths": {
        "Knowing Our Numbers": [
            { question: { english: "What is the smallest whole number?", punjabi: "ਸਭ ਤੋਂ ਛੋਟੀ ਪੂਰਨ ਸੰਖਿਆ ਕਿਹੜੀ ਹੈ?", hindi: "सबसे छोटी पूर्ण संख्या कौन सी है?" }, options: [{english:"1", punjabi: "1", hindi: "1"},{english:"0", punjabi: "0", hindi: "0"},{english:"10", punjabi: "10", hindi: "10"},{english:"-1", punjabi: "-1", hindi: "-1"}], correctAnswerIndex: 1 },
            { question: { english: "The Roman numeral for 50 is:", punjabi: "50 ਲਈ ਰੋਮਨ ਅੰਕ ਹੈ:", hindi: "50 के लिए रोमन अंक है:" }, options: [{english:"C", punjabi: "C", hindi: "C"},{english:"D", punjabi: "D", hindi: "D"},{english:"L", punjabi: "L", hindi: "L"},{english:"X", punjabi: "X", hindi: "X"}], correctAnswerIndex: 2 },
            { question: { english: "What is the successor of 999?", punjabi: "999 ਦਾ ਅਗਲਾ ਅੰਕ ਕੀ ਹੈ?", hindi: "999 का परवर्ती क्या है?" }, options: [{english:"998", punjabi: "998", hindi: "998"},{english:"1000", punjabi: "1000", hindi: "1000"},{english:"9999", punjabi: "9999", hindi: "9999"},{english:"100", punjabi: "100", hindi: "100"}], correctAnswerIndex: 1 },
            { question: { english: "What is the predecessor of 10000?", punjabi: "10000 ਦਾ ਪਿਛਲਾ ਅੰਕ ਕੀ ਹੈ?", hindi: "10000 का पूर्ववर्ती क्या है?" }, options: [{english:"9999", punjabi: "9999", hindi: "9999"},{english:"10001", punjabi: "10001", hindi: "10001"},{english:"9990", punjabi: "9990", hindi: "9990"},{english:"9900", punjabi: "9900", hindi: "9900"}], correctAnswerIndex: 0 },
            { question: { english: "The greatest 5-digit number is:", punjabi: "5-ਅੰਕਾਂ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਸੰਖਿਆ ਹੈ:", hindi: "5 अंकों की सबसे बड़ी संख्या है:" }, options: [{english:"10000", punjabi: "10000", hindi: "10000"},{english:"99999", punjabi: "99999", hindi: "99999"},{english:"98765", punjabi: "98765", hindi: "98765"},{english:"55555", punjabi: "55555", hindi: "55555"}], correctAnswerIndex: 1 },
            { question: { english: "What is the Roman numeral for 100?", punjabi: "100 ਲਈ ਰੋਮਨ ਅੰਕ ਹੈ:", hindi: "100 के लिए रोमन अंक है:" }, options: [{english:"X", punjabi: "X", hindi: "X"},{english:"L", punjabi: "L", hindi: "L"},{english:"C", punjabi: "C", hindi: "C"},{english:"D", punjabi: "D", hindi: "D"}], correctAnswerIndex: 2 },
            { question: { english: "What is the place value of 5 in 15,432?", punjabi: "15,432 ਵਿੱਚ 5 ਦਾ ਸਥਾਨਕ ਮੁੱਲ ਕੀ ਹੈ?", hindi: "15,432 में 5 का स्थानीय मान क्या है?" }, options: [{english:"50", punjabi: "50", hindi: "50"},{english:"500", punjabi: "500", hindi: "500"},{english:"5000", punjabi: "5000", hindi: "5000"},{english:"5", punjabi: "5", hindi: "5"}], correctAnswerIndex: 2 },
            { question: { english: "How many zeros are in 1 crore?", punjabi: "1 ਕਰੋੜ ਵਿੱਚ ਕਿੰਨੇ ਸਿਫ਼ਰ ਹੁੰਦੇ ਹਨ?", hindi: "1 करोड़ में कितने शून्य होते हैं?" }, options: [{english:"5", punjabi: "5", hindi: "5"},{english:"6", punjabi: "6", hindi: "6"},{english:"7", punjabi: "7", hindi: "7"},{english:"8", punjabi: "8", hindi: "8"}], correctAnswerIndex: 2 },
            { question: { english: "What is 1 million equal to?", punjabi: "1 ਮਿਲੀਅਨ ਕਿਸਦੇ ਬਰਾਬਰ ਹੈ?", hindi: "1 मिलियन किसके बराबर है?" }, options: [{english:"100 thousand", punjabi: "100 ਹਜ਼ਾਰ", hindi: "100 हजार"},{english:"10 lakh", punjabi: "10 ਲੱਖ", hindi: "10 लाख"},{english:"1 crore", punjabi: "1 ਕਰੋੜ", hindi: "1 करोड़"},{english:"100 lakh", punjabi: "100 ਲੱਖ", hindi: "100 लाख"}], correctAnswerIndex: 1 },
            { question: { english: "What is 12 x 5?", punjabi: "12 x 5 ਕੀ ਹੈ?", hindi: "12 x 5 क्या है?" }, options: [{english:"60", punjabi: "60", hindi: "60"},{english:"50", punjabi: "50", hindi: "50"},{english:"72", punjabi: "72", hindi: "72"},{english:"52", punjabi: "52", hindi: "52"}], correctAnswerIndex: 0 }
        ]
    },
    "English": {
        "Nouns and Verbs": [
            { question: { english: "Identify the noun: 'The dog barks.'", punjabi: "", hindi: ""}, options: [{english:"The", punjabi: "The", hindi: "The"},{english:"dog", punjabi: "dog", hindi: "dog"},{english:"barks", punjabi: "barks", hindi: "barks"}], correctAnswerIndex: 1 },
            { question: { english: "Identify the verb: 'Birds fly high.'", punjabi: "", hindi: ""}, options: [{english:"Birds", punjabi: "Birds", hindi: "Birds"},{english:"fly", punjabi: "fly", hindi: "fly"},{english:"high", punjabi: "high", hindi: "high"}], correctAnswerIndex: 1 },
            { question: { english: "Which word is a noun?", punjabi: "", hindi: ""}, options: [{english:"run", punjabi: "run", hindi: "run"},{english:"happy", punjabi: "happy", hindi: "happy"},{english:"book", punjabi: "book", hindi: "book"},{english:"quickly", punjabi: "quickly", hindi: "quickly"}], correctAnswerIndex: 2 },
            { question: { english: "Which word is a verb?", punjabi: "", hindi: ""}, options: [{english:"student", punjabi: "student", hindi: "student"},{english:"eat", punjabi: "eat", hindi: "eat"},{english:"beautiful", punjabi: "beautiful", hindi: "beautiful"},{english:"school", punjabi: "school", hindi: "school"}], correctAnswerIndex: 1 },
            { question: { english: "A noun is a name of a...", punjabi: "", hindi: ""}, options: [{english:"Person, place, or thing", punjabi: "Person, place, or thing", hindi: "Person, place, or thing"},{english:"Action or state", punjabi: "Action or state", hindi: "Action or state"},{english:"Describes a noun", punjabi: "Describes a noun", hindi: "Describes a noun"}], correctAnswerIndex: 0 },
            { question: { english: "Find the noun: 'The girl threw the ball.'", punjabi: "", hindi: ""}, options: [{english:"The", punjabi: "The", hindi: "The"},{english:"threw", punjabi: "threw", hindi: "threw"},{english:"ball", punjabi: "ball", hindi: "ball"}], correctAnswerIndex: 2 },
            { question: { english: "Find the verb: 'The dog barks loudly.'", punjabi: "", hindi: ""}, options: [{english:"dog", punjabi: "dog", hindi: "dog"},{english:"barks", punjabi: "barks", hindi: "barks"},{english:"loudly", punjabi: "loudly", hindi: "loudly"}], correctAnswerIndex: 1 },
            { question: { english: "In 'She is a good singer', 'singer' is a...", punjabi: "", hindi: ""}, options: [{english:"Verb", punjabi: "Verb", hindi: "Verb"},{english:"Adjective", punjabi: "Adjective", hindi: "Adjective"},{english:"Noun", punjabi: "Noun", hindi: "Noun"}], correctAnswerIndex: 2 },
            { question: { english: "In 'He reads a story', 'reads' is a...", punjabi: "", hindi: ""}, options: [{english:"Noun", punjabi: "Noun", hindi: "Noun"},{english:"Verb", punjabi: "Verb", hindi: "Verb"},{english:"Pronoun", punjabi: "Pronoun", hindi: "Pronoun"}], correctAnswerIndex: 1 },
            { question: { english: "A verb often describes an...", punjabi: "", hindi: ""}, options: [{english:"Object", punjabi: "Object", hindi: "Object"},{english:"Person", punjabi: "Person", hindi: "Person"},{english:"Action", punjabi: "Action", hindi: "Action"}], correctAnswerIndex: 2 }
        ]
    },
    "Social Studies": {
        "Our Community": [
            { question: { english: "Who teaches students in a school?"}, options: [{english:"Doctor", punjabi: "ਡਾਕਟਰ", hindi: "डॉक्टर"},{english:"Teacher", punjabi: "ਅਧਿਆਪਕ", hindi: "शिक्षक"},{english:"Farmer", punjabi: "ਕਿਸਾਨ", hindi: "किसान"},{english:"Plumber", punjabi: "ਪਲੰਬਰ", hindi: "नलसाज"}], correctAnswerIndex: 1 },
            { question: { english: "Who puts out fires?"}, options: [{english:"Postman", punjabi: "ਡਾਕੀਆ", hindi: "डाकिया"},{english:"Firefighter", punjabi: "ਫਾਇਰਫਾਈਟਰ", hindi: "दमकलकर्मी"},{english:"Chef", punjabi: "ਸ਼ੈੱਫ", hindi: "बावर्ची"},{english:"Pilot", punjabi: "ਪਾਇਲਟ", hindi: "विमान चालक"}], correctAnswerIndex: 1 },
            { question: { english: "Where do we go when we are sick?"}, options: [{english:"School", punjabi: "ਸਕੂਲ", hindi: "विद्यालय"},{english:"Park", punjabi: "ਪਾਰਕ", hindi: "पार्क"},{english:"Hospital", punjabi: "ਹਸਪਤਾਲ", hindi: "अस्पताल"},{english:"Library", punjabi: "ਲਾਇਬ੍ਰੇਰੀ", hindi: "पुस्तकालय"}], correctAnswerIndex: 2 },
            { question: { english: "Who catches thieves?"}, options: [{english:"Police officer", punjabi: "ਪੁਲਿਸ ਅਧਿਕਾਰੀ", hindi: "पुलिस अधिकारी"},{english:"Lawyer", punjabi: "ਵਕੀਲ", hindi: "वकील"},{english:"Teacher", punjabi: "ਅਧਿਆਪਕ", hindi: "शिक्षक"},{english:"Doctor", punjabi: "ਡਾਕਟਰ", hindi: "डॉक्टर"}], correctAnswerIndex: 0 },
            { question: { english: "Who grows crops for us to eat?"}, options: [{english:"Farmer", punjabi: "ਕਿਸਾਨ", hindi: "किसान"},{english:"Tailor", punjabi: "ਦਰਜ਼ੀ", hindi: "दर्जी"},{english:"Barber", punjabi: "ਨਾਈ", hindi: "नाई"},{english:"Pilot", punjabi: "ਪਾਇਲਟ", hindi: "विमान चालक"}], correctAnswerIndex: 0 },
            { question: { english: "A postman delivers our..."}, options: [{english:"Food", punjabi: "ਭੋਜਨ", hindi: "भोजन"},{english:"Letters", punjabi: "ਚਿੱਠੀਆਂ", hindi: "पत्र"},{english:"Medicine", punjabi: "ਦਵਾਈ", hindi: "दवा"},{english:"Clothes", punjabi: "ਕੱਪੜੇ", hindi: "कपड़े"}], correctAnswerIndex: 1 },
            { question: { english: "A place where we deposit money is a..."}, options: [{english:"Library", punjabi: "ਲਾਇਬ੍ਰੇਰੀ", hindi: "पुस्तकालय"},{english:"Bank", punjabi: "ਬੈਂਕ", hindi: "बैंक"},{english:"Museum", punjabi: "ਅਜਾਇਬ ਘਰ", hindi: "संग्रहालय"},{english:"School", punjabi: "ਸਕੂਲ", hindi: "विद्यालय"}], correctAnswerIndex: 1 },
            { question: { english: "Who flies an airplane?"}, options: [{english:"Driver", punjabi: "ਡਰਾਈਵਰ", hindi: "चालक"},{english:"Sailor", punjabi: "ਮਲਾਹ", hindi: "नाविक"},{english:"Pilot", punjabi: "ਪਾਇਲਟ", hindi: "विमान चालक"},{english:"Chef", punjabi: "ਸ਼ੈੱਫ", hindi: "बावर्ची"}], correctAnswerIndex: 2 },
            { question: { english: "Who treats sick animals?"}, options: [{english:"Surgeon", punjabi: "ਸਰਜਨ", hindi: "सर्जन"},{english:"Dentist", punjabi: "ਦੰਦਾਂ ਦਾ ਡਾਕਟਰ", hindi: "दंत चिकित्सक"},{english:"Veterinarian", punjabi: "ਪਸ਼ੂਆਂ ਦਾ ਡਾਕਟਰ", hindi: "पशु चिकित्सक"},{english:"Mechanic", punjabi: "ਮਕੈਨਿਕ", hindi: "मैकेनिक"}], correctAnswerIndex: 2 },
            { question: { english: "A group of people living together is a..."}, options: [{english:"Crowd", punjabi: "ਭੀੜ", hindi: "भीड़"},{english:"Family", punjabi: "ਪਰਿਵਾਰ", hindi: "परिवार"},{english:"Community", punjabi: "ਭਾਈਚਾਰਾ", hindi: "समुदाय"},{english:"Pack", punjabi: "ਝੁੰਡ", hindi: "झुंड"}], correctAnswerIndex: 2 },
            { question: { english: "Who helps maintain law and order in a city?", punjabi: "ਸ਼ਹਿਰ ਵਿੱਚ ਕਾਨੂੰਨ ਵਿਵਸਥਾ ਬਣਾਈ ਰੱਖਣ ਵਿੱਚ ਕੌਣ ਮਦਦ ਕਰਦਾ ਹੈ?", hindi: "शहर में कानून व्यवस्था बनाए रखने में कौन मदद करता है?" }, options: [{english:"Plumber", punjabi: "ਪਲੰਬਰ", hindi: "नलसाज"},{english:"Police", punjabi: "ਪੁਲਿਸ", hindi: "पुलिस"},{english:"Librarian", punjabi: "ਲਾਇਬ੍ਰੇਰੀਅਨ", hindi: "पुस्तकालयाध्यक्ष"},{english:"Electrician", punjabi: "ਇਲੈਕਟ੍ਰੀਸ਼ੀਅਨ", hindi: "बिजली मिस्त्री"}], correctAnswerIndex: 1 },
            { question: { english: "A hospital is a place for...", punjabi: "ਹਸਪਤਾਲ ਇੱਕ ਜਗ੍ਹਾ ਹੈ...", hindi: "अस्पताल एक जगह है..." }, options: [{english:"Studying", punjabi: "ਪੜ੍ਹਾਈ ਲਈ", hindi: "पढ़ाई के लिए"},{english:"Playing", punjabi: "ਖੇਡਣ ਲਈ", hindi: "खेलने के लिए"},{english:"Treating sick people", punjabi: "ਬਿਮਾਰ ਲੋਕਾਂ ਦੇ ਇਲਾਜ ਲਈ", hindi: "बीमार लोगों के इलाज के लिए"},{english:"Watching movies", punjabi: "ਫਿਲਮਾਂ ਦੇਖਣ ਲਈ", hindi: "फिल्में देखने के लिए"}], correctAnswerIndex: 2 },
            { question: { english: "Who delivers mail and parcels to our homes?", punjabi: "ਸਾਡੇ ਘਰਾਂ ਵਿੱਚ ਡਾਕ ਅਤੇ ਪਾਰਸਲ ਕੌਣ ਪਹੁੰਚਾਉਂਦਾ ਹੈ?", hindi: "हमारे घरों में डाक और पार्सल कौन पहुंचाता है?" }, options: [{english:"Teacher", punjabi: "ਅਧਿਆਪਕ", hindi: "शिक्षक"},{english:"Cobbler", punjabi: "ਮੋਚੀ", hindi: "मोची"},{english:"Postman", punjabi: "ਡਾਕੀਆ", hindi: "डाकिया"},{english:"Doctor", punjabi: "ਡਾਕਟਰ", hindi: "डॉक्टर"}], correctAnswerIndex: 2 },
            { question: { english: "What is the main role of a firefighter?", punjabi: "ਫਾਇਰਫਾਈਟਰ ਦੀ ਮੁੱਖ ਭੂਮਿਕਾ ਕੀ ਹੈ?", hindi: "एक फायर फाइटर की मुख्य भूमिका क्या है?" }, options: [{english:"To grow crops", punjabi: "ਫਸਲਾਂ ਉਗਾਉਣਾ", hindi: "फसल उगाना"},{english:"To put out fires", punjabi: "ਅੱਗ ਬੁਝਾਉਣਾ", hindi: "आग बुझाना"},{english:"To build houses", punjabi: "ਘਰ ਬਣਾਉਣਾ", hindi: "घर बनाना"},{english:"To bake bread", punjabi: "ਰੋਟੀ ਪਕਾਉਣਾ", hindi: "रोटी पकाना"}], correctAnswerIndex: 1 },
            { question: { english: "Where can you borrow books to read?", punjabi: "ਤੁਸੀਂ ਪੜ੍ਹਨ ਲਈ ਕਿਤਾਬਾਂ ਕਿੱਥੋਂ ਉਧਾਰ ਲੈ ਸਕਦੇ ਹੋ?", hindi: "आप पढ़ने के लिए किताबें कहाँ से उधार ले सकते हैं?" }, options: [{english:"Bank", punjabi: "ਬੈਂਕ", hindi: "बैंक"},{english:"Library", punjabi: "ਲਾਇਬ੍ਰੇਰੀ", hindi: "पुस्तकालय"},{english:"Police Station", punjabi: "ਪੁਲਿਸ ਸਟੇਸ਼ਨ", hindi: "पुलिस स्टेशन"},{english:"Bakery", punjabi: "ਬੇਕਰੀ", hindi: "बेकरी"}], correctAnswerIndex: 1 }
        ]
    },
    "History": {
        "Ancient Civilizations": [
            { question: { english: "The Great Pyramids are in which country?", punjabi: "ਮਹਾਨ ਪਿਰਾਮਿਡ ਕਿਸ ਦੇਸ਼ ਵਿੱਚ ਹਨ?", hindi: "गीज़ा के महान पिरामिड किस देश में हैं?"}, options: [{english:"India", punjabi: "ਭਾਰਤ", hindi: "भारत"},{english:"China", punjabi: "ਚੀਨ", hindi: "चीन"},{english:"Egypt", punjabi: "ਮਿਸਰ", hindi: "मिस्र"},{english:"Greece", punjabi: "ਯੂਨਾਨ", hindi: "यूनान"}], correctAnswerIndex: 2 },
            { question: { english: "Which civilization grew along the Nile River?", punjabi: "ਨੀਲ ਨਦੀ ਦੇ ਕੰਢੇ ਕਿਹੜੀ ਸਭਿਅਤਾ ਵਿਕਸਤ ਹੋਈ?", hindi: "नील नदी के किनारे कौन सी सभ्यता विकसित हुई?"}, options: [{english:"Mesopotamian", punjabi: "ਮੇਸੋਪੋਟੇਮੀਅਨ", hindi: "मेसोपोटामिया"},{english:"Indus Valley", punjabi: "ਸਿੰਧੂ ਘਾਟੀ", hindi: "सिंधु घाटी"},{english:"Chinese", punjabi: "ਚੀਨੀ", hindi: "चीनी"},{english:"Egyptian", punjabi: "ਮਿਸਰੀ", hindi: "मिस्र"}], correctAnswerIndex: 3 },
            { question: { english: "The ancient city of Mohenjo-Daro is part of which civilization?", punjabi: "ਪ੍ਰਾਚੀਨ ਸ਼ਹਿਰ ਮੋਹਨਜੋ-ਦੜੋ ਕਿਸ ਸਭਿਅਤਾ ਦਾ ਹਿੱਸਾ ਹੈ?", hindi: "प्राचीन शहर मोहनजो-दड़ो किस सभ्यता का हिस्सा है?"}, options: [{english:"Indus Valley", punjabi: "ਸਿੰਧੂ ਘਾਟੀ", hindi: "सिंधु घाटी"},{english:"Roman", punjabi: "ਰੋਮਨ", hindi: "रोमन"},{english:"Greek", punjabi: "ਯੂਨਾਨੀ", hindi: "यूनानी"},{english:"Mayan", punjabi: "ਮਾਇਆ", hindi: "माया"}], correctAnswerIndex: 0 },
            { question: { english: "Who are credited with inventing paper?", punjabi: "ਕਾਗਜ਼ ਦੀ ਖੋਜ ਦਾ ਸਿਹਰਾ ਕਿਸਨੂੰ ਜਾਂਦਾ ਹੈ?", hindi: "कागज का आविष्कार करने का श्रेय किसे दिया जाता है?"}, options: [{english:"The Romans", punjabi: "ਰੋਮਨ", hindi: "रोमन"},{english:"The Greeks", punjabi: "ਯੂਨਾਨੀ", hindi: "यूनानी"},{english:"The Chinese", punjabi: "ਚੀਨੀ", hindi: "चीनी"},{english:"The Egyptians", punjabi: "ਮਿਸਰੀ", hindi: "मिस्र वासी"}], correctAnswerIndex: 2 },
            { question: { english: "The language of the ancient Romans was:", punjabi: "ਪ੍ਰਾਚੀਨ ਰੋਮਨਾਂ ਦੀ ਭਾਸ਼ਾ ਸੀ:", hindi: "प्राचीन रोमनों की भाषा थी:"}, options: [{english:"Greek", punjabi: "ਯੂਨਾਨੀ", hindi: "यूनानी"},{english:"Latin", punjabi: "ਲਾਤੀਨੀ", hindi: "लैटिन"},{english:"Sanskrit", punjabi: "ਸੰਸਕ੍ਰਿਤ", hindi: "संस्कृत"},{english:"Mandarin", punjabi: "ਮੈਂਡਰਿਨ", hindi: "मंदारिन"}], correctAnswerIndex: 1 },
            { question: { english: "The Colosseum is a famous landmark in which city?", punjabi: "ਕੋਲੋਜ਼ੀਅਮ ਕਿਸ ਸ਼ਹਿਰ ਦਾ ਇੱਕ ਮਸ਼ਹੂਰ ਸਥਾਨ ਹੈ?", hindi: "कोलोसियम किस शहर में एक प्रसिद्ध दर्शनीय स्थल है?"}, options: [{english:"Athens", punjabi: "ਏਥਨਜ਼", hindi: "एथेंस"},{english:"Rome", punjabi: "ਰੋਮ", hindi: "रोम"},{english:"Cairo", punjabi: "ਕਾਇਰੋ", hindi: "काहिरा"},{english:"Alexandria", punjabi: "ਸਿਕੰਦਰੀਆ", hindi: "अलेक्जेंड्रिया"}], correctAnswerIndex: 1 },
            { question: { english: "Cuneiform writing was developed by the:", punjabi: "ਕਿਊਨੀਫਾਰਮ ਲਿਪੀ ਕਿਸ ਦੁਆਰਾ ਵਿਕਸਤ ਕੀਤੀ ਗਈ ਸੀ:", hindi: "कीलाक्षर लिपि का विकास किसके द्वारा किया गया था:"}, options: [{english:"Mesopotamians", punjabi: "ਮੇਸੋਪੋਟੇਮੀਅਨ", hindi: "मेसोपोटामिया वासी"},{english:"Egyptians", punjabi: "ਮਿਸਰੀ", hindi: "मिस्र वासी"},{english:"Harappans", punjabi: "ਹੜੱਪਾ ਵਾਸੀ", hindi: "हड़प्पा वासी"},{english:"Greeks", punjabi: "ਯੂਨਾਨੀ", hindi: "यूनानी"}], correctAnswerIndex: 0 },
            { question: { english: "The Olympic Games originated in ancient:", punjabi: "ਓਲੰਪਿਕ ਖੇਡਾਂ ਦੀ ਸ਼ੁਰੂਆਤ ਪ੍ਰਾਚੀਨ ਕਾਲ ਵਿੱਚ ਹੋਈ ਸੀ:", hindi: "ओलंपिक खेलों की उत्पत्ति प्राचीन काल में हुई थी:"}, options: [{english:"Rome", punjabi: "ਰੋਮ", hindi: "रोम"},{english:"Egypt", punjabi: "ਮਿਸਰ", hindi: "मिस्र"},{english:"Greece", punjabi: "ਯੂਨਾਨ", hindi: "यूनान"},{english:"China", punjabi: "ਚੀਨ", hindi: "चीन"}], correctAnswerIndex: 2 },
            { question: { english: "What were the rulers of ancient Egypt called?", punjabi: "ਪ੍ਰਾਚੀਨ ਮਿਸਰ ਦੇ ਸ਼ਾਸਕਾਂ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਸੀ?", hindi: "प्राचीन मिस्र के शासकों को क्या कहा जाता था?"}, options: [{english:"Kings", punjabi: "ਰਾਜੇ", hindi: "राजा"},{english:"Emperors", punjabi: "ਸਮਰਾਟ", hindi: "सम्राट"},{english:"Pharaohs", punjabi: "ਫੈਰੋ", hindi: "फिरौन"},{english:"Sultans", punjabi: "ਸੁਲਤਾਨ", hindi: "सुल्तान"}], correctAnswerIndex: 2 },
            { question: { english: "The Indus Valley Civilization was located in modern-day:", punjabi: "ਸਿੰਧੂ ਘਾਟੀ ਸਭਿਅਤਾ ਆਧੁਨਿਕ ਸਮੇਂ ਵਿੱਚ ਸਥਿਤ ਸੀ:", hindi: "सिंधु घाटी सभ्यता आधुनिक काल में स्थित थी:"}, options: [{english:"Iraq and Iran", punjabi: "ਇਰਾਕ ਅਤੇ ਈਰਾਨ", hindi: "इराक और ईरान"},{english:"Pakistan and India", punjabi: "ਪਾਕਿਸਤਾਨ ਅਤੇ ਭਾਰਤ", hindi: "पाकिस्तान और भारत"},{english:"Egypt and Sudan", punjabi: "ਮਿਸਰ ਅਤੇ ਸੂਡਾਨ", hindi: "मिस्र और सूडान"},{english:"Greece and Turkey", punjabi: "ਯੂਨਾਨ ਅਤੇ ਤੁਰਕੀ", hindi: "यूनान और तुर्की"}], correctAnswerIndex: 1 },
            { question: { english: "What is the name of the ancient writing system from Egypt?", punjabi: "ਮਿਸਰ ਦੀ ਪ੍ਰਾਚੀਨ ਲਿਖਣ ਪ੍ਰਣਾਲੀ ਦਾ ਨਾਮ ਕੀ ਹੈ?", hindi: "मिस्र की प्राचीन लेखन प्रणाली का नाम क्या है?" }, options: [{english:"Cuneiform", punjabi: "ਕਿਊਨੀਫਾਰਮ", hindi: "कीलाक्षर"},{english:"Sanskrit", punjabi: "ਸੰਸਕ੍ਰਿਤ", hindi: "संस्कृत"},{english:"Hieroglyphics", punjabi: "ਹੀਰੋਗਲਿਫਿਕਸ", hindi: "हाइरोग्लिफ़िक्स"},{english:"Latin", punjabi: "ਲਾਤੀਨੀ", hindi: "लैटिन"}], correctAnswerIndex: 2 },
            { question: { english: "The ancient Romans were known for building...", punjabi: "ਪ੍ਰਾਚੀਨ ਰੋਮਨ ਕਿਸ ਚੀਜ਼ ਦੇ ਨਿਰਮਾਣ ਲਈ ਜਾਣੇ ਜਾਂਦੇ ਸਨ...", hindi: "प्राचीन रोमन किसके निर्माण के लिए जाने जाते थे..." }, options: [{english:"Pyramids", punjabi: "ਪਿਰਾਮਿਡ", hindi: "पिरामिड"},{english:"Aqueducts and Roads", punjabi: "ਜਲ-ਸੇਤੂ ਅਤੇ ਸੜਕਾਂ", hindi: "जलसेतु और सड़कें"},{english:"The Great Wall", punjabi: "ਮਹਾਨ ਦੀਵਾਰ", hindi: "महान दीवार"},{english:"Temples with pillars", punjabi: "ਥੰਮ੍ਹਾਂ ਵਾਲੇ ਮੰਦਰ", hindi: "स्तंभों वाले मंदिर"}], correctAnswerIndex: 1 },
            { question: { english: "Which civilization developed on the banks of the Tigris and Euphrates rivers?", punjabi: "ਟਾਈਗ੍ਰਿਸ ਅਤੇ ਯੂਫ੍ਰੇਟਸ ਨਦੀਆਂ ਦੇ ਕੰਢੇ ਕਿਹੜੀ ਸਭਿਅਤਾ ਵਿਕਸਤ ਹੋਈ?", hindi: "टाइग्रिस और यूफ्रेट्स नदियों के किनारे कौन सी सभ्यता विकसित हुई?" }, options: [{english:"Egyptian", punjabi: "ਮਿਸਰੀ", hindi: "मिस्र"},{english:"Chinese", punjabi: "ਚੀਨੀ", hindi: "चीनी"},{english:"Indus Valley", punjabi: "ਸਿੰਧੂ ਘਾਟੀ", hindi: "सिंधु घाटी"},{english:"Mesopotamian", punjabi: "ਮੇਸੋਪੋਟੇਮੀਅਨ", hindi: "मेसोपोटामिया"}], correctAnswerIndex: 3 },
            { question: { english: "Democracy was first practiced in which ancient city-state?", punjabi: "ਲੋਕਤੰਤਰ ਦਾ ਅਭਿਆਸ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਕਿਸ ਪ੍ਰਾਚੀਨ ਸ਼ਹਿਰ-ਰਾਜ ਵਿੱਚ ਕੀਤਾ ਗਿਆ ਸੀ?", hindi: "लोकतंत्र का अभ्यास सबसे पहले किस प्राचीन नगर-राज्य में किया गया था?" }, options: [{english:"Sparta", punjabi: "ਸਪਾਰਟਾ", hindi: "स्पार्टा"},{english:"Rome", punjabi: "ਰੋਮ", hindi: "रोम"},{english:"Athens", punjabi: "ਏਥਨਜ਼", hindi: "एथेंस"},{english:"Babylon", punjabi: "ਬੇਬੀਲੋਨ", hindi: "बेबीलोन"}], correctAnswerIndex: 2 },
            { question: { english: "Which material was essential for tool-making in the Iron Age?", punjabi: "ਲੋਹ ਯੁੱਗ ਵਿੱਚ ਔਜ਼ਾਰ ਬਣਾਉਣ ਲਈ ਕਿਹੜੀ ਸਮੱਗਰੀ ਜ਼ਰੂਰੀ ਸੀ?", hindi: "लौह युग में उपकरण बनाने के लिए कौन सी सामग्री आवश्यक थी?" }, options: [{english:"Bronze", punjabi: "ਕਾਂਸੀ", hindi: "कांस्य"},{english:"Stone", punjabi: "ਪੱਥਰ", hindi: "पत्थर"},{english:"Iron", punjabi: "ਲੋਹਾ", hindi: "लोहा"},{english:"Copper", punjabi: "ਤਾਂਬਾ", hindi: "तांबा"}], correctAnswerIndex: 2 }
        ]
    }
};
const inbuiltContent = {
    "Science": {
        "The Living World": {
            notes: {
                title: "Key Concepts: The Living World",
                content: [
                    "<strong>Characteristics of Living Things:</strong> They grow, respire, excrete, respond to stimuli, reproduce, and move.",
                    "<strong>Nutrition:</strong> The process of taking in food and using it for energy, growth, and repair. Autotrophs make their own food (e.g., plants), while heterotrophs get food from other organisms.",
                    "<strong>Respiration:</strong> The process that releases energy from food. It is not the same as breathing.",
                    "<strong>Ecosystem:</strong> A community of living organisms interacting with their non-living environment."
                ]
            },
            assignment: {
                title: "Worksheet: The Living World",
                questions: [
                    "List five characteristics of living things.",
                    "What is the difference between an autotroph and a heterotroph? Give one example of each.",
                    "Why is the sun considered the ultimate source of energy for most ecosystems on Earth?",
                    "Define 'respiration'."
                ]
            },
            assignmentSolution: {
                title: "Solutions: The Living World Worksheet",
                solutions: [
                    "<strong>Five characteristics of living things are:</strong> Growth, Respiration, Excretion, Reproduction, and Movement.",
                    "<strong>Autotrophs</strong> produce their own food (e.g., plants through photosynthesis). <strong>Heterotrophs</strong> consume other organisms for food (e.g., a lion).",
                    "The sun is the ultimate source of energy because plants (producers) use sunlight to make food, and energy is then transferred through the food chain to all other organisms.",
                    "<strong>Respiration</strong> is the chemical process in cells that breaks down nutrient molecules to release energy for metabolism."
                ]
            }
        }
    },
    "Maths": {
        "Knowing Our Numbers": {
            notes: {
                title: "Key Concepts: Knowing Our Numbers",
                content: [
                    "<strong>Place Value:</strong> The value of a digit based on its position in a number (e.g., in 542, the place value of 4 is 40).",
                    "<strong>Estimation:</strong> Rounding numbers to the nearest ten, hundred, or thousand to make calculations easier.",
                    "<strong>Roman Numerals:</strong> A system of numerical notation based on letters of the ancient Roman alphabet (I=1, V=5, X=10, L=50, C=100)."
                ]
            },
            assignment: {
                title: "Worksheet: Knowing Our Numbers",
                questions: [
                    "What is the place value of 7 in the number 87,450?",
                    "Estimate the product of 48 and 52 by rounding to the nearest ten.",
                    "Write the number 94 in Roman numerals."
                ]
            },
            assignmentSolution: {
                title: "Solutions: Knowing Our Numbers Worksheet",
                solutions: [
                    "The place value of 7 in 87,450 is <strong>7,000 (seven thousand)</strong>.",
                    "Rounding 48 to the nearest ten gives 50. Rounding 52 gives 50. The estimated product is 50 x 50 = <strong>2500</strong>.",
                    "94 in Roman numerals is <strong>XCIV</strong> (100 - 10) + (5 - 1)."
                ]
            }
        }
    }
};

const savedContent = JSON.parse(localStorage.getItem('naviKalamContent')) || {};

let videoLessons = savedContent.videoLessons || {};
let assignments = savedContent.assignments || {};
let chapterNotes = savedContent.chapterNotes || {};
let students = [ { id: 1, name: "Rohan", avatar: "avatar2", progress: { "Science": 90, "Maths": 75, "English": 80, "Social Studies": 60, "History": 85 } }, { id: 2, name: "Priya", avatar: "avatar3", progress: { "Science": 40, "Maths": 55, "English": 65, "Social Studies": 30, "History": 45 } }, { id: 3, name: "Amit", avatar: "avatar4", progress: { "Science": 100, "Maths": 95, "English": 90, "Social Studies": 100, "History": 92 } }, { id: 4, name: "Sneha", avatar: "avatar1", progress: { "Science": 20, "Maths": 15, "English": 30, "Social Studies": 10, "History": 25 } } ];
let attendanceRecords = {};

let timetableData = { "09:00 AM": ["Maths", "Science", "English", "Maths", "History", "Activity"], "10:00 AM": ["Science", "English", "Maths", "History", "Social Studies", "Activity"], "11:00 AM": ["English", "History", "Break", "Science", "Maths", "Activity"], "12:00 PM": ["History", "Social Studies", "Science", "English", "Science", "Lunch"], "01:00 PM": ["Social Studies", "Maths", "English", "Social Studies", "English", "Lunch"], };
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// MODIFIED: Load test history from localStorage on startup
let studentTestHistory = JSON.parse(localStorage.getItem('naviKalamTestHistory')) || {};

export { translations, subjects, chapters, students, attendanceRecords, timetableData, daysOfWeek, questionBank, assignments, syllabusData, lessonContent, studentTestHistory, chapterNotes,inbuiltContent, videoLessons };