export const config = {
    workingHours: {
        start: 8,  // Starting from 8:00
        end: 18    // Ending at 18:00
    },
    defaultProjectColors: [
        "#4A90E2", // Blue
        "#32CD32", // Green
        "#E74C3C", // Red
        "#9B59B6", // Purple
        "#F39C12", // Orange
        "#1ABC9C", // Teal
        "#34495E"  // Dark Blue
    ],
    timeFormat: {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit"
    },
    dateFormat: {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    },
    daysToShow: 5,
    translations: {
        en: {
            projects: "Projects",
            whatAreYouWorkingOn: "What are you working on?",
            selectProject: "Select project",
            start: "Start",
            stop: "Stop",
            todayActivities: "Today's Activities",
            taskTimeSummary: "Task Time Summary",
            noProject: "No Project",
            lightMode: "Light Mode",
            darkMode: "Dark Mode",
            activityDetails: "Activity Details",
            description: "Description:",
            project: "Project:",
            startTime: "Start Time:",
            endTime: "End Time:",
            duration: "Duration:",
            continue: "Continue",
            delete: "Delete",
            editTime: "Edit Time",
            save: "Save",
            cancel: "Cancel",
            weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: ["January", "February", "March", "April", "May", "June", 
                         "July", "August", "September", "October", "November", "December"],
            date: "Date",
            endTimeMustBeAfterStart: "End time must be after start time",
        },
        uk: {
            projects: "Проекти",
            whatAreYouWorkingOn: "Над чим ви працюєте?",
            selectProject: "Вибрати проект",
            start: "Почати",
            stop: "Зупинити",
            todayActivities: "Сьогоднішні активності",
            taskTimeSummary: "Підсумок часу завдань",
            noProject: "Без проекту",
            lightMode: "Світла тема",
            darkMode: "Темна тема",
            activityDetails: "Деталі активності",
            description: "Опис:",
            project: "Проект:",
            startTime: "Час початку:",
            endTime: "Час завершення:",
            duration: "Тривалість:",
            continue: "Продовжити",
            delete: "Видалити",
            editTime: "Редагувати час",
            save: "Зберегти",
            cancel: "Скасувати",
            weekdays: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", 
                         "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
            date: "Дата",
            endTimeMustBeAfterStart: "Час закінчення має бути пізніше від часу початку",
        },
        fr: {
            projects: "Projets",
            whatAreYouWorkingOn: "Sur quoi travaillez-vous?",
            selectProject: "Sélectionner un projet",
            start: "Démarrer",
            stop: "Arrêter",
            todayActivities: "Activités du jour",
            taskTimeSummary: "Résumé du temps des tâches",
            noProject: "Aucun projet",
            lightMode: "Mode clair",
            darkMode: "Mode sombre",
            activityDetails: "Détails de l'activité",
            description: "Description:",
            project: "Projet:",
            startTime: "Heure de début:",
            endTime: "Heure de fin:",
            duration: "Durée:",
            continue: "Continuer",
            delete: "Supprimer",
            editTime: "Modifier l'heure",
            save: "Enregistrer",
            cancel: "Annuler",
            weekdays: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
                         "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            date: "Date",
            endTimeMustBeAfterStart: "L'heure de fin doit être après l'heure de début",
        }
    }
};