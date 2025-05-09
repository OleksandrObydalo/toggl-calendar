import { createApp } from 'vue';
import { config } from './config.js';

const app = createApp({
    data() {
        return {
            sidebarVisible: true,
            currentDate: new Date(),
            selectedDate: new Date(),
            selectedActivity: null,
            selectedProject: null,
            showModal: false,
            timerRunning: false,
            timerStart: null,
            elapsedTime: 0,
            timerInterval: null,
            currentActivity: {
                description: '',
                projectId: '',
                startTime: null,
                endTime: null,
                duration: 0
            },
            editTimeModal: false,
            activityToEdit: null,
            editDate: '',
            editStartTime: '',
            editEndTime: '',
            isDarkTheme: false,
            projectModal: false,
            editingProject: null,
            projectForm: {
                name: '',
                color: '#4A90E2'
            },
            availableColors: config.defaultProjectColors,
            activities: [
                {
                    id: 1,
                    description: 'Client Meeting',
                    projectId: 1,
                    date: new Date().toISOString().split('T')[0],
                    startTime: new Date(new Date().setHours(9, 0, 0, 0)),
                    endTime: new Date(new Date().setHours(10, 0, 0, 0)),
                    duration: 3600000 // 1 hour in milliseconds
                },
                {
                    id: 2,
                    description: 'Website Development',
                    projectId: 2,
                    date: new Date().toISOString().split('T')[0],
                    startTime: new Date(new Date().setHours(13, 0, 0, 0)),
                    endTime: new Date(new Date().setHours(15, 30, 0, 0)),
                    duration: 9000000 // 2.5 hours in milliseconds
                },
                {
                    id: 3,
                    description: 'Research',
                    projectId: 3,
                    date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0],
                    startTime: new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(10, 0, 0, 0)),
                    endTime: new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(12, 0, 0, 0)),
                    duration: 7200000 // 2 hours in milliseconds
                }
            ],
            projects: [
                { id: 1, name: 'Client Project A', color: '#4A90E2' },
                { id: 2, name: 'Website Redesign', color: '#32CD32' },
                { id: 3, name: 'Marketing Campaign', color: '#E74C3C' },
                { id: 4, name: 'Internal Tools', color: '#9B59B6' }
            ],
            hours: Array.from(
                { length: config.workingHours.end - config.workingHours.start + 1 },  
                (_, i) => i + config.workingHours.start
            ),
            currentLanguage: 'fr',
        };
    },
    computed: {
        currentWeek() {
            const week = [];
            const date = new Date(this.currentDate);
            
            // Get to the start of the week (Sunday)
            const day = date.getDay();
            date.setDate(date.getDate() - day);
            
            // Add days for the week (now showing 7 days)
            for(let i = 0; i < config.daysToShow; i++) {
                week.push(new Date(date));
                date.setDate(date.getDate() + 1);
            }
            return week;
        },
        miniCalendarDays() {
            const days = [];
            const currentMonth = this.currentDate.getMonth();
            const currentYear = this.currentDate.getFullYear();
            
            // Get first day of the month
            const firstDay = new Date(currentYear, currentMonth, 1);
            // Get last day of the month
            const lastDay = new Date(currentYear, currentMonth + 1, 0);
            
            // Get days from previous month to fill first week
            let start = new Date(firstDay);
            start.setDate(start.getDate() - start.getDay()); // Go back to Sunday
            
            // Generate 6 weeks of days
            for (let week = 0; week < 6; week++) {
                for (let day = 0; day < 7; day++) {
                    const date = new Date(start);
                    days.push({
                        date: date,
                        isCurrentMonth: date.getMonth() === currentMonth
                    });
                    start.setDate(start.getDate() + 1);
                }
            }
            
            return days;
        },
        currentWeekDisplay() {
            const start = this.currentWeek[0];
            const end = this.currentWeek[this.currentWeek.length - 1];
            return `${start.toLocaleDateString('fr-FR')} - ${end.toLocaleDateString('fr-FR')}`;
        },
        currentMonthDisplay() {
            const monthNames = config.translations[this.currentLanguage].monthNames;
            return `${monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
        },
        todayActivities() {
            const today = new Date().toISOString().split('T')[0];
            return this.activities
                .filter(activity => activity.date === today)
                .sort((a, b) => b.startTime - a.startTime);
        },
        hasActivities() {
            return (date) => {
                if (!date || !date.date) return false;
                const dateString = date.date.toISOString().split('T')[0];
                return this.activities.some(act => act.date === dateString);
            };
        },
        taskSuggestions() {
            const uniqueTasks = [...new Set(this.activities.map(a => a.description))];
            return uniqueTasks.filter(task => 
                task.toLowerCase().includes(this.currentActivity.description.toLowerCase())
            );
        },
        taskTimeSummary() {
            const summary = {};
            this.activities.forEach(activity => {
                if (!summary[activity.description]) {
                    summary[activity.description] = 0;
                }
                summary[activity.description] += activity.duration;
            });
            
            return Object.entries(summary).map(([task, duration]) => ({
                description: task,
                totalDuration: duration
            })).sort((a, b) => b.totalDuration - a.totalDuration);
        },
        weekdays() {
            return config.translations[this.currentLanguage].weekdays;
        },
    },
    methods: {
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible;
        },
        previousMonth() {
            const date = new Date(this.currentDate);
            date.setMonth(date.getMonth() - 1);
            this.currentDate = date;
        },
        nextMonth() {
            const date = new Date(this.currentDate);
            date.setMonth(date.getMonth() + 1);
            this.currentDate = date;
        },
        previousWeek() {
            const date = new Date(this.currentDate);
            date.setDate(date.getDate() - 7);
            this.currentDate = date;
        },
        nextWeek() {
            const date = new Date(this.currentDate);
            date.setDate(date.getDate() + 7);
            this.currentDate = date;
        },
        selectDate(dateObj) {
            if (dateObj && dateObj.date) {
                const newDate = new Date(dateObj.date);
                // Preserve the time from the current selection
                newDate.setHours(this.selectedDate.getHours());
                newDate.setMinutes(this.selectedDate.getMinutes());
                this.selectedDate = newDate;
                this.currentDate = new Date(newDate);
            }
        },
        isToday(dateObj) {
            if (!dateObj || !dateObj.date) return false;
            const today = new Date();
            return dateObj.date.toDateString() === today.toDateString();
        },
        isSelected(dateObj) {
            if (!dateObj || !dateObj.date) return false;
            return dateObj.date.toDateString() === this.selectedDate.toDateString();
        },
        formatDay(date) {
            // Use localized weekday based on current language
            const targetDate = date.date || date;
            const options = { 
                weekday: 'short', 
                day: 'numeric' 
            };
            
            // Map language codes to locale strings
            const localeMap = {
                'en': 'en-US',
                'uk': 'uk-UA',
                'fr': 'fr-FR'
            };
            
            return targetDate.toLocaleDateString(localeMap[this.currentLanguage] || 'en-US', options);
        },
        getActivitiesForDay(date) {
            const targetDate = date.date || date;
            const targetDateStr = targetDate.toISOString().split('T')[0];
            return this.activities.filter(act => act.date === targetDateStr);
        },
        isDaySelected(date) {
            const targetDate = date.date || date;
            return this.formatDateToString(targetDate) === this.formatDateToString(this.selectedDate);
        },
        getActivityStyle(activity) {
            const startHour = activity.startTime.getHours();
            const startMinutes = activity.startTime.getMinutes();
            const durationInMinutes = activity.duration / 60000; // Convert ms to minutes
            
            const top = ((startHour - config.workingHours.start) * 60) + startMinutes;
            const height = durationInMinutes;
            
            return {
                top: `${top}px`,
                height: `${height}px`,
                position: 'absolute',
                backgroundColor: this.getProjectColor(activity.projectId),
                width: '90%',
                left: '5%'
            };
        },
        openEditTimeModal(activity) {
            this.activityToEdit = activity;
            this.editDate = this.formatDateForInput(activity.date);
            this.editStartTime = this.formatTimeForInput(activity.startTime);
            this.editEndTime = this.formatTimeForInput(activity.endTime);
            this.editTimeModal = true;
        },
        closeEditTimeModal() {
            this.editTimeModal = false;
            setTimeout(() => {
                this.activityToEdit = null;
            }, 300);
        },
        saveEditedTime() {
            if (!this.activityToEdit) return;
            
            const startDateTime = new Date(`${this.editDate}T${this.editStartTime}`);
            const endDateTime = new Date(`${this.editDate}T${this.editEndTime}`);
            
            if (endDateTime <= startDateTime) {
                alert(this.t('endTimeMustBeAfterStart'));
                return;
            }
            
            const duration = endDateTime - startDateTime;
            
            this.activityToEdit.date = this.editDate;
            this.activityToEdit.startTime = startDateTime;
            this.activityToEdit.endTime = endDateTime;
            this.activityToEdit.duration = duration;
            
            this.closeEditTimeModal();
        },
        formatTimeForInput(date) {
            if (!date) return '';
            return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
        },
        selectTaskSuggestion(task) {
            this.currentActivity.description = task;
        },
        toggleTheme() {
            this.isDarkTheme = !this.isDarkTheme;
            document.body.classList.toggle('dark-theme', this.isDarkTheme);
        },
        openActivityDetails(activity) {
            this.selectedActivity = activity;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            setTimeout(() => {
                this.selectedActivity = null;
            }, 300);
        },
        formatDateToString(date) {
            const d = new Date(date);
            return d.toISOString().split('T')[0];
        },
        openProjectModal(project = null) {
            this.editingProject = project;
            if (project) {
                this.projectForm.name = project.name;
                this.projectForm.color = project.color;
            } else {
                this.projectForm.name = '';
                this.projectForm.color = this.availableColors[0];
            }
            this.projectModal = true;
        },
        closeProjectModal() {
            this.projectModal = false;
            setTimeout(() => {
                this.editingProject = null;
            }, 300);
        },
        selectColor(color) {
            this.projectForm.color = color;
        },
        saveProject() {
            if (!this.projectForm.name.trim()) {
                alert(this.t('projectNameRequired'));
                return;
            }
            
            if (this.editingProject) {
                // Update existing project
                const index = this.projects.findIndex(p => p.id === this.editingProject.id);
                if (index !== -1) {
                    this.projects[index].name = this.projectForm.name;
                    this.projects[index].color = this.projectForm.color;
                }
            } else {
                // Create new project
                const newId = Math.max(0, ...this.projects.map(p => p.id)) + 1;
                this.projects.push({
                    id: newId,
                    name: this.projectForm.name,
                    color: this.projectForm.color
                });
            }
            
            this.closeProjectModal();
        },
        deleteProject() {
            if (!this.editingProject) return;
            
            // Check if project is in use
            const projectInUse = this.activities.some(a => a.projectId === this.editingProject.id);
            if (projectInUse) {
                alert(this.t('cannotDeleteProjectInUse'));
                return;
            }
            
            const index = this.projects.findIndex(p => p.id === this.editingProject.id);
            if (index !== -1) {
                this.projects.splice(index, 1);
            }
            
            if (this.selectedProject === this.editingProject.id) {
                this.selectedProject = null;
            }
            
            this.closeProjectModal();
        },
        startTimer() {
            if (this.currentActivity.description === '') {
                this.currentActivity.description = 'Untitled activity';
            }
            this.timerRunning = true;
            this.timerStart = new Date();
            this.currentActivity.startTime = new Date();
            this.timerInterval = setInterval(() => {
                this.elapsedTime = new Date() - this.timerStart;
            }, 1000);
        },
        stopTimer() {
            clearInterval(this.timerInterval);
            this.timerRunning = false;
            
            const now = new Date();
            const duration = now - this.timerStart;
            
            if (duration > 1000) {
                this.activities.push({
                    id: Date.now(),
                    description: this.currentActivity.description,
                    projectId: this.currentActivity.projectId || null,
                    date: now.toISOString().split('T')[0],
                    startTime: this.currentActivity.startTime,
                    endTime: now,
                    duration: duration
                });
            }
            
            this.currentActivity = {
                description: '',
                projectId: '',
                startTime: null,
                endTime: null,
                duration: 0
            };
            this.elapsedTime = 0;
        },
        continueActivity(activity) {
            if (this.timerRunning) {
                this.stopTimer();
            }
            
            this.currentActivity.description = activity.description;
            this.currentActivity.projectId = activity.projectId;
            this.startTimer();
            this.closeModal();
        },
        deleteActivity(activity) {
            const index = this.activities.findIndex(a => a.id === activity.id);
            if (index !== -1) {
                this.activities.splice(index, 1);
            }
            this.closeModal();
        },
        formatTime(milliseconds) {
            const seconds = Math.floor((milliseconds / 1000) % 60);
            const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
            const hours = Math.floor(milliseconds / (1000 * 60 * 60));
            
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        },
        formatTimeRange(activity) {
            return `${activity.startTime.toLocaleTimeString('fr-FR', config.timeFormat)} - ${activity.endTime.toLocaleTimeString('fr-FR', config.timeFormat)}`;
        },
        formatDateTime(date) {
            if (!date) return '';
            return date.toLocaleString('fr-FR', {
                ...config.dateFormat,
                ...config.timeFormat
            });
        },
        selectProject(projectId) {
            this.selectedProject = this.selectedProject === projectId ? null : projectId;
        },
        getProjectColor(projectId) {
            const project = this.projects.find(p => p.id === projectId);
            return project ? project.color : '#CCCCCC';
        },
        getProjectName(projectId) {
            const project = this.projects.find(p => p.id === projectId);
            return project ? project.name : this.t('noProject');
        },
        t(key) {
            return config.translations[this.currentLanguage][key] || key;
        },
        changeLanguage(lang) {
            if (config.translations[lang]) {
                this.currentLanguage = lang;
            }
        },
        isWeekend(date) {
            const day = date.getDay();
            return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
        },
        formatDateForInput(date) {
            if (!date) return '';
            const d = new Date(date);
            return d.toISOString().split('T')[0];
        },
    }
});

app.mount('#app');